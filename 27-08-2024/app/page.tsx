import React from "react";
import Card, { ICard } from "@/app/components/Card";

const monuments: ICard[] = [
  {
    id: "1",
    category: "Historical",
    title: "Cattedrale di Palermo",
    description: "Una delle principali chiese di Palermo, con una storia che risale al 1185.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Panoramica_Cattedrale_di_Palermo.jpg",
  },
  {
    id: "2",
    category: "Cultural",
    title: "Teatro Massimo",
    description: "Il più grande teatro lirico in Italia e uno dei più grandi d'Europa.",
    imageUrl: "https://cdn-italiani-media.italiani.it/site-italiani/2020/11/Teatro-Massimo-Palermo-1024x540.jpg",
  },
  {
    id: "3",
    category: "Architectural",
    title: "Palazzo dei Normanni",
    description: "Antico palazzo reale e uno dei monumenti più famosi di Palermo.",
    imageUrl: "https://i.pinimg.com/originals/f7/12/7d/f7127d4ee01ab8c3ed05e630b60d0b17.jpg",
  },
  {
    id: "4",
    category: "Art",
    title: "I Quattro Canti",
    description: "Una delle piazze più emblematiche di Palermo, famosa per la sua simmetria e architettura barocca.",
    imageUrl: "https://www.generacion05.com/wp-content/uploads/2020/08/quattro-canti-scaled.jpg",
  },
  {
    id: "5",
    category: "Food",
    title: "Arancina",
    description: "Un piatto tipico siciliano, un riso fritto ripieno di carne o mozzarella.",
    imageUrl: "https://wearepalermo.com/wp-content/uploads/2021/06/Arancina-Palermo.jpg",
  },
  {
    id: "6",
    category: "Food",
    title: "Cannolo Siciliano",
    description: "Dolce tipico siciliano con una croccante cialda e ripieno di ricotta.",
    imageUrl: "https://assets.afcdn.com/recipe/20170207/11400_w3072h2304c1cx1500cy1000.jpg"
  },
    {
    id: "7",
    category: "Sea",
    title: "Spiaggia di Mondello",
    description: "Una delle spiagge più famose di Palermo, con sabbia bianca e mare cristallino.",
    imageUrl: "https://static2-viaggi.corriereobjects.it/wp-content/uploads/2022/08/iStock-826840302-1.jpg?v=476069",
  },
  {
    id: "8",
    category: "Sea",
    title: "Riserva Naturale di Capo Gallo",
    description: "Una riserva naturale con scogliere mozzafiato e acque trasparenti.",
    imageUrl: "https://viedelmare.gnv.it/wp-content/uploads/2021/08/padding-grotte-cave-di-capo-gallo.jpg",
  },
];

export default function Home() {
  return (
    <main className="flex flex-wrap justify-center">
      {monuments.map((monument) => (
        <Card key={monument.id} post={monument} />
      ))}
    </main>
  );
}
