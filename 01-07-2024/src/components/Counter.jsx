import React, { useState } from 'react';
import '../styles/Counter.css';

function Counter() {
  const [counter, setCounter] = useState(0);

  const handleClick = (event) => {
    event.target.id === "add"
      ? setCounter(counter + 1)
      : setCounter(counter - 1);
  };

  return (
    <div className="counter-container">
      <button
        className="counter-button"
        disabled={counter === 0}
        id="sub"
        onClick={(e) => handleClick(e)}
      >
        -
      </button>
      <span className="counter-display">{counter}</span>
      <button
        className="counter-button"
        disabled={counter >= 10}
        id="add"
        onClick={(e) => handleClick(e)}
      >
        +
      </button>
    </div>
  );
}

export default Counter;
