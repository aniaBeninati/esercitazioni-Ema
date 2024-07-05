import React, { useState } from "react";
import styles from "./MortgageCalculator.module.css";
import IconCalculator from "../../assets/images/icon-calculator.svg";

// Definisco il componente MortgageCalculator, che accetta onCalculate come prop
const MortgageCalculator = ({ onCalculate }) => {
  const [input, setInput] = useState({
    amount: "",
    term: "",
    rate: "",
    type: "",
  });

  // Funzione per gestire il cambiamento degli input del form
  const handleChange = (e) => {
    // Estraggo il nome e il valore dall'evento con destructuring perchè e.target è un oggetto
    const { name, value } = e.target;
    setInput((prevState) => {
      // Aggiorno lo stato dell'input
      return { ...prevState, [name]: value };
      // Restituisce un nuovo stato con il valore aggiornato
    });
  };

  // Funzione per gestire l'invio del form
  const handleSubmit = (e) => {
    e.preventDefault();
     // Chiama la funzione onCalculate con i valori dell'input
    onCalculate(input);
  };

  return (
    // Ritorna il JSX del form
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.header}>
        <h1>Mortgage Calculator</h1>
        <button
          type="button"
          className={styles.clearButton}
          onClick={() =>
            setInput({ amount: "", term: "", rate: "", type: "" })
          }
        >
          Clear All
        </button>
      </div>
      <div className={styles.field}>
        <label htmlFor="amount">Mortgage Amount</label>
        <div className={styles.inputGroup}>
          <span className={styles.currencySymbol}>£</span>
          <input
            type="text"
            id="amount"
            name="amount"
            value={input.amount}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className={styles.inlineFields}>
        <div className={styles.field}>
          <label htmlFor="term">Mortgage Term</label>
          <div className={styles.inputGroup}>
            <input
              type="text"
              id="term"
              name="term"
              value={input.term}
              onChange={handleChange}
            />
            <span className={styles.termLabel}>years</span>
          </div>
        </div>
        <div className={styles.field}>
          <label htmlFor="rate">Interest Rate</label>
          <div className={styles.inputGroup}>
            <input
              type="text"
              id="rate"
              name="rate"
              value={input.rate}
              onChange={handleChange}
            />
            <span className={styles.termLabel}>%</span>
          </div>
        </div>
      </div>
      <div className={styles.field}>
        <label>Mortgage Type</label>
        <div className={styles.radioGroup}>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              name="type"
              value="repayment"
              checked={input.type === "repayment"}
              onChange={handleChange}
            />
            <span></span>
            Repayment
          </label>
          <label className={styles.radioLabel}>
            <input
              type="radio"
              name="type"
              value="interestOnly"
              checked={input.type === "interestOnly"}
              onChange={handleChange}
            />
            <span></span>
            Interest Only
          </label>
        </div>
      </div>
      <button type="submit" className={styles.calculateButton}>
        <img src={IconCalculator} alt="Calculate" />
        Calculate Repayments
      </button>
    </form>
  );
};

export default MortgageCalculator;
