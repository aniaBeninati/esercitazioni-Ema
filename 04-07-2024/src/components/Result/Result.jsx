import React from 'react';
import styles from './Result.module.css';
import IllustrationEmpty from "../../assets/images/illustration-empty.svg";

// Definisco il componente Result, che accetta result e clearAll come props
const Result = ({ result, clearAll }) => {

  if (!result) {
      // Se non c'è un risultato, ritorna questo JSX
    return (
      <div className={styles.resultHome}>
        <img src={IllustrationEmpty} alt="No result" />
        <p className={styles.resultText}>Results shown here</p>
        <p className={styles.instructions}>Complete the form and click "calculate repayments" to see what your monthly repayments would be.</p>
      </div>
    );
  }
// Se c'è risultato, ritorna questo JSX
  return (
    <div className={styles.result}>
      <h2>Your results</h2>
      <p>Your results are shown below based on the information you provided. To adjust the results, edit the form and click "calculate repayments" again.</p>
      <div className={styles.resultDetails}>
        <div>
        <p className={styles.monthlyRepayments}>Your monthly repayments</p>
          <h3>£{result.monthlyPayment}</h3>
        </div>
        <hr />
        <div>
          <p className={styles.monthlyRepayments}>Total you'll repay over the term</p>
          <h4>£{result.totalRepayment}</h4>
        </div>
      </div>
    </div>
  );
};

export default Result;