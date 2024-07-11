import React from 'react';
import classNames from 'classnames';
import styles from './ThumbNail.module.css';

/**
 * Componente ThumbNail
 * @component
 * @param {Object} props - Proprietà del componente
 * @param {boolean} props.isSelected - Indica se la miniatura è selezionata
 * @param {string} props.thumbNail - URL dell'immagine della miniatura
 * @returns {JSX.Element} - Ritorna un elemento JSX
 */
function ThumbNail({ isSelected, thumbNail }) {
  return (
    <div className={classNames(styles.thumbNail, { [styles.selected]: isSelected })}>
      <img src={thumbNail} alt="Thumbnail" />
      {isSelected && <div className={styles.overlay}></div>}
    </div>
  );
}

export default ThumbNail;
