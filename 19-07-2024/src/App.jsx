import { useState, useEffect, useContext } from 'react';
import { SetProductContext } from './providers/ProductContext';
import Header from './components/Header';
import Modal from './components/Modal';

function App() {
  const [productList, setProductList] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const setProducts = useContext(SetProductContext);

  const handleAdd = (product) => {
    setProducts((prevState) => [...prevState, product]);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log('Fetched data:', data); // Aggiungi questo log
        setProductList(data);
      })
      .catch((error) => {
        console.error('Fetch error: ', error);
      });
  }, []);

  return (
    <div className="bg-cover bg-center min-h-screen" style={{ backgroundImage: `url('/background.jpg')` }}>
      <Header />
      <div className="p-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {productList.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-lg">
            <img src={product.immagine} alt={product.nomeAlbum} className="w-full h-48 object-cover rounded-md" />
            <h3 className="mt-4 text-xl font-bold">{product.nomeAlbum}</h3>
            <div className="mt-4 flex justify-between items-center">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={() => setSelectedProduct(product)}
              >
                Dettagli
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded"
                onClick={() => handleAdd(product)}
              >
                Aggiungi al carrello
              </button>
            </div>
          </div>
        ))}
      </div>
      {selectedProduct && (
        <Modal isOpen={Boolean(selectedProduct)} onClose={handleCloseModal}>
          <div className="flex flex-col items-center">
            <img src={selectedProduct.immagine} alt={selectedProduct.nomeAlbum} className="w-48 h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-bold mb-2">{selectedProduct.nomeAlbum}</h3>
            <p className="text-gray-700 text-center mb-2">{selectedProduct.descrizione}</p>
            <p className="text-gray-700 mb-2">{selectedProduct.anno}</p>
            <p className="text-gray-700 mb-4 font-bold text-xl">{selectedProduct.prezzo}</p>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded"
              onClick={() => {
                handleAdd(selectedProduct); // Aggiungo il prodotto al carrello
                handleCloseModal();// Chiudo la modale
              }}
            >
              Aggiungi al carrello
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default App;
