export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
  origin: {
    name: string;
  };
}

const API_URL = "https://rickandmortyapi.com/api/character";

export const getCharacters = async (): Promise<ICharacter[]> => {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) {
      throw new Error(`Error: ${res.status}`);
    }
    const data = await res.json();
    return data.results as ICharacter[];
  } catch (error) {
    console.error("Failed to fetch characters", error);
    return []; 
  }
};

export const getCharacter = async (id: number): Promise<ICharacter | null> => {
  try {
    const res = await fetch(`${API_URL}/${id}`);
    if (!res.ok) {
      throw new Error(`Error: ${res.status}`);
    }
    const data = await res.json();
    return data as ICharacter;
  } catch (error) {
    console.error(`Failed to fetch character with id ${id}`, error);
    return null;
  }
};
