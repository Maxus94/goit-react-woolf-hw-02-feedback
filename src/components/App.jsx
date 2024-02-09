import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  countTotalFeedback() {
    return this.state.good + this.state.bad + this.state.neutral;
  }

  countPositiveFeedbackPercentage() {
    return ((this.state.good / this.countTotalFeedback()) * 100).toFixed(0);
  }

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h2>Please leave feedback</h2>
        {/* <ul>
          <li>
            <button type="button" onClick={() => this.handleClick('good')}>
              Good
            </button>
          </li>
          <li>
            <button type="button" onClick={() => this.handleClick('neutral')}>
              Neutral
            </button>
          </li>
          <li>
            <button type="button" onClick={() => this.handleClick('bad')}>
              Bad
            </button>
          </li>
        </ul> */}
        <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={this.handleClick}/>
        <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}/>
      </div>
    );
  }
}

// console.log(App.countPositiveFeedbackPercentage());

// const state = {
//   good: 0,
//   neutral: 0,
//   bad: 0,
// };

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//       }}
//     >
//       <h2>Please leave feedback</h2>
//       <ul>
//         <li>
//           <button type="button">Good</button>
//         </li>
//         <li>
//           <button type="button">Neutral</button>
//         </li>
//         <li>
//           <button type="button">Bad</button>
//         </li>
//       </ul>
//       <h2>Statistics</h2>
//       <ul>
//         <li>Good:{state.good}</li>
//         <li>Neutral:{state.neutral}</li>
//         <li>Bad:{state.bad}</li>
//       </ul>
//     </div>
//   );
// };
