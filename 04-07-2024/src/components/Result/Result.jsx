import React from 'react';
import styles from './Result.module.css';
import IllustrationEmpty from "../../assets/images/illustration-empty.svg";


const Result = ({ result, clearAll }) => {
  if (!result) {
    return (
      <div className={styles.result}>
        <img src={IllustrationEmpty} alt="No result" />
        <p className={styles.resultText}>Results shown here</p>
        <p>Complete the form and click "calculate repayments" to see what your monthly repayments would be.</p>
      </div>
    );
  }

  return (
    <div className={styles.result}>
      <h2>Your results</h2>
      <p>Your results are shown below based on the information you provided. To adjust the results, edit the form and click "calculate repayments" again.</p>
      <div className={styles.resultDetails}>
        <div>
          <p>Your monthly repayments</p>
          <h3>£{result.monthlyPayment}</h3>
        </div>
        <hr />
        <div>
          <p>Total you'll repay over the term</p>
          <h3>£{result.totalRepayment}</h3>
        </div>
      </div>
    </div>
  );
};

export default Result;