import React, { useEffect, useState } from 'react';

/**
 * Componente principale dell'applicazione
 * @component
 * @returns {JSX.Element} - Ritorna il componente principale dell'applicazione
 */
function App() {
  const [products, setProducts] = useState([]);

  // recupero dei prodotti dall'API al montaggio del componente
  useEffect(() => {
    fetch('https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
      .then(response => response.json())
      .then(data => {
        const selectedProducts = data.slice(0, 15).map(product => ({
          id: product.id,
          name: product.name,
          image: product.image_link,
          description: product.description,
          price: product.price
        }));
        setProducts(selectedProducts);
      });
  }, []);

   // aggiungo un prodotto al carrello
  const addToCart = (product) => {
    let cartList = JSON.parse(localStorage.getItem('cart')) || [];
    cartList.push(product);
    localStorage.setItem('cart', JSON.stringify(cartList));
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-pink-800">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3 className="text-xl font-bold text-pink-700">{product.name}</h3>
            <p className="text-sm text-pink-600">{product.description}</p>
            <p className="text-lg font-semibold text-pink-800">${product.price}</p>
            <button 
              className="mt-2 bg-pink-500 text-white py-1 px-2 rounded hover:bg-pink-700"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
