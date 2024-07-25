import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import { getPerfumeDetail } from "../api/perfumeClient";

function Edit(){
    const {id}= useParams();
}


const [perfume, setperfume] usestate (nulle);
const [isError, setIsError] = useState ({ message: "", isErrro:false});
const [isLoading, setLoading] = useState ({ message: "", isLoading:false});


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
)