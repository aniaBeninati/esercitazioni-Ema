import Card from "@/app/(components)/Card";
import { ICharacter } from "../../../models/character";
import { getCharacters } from "../../../services/rickmorty.api";

const HomePage = async () => {
  const characters: ICharacter[] = await getCharacters();

  return (
    <div className="grid grid-cols-4 gap-4 p-8">
      {characters.map((character) => (
        <Card key={character.id} character={character} />
      ))}
    </div>
  );
};

export default HomePage;
