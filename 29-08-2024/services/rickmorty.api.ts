import { ICharacter } from "../models/character";
import { ILocation } from "../models/location";
import { IEpisode } from "../models/episode";

const API_URLS = {
  characters: "https://rickandmortyapi.com/api/character",
  locations: "https://rickandmortyapi.com/api/location",
  episodes: "https://rickandmortyapi.com/api/episode",
};

const fetchData = async <T>(url: string): Promise<T> => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Error fetching data from ${url}: ${res.status}`);
    }
    const data = await res.json();
    return data as T;
  } catch (error) {
    console.error(`Failed to fetch data from ${url}`, error);
    throw error;
  }
};

export const getCharacters = async (): Promise<ICharacter[]> => {
  const data = await fetchData<{ results: ICharacter[] }>(API_URLS.characters);
  return data.results;
};

export const getCharacterById = async (id: string): Promise<ICharacter | null> => {
  try {
    const data = await fetchData<ICharacter>(`${API_URLS.characters}/${id}`);
    return data;
  } catch (error) {
    console.error(`Failed to fetch character with ID ${id}`, error);
    return null; 
  }
};

export const getLocations = async (): Promise<ILocation[]> => {
  const data = await fetchData<{ results: ILocation[] }>(API_URLS.locations);
  return data.results;
};

export const getEpisodes = async (): Promise<IEpisode[]> => {
  const data = await fetchData<{ results: IEpisode[] }>(API_URLS.episodes);
  return data.results;
};
