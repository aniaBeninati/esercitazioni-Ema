import React, { useState } from 'react';
import classNames from 'classnames';
import ShowBox from '../showbox/ShowBox';
import ThumbNail from '../thumbnail/ThumbNail.jsx';
import styles from './ProductLightBox.module.css';

/**
 * Componente ProductLightBox
 * @component
 * @param {Object} props - Proprietà del componente
 * @param {Object} props.product - Dati del prodotto
 * @returns {JSX.Element} - Ritorna un elemento JSX
 */
function ProductLightBox({ product }) {
  const [selectedImage, setSelectedImage] = useState(product.mainImage); // Stato per l'immagine selezionata

 /**
   * Gestisce il click sulla miniatura
   * @param {string} thumb - URL della miniatura cliccata
   */
  const handleThumbnailClick = (thumb) => {
    setSelectedImage(thumb); // Aggiorna l'immagine selezionata
  };

  return (
    <div className={classNames(styles.productLightbox)}>
      <ShowBox imgUrl={selectedImage} />
      <ul className={classNames(styles.thumbnailList)}>
        {product.thumbnails.map((thumb, index) => (
          <li key={index} 
          onClick={() => handleThumbnailClick(thumb)} // Funzione anonima utilizzata per gestire il click sulla miniatura
          >
            <ThumbNail
              isSelected={selectedImage === thumb}
              thumbNail={thumb}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductLightBox;
