import React, { useState } from "react";
import MortgageCalculator from "./components/MortgageCalculator/MortgageCalculator.jsx";
import Result from "./components/Result/Result.jsx";
import styles from "./App.module.css";
import "./index.css";

const App = () => {
  const [result, setResult] = useState(null);

  const calculateRepayments = (input) => {
    // Estraggo i valori dall'input che trovo sul form
    const { amount, term, rate, type } = input;
     // Converto l'importo che era una stringa a numero con la virgola
    const principal = parseFloat(amount);
    // Converto la stringa degli anni in numero con la virgola
    const years = parseFloat(term);
     // Converto il tasso di interesse che è una stringa in numero e lo divide per 100 perchè è una percentuale
    const interestRate = parseFloat(rate) / 100;

 // Variabili per memorizzare il pagamento mensile e il rimborso totale
    let monthlyPayment, totalRepayment;


    if (type === "repayment") {
        // Se il tipo è "repayment" faccio questa formula per calcolare il pagamento mensile e il rimborso totale
        // Calcolo il tasso di interesse mensile (12 mesi)
      const monthlyInterestRate = interestRate / 12;
       // Calcolo il numero di pagamenti per il tot di anni * 12 mesi
      const numberOfPayments = years * 12;
              // Formula per calcolare il pagamento mensile
      monthlyPayment =
        (principal * monthlyInterestRate) /
        (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
      totalRepayment = monthlyPayment * numberOfPayments;
       // Calcola il rimborso totale
// Se il tipo è "interestOnly" (solo interesse)
    } else { 
      // Calcola il pagamento mensile per solo interesse
      monthlyPayment = (principal * interestRate) / 12;
       // Calcola il rimborso totale per solo interesse
      totalRepayment = monthlyPayment * years * 12 + principal;
    }

   // Imposta il risultato nello stato
    setResult({
      monthlyPayment: monthlyPayment.toFixed(5),
      // Arrotonda il pagamento mensile a 5 decimali
      totalRepayment: totalRepayment.toFixed(5),
       // Arrotonda il rimborso totale a 5 decimali
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
