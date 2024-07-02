import React from 'react';
import styles from './DiceButton.module.css';

const DiceButton = ({ onClick }) => {
  return (
    //pulsante stili applicati e gestore dell'evento onClick
    <button className={styles.diceButton} onClick={onClick}>
      <img src="/images/icon-dice.svg" alt="Dice Icon" />
    </button>
  );
};

export default DiceButton;