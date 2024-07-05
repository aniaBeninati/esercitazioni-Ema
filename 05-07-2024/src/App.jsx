import React from 'react';
import PriceCard from "./components/PriceCard/PriceCard.jsx";
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <h1>Simple, traffic-based pricing</h1>
      <p>Sign-up for our 30-day trial. No credit card required.</p>
      <PriceCard />
    </div>
  );
}

export default App;
