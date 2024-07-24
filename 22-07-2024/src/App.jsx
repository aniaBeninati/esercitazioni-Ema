import { useEffect, useState } from "react";
import { getPerfumeList } from "./api/perfumeClient";
import { labels } from "./data/Labels";
import { Link } from "react-router-dom";

function App() {
    const [perfumeList, setPerfumeList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

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

    useEffect(() => {
        getPerfumes();
    }, []);

    if (isLoading) return <p>is loading..</p>;

    return (
        <>
            <div className="flex justify-center">
                <main className="w-[1200px] ">
                    <div className="p-4 ">
                        <h1 className="">{labels.perfumeList}</h1>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                            <thead className="text-left">
                                <tr>
                                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                        {labels.perfumeTableTitle}
                                    </th>
                                    <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                        {labels.perfumeTableProducer}
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
                                {perfumeList.map((perfume) => {
                                    return (
                                        <tr key={perfume.id}>
                                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                                {perfume.title}
                                            </td>
                                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                                {perfume.producer}
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
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
        </>
    );
}

export default App;
