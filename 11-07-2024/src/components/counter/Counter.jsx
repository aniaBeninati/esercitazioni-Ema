import React, { useState } from 'react';
import styles from './Counter.module.css';
import classNames from 'classnames';
import IconMinus from '../icons/IconMinus.jsx';
import IconPlus from '../icons/IconPlus.jsx';

/**
 * Componente Counter
 * @component
 * @param {Object} props - Proprietà del componente
 * @param {Function} props.onUpdate - Funzione per aggiornare il conteggio
 * @returns {JSX.Element} - Ritorna un elemento JSX
 */
function Counter({ onUpdate }) {
  const [count, setCount] = useState(0);

   /**
   * Incrementa il conteggio
   */
  const handleIncrease = () => {
    setCount(count + 1);
    onUpdate(count + 1);
  };

   /**
   * Decrementa il conteggio
   */
  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
      onUpdate(count - 1); // Aggiorna il conteggio del carrello
    }
  };

  return (
    <div className={classNames(styles.counter)}>
      <button onClick={handleDecrease}>
        <IconMinus />
      </button>
      <div>{count}</div>
      <button onClick={handleIncrease}>
        <IconPlus />
      </button>
    </div>
  );
}

export default Counter;
