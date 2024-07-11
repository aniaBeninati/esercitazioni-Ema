import React, { useState } from 'react';
import classNames from 'classnames';
import ShowBox from '../showbox/ShowBox';
import ThumbNail from '../thumbnail/ThumbNail';
import styles from './ProductLightBox.module.css';

function ProductLightBox({ product }) {
  const [selectedImage, setSelectedImage] = useState(product.mainImage);

  const handleThumbnailClick = (thumb) => {
    setSelectedImage(thumb);
  };

  return (
    <div className={classNames(styles.productLightbox)}>
      <ShowBox imgUrl={selectedImage} />
      <ul className={classNames(styles.thumbnailList)}>
        {product.thumbnails.map((thumb, index) => (
          <li key={index} onClick={() => handleThumbnailClick(thumb)}>
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
