import { GET } from "@/app/api/players/[id]/route";
import { IPlayer } from "../../../(models)/IPlayer";
import Image from "next/image";

interface PlayerDetailProps {
  params: { id: string };
}

const PlayerDetail = async ({ params }: PlayerDetailProps) => {
  const { id } = params;

  
  const response = await GET({ params: { id } });
  const data = await response.json();

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">{data.name}</h1>
      <Image
        src={data.image}
        alt={data.name}
        width={400}
        height={400}
        className="mx-auto"
      />
      <p>Name: {data.name}</p>
      <p>Surname: {data.surname}</p>
      <p>Position: {data.position}</p>
      <p>Number: {data.number}</p>
      <p>Nationality: {data.nationality}</p>
    </div>
  );
};

export default PlayerDetail;
