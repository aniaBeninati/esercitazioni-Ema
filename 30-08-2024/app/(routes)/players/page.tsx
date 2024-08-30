import Card from "@/app/(components)/Card";
import { IPlayer } from "../../(models)/IPlayer";
import { GET } from "../../api/route";

const HomePage = async () => {
  const response = await GET();
  const data = await response.json();
  
  if (!Array.isArray(data)) {
    console.error("Errore nel caricamento dei giocatori:", data);
    return <div>Errore nel caricamento dei giocatori</div>;
  }

  const players: IPlayer[] = data;

  return (
    <div className="grid grid-cols-4 gap-4 p-8">
      {players.map((player) => (
        <Card key={player.number} player={player} />
      ))}
    </div>
  );
};

export default HomePage;
