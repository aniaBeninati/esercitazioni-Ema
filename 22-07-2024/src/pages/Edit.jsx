import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getPerfumeDetail, editPerfume } from "../api/perfumeClient";
import PerfumeForm from "../components/PerfumeForm";

function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [perfume, setPerfume] = useState(null);
  const [isError, setIsError] = useState({ message: "", isError: false });
  const [isLoading, setIsLoading] = useState(true);

  const getPerfume = async (id) => {
    try {
      const data = await getPerfumeDetail(id);
      setPerfume(data);
    } catch (error) {
      console.log(error);
      setIsError({ message: error.message, isError: true });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPerfume(id);
  }, [id]);

  const handleSubmit = async (value) => {
    try {
      const res = await editPerfume({ ...value, id });
      console.log(res);
      navigate("/");
    } catch (error) {
      console.log(error);
      setIsError({ message: error.message, isError: true });
    }
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
            Edit the perfume here
          </h1>
          <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
            Inserisci ID, nome, marca, descrizione, prezzo, fragranze, genere, immagine
          </p>
          <PerfumeForm value={perfume} onSubmit={handleSubmit} />
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
        </div>
      </div>
    </div>
  );
}

export default Edit;
