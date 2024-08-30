import { GETBYID } from "@/app/api/players/[number]/route";
import { IPlayer } from "../../../(models)/IPlayer";
import Image from "next/image";

interface PlayerDetailProps {
  params: { number: string };
}

const PlayerDetail = async ({ params }: PlayerDetailProps) => {
  const { number } = params;
  console.log(params);
  if (!number) {
    return <div>Giocatore non trovato</div>;
  }

  // Correggi la chiamata all'API, usa il percorso corretto
  const response = await GETBYID;
  const data = await response.json();

  if (!data) {
    return <div>Giocatore non trovato</div>;
  }

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
