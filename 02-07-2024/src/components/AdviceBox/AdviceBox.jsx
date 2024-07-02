import React, { useState } from 'react';
import styles from './AdviceBox.module.css';
import DiceButton from '../DiceButton/DiceButton';
import adviceList from '../../assets/adviceList';

const AdviceBox = () => {
  //TODO: ho definito il valore advice iniziale con 0 ed anche il valore adviceNumber con 117
  const [advice, setAdvice] = useState(adviceList[0]);
  const [adviceNumber, setAdviceNumber] = useState(117);

  //TODO: ho definito la funzione handleDiceClick che genera un numero casuale
  const handleDiceClick = () => {
    const randomAdvice = adviceList[Math.floor(Math.random() * adviceList.length)];
    setAdvice(randomAdvice);//aggiorna l'advice con il consiglio casuale
    setAdviceNumber(Math.floor(Math.random() * 200) + 1); 
  };

  return (
    //contenitore principale dell card con lo stile applicato
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