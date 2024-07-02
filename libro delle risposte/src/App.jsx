import React from 'react';
import styles from './App.module.css';
import AnswerBox from './components/AnswerBox/AnswerBox';

function App() {
  return (
    <div className={styles.app}>
      <AnswerBox />
    </div>
  );
}

export default App;