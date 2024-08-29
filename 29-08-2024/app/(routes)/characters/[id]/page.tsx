import { ICharacter } from "../../../../models/character";
import Image from "next/image";

interface CharacterDetailProps {
  character: ICharacter;
}

const CharacterDetail = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const character: ICharacter = await res.json();

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">{character.name}</h1>
      <Image
        src={character.image}
        alt={character.name}
        width={400}
        height={400}
        className="mx-auto"
      />
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>Origin: {character.origin.name}</p>
    </div>
  );
};

export default CharacterDetail;
