import Image from "next/image";
import {IPlayer}  from "../(models)/IPlayer";
import Link from "next/link";

interface ICardProps {
  player: IPlayer;
}

const Card: React.FC<ICardProps> = ({ player }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <Image
        src={player.image}
        alt={player.name}
        width={400}
        height={160}
        className="w-full h-40 object-cover rounded"
      />
      <h2 className="text-xl font-bold mt-2">{player.surname}</h2>
      <p>Name: {player.name}</p>
      <p>Position: {player.position}</p>
      <p>Nationality: {player.nationality}</p>
      <Link
        href={`/players/${player.number}`}
        className="text-blue-500 underline"
      >
        View Details
      </Link>
    </div>
  );
};

export default Card;
