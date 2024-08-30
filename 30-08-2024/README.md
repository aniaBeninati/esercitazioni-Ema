src/
  ├── app/
  │   ├── (components)/
  │   │   ├── Card.tsx
  │   │   ├── NavBar.tsx
  │   │   ├── Button.tsx
  │   │   └── Footer.tsx
  │   ├── (routes)/ 
  │   │   ├── about/
  │   │   │   ├── page.tsx
  │   │   │   └── loading.tsx
  │   │   ├── contatti/
  │   │   │   ├── page.tsx
  │   │   │   └── loading.tsx
  │   │   ├── characters/
  │   │   │   ├── [id]/
  │   │   │   │   ├── page.tsx
  │   │   │   │   ├── not-found.tsx
  │   │   │   │   └── loading.tsx
  │   │   │   ├── page.tsx
  │   │   │   └── loading.tsx       
  │   │   ├── page.tsx (Homepage)
  │   │   └── loading.tsx
  │   ├── api/
  │   │   └── rickmorty/
  │   │       ├── characters.ts
  │   │       ├── locations.ts
  │   │       └── episodes.ts
  │   ├── globals.css
  │   └── layout.tsx
  ├── models/
  │   ├── character.ts
  │   ├── location.ts
  │   └── episode.ts
  ├── services/
  │   └── rickmorty-api.ts
  └── utils/
      └── ... (Funzioni di utilità)
