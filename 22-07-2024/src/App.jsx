import { useEffect, useState, useContext } from "react";
import { getPerfumeList } from "./api/perfumeClient";
import { labels } from "./data/Labels";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth"; 
import { UserContext } from "./context/AuthContext";

function App() {
    const user = useContext(UserContext);
    const auth = getAuth();
    const navigate = useNavigate();
    const [perfumeList, setPerfumeList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [filter, setFilter] = useState("");
    
    const handleClick = () => {
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
    
    useEffect(() => {
        getPerfumes();
    }, []);
    
    if (isLoading) return <p>{labels.isLoading}</p>;
    
    return (
        <>
        <div className="flex justify-center">
        <main className="w-[1200px]">
        <div className="p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">{labels.perfumeList}</h1>
        <button
        onClick={() => navigate("/create")}
        className="bg-indigo-600 text-white rounded px-4 py-2"
        >
        Add New Perfume
        </button>
        </div>
        <button onClick={handleClick} className="bg-red-500 p-2">
        Sign Out
        </button>
        <div className="flex gap-2 items-center mb-4">
        <h2>{labels.filterPerfumeByName}</h2>
        <input
        className="border-slate-400 border-2 p-2"
        type="text"
        value={filter}
        placeholder={labels.insertPerfumeName}
        onChange={handleChange}
        />
        </div>
        
        <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="text-left">
        <tr>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
        {labels.perfumeTableName}
        </th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
        {labels.perfumeTableBrand}
        </th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
        {labels.perfumeTableDescription}
        </th>
        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
        {labels.perfumeTablePrice}
        </th>
        <th className="px-4 py-2"></th>
        </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
        {perfumeList
            .filter((perfume) =>
                perfume.name.toLowerCase().includes(filter)
        )
        .map((perfume) => (
            <tr key={perfume.id}>
            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            {perfume.name}
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
            {perfume.brand}
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
            {perfume.description}
            </td>
            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
            {perfume.price} €
            </td>
            <td className="whitespace-nowrap px-4 py-2">
            <Link
            to={`/perfumes/${perfume.id}`}
            className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
            >
            {labels.perfumeTableBtnDetail}
            </Link>
            <Link
            to={`/edit/${perfume.id}`}
            className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
            >
            Edit
            </Link>
            
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
