import React from 'react';
import styles from './App.module.css';
import AdviceBox from './components/AdviceBox/AdviceBox';

function App() {
  return (
    // // Div contenitore principale con stili applicati
    <div className={styles.app}>
      <AdviceBox />
    </div>
  );
}

export default App;