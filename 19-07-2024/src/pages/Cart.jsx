import { useContext } from 'react';
import { ProductContext, SetProductContext } from '../providers/ProductContext';

function Cart() {
  const products = useContext(ProductContext);
  const setProducts = useContext(SetProductContext);

  const handleDelete = (id) => {
    setProducts((prevState) => prevState.filter((product) => product.id !== id));
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Carrello</h2>
      {products.length === 0 ? (
        <p className="text-gray-700">Non ci sono vinili nel carrello.</p>
      ) : (
        <ul>
          {products.map((product, index) => (
            <li key={`${product.id}-${index}`} className="flex gap-4 items-center mb-4">
              <img src={product.immagine} alt={product.nomeAlbum} className="w-16 h-16 object-cover" />
              <div className="flex-grow">
                <h3 className="text-xl font-bold">{product.nomeAlbum}</h3>
                <p className="text-gray-700">{product.prezzo}</p>
              </div>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={() => handleDelete(product.id)}
              >
                Rimuovi
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
