import { Suspense } from "react";
import ErrorComponents from "@/components/ErrorComponents"; // Assicurati che questo componente esista
import { getPerfumeDetail, getPerfumeList } from "@/app/api/perfumeClient";
import { PerfumeDetail } from "@/app/types/perfume";

interface PerfumeDetailPageProps {
  params: { id: string };
}

async function fetchPerfume(id: string): Promise<PerfumeDetail> {
  try {
    return await getPerfumeDetail(id);
  } catch (error) {
    throw new Error("Perfume not found or error fetching data");
  }
}

export default async function PerfumeDetailPage({
  params,
}: PerfumeDetailPageProps) {
  const { id } = params;
  const perfume = await fetchPerfume(id);

  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Inserisci qui il codice SVG */}
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">
                {perfume.brand}
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {perfume.name}
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                {perfume.description}
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt={perfume.name}
            src={perfume.imageUrl}
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
          />
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  try {
    const perfumes = await getPerfumeList();
    const paths = perfumes.map((perfume) => ({
      id: perfume.id,
    }));

    return paths.map((path) => ({
      params: path,
    }));
  } catch (error) {
    return [];
  }
}
