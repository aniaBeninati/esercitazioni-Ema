import React from 'react';

/**
 * Componente del pulsante a forma di dado
 * @component
 * @param {Object} props - Proprietà del componente
 * @param {Function} props.onClick - Funzione chiamata al click del pulsante
 * @returns {JSX.Element} - Ritorna il componente del pulsante
 */
const DiceButton = ({ onClick }) => {
  return (
    <button className="bg-neon-green rounded-full p-4 absolute bottom-[-2rem] left-1/2 transform -translate-x-1/2 transition-shadow duration-300 hover:shadow-[0px_0px_40px_hsl(150,100%,66%)]" onClick={onClick}>
      <img src="/images/icon-dice.svg" alt="Dice Icon" />
    </button>
  );
};

export default DiceButton;
