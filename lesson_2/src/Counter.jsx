//import { useState } from 'react';

function Counter(props) {
  return (
    <div className="Counter">
      <small>{props.label}</small>
      <h1>{props.value}</h1>
      <div>
      <button onClick={props.increment}>+</button>
      <button onClick={props.decrement}>-</button>
      </div>
      <div>
      <button onClick={props.remove}>Remove Counter</button>
      </div>
    </div>
  );
}

export default Counter;