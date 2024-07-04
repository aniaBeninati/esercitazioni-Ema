import React, { useState } from 'react';
import MortgageCalculator from './components/MortgageCalculator/MortgageCalculator.jsx';
import Result from './components/Result/Result.jsx';
import styles from './App.module.css';
import './index.css';

const App = () => {
  const [result, setResult] = useState(null);

  const calculateRepayments = (input) => {
    const { amount, term, rate, type } = input;
    const principal = parseFloat(amount);
    const years = parseFloat(term);
    const interestRate = parseFloat(rate) / 100;

    let monthlyPayment, totalRepayment;

    if (type === 'repayment') {
      const monthlyInterestRate = interestRate / 12;
      const numberOfPayments = years * 12;
      monthlyPayment =
        (principal * monthlyInterestRate) /
        (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
      totalRepayment = monthlyPayment * numberOfPayments;
    } else {
      monthlyPayment = (principal * interestRate) / 12;
      totalRepayment = monthlyPayment * years * 12 + principal;
    }

    setResult({
      monthlyPayment: monthlyPayment.toFixed(2),
      totalRepayment: totalRepayment.toFixed(2),
    });
  };

  const clearAll = () => {
    setResult(null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.calculatorContainer}>
        <MortgageCalculator onCalculate={calculateRepayments} />
        <Result result={result} clearAll={clearAll} />
      </div>
    </div>
  );
};

export default App;