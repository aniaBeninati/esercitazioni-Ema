export interface Perfume {
    id: string;
    name: string;
    brand: string;
    price: number;
    fragrances: string[];
}

export interface PerfumeDetail extends Perfume { 
    description: string;
    genre: 'maschile' | 'femminile' | 'unisex';
    imageUrl: string;
}
