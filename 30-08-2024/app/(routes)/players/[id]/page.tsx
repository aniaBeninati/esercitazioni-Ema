import { GETBYID } from "@/app/api/route";
import { IPlayer } from "../../../(models)/IPlayer";
import Image from "next/image";

interface PlayerDetailProps {
  player: IPlayer;
}

const PlayerDetail = async ({ params }: { params: { number: string } }) => {
  const { number } = params;
  const response = await GETBYID(number);
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
      <p>Status: {data.status}</p>
      <p>Species: {data.species}</p>
      <p>Surname: {data.surname}</p>
    </div>
  );
};

export default PlayerDetail;
