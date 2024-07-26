import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getPerfumeDetail, editPerfume } from "../api/perfumeClient";
import PerfumeForm from "../components/PerfumeForm";
import { toast } from "react-toastify";

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
      setIsError((prevState) => ({
        ...prevState,
        message: error.message,
        isError: true,
      }));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPerfume(id);
  }, [id]);

  const handleEdit = async (body) => {
    try {
      const res = await editPerfume({ id, ...body });
      toast.success(`Profumo ${body.name} modificato con successo!`, {
        position: "top-right",
      });
      navigate(`/perfumes/${id}`, { replace: true });
    } catch (error) {
      toast.error(`${error}!`, {
        position: "top-right",
      });
      setIsError((prevState) => ({
        ...prevState,
        message: error.message,
        isError: true,
      }));
    }
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-indigo-600 text-center">Edit the perfume here</h1>
        <p className="text-gray-500 text-center mt-2">{/* Testo informativo */}</p>
        <PerfumeForm value={perfume} onSubmit={handleEdit} />
        {isError.isError && (
          <div className="mt-4 p-4 border-l-4 border-red-500 bg-red-50 text-red-700 rounded">
            <strong className="font-semibold">Something went wrong</strong>
            <p>{isError.message}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Edit;
