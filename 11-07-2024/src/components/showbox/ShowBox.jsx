import React from 'react';
import classNames from 'classnames';
import styles from './ShowBox.module.css';

/**
 * Componente ShowBox
 * @component
 * @param {Object} props - Proprietà del componente
 * @param {string} props.imgUrl - URL dell'immagine da mostrare
 * @returns {JSX.Element} - Ritorna un elemento JSX
 */
export default function ShowBox({ imgUrl }) {
  return (
    <div className={classNames(styles.showBox)}>
      <img src={imgUrl} alt="Product" />
    </div>
  );
}
