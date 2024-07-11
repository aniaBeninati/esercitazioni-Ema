import React, { useState } from "react";
import Button from "./components/button/Button.jsx";
import Counter from "./components/counter/Counter.jsx";
import IconCart from "./components/icons/IconCart.jsx";
import ProductLightBox from "./components/product-lightbox/ProductLightBox.jsx";
import styles from "./styles/App.module.css";
import NikeLogo from "../src/assets/images/logo-nike-vernice-adesivo-prespaziato.jpg";

/**
 * Array di prodotti con informazioni dettagliate
 */

const products = [
  {
    id: self.crypto.randomUUID(),
    name: "Air Max",
    description:
      "Your perfect casual wear companion. Durable rubber outer sole.",
    mainImage: "./src/assets/images/air_max/main.png",
    thumbnails: [
      "./src/assets/images/air_max/thumb1.png",
      "./src/assets/images/air_max/thumb2.png",
      "./src/assets/images/air_max/thumb3.png",
      "./src/assets/images/air_max/thumb4.png",
    ],
  },
  {
    id: self.crypto.randomUUID(),
    name: "Air Force",
    description: "Classic style, premium comfort. Timeless and versatile.",
    mainImage: "./src/assets/images/air_force/main.png",
    thumbnails: [
      "./src/assets/images/air_force/thumb1.png",
      "./src/assets/images/air_force/thumb2.png",
      "./src/assets/images/air_force/thumb3.png",
      "./src/assets/images/air_force/thumb4.png",
    ],
  },
  {
    id: self.crypto.randomUUID(),
    name: "Dunk",
    description: "Iconic design with a modern twist. Ultimate performance.",
    mainImage: "./src/assets/images/dunk/main.png",
    thumbnails: [
      "./src/assets/images/dunk/thumb1.png",
      "./src/assets/images/dunk/thumb2.png",
      "./src/assets/images/dunk/thumb3.png",
      "./src/assets/images/dunk/thumb4.png",
    ],
  },
  {
    id: self.crypto.randomUUID(),
    name: "Y2K",
    description: "Retro vibes with futuristic features. Bold and unique.",
    mainImage: "./src/assets/images/y2k/main.png",
    thumbnails: [
      "./src/assets/images/y2k/thumb1.png",
      "./src/assets/images/y2k/thumb2.png",
      "./src/assets/images/y2k/thumb3.png",
      "./src/assets/images/y2k/thumb4.png",
    ],
  },
  {
    id: self.crypto.randomUUID(),
    name: "Air Jordan",
    description: "Legendary style and performance. Elevate your game.",
    mainImage: "./src/assets/images/air_jordan/main.png",
    thumbnails: [
      "./src/assets/images/air_jordan/thumb1.png",
      "./src/assets/images/air_jordan/thumb2.png",
      "./src/assets/images/air_jordan/thumb3.png",
      "./src/assets/images/air_jordan/thumb4.png",
    ],
  },
  {
    id: self.crypto.randomUUID(),
    name: "Pegasus",
    description: "Run with wings. Lightweight and responsive.",
    mainImage: "./src/assets/images/pegasus/main.png",
    thumbnails: [
      "./src/assets/images/pegasus/thumb1.png",
      "./src/assets/images/pegasus/thumb2.png",
      "./src/assets/images/pegasus/thumb3.png",
      "./src/assets/images/pegasus/thumb4.png",
    ],
  },
  {
    id: self.crypto.randomUUID(),
    name: "Metcon",
    description: "For the toughest workouts. Stable and durable.",
    mainImage: "./src/assets/images/metcon/main.png",
    thumbnails: [
      "./src/assets/images/metcon/thumb1.png",
      "./src/assets/images/metcon/thumb2.png",
      "./src/assets/images/metcon/thumb3.png",
      "./src/assets/images/metcon/thumb4.png",
    ],
  },
  {
    id: self.crypto.randomUUID(),
    name: "Mercurial",
    description: "Speed redefined. Explosive acceleration and control.",
    mainImage: "./src/assets/images/mercurial/main.png",
    thumbnails: [
      "./src/assets/images/mercurial/thumb1.png",
      "./src/assets/images/mercurial/thumb2.png",
      "./src/assets/images/mercurial/thumb3.png",
      "./src/assets/images/mercurial/thumb4.png",
    ],
  },
];

/**
 * Componente principale dell'applicazione
 * @component
 */
function App() {
  const [cart, setCart] = useState(0);// Stato per il conteggio del carrello

   /**
   * Funzione per aggiornare il conteggio del carrello
   * @param {number} count - Nuovo conteggio del carrello
   */
  const handleUpdateCart = (count) => {
    setCart(count); // Imposta il nuovo conteggio del carrello
  };

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <img src={NikeLogo} alt="Nike Logo" className={styles.nikeLogo} />
            sneakers
          </div>
          <ul className={styles.navLinks}>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <div className={styles.icons}>
            <IconCart />
            <span className={styles.cartCount}>{cart}</span>
            <img className={styles.profileIcon} />
          </div>
        </nav>
      </header>
      <hr className={styles.separator} />
      <main className={styles.main}>
      {/* Mappa l'array dei prodotti per generare una sezione per ciascun prodotto */}
      {products.map(product => (
        // Ogni prodotto viene racchiuso in una sezione con una chiave unica basata sull'id del prodotto
        <section key={product.id} className={styles.productSection}>
          <ProductLightBox product={product} />
          <div className={styles.productDetails}>
              <h1>{product.name}</h1>
              <p>{product.description}</p>
              <p className={styles.price}>$125.00 <span className={styles.discount}>50%</span></p>
              <p className={styles.originalPrice}>$250.00</p>
              <div className={styles.counterContainer}>
                <Counter onUpdate={handleUpdateCart} />
                <Button text="Add to cart">
                  <IconCart fill="#000" />  
                </Button>
              </div>
            </div>
          </section>
        ))}
      </main>
      <footer className={styles.footer}>
        <div className={styles.footerColumns}>
          <div className={styles.column}>
            <h3>Resources</h3>
            <ul>
              <li>Gift card</li>
              <li>Find a store</li>
              <li>Nike Journal</li>
              <li>Become a member</li>
              <li>Student discount</li>
              <li>Feedback</li>
              <li>Promo codes</li>
            </ul>
          </div>
          <div className={styles.column}>
            <h3>Support</h3>
            <ul>
              <li>Help</li>
              <li>Order status</li>
              <li>Shipping and delivery</li>
              <li>Returns</li>
              <li>Payment options</li>
              <li>Contact us</li>
              <li>Reviews</li>
              <li>Nike promo code help</li>
            </ul>
          </div>
          <div className={styles.column}>
            <h3>About</h3>
            <ul>
              <li>About Nike</li>
              <li>News</li>
              <li>Careers</li>
              <li>Investors</li>
              <li>Sustainability</li>
              <li>Goals</li>
            </ul>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; 2024 Nike, Inc. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;