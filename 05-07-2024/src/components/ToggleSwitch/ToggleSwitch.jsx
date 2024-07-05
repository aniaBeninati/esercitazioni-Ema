import React from 'react';
import styles from "./ToogleSwitch.module.css";

const ToggleSwitch = ({ checked, onChange }) => {
  return (
    <label className={styles.switch}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <span className={styles.sliderRound}></span>
    </label>
  );
};

export default ToggleSwitch;
