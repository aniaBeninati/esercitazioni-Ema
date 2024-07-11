import React, { useState } from 'react';
import classNames from 'classnames';
import ShowBox from '../showbox/ShowBox';
import ThumbNail from '../thumbnail/ThumbNail';
import styles from './ProductLightBox.module.css';

function ProductLightBox({ product }) {
  const [selectedImage, setSelectedImage] = useState(product.mainImage); // Stato per l'immagine selezionata

// Funzione per gestire il click sulle miniature
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
