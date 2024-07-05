import { useState } from "react";
import Slider from "../Slider/Slider.jsx";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch.jsx";
import styles from "./PriceCard.module.css";
import iconCheck from "../../assets/images/icon-check.svg";


/**
 * Calcola il prezzo in base alle visualizzazioni e al tipo di fatturazione
 * @param {number} views - Il numero di visualizzazioni di pagina
 * @param {string} billing - Il tipo di fatturazione ("monthly" o "yearly")
 * @returns {string} Il prezzo calcolato con due cifre decimali
 */

const calculatePrice = (views, billing) => {
  let basePrice = (views / 100) * 16;
  if (billing === "yearly") {
    basePrice = basePrice * 0.75; // se il tipo di fatturazione è annuale sto applicando uno sconto del 25% (cliccando su Yearly)
  }
  return basePrice.toFixed(2);// ho deciso di fissarlo a due cifre
};


const PriceCard = () => {
  const [pageViews, setPageViews] = useState(100);//pageviews parto da 100k quindi inizializzo con useState(100)
  const [billingType, setBillingType] = useState("monthly"); //quando carico la pagina lo sto inizializzando su Monthly
  const [price, setPrice] = useState(calculatePrice(100, "monthly"));// solo quando carico la pagina effetuo il calcolo della funzione calculatePrice attraverso qui parametri

  const handleSliderChange = (value) => {
    setPageViews(value); // aggiorno anche il pageviews e quindi cambia il valore 
    setPrice(calculatePrice(value, billingType));//qui calcolo i dollari per tipo quindi o mesi o anni
  };

  const handleToggleChange = () => {
    const newBillingType = billingType === "monthly" ? "yearly" : "monthly"; //attraverso il ternario assegno il valore o in anni o mesi e lo metto nella variabile NewbillingType
    setBillingType(newBillingType);//qui setto il valore 
    setPrice(calculatePrice(pageViews, newBillingType));//aggiorno il prezzo calcolandolo
  };

  return (
    <div className={styles.pricingComponent}>
      <div className={styles.topComponent}>
        <div className={styles.pageViews}>{pageViews}K PAGEVIEWS</div>
        <div className={styles.price}>
          ${price} <span>/ month</span>
        </div>
      </div>
      {/* all evento dello slider richiamo la funzione che ho dichiarato sopra  */}
      <Slider value={pageViews} onChange={handleSliderChange} />
      <div className={styles.billingToggle}>
        <span>Monthly Billing</span>
        <ToggleSwitch
          checked={billingType === "monthly"} //sono dentro il monthly
          onChange={handleToggleChange} //evento onChange={handleToggleChange}
        />
        <span>
          Yearly Billing <span className={styles.discount}>25% discount</span>
        </span>
      </div>
      <hr className={styles.lineHr}></hr>
      <div className={styles.bottomComponent}>
        <ul className={styles.features}>
          <li>
            <img src={iconCheck} alt="check icon" />
            Unlimited websites
          </li>
          <li>
            <img src={iconCheck} alt="check icon" />
            100% data ownership
          </li>
          <li>
            <img src={iconCheck} alt="check icon" />
            Email reports
          </li>
        </ul>
        <button className={styles.ctaButton}>Start my trial</button>
      </div>
    </div>
  );
};

export default PriceCard;
