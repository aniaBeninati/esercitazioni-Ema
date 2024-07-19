import { createContext, useState } from 'react';

export const ProductContext = createContext();
export const SetProductContext = createContext();

function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);

  return (
    <ProductContext.Provider value={products}>
       {/* Fornisco la funzione di aggiornamento dei prodotti tramite SetProductContext.Provider */}
      <SetProductContext.Provider value={setProducts}>
         {/* Rendo disponibili i contesti ai figli */}
        {children}
      </SetProductContext.Provider>
    </ProductContext.Provider>
  );
}

export default ProductProvider;
