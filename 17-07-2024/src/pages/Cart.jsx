import React, { useEffect, useState } from 'react';
/**
 * Componente per la pagina del carrello
 * @component
 * @returns {JSX.Element} - Ritorna la pagina del carrello con i prodotti aggiunti
 */
function Cart() {
  const [cart, setCart] = useState([]);
  
  // recupero del carrello dal localStorage al montaggio del componente
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  // rimuovo un prodotto dal carrello
  const removeFromCart = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-pink-800">Cart</h2>
      {cart.length === 0 ? (
        <p className="text-pink-600">Your cart is empty</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cart.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="w-full h-32 object-cover mb-2"/>
              <h3 className="text-xl font-bold text-pink-700">{product.name}</h3>
              <p className="text-sm text-pink-600">{product.description}</p>
              <p className="text-lg font-semibold text-pink-800">${product.price}</p>
              <button 
                className="mt-2 bg-red-500 text-white py-1 px-2 rounded hover:bg-red-700"
                onClick={() => removeFromCart(product.id)}
              >
                Remove from Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
