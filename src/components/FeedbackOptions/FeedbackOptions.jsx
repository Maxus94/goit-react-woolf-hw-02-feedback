export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul>
      {options.map((option, idx) => (
        <li key={idx}>
          <button type="button" onClick={()=>onLeaveFeedback(option)}>
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

//   <ul>
//     options.map((option, idx)=>())
//     <li>
//       <button type="button" onClick={() => this.handleClick('good')}>
//         Good
//       </button>
//     </li>
//     <li>
//       <button type="button" onClick={() => this.handleClick('neutral')}>
//         Neutral
//       </button>
//     </li>
//     <li>
//       <button type="button" onClick={() => this.handleClick('bad')}>
//         Bad
//       </button>
//     </li>
//   </ul>
// </div>
