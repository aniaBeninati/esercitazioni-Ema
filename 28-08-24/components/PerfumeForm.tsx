import { useTransition, useEffect } from "react";
import { PerfumeDetail } from "@/app/types/perfume";
import { useState } from "react";

interface PerfumeFormProps {
  value?: PerfumeDetail;
  onSubmit: (data: PerfumeDetail) => void;
}

export default function PerfumeForm({ value, onSubmit }: PerfumeFormProps) {
  const [form, setForm] = useState<PerfumeDetail>({
    id: "",
    name: "",
    brand: "",
    description: "",
    price: 0,
    fragrances: [],
    genre: "unisex",
    imageUrl: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState({ message: "", isError: false });
  const [isPending, startTransition] = useTransition();

  
  useEffect(() => {
    if (value) {
      setForm(value);
    }
  }, [value]);

  const formValidation =
    !form.name ||
    !form.brand ||
    !form.description ||
    form.price <= 0 ||
    form.fragrances.length === 0 ||
    !form.imageUrl;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleFragrancesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fragrances = e.target.value
      .split(",")
      .map((fragrance) => fragrance.trim());
    setForm((prevState) => ({ ...prevState, fragrances }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await startTransition(() => onSubmit(form));
    } catch (error) {
      if (error instanceof Error) {
        setIsError({ message: error.message, isError: true });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-6">
      {/* Campo Nome */}
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="block w-full mt-1 border border-gray-300 rounded-md"
        />
      </label>

      {/* Campo Brand */}
      <label>
        Brand:
        <input
          type="text"
          name="brand"
          value={form.brand}
          onChange={handleChange}
          className="block w-full mt-1 border border-gray-300 rounded-md"
        />
      </label>

      {/* Campo Description */}
      <label>
        Description:
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          className="block w-full mt-1 border border-gray-300 rounded-md"
        />
      </label>

      {/* Campo Price */}
      <label>
        Price:
        <input
          type="number"
          name="price"
          value={form.price}
          onChange={handleChange}
          className="block w-full mt-1 border border-gray-300 rounded-md"
        />
      </label>

      {/* Campo Fragrances */}
      <label>
        Fragrances (comma separated):
        <input
          type="text"
          value={form.fragrances.join(", ")}
          onChange={handleFragrancesChange}
          className="block w-full mt-1 border border-gray-300 rounded-md"
        />
      </label>

      {/* Campo Genre */}
      <label>
        Genre:
        <select
          name="genre"
          value={form.genre}
          onChange={handleChange}
          className="block w-full mt-1 border border-gray-300 rounded-md"
        >
          <option value="unisex">Unisex</option>
          <option value="maschile">Maschile</option>
          <option value="femminile">Femminile</option>
        </select>
      </label>

      {/* Campo Image URL */}
      <label>
        Image URL:
        <input
          type="text"
          name="imageUrl"
          value={form.imageUrl}
          onChange={handleChange}
          className="block w-full mt-1 border border-gray-300 rounded-md"
        />
      </label>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={formValidation || isLoading}
        className={`w-full px-4 py-2 text-white font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
          formValidation || isLoading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-indigo-600 hover:bg-indigo-700"
        }`}
      >
        {isLoading ? "Loading..." : "Submit"}
      </button>

      {/* Error Message */}
      {isError.isError && (
        <div className="text-red-500">
          <p>{isError.message}</p>
        </div>
      )}
    </form>
  );
}
