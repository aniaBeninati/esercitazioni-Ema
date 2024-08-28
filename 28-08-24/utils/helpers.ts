interface Perfume {
  id: string;
  name: string;
  brand: string;
  price: number;
  fragrances: string[]; 
  description?: string;
  genre?: string;
  imageUrl?: string;
}

const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

export const getPerfumeList = async (): Promise<Perfume[]> => {
  const res = await fetch(`${baseUrl}/perfumes`);
  if (!res.ok) {
    const error = await res.text();
    throw new Error(`Errore nel recupero della lista dei profumi: ${error}`);
  }
  return res.json();
};

export const getPerfumeDetail = async (id: string): Promise<Perfume> => {
  const res = await fetch(`${baseUrl}/perfume-details/${id}`);
  if (!res.ok) {
    const error = await res.text();
    throw new Error(`Errore nel recupero dei dettagli del profumo con ID: ${id}. ${error}`);
  }
  return res.json();
};

export const addPerfume = async (perfumeData: Omit<Perfume, 'id'>): Promise<Perfume> => {
  const res = await fetch(`${baseUrl}/perfumes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(perfumeData)
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error(`Errore nell'aggiunta del profumo: ${error}`);
  }

  const addedPerfume = await res.json();

 
  return addedPerfume;
};

export const editPerfume = async (perfumeData: Perfume): Promise<Perfume> => {
  const res = await fetch(`${baseUrl}/perfume-details/${perfumeData.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(perfumeData)
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error(`Errore nella modifica del profumo: ${error}`);
  }

  return res.json();
};

export const deletePerfume = async (id: string): Promise<void> => {
  const res = await fetch(`${baseUrl}/perfumes/${id}`, { method: "DELETE" });

  if (!res.ok) {
    const error = await res.text();
    throw new Error(`Errore nella cancellazione del profumo con ID: ${id}. ${error}`);
  }

  
  await fetch(`${baseUrl}/perfume-details/${id}`, { method: "DELETE" });
};

export const firebaseConfig = {
	apiKey: "AIzaSyBWUlyj7N4O8w7zHHdbOKgzZRhyH7wSYn0",    
	authDomain: "react-firebase-63758.firebaseapp.com",
	projectId: "react-firebase-63758",
	storageBucket: "react-firebase-63758.appspot.com",
	messagingSenderId: "217149329938",
	appId: "1:217149329938:web:c93d54793bf0bc6b143ecb",
	measurementId: "G-56TENJR1XJ"
};
