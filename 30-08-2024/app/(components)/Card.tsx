import Image from "next/image";
import { IPlayer } from "../(models)/IPlayer";
import Link from "next/link";

interface ICardProps {
  player: IPlayer;
}

const Card: React.FC<ICardProps> = ({ player }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md flex flex-col h-full">
      <div className="relative w-full h-64 mb-4">
        <Image
          src={player.image}
          alt={player.name}
          fill
          style={{ objectFit: 'cover' }}
          className="rounded-t-lg"
        />
      </div>
      <div className="flex-grow">
        <h2 className="text-xl font-bold mb-2">{player.surname}</h2>
        <p className="mb-1"><span className="font-semibold">Name:</span> {player.name}</p>
        <p className="mb-1"><span className="font-semibold">Position:</span> {player.position}</p>
        <p className="mb-3"><span className="font-semibold">Nationality:</span> {player.nationality}</p>
      </div>
      <Link
        href={`/players/${player.number}`}
        className="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out mt-auto"
      >
        View Details
      </Link>
    </div>
  );
};

export default Card;