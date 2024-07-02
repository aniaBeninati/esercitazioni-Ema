import React from 'react';
import styles from './BookButton.module.css';

const BookButton = ({ onClick }) => {
  return (
    <button className={styles.bookButton} onClick={onClick}>
      <img src="././public/images/book-opened-svgrepo-com.svg" alt="Book Icon" />
    </button>
  );
};

export default BookButton;