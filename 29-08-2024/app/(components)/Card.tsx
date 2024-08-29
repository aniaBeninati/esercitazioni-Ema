import Image from 'next/image'; 
import { ICharacter } from "../../models/character";
import Link from 'next/link'; 

interface ICardProps {
  character: ICharacter;
}

const Card: React.FC<ICardProps> = ({ character }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <Image 
        src={character.image} 
        alt={character.name} 
        width={400} 
        height={160} 
        className="w-full h-40 object-cover rounded" 
      />
      <h2 className="text-xl font-bold mt-2">{character.name}</h2>
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <Link href={`/characters/${character.id}`} className="text-blue-500 underline">
        View Details
      </Link>
    </div>
  );
};

export default Card;
