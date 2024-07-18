import { useState } from "react";
import { NavLink } from "react-router-dom";
import Modal from "./Modal";

function CocktailCard({ cocktail }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="border rounded-lg p-2 bg-white shadow-md w-full max-w-xs mx-auto">
      <div className="overflow-hidden rounded mb-2">
        <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} className="w-full h-40 object-cover rounded" />
      </div>
      <h2 className="text-lg font-bold mb-2 text-gray-800 text-center">{cocktail.strDrink}</h2>
      <div className="flex justify-center">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-purple-500 text-white py-1 px-4 rounded hover:bg-purple-700"
        >
          View Details
        </button>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-xl font-bold mb-2 text-center">{cocktail.strDrink}</h2>
        <p className="text-center">{cocktail.strInstructions}</p>
        <div className="flex justify-center mt-4 space-x-4">
          <NavLink
            to={`/cocktail/${cocktail.idDrink}`}
            className="py-2 px-4 bg-turquoise text-white rounded inline-block hover:bg-turquoise-dark"
          >
            Go to Cocktail Page
          </NavLink>
          <button onClick={() => setIsModalOpen(false)} className="py-2 px-4 bg-coral text-white rounded hover:bg-coral-dark">
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default CocktailCard;
