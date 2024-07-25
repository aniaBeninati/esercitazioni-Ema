import { useState } from "react";
import { addPerfume } from "../api/perfumeClient"; 
import { useNavigate } from "react-router-dom";

const initialState = {
  id: "",
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

 
  const formValidation = 
    !form.id ||
    !form.name ||
    !form.brand ||
    !form.description ||
    !form.price ||
    !form.fragrances ||
    !form.genre ||
    !form.imageUrl;

  
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
      const res = await addPerfume(form); 
      setForm(initialState);
      console.log(res);
      alert("Perfume added successfully!");
      navigate("/");
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
            Inserisci ID, nome, marca, descrizione, prezzo, fragranze, genere, immagine
          </p>
          <form
            onSubmit={handleSubmit}
            className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
          >
            <div>
              <label htmlFor="id" className="sr-only">ID</label>
              <input
                id="id"
                name="id"
                value={form.id}
                onChange={handleChange}
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
                placeholder="Enter ID"
              />
            </div>
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
                placeholder="Enter name"
              />
            </div>
            <div>
              <label htmlFor="brand" className="sr-only">Brand</label>
              <input
                id="brand"
                name="brand"
                value={form.brand}
                onChange={handleChange}
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
                placeholder="Enter brand"
              />
            </div>
            <div>
              <label htmlFor="description" className="sr-only">Description</label>
              <input
                id="description"
                name="description"
                value={form.description}
                onChange={handleChange}
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
                placeholder="Enter description"
              />
            </div>
            <div>
              <label htmlFor="price" className="sr-only">Price</label>
              <input
                id="price"
                name="price"
                value={form.price}
                onChange={handleChange}
                type="number"
                step="0.01"
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
                placeholder="Enter price"
              />
            </div>
            <div>
              <label htmlFor="fragrances" className="sr-only">Fragrances</label>
              <input
                id="fragrances"
                name="fragrances"
                value={form.fragrances}
                onChange={handleChange}
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
                placeholder="Enter fragrances (comma separated)"
              />
            </div>
            <div>
              <label htmlFor="genre" className="sr-only">Genre</label>
              <input
                id="genre"
                name="genre"
                value={form.genre}
                onChange={handleChange}
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
                placeholder="Enter genre (e.g., male, female, unisex)"
              />
            </div>
            <div>
              <label htmlFor="imageUrl" className="sr-only">Image URL</label>
              <input
                id="imageUrl"
                name="imageUrl"
                value={form.imageUrl}
                onChange={handleChange}
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
                placeholder="Enter image URL"
              />
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

            <button
              disabled={formValidation || isLoading}
              type="submit"
              className={`block w-full rounded-lg bg-indigo-600 ${
                formValidation || isLoading ? "bg-slate-400" : ""
              } px-5 py-3 text-sm font-medium text-white`}
            >
              {isLoading ? "Loading..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Create;
