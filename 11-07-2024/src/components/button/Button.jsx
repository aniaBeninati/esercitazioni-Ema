import classNames from 'classnames';
import styles from './Button.module.css';

/**
 * Componente Button
 * @component
 * @param {Object} props - Proprietà del componente
 * @param {string} [props.text='Add to cart'] - Testo del pulsante
 * @param {React.ReactNode} props.children - Elementi figli del pulsante
 * @returns {JSX.Element} - Ritorna un elemento JSX
 */
function Button({ children, text = 'Add to cart' }) {
  return (
    <button className={classNames(styles.button)}>
      {children}
      {text}
    </button>
  );
}

export default Button;
