import React, { useState } from 'react';
import styles from './Counter.module.css';
import classNames from 'classnames';
import IconMinus from '../icons/IconMinus';
import IconPlus from '../icons/IconPlus';

function Counter({ onUpdate }) {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
    onUpdate(count + 1);
  };

  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
      onUpdate(count - 1);
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
