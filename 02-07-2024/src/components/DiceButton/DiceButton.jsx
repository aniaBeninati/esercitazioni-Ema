import React from 'react';
import styles from './DiceButton.module.css';

const DiceButton = ({ onClick }) => {
  return (
    <button className={styles.diceButton} onClick={onClick}>
      <img src="/images/icon-dice.svg" alt="Dice Icon" />
    </button>
  );
};

export default DiceButton;