// Aggiungi "use client" per segnalarlo come Client Component
"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { getPerfumeDetail, editPerfume } from "@/app/api/perfumeClient";
import PerfumeForm from "@/components/PerfumeForm";
import { PerfumeDetail } from "@/app/types/perfume";
import { toast } from "react-toastify";

interface EditProps {
  params: {
    id: string;
  };
}

export default function Edit({ params }: EditProps) {
  const router = useRouter();
  const [perfume, setPerfume] = useState<PerfumeDetail | null>(null);
  const [isError, setIsError] = useState({
    message: "",
    isError: false,
  });

  useEffect(() => {
    const fetchPerfume = async () => {
      try {
        const data = await getPerfumeDetail(params.id);
        setPerfume(data);
      } catch (error) {
        if (error instanceof Error) {
          setIsError({
            message: error.message,
            isError: true,
          });
        } else {
          setIsError({
            message: "Errore sconosciuto",
            isError: true,
          });
        }
      }
    };

    fetchPerfume();
  }, [params.id]);

  const handleEdit = async (body: PerfumeDetail) => {
    try {
      await editPerfume(body);
      toast.success(`Profumo ${body.name} modificato con successo!`, {
        position: "top-right",
      });
      router.push(`/perfumes/${body.id}`);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(`${error.message}`, {
          position: "top-right",
        });
        setIsError({
          message: error.message,
          isError: true,
        });
      } else {
        toast.error("Errore sconosciuto", {
          position: "top-right",
        });
        setIsError({
          message: "Errore sconosciuto",
          isError: true,
        });
      }
    }
  };

  if (!perfume) {
    return <p>Loading...</p>;
  }

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-indigo-600 text-center">
          Modifica il profumo
        </h1>
        <PerfumeForm value={perfume} onSubmit={handleEdit} />
        {isError.isError && (
          <div className="mt-4 p-4 border-l-4 border-red-500 bg-red-50 text-red-700 rounded">
            <strong className="font-semibold">Qualcosa è andato storto</strong>
            <p>{isError.message}</p>
          </div>
        )}
      </div>
    </div>
  );
}

// Funzione per il fetching dei dati
export async function getPerfumeParams(id: string) {
  try {
    const data = await getPerfumeDetail(id);
    return { params: { id, perfume: data } };
  } catch (error) {
    return {
      params: { id, error: "Perfume not found or error fetching data" },
    };
  }
}
