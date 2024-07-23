# PRD (Project Requirements Document)

### Purpose and scope

- Avere un applicativo che ci permetta di gestire tutti i profumi del nostro negozio on-line.

### Product overview and use cases

- Ogni dipendente di PerfumeHub deve avere la possibilità di gestire il catalogo dei profumi e aggiornarlo al bisogno

### Requirements

Primo rilascio: MVP

- Come Dipendente voglio poter cercare un profumo tra una lista di profumi all’interno d**el mio gestionale**
- Come dipendente voglio poter vedere il dettaglio di un profumo
- Come dipendente voglio poter filtrare la mia lista profumi

Secondo rilascio: Update / Edit / Delete

- Come dipendente voglio poter ***aggiungere*** un profumo alla lista di profumi
- Come dipendente voglio poter ***aggiornare*** un profumo alla lista di profumi
- Come dipendente voglio poter ***cancellare*** un profumo alla lista di profumi

Terzo rilascio: 

- Come utente voglio poter inserire un profumo all’interno di una lista di profumi preferiti

Quarto rilascio: toster

- Come dipendente voglio poter sapere se ogni operazione fatta sul catalogo vada o no a buon fine (toast)

Quinto rilascio: 

- Come dipendente finale voglio avere un’area riservata dove gestire le mie informazioni

### Technical requirements:

- React per FE
- Vercel x deploy

# Simulazione di un database in memoria

perfumes = [
{
"id": 1,
"title": "Esempio Profumo 1",
"producer": "Casa Profumi 1",
"description": "Descrizione del profumo 1",
"price": 50.0,
"fragrances": ["Rosa", "Lavanda"],
"for_men": True,
"for_women": False,
"for_kids": False,
"image_url": "http://example.com/image1.jpg"
},
{
"id": 2,
"title": "Esempio Profumo 2",
"producer": "Casa Profumi 2",
"description": "Descrizione del profumo 2",
"price": 70.0,
"fragrances": ["Vaniglia", "Gelsomino"],
"for_men": False,
"for_women": True,
"for_kids": False,
"image_url": "http://example.com/image2.jpg"
}
]

Questa API include le seguenti funzionalità:

1. **GET /perfumes**: Ottiene la lista di tutti i profumi.
2. **GET /perfumes/<id>**: Ottiene i dettagli di un singolo profumo specificato dall'id.
3. **POST /perfumes**: Aggiunge un nuovo profumo alla lista.
4. **PUT /perfumes/<id>**: Aggiorna i dettagli di un profumo esistente specificato dall'id.
5. **DELETE /perfumes/<id>**: Elimina un profumo esistente specificato dall'id.
6. 

Ogni profumo ha i seguenti campi:

- `id`: Identificativo univoco del profumo.
- `title`: Titolo del profumo.
- `producer`: Nome della casa produttrice.
- `description`: Descrizione del profumo.
- `price`: Prezzo del profumo.
- `fragrances`: Lista delle fragranze del profumo.
- `for_men`: Indica se il profumo è per uomini.
- `for_women`: Indica se il profumo è per donne.
- `for_kids`: Indica se il profumo è per bambini.
- `image_url`: URL dell'immagine del profumo.

PRD Notion
https://www.notion.so/PRD-Project-Requirements-Document-9237f63cb2b44f2a9eb8de2d2d977f23
