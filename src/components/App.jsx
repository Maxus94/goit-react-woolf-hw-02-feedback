import { Component } from 'react';

let option='good';

export class App extends Component { 
   
  
  state = {
    good: 0,
    neutral: 0,
    bad: 0,    
  };

  handleClick = () => {
    this.setState((prevState) => {      
      return {
        [option]: prevState[option] + 1,
      };
  });
  };


  // handleClickGood = () => {
  //   this.setState(prevState => {
  //     return { good: (prevState.good += 1) };
  //   });
  // };

  handleClickNeutral = () => {
    this.setState(prevState => {
      return { neutral: (prevState.neutral += 1) };
    });
  }

  handleClickBad = () => {
    this.setState(prevState => {
      return { bad: (prevState.bad += 1) };
    });
  }

  countTotalFeedback(){
    return
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
        <ul>
          <li>
            <button type="button" onClick={this.handleClick} option='good'>
              Good
            </button>
          </li>
          <li>
            <button type="button" onClick={this.handleClickNeutral}>
              Neutral
            </button>
          </li>
          <li>
            <button type="button" onClick={this.handleClickBad}>
              Bad
            </button>
          </li>
        </ul>
        <h2>Statistics</h2>
        <ul>
          <li>Good:{this.state.good}</li>
          <li>Neutral:{this.state.neutral}</li>
          <li>Bad:{this.state.bad}</li>
        </ul>
      </div>
    );
  }
}

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
