import React, { useState } from 'react';
import styles from './AnswerBox.module.css';
import answersList from '../../assets/answersList';
import BookButton from '../BookButton/BookButton';

const AnswerBox = () => {
  const [answer, setAnswer] = useState("Fai una domanda e clicca sul libro per avere una risposta");

  const handleBookClick = () => {
    const randomAnswer = answersList[Math.floor(Math.random() * answersList.length)];
    setAnswer(randomAnswer);
  };

  return (
    <div className={styles.answerBox}>
      <h1>{answer}</h1>
      <BookButton onClick={handleBookClick} />
    </div>
  );
};

export default AnswerBox;