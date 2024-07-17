Panoramica
La sfida
L'esercizio richiede una serie di operazioni:
poter scaricare dati da un server, salvarli nel localstorage, cambiare pagina, prelevare i dati salvati nello storage e mostrarli a video
realizzate un piccolo (ma proprio piccolo) e-commerce composto da pagina home e pagina carrello.
Al primo render della home, scarichiamo i dati da questa api. Scegliamo i prodotti da mettere nello storage/carrello. Cambiamo pagina e al primo render della nuova pagina preleviamo i dati dallo storage e li mostriamo a video. Possiamo modificare i dati del carrello, quindi giocate con gli spread e con gli array.

#Struttura Progetto

my-ecommerce/
├── node_modules/
├── public/
│   ├── index.html
├── src/
│   ├── assets/
│   │   └── cart-heart-svgrepo-com.svg
│   ├── components/
│   │   ├── NavBar.jsx
│   │   ├── DefaultLayout.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Cart.jsx
│   │   ├── Contact.jsx
│   │   └── ErrorPage.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
├── tailwind.config.js
└── README.md


src/components/: per i componenti condivisi
src/pages/: per le pagine
src/index.css: per lo stile personalizzato (incluso Tailwind)

Il mio processo
Ho seguito un processo chiaro e organizzato per creare un'applicazione e-commerce utilizzando React, React Router e Tailwind CSS. Ho creato componenti riutilizzabili, configurato le rotte in modo efficiente e stilizzato l'applicazione con Tailwind CSS. Ho creato una pagina App.jsx (Home) che mostra i prodotti e una pagina Cart che mostra i prodotti aggiunti al carrello. Si possono aggiungere e rimuovere prodotti dal carrello e navigare tra le pagine "Home" e Cart.

Autore

Stefania Beninati

