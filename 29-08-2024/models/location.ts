export interface ILocation {
    id: number;
    name: string;
    type: string;
    dimension: string;
  }

  import { ICharacter } from "./character";

  const API_URL = "https://rickandmortyapi.com/api/character";
  
  export const getCharacters = async (): Promise<ICharacter[]> => {
    try {
      const res = await fetch(API_URL);
      if (!res.ok) {
        throw new Error(`Error fetching characters: ${res.status}`);
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
        throw new Error(`Error fetching character with ID ${id}: ${res.status}`);
      }
      const data = await res.json();
      return data as ICharacter;
    } catch (error) {
      console.error(`Failed to fetch character with ID ${id}`, error);
      return null; 
    }
  };