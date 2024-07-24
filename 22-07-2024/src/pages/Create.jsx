import { useState } from "react";
import { addPerfume } from "../api/perfumeClient"; 
import { useNavigate } from "react-router-dom";

const initialState = {
  isbn: "",
  name: "",
  brand: "",
  description: "",
  price: "",
  fragrances: "",
  genre: "",
  imageUrl: "",
};

function Create() {
  const navigate = useNavigate();
  const [form, setForm] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState({ message: "", isError: false });

  // Validazione dei campi
  const isbnValidation = !form.isbn.length;
  const nameValidation = !form.name.length;
  const brandValidation = !form.brand.length;
  const descriptionValidation = !form.description.length;
  const priceValidation = !form.price.length;
  const fragrancesValidation = !form.fragrances.length;
  const genreValidation = !form.genre.length;
  const imageUrlValidation = !form.imageUrl.length;

  const formValidation =
    isbnValidation ||
    nameValidation ||
    brandValidation ||
    descriptionValidation ||
    priceValidation ||
    fragrancesValidation ||
    genreValidation ||
    imageUrlValidation;

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsError({ message: "", isError: false });

    try {
      const res = await addPerfume(form); // Assumendo che questa funzione esista e funzioni
      setForm(initialState);
      console.log(res);
      alert("Perfume added successfully!");
      navigate(-1); // Torna alla pagina precedente
    } catch (error) {
      console.log(error);
      setIsError({ message: error.message, isError: true });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
            Insert the perfume here
          </h1>

          <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
            Inserisci ISBN, nome, marca, descrizione, prezzo, fragranze, genere, immagine
          </p>

          <form
            onSubmit={handleSubmit}
            className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
          >
            <div>
              <label className="sr-only">ISBN</label>
              <div className="relative">
                <input
                  name="isbn"
                  onChange={handleChange}
                  type="text"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter ISBN"
                />
              </div>
            </div>

            <div>
              <label className="sr-only">Name</label>
              <div className="relative">
                <input
                  name="name"
                  onChange={handleChange}
                  type="text"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter name"
                />
              </div>
            </div>

            <div>
              <label className="sr-only">Brand</label>
              <div className="relative">
                <input
                  name="brand"
                  onChange={handleChange}
                  type="text"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter brand"
                />
              </div>
            </div>

            <div>
              <label className="sr-only">Description</label>
              <div className="relative">
                <input
                  name="description"
                  onChange={handleChange}
                  type="text"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter description"
                />
              </div>
            </div>

            <div>
              <label className="sr-only">Price</label>
              <div className="relative">
                <input
                  name="price"
                  onChange={handleChange}
                  type="number"
                  step="0.01"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter price"
                />
              </div>
            </div>

            <div>
              <label className="sr-only">Fragrances</label>
              <div className="relative">
                <input
                  name="fragrances"
                  onChange={handleChange}
                  type="text"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter fragrances (comma separated)"
                />
              </div>
            </div>

            <div>
              <label className="sr-only">Genre</label>
              <div className="relative">
                <input
                  name="genre"
                  onChange={handleChange}
                  type="text"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter genre (e.g., male, female, unisex)"
                />
              </div>
            </div>

            <div>
              <label className="sr-only">Image URL</label>
              <div className="relative">
                <input
                  name="imageUrl"
                  onChange={handleChange}
                  type="text"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter image URL"
                />
              </div>
            </div>

            {isError.isError && (
              <div
                role="alert"
                className="rounded border-s-4 border-red-500 bg-red-50 p-4"
              >
                <strong className="block font-medium text-red-800">
                  Something went wrong
                </strong>
                <p className="mt-2 text-sm text-red-700">{isError.message}</p>
              </div>
            )}

            {!isLoading ? (
              <button
                disabled={formValidation}
                type="submit"
                className={`block w-full rounded-lg bg-indigo-600 ${
                  formValidation ? "bg-slate-400" : ""
                } px-5 py-3 text-sm font-medium text-white`}
              >
                Submit
              </button>
            ) : (
              <button disabled>Is Loading...</button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Create;
