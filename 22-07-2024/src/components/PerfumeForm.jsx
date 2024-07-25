import {useState} from "react"


function PerfumeForm({value, onSubmit}){
    const initialState = {
        name:value?.name || "",
        id:value?.id || "",
        brand:value?.brand || "",
        description:value?.description || "",
        price:value?.price || "",
        fragrances:value?.fragrances || "",
        genre:value?.genre || "",
        imageUrl:value?.mageUrl || "",
        
    }
    
    const [form, setForm]= useState (initialState);
    const [isLoading, setIsLoading] = useState (false);

    const idValidation = !form.id.length;
  const nameValidation = !form.name.length;
  const brandValidation = !form.brand.length;
  const descriptionValidation = !form.description.length;
  const priceValidation = !form.price.length;
  const fragrancesValidation = !form.fragrances.length;
  const genreValidation = !form.genre.length;
  const imageUrlValidation = !form.imageUrl.length;

  const formValidation =
    idValidation ||
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


      return (
    <form
            onSubmit={handleSubmit}
            className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
          >
            <div>
              <label className="sr-only">ID</label>
              <div className="relative">
                <input
                  name="id"
                  onChange={handleChange}
                  type="text"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter ID"
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

    return <div>PerfumeForm</div>
}


export default PerfumeForm;