import React from 'react';
import classNames from 'classnames';
import styles from './ShowBox.module.css';

export default function ShowBox({ imgUrl }) {
  return (
    <div className={classNames(styles.showBox)}>
      <img src={imgUrl} alt="Product" />
    </div>
  );
}
