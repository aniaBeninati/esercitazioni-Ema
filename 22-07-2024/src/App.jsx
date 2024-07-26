import { useEffect, useState, useContext } from "react";
import { getPerfumeList, deletePerfume } from "./api/perfumeClient";
import { labels } from "./data/labels";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { UserContext } from "./context/AuthContext";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { toast } from "react-toastify";

function App() {
  const user = useContext(UserContext);
  const auth = getAuth();
  const navigate = useNavigate();
  const [perfumeList, setPerfumeList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState("");

  const handleSignOut = () => {
    signOut(auth)
      .then(() => navigate("/signin"))
      .catch((error) => console.log(error));
  };

  const getPerfumes = async () => {
    try {
      const data = await getPerfumeList();
      setPerfumeList(data);
    } catch (error) {
      console.log("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFilter(e.target.value.toLowerCase());
  };

  const handleDelete = async (id) => {
    try {
      const res = await deletePerfume(id);
      toast.success(`${res.name} eliminato con successo!`, {
        position: "top-right",
      });
      getPerfumes();
    } catch (error) {
      toast.error(`Errore: ${error.message}`, {
        position: "top-right",
      });
    }
  };

  useEffect(() => {
    getPerfumes();
  }, []);

  const renderSkeletons = () => {
    return Array.from({ length: 5 }).map((_, index) => (
      <tr key={index}>
        <td className="whitespace-nowrap px-4 py-2">
          <Skeleton height={20} />
        </td>
        <td className="whitespace-nowrap px-4 py-2">
          <Skeleton height={20} />
        </td>
        <td className="whitespace-nowrap px-4 py-2">
          <Skeleton height={20} />
        </td>
        <td className="whitespace-nowrap px-4 py-2">
          <Skeleton height={20} />
        </td>
      </tr>
    ));
  };

  return (
    <>
      <div className="flex justify-center bg-gray-100 min-h-screen">
        <main className="w-full max-w-6xl p-6 bg-white shadow-lg rounded-lg">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900">{labels.perfumeList}</h1>
            <button
              onClick={() => navigate("/create")}
              className="bg-indigo-600 text-white rounded px-4 py-2 hover:bg-indigo-700"
            >
              Add New Perfume
            </button>
          </div>
          <button onClick={handleSignOut} className="bg-red-500 text-white rounded px-4 py-2 mb-4 hover:bg-red-600">
            Sign Out
          </button>
          <div className="flex gap-2 items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-700">{labels.filterPerfumeByName}</h2>
            <input
              className="border-gray-300 border rounded-lg p-2"
              type="text"
              value={filter}
              placeholder={labels.insertPerfumeName}
              onChange={handleChange}
            />
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-gray-900 font-semibold">{labels.perfumeTableName}</th>
                  <th className="px-6 py-3 text-left text-gray-900 font-semibold">{labels.perfumeTableBrand}</th>
                  <th className="px-6 py-3 text-left text-gray-900 font-semibold">{labels.perfumeTableFragrances}</th>
                  <th className="px-6 py-3 text-left text-gray-900 font-semibold">{labels.perfumeTablePrice}</th>
                  <th className="px-6 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {isLoading
                  ? renderSkeletons()
                  : perfumeList
                      .filter((perfume) =>
                        perfume.name.toLowerCase().includes(filter)
                      )
                      .map((perfume) => (
                        <tr key={perfume.id}>
                          <td className="px-6 py-4 font-medium text-gray-900">{perfume.name}</td>
                          <td className="px-6 py-4 text-gray-700">{perfume.brand}</td>
                          <td className="px-6 py-4 text-gray-700">{perfume.fragrances}</td>
                          <td className="px-6 py-4 text-gray-700">{perfume.price} €</td>
                          <td className="px-6 py-4 flex gap-2">
                            <Link
                              to={`/perfumes/${perfume.id}`}
                              className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                            >
                              {labels.perfumeTableBtnDetail}
                            </Link>
                            <Link
                              to={`/edit/${perfume.id}`}
                              className="inline-block rounded bg-green-600 px-4 py-2 text-xs font-medium text-white hover:bg-green-700"
                            >
                              {labels.edit}
                            </Link>
                            <button
                              onClick={() => handleDelete(perfume.id)}
                              className="inline-block rounded bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-red-700"
                            >
                              {labels.delete}
                            </button>
                          </td>
                        </tr>
                      ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
