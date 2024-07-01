import React, { useState } from 'react';
import '../styles/RandomNumber.css';

//// Array di personaggi rappresentati da emoji casuali
const randomCharacters = [
  '👾', '🤖', '👻', '😺', '🐶', '🐵', '🦊', '🐼', '🐸', '🐲'
];

//useState ha questa volta null e non 0
function RandomNumber() {
  const [randomNumber, setRandomNumber] = useState(null);
  const [randomCharacter, setRandomCharacter] = useState(null);


  //Funzione che genera un numero casuale tra 1 e 100 con un personaggio casuale
  const generateRandomNumber = () => {
    // Genero un numero casuale tra 1 e 100
    const number = Math.floor(Math.random() * 100) + 1;
    //inserisce numero casuale nello stato
    setRandomNumber(number);
    //Genero un personaggio casuale
    const character = randomCharacters[Math.floor(Math.random() * randomCharacters.length)];
    //inserisce personaggio casuale nello stato
    setRandomCharacter(character);
  };

  return (
    <div className="random-number-container">
      <button className="generate-button" onClick={generateRandomNumber}>
        Generate Random Number
      </button>
      {randomNumber !== null && (
        <>
          <p className="random-number-display">Random Number: {randomNumber}</p>
          <p className="random-character-display">{randomCharacter}</p>
        </>
      )}
    </div>
  );
}

export default RandomNumber;
