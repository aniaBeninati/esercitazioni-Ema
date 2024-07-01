import React, { useState } from 'react';
import '../styles/Counter.css';

//// Array di personaggi rappresentati da emoji (cambiano a seconda del valore del contatore)
const characters = [
  '😀', // Happy da 0-2
  '😐', // Neutral da 3-5
  '😠', // Angry da 6-8
  '😱'  // Shocked da 9-10
];

function Counter() {
  //[counter variabile 0, setCounter funzione che modifica la variabile counter] per la descruturing di array
  const [counter, setCounter] = useState(0);

  const handleClick = (event) => {
    event.target.id === "add"
      ? setCounter(counter + 1) // Incrementa il contatore
      : setCounter(counter - 1); // Decrementa il contatore
  };

  // così ottengo il personaggio corretto in base al valore del contatore
  const getCharacter = (count) => {
    if (count <= 2) return characters[0];
    if (count <= 5) return characters[1];
    if (count <= 8) return characters[2];
    return characters[3];
  };

  return (
    <div className="counter-container">
      <button
        className="counter-button"
        disabled={counter === 0}
        // Disabilita il pulsante se il contatore è 0
        id="sub"
        onClick={(e) => handleClick(e)}
      >
        -
      </button>
      <span className="counter-display">{counter}</span>
      <span className="character">{getCharacter(counter)}</span>
      <button
        className="counter-button"
        //// Disabilita il pulsante se il contatore è 10 o più
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
