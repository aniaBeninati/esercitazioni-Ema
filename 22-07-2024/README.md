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
                    "isbn": "1",
                    "name": "Esempio Profumo 1",
                    "brand": "Casa Profumi 1",
                    "description": "Descrizione del profumo 1",
                    "price": 50.0,
                    "fragrances": ["Rosa", "Lavanda"],
                    "genre": "maschile",
                    "imageUrl": "http://example.com/image1.jpg"
                    },
                    {
                    "isbn": "2",
                    "name": "Esempio Profumo 2",
                    "brand": "Casa Profumi 2",
                    "description": "Descrizione del profumo 2",
                    "price": 70.0,
                    "fragrances": ["Vaniglia", "Gelsomino"],
                    "genre": "femminile",
                    "imageUrl": "http://example.com/image2.jpg"
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

- **isbn**: string (Identificativo univoco del profumo)
- **name**: string (Titolo del profumo)
- **brand**: string (Marca del profumo)
- **description**: string (Descrizione del profumo)
- **price**: number (Prezzo del profumo)
- **fragrances**: array (Fragranze del profumo)
- **genre**: string (Genere del profumo: maschile, femminile, bambino)
- **imageUrl**: string (Immagine del profumo)

PRD Notion
https://abyssinian-hyssop-39b.notion.site/PRD-Project-Requirements-Document-9237f63cb2b44f2a9eb8de2d2d977f23?pvs=4

API Endponts
https://abyssinian-hyssop-39b.notion.site/7547b3f07b0a4a989b768ba8861e01e5?v=b660236fd88242d0be9265bb450b0cfc&pvs=4
