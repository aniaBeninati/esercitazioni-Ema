import React from 'react';
import styles from './header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <h1>Catalogo delle Ricette</h1>
      <p>Scopri le migliori ricette culinarie e impara come prepararle!</p>
    </header>
  );
}

export default Header;
