import React from 'react';
import classNames from 'classnames';
import styles from './ThumbNail.module.css';

function ThumbNail({ isSelected, thumbNail }) {
  return (
    <div className={classNames(styles.thumbNail, { [styles.selected]: isSelected })}>
      <img src={thumbNail} alt="Thumbnail" />
      {isSelected && <div className={styles.overlay}></div>}
    </div>
  );
}

export default ThumbNail;
