import { Perfume, PerfumeDetail } from "@/app/types/perfume";
import { getPerfumeData } from "@/models/perfumeData";

const { perfumes, "perfume-details": perfumeDetails } = getPerfumeData();

export const getPerfumeList = async (): Promise<Perfume[]> => {
  // Simula la risposta della rete
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(perfumes);
    }, 500); // Simula un ritardo nella rete
  });
};

export const getPerfumeDetail = async (id: string): Promise<PerfumeDetail> => {
  // Simula la risposta della rete
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const detail = perfumeDetails.find((p) => p.id === id);
      if (detail) {
        resolve(detail);
      } else {
        reject(new Error(`Perfume with ID ${id} not found`));
      }
    }, 500); // Simula un ritardo nella rete
  });
};

export const addPerfume = async (
  perfumeData: Omit<PerfumeDetail, "id">
): Promise<PerfumeDetail> => {
  // Simula l'aggiunta di un profumo
  return new Promise((resolve) => {
    setTimeout(() => {
      const id = (perfumes.length + 1).toString();
      const newPerfume: PerfumeDetail = { id, ...perfumeData };
      perfumes.push(newPerfume);
      perfumeDetails.push(newPerfume);
      resolve(newPerfume);
    }, 500); // Simula un ritardo nella rete
  });
};

export const editPerfume = async (
  perfumeData: PerfumeDetail
): Promise<PerfumeDetail> => {
  // Simula la modifica di un profumo
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const index = perfumeDetails.findIndex((p) => p.id === perfumeData.id);
      if (index !== -1) {
        perfumeDetails[index] = perfumeData;
        resolve(perfumeData);
      } else {
        reject(new Error("Perfume not found"));
      }
    }, 500); // Simula un ritardo nella rete
  });
};

export const deletePerfume = async (id: string): Promise<void> => {
  // Simula la cancellazione di un profumo
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const index = perfumes.findIndex((p) => p.id === id);
      if (index !== -1) {
        perfumes.splice(index, 1);
        const detailIndex = perfumeDetails.findIndex((p) => p.id === id);
        if (detailIndex !== -1) {
          perfumeDetails.splice(detailIndex, 1);
        }
        resolve();
      } else {
        reject(new Error("Perfume not found"));
      }
    }, 500); // Simula un ritardo nella rete
  });
};
