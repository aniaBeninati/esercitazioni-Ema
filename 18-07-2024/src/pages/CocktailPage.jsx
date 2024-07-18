import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function CocktailPage() {
  const { id } = useParams();/* Ottiengo l'ID del cocktail dai parametri dell'URL */
  const [cocktail, setCocktail] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchCocktail = async () => {
      try {
        /* Effettuo una chiamata all'API per ottenere i dettagli del cocktail */
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data = await response.json();
        setCocktail(data.drinks[0]);/* sono stata forzata dal back-end a prendere il primo elemento dell'array */
      } catch (error) {
        console.error("Error fetching cocktail:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCocktail();
  }, [id]);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading cocktail.</p>;

   /* Creo una lista di ingredienti e misure prese dal back-end per farle vedere in HTML */
  const ingredients = [];
  for (let i = 1; i <= 15; i++) {
    const ingredient = cocktail[`strIngredient${i}`];
    const measure = cocktail[`strMeasure${i}`];
    if (ingredient) {
      ingredients.push(`${measure || ""} ${ingredient}`);
    }
  }

  return (
    <div className="p-4 bg-[url('/src/assets/img.webp')] bg-cover bg-center min-h-screen text-white">
      <div className="max-w-3xl mx-auto bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">{cocktail.strDrink}</h1>
        <div className="flex justify-center">
          <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} className="w-40 h-40 object-cover rounded-lg shadow-lg mb-4" />
        </div>
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Ingredients</h2>
        <ul className="list-disc list-inside mb-4 text-gray-800">
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Instructions</h2>
        <p className="text-gray-800">{cocktail.strInstructions}</p>
      </div>
    </div>
  );
}

export default CocktailPage;
