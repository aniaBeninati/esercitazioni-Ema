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
    // Genero un numero casuale tra 1 e 100 passando da un math.random che mi torna un numero con 
    //la virgola dove x 100 torna fino a 99 e con il  + 1 arriva a 100. 
    //Con il math.floor arrotonda per difetto a 99
    const number = Math.floor(Math.random() * 100) + 1;
    //inserisce numero casuale nello stato
    setRandomNumber(number);
    //Genero un personaggio casuale attraverso l'array con un indice da 9 a 0 con 
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
