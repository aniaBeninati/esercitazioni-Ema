import { useEffect, useState } from "react";
import CocktailCard from "./components/CocktailCard";

function App() {
  const [cocktails, setCocktails] = useState([]);/* Stato per memorizzare i dati dei cocktail */
  


  useEffect(() => {
    /* Funzione asincrona per recuperare i dati dei cocktail */
    const fetchCocktails = async () => {
      try {
        /* Effettuo una chiamata all'API per ottenere tutti i cocktail */
        const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=");
        const data = await response.json();
        console.log(data.drinks); /* Log dei dati */
        setCocktails(data.drinks); /* Aggiorno lo stato con i dati dei cocktail */
      } catch (error) {
        /* Gestisco eventuali errori nel recupero dei dati */
        console.error("Errore nel recupero dei cocktail:", error);
      }
    };

    /* Chiamo la funzione per recuperare i cocktail al montaggio del componente */
    fetchCocktails();
  }, []);

  

  return (
    <div className="p-4 bg-[url('/src/assets/img.webp')] bg-cover bg-center min-h-screen text-white">
      <h1 className="text-4xl font-bold mb-2 text-center">Welcome to the Cocktail Lounge</h1>
      <h2 className="text-2xl mb-6 text-center">Discover Your Favorite Cocktails</h2>
      <p className="mb-8 text-center max-w-2xl mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cocktails.map((cocktail) => (
          <CocktailCard key={cocktail.idDrink} cocktail={cocktail} />
        ))}
      </div>
    </div>
  );
}

export default App;
