import React, { useState } from 'react';
import styles from './AdviceBox.module.css';
import DiceButton from '../DiceButton/DiceButton';
import adviceList from '../../assets/adviceList';

const AdviceBox = () => {
  const [advice, setAdvice] = useState(adviceList[0]);
  const [adviceNumber, setAdviceNumber] = useState(117);

  const handleDiceClick = () => {
    const randomAdvice = adviceList[Math.floor(Math.random() * adviceList.length)];
    setAdvice(randomAdvice);
    setAdviceNumber(Math.floor(Math.random() * 200) + 1); // Genera un numero casuale per l'advice
  };

  return (
    <div className={styles.adviceBox}>
      <h1>Advice #{adviceNumber}</h1>
      <p>{advice}</p>
      <div className={styles.divider}>
        <img
          src="/images/pattern-divider-mobile.svg"
          alt="Divider"
        />
      </div>
      <DiceButton onClick={handleDiceClick} />
    </div>
  );
};

export default AdviceBox;