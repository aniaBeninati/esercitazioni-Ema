import React, { useState } from 'react';
import '../styles/RandomNumber.css';

function RandomNumber() {
  const [randomNumber, setRandomNumber] = useState(null);

  const generateRandomNumber = () => {
    const number = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(number);
  };

  return (
    <div className="random-number-container">
      <button className="generate-button" onClick={generateRandomNumber}>
        Generate Random Number
      </button>
      {randomNumber !== null && (
        <p className="random-number-display">Random Number: {randomNumber}</p>
      )}
    </div>
  );
}

export default RandomNumber;
