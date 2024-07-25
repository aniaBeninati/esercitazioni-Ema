import { useState } from "react";

function PerfumeForm({ value, onSubmit }) {
  const initialState = {
    name: value?.name || "",
    id: value?.id || "",
    brand: value?.brand || "",
    description: value?.description || "",
    price: value?.price || "",
    fragrances: value?.fragrances || "",
    genre: value?.genre || "",
    imageUrl: value?.imageUrl || "",
  };

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
    const { name, value } = e.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsError({ message: "", isError: false });

    try {
      await onSubmit(form);
    } catch (error) {
      console.log(error);
      setIsError({ message: error.message, isError: true });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
      >
        <div>
          <label className="sr-only">ID</label>
          <input
            name="id"
            value={form.id}
            onChange={handleChange}
            type="text"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter ID"
          />
        </div>

        <div>
          <label className="sr-only">Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            type="text"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter name"
          />
        </div>

        <div>
          <label className="sr-only">Brand</label>
          <input
            name="brand"
            value={form.brand}
            onChange={handleChange}
            type="text"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter brand"
          />
        </div>

        <div>
          <label className="sr-only">Description</label>
          <input
            name="description"
            value={form.description}
            onChange={handleChange}
            type="text"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter description"
          />
        </div>

        <div>
          <label className="sr-only">Price</label>
          <input
            name="price"
            value={form.price}
            onChange={handleChange}
            type="number"
            step="0.01"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter price"
          />
        </div>

        <div>
          <label className="sr-only">Fragrances</label>
          <input
            name="fragrances"
            value={form.fragrances}
            onChange={handleChange}
            type="text"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter fragrances (comma separated)"
          />
        </div>

        <div>
          <label className="sr-only">Genre</label>
          <input
            name="genre"
            value={form.genre}
            onChange={handleChange}
            type="text"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter genre (e.g., male, female, unisex)"
          />
        </div>

        <div>
          <label className="sr-only">Image URL</label>
          <input
            name="imageUrl"
            value={form.imageUrl}
            onChange={handleChange}
            type="text"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
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
          {isLoading ? "Is Loading..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default PerfumeForm;
