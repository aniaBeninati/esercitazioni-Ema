"use client";

import { useState, useEffect } from "react"; 
import { useTransition } from "react";
import { useAuth } from "@/context/AuthContext";
import { getPerfumeList, deletePerfume } from "@/app/api/perfumeClient";
import { Perfume } from "@/app/types/perfume";
import Link from "next/link";
import { toast } from "react-toastify";

export default function PerfumeList() {
  const { signOut } = useAuth();
  const [perfumes, setPerfumes] = useState<Perfume[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState("");
  const [isPending, startTransition] = useTransition();

  const getPerfumes = async () => {
    try {
      const data = await getPerfumeList();
      startTransition(() => {
        setPerfumes(data);
        setIsLoading(false);
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deletePerfume(id);
      toast.success("Perfume deleted successfully!", {
        position: "top-right",
      });
      startTransition(() => getPerfumes());
    } catch (error) {
      if (error instanceof Error) {
        toast.error(`Error: ${error.message}`, {
          position: "top-right",
        });
      }
    }
  };

  useEffect(() => {
    getPerfumes();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <div className="mb-4 flex justify-between items-center">
        <input
          type="text"
          placeholder="Filter by name"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border rounded-lg py-2 px-4"
        />
        {/* <button onClick={signOut} className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg">
                    Sign Out
                </button>*/}
      </div>
      {isLoading || isPending ? (
        <p>Loading...</p>
      ) : (
        <table className="w-full text-left table-collapse">
          <thead>
            <tr>
              <th className="text-sm font-medium text-gray-700 p-2 bg-gray-100">
                Name
              </th>
              <th className="text-sm font-medium text-gray-700 p-2 bg-gray-100">
                Brand
              </th>
              <th className="text-sm font-medium text-gray-700 p-2 bg-gray-100">
                Price
              </th>
              <th className="text-sm font-medium text-gray-700 p-2 bg-gray-100">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {perfumes
              .filter((perfume) =>
                perfume.name.toLowerCase().includes(filter.toLowerCase())
              )
              .map((perfume) => (
                <tr
                  key={perfume.id}
                  className="hover:bg-gray-100 focus-within:bg-gray-100"
                >
                  <td className="border-t p-2">
                    <Link
                      href={`/perfumes/${perfume.id}`}
                      className="text-blue-500 hover:underline"
                    >
                      {perfume.name}
                    </Link>
                  </td>
                  <td className="border-t p-2">{perfume.brand}</td>
                  <td className="border-t p-2">{perfume.price}</td>
                  <td className="border-t p-2">
                    <Link
                      href={`/edit/${perfume.id}`}
                      className="text-blue-500 hover:underline mr-4"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(perfume.id)}
                      className="text-red-500 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
