import { useState } from "react";
import { addPerfume } from "../api/perfumeClient";
import { useNavigate } from "react-router-dom";
import PerfumeForm from "../components/PerfumeForm";
import { labels } from "../data/labels";
import { toast } from "react-toastify";

function Create() {
  const navigate = useNavigate();

  const [isError, setIsError] = useState({
    message: "",
    isError: false,
  });

  const handleCreate = async (body) => {
    try {
      const res = await addPerfume(body);
      console.log(res);
      toast.success(`${body.name} added!`, {
        position: "top-right",
      });
      navigate("/");
    } catch (error) {
      toast.error(`${error.message}!`, {
        position: "top-right",
      });
      setIsError((prevState) => {
        return { ...prevState, message: error.message, isError: true };
      });
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-indigo-600 text-center">{labels.createInsertPerfumeHere}</h1>
        <p className="text-gray-500 text-center mt-2">{/* Testo informativo */}</p>
        <PerfumeForm onSubmit={handleCreate} />
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

export default Create;
