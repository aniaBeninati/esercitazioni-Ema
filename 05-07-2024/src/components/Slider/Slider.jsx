import styles from "./Slider.module.css";
import iconSlider from '../../assets/images/icon-slider.svg';


 // Funzione per gestire il cambiamento del valore dello slider
const Slider = ({ value, onChange }) => {
  const handleChange = (e) => {
    onChange(Number(e.target.value)); // Converte il valore in numero e lo passa alla funzione onChange 
  };

  return (
    <div className={styles.sliderContainer}>
      <input
        type="range"
        min="10"
        max="200"
        step="10"
        value={value}
        onChange={handleChange}
        className={styles.slider}
        style={{ backgroundImage: `url(${iconSlider})` }}
      />
    </div>
  );
};

export default Slider;
