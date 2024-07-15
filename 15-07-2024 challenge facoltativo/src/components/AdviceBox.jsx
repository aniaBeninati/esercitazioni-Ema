import React, { useState } from 'react';
import DiceButton from './DiceButton.jsx';
/**
 * Componente principale per mostrare un consiglio randomico
 * @component
 * @returns {JSX.Element} - Ritorna il componente del box dei consigli
 */
const AdviceBox = () => {
     // Stato per conservare il consiglio attuale
  const [advice, setAdvice] = useState('');
  // Stato per conservare il numero del consiglio attuale
  const [adviceNumber, setAdviceNumber] = useState(0);
/**
   * Funzione per fare la chiamata all'API e ottenere un consiglio casuale
   */
  const fetchAdvice = async () => {
    try {
      const response = await fetch('https://api.adviceslip.com/advice');
      const data = await response.json();
      setAdvice(data.slip.advice);
      setAdviceNumber(data.slip.id);
    } catch (error) {
      console.error("Error fetching advice:", error);
    }
  };
 /**
   * Funzione chiamata quando si clicca il pulsante del dado
   */
  const handleDiceClick = () => {
    fetchAdvice();
  };

  return (
    <div className="bg-dark-grayish-blue rounded-lg p-8 relative text-center w-full max-w-md mx-auto shadow-[0px_0px_15px_rgba(0,0,0,0.2)]">
      <h1 className="text-neon-green text-sm tracking-widest mb-4 uppercase">Advice #{adviceNumber}</h1>
      <p className="text-light-cyan text-2xl leading-8 mb-6">"{advice}"</p>
      <div className="my-6">
        <img src="/images/pattern-divider-mobile.svg" alt="Divider" className="w-full" />
      </div>
      <DiceButton onClick={handleDiceClick} />
    </div>
  );
};

export default AdviceBox;
