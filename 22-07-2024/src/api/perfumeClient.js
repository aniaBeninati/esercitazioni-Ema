const baseUrl = "http://localhost:3000"; 

export const getPerfumeList = async () => {
    try {
        const res = await fetch(`${baseUrl}/perfumes`);
        if (!res.ok) {
            throw new Error('Errore nel recupero della lista dei profumi');
        }
        return res.json();
    } catch (error) {
        throw new Error(error.message);
    }
};


export const getPerfumeDetail = async (id) => {
    try {
        const res = await fetch(`${baseUrl}/perfume-details/${id}`);
        if (!res.ok) {
            throw new Error(`Errore nel recupero dei dettagli del profumo con ID: ${id}`);
        }
        return res.json();
    } catch (error) {
        throw new Error(error.message);
    }
};


export const addPerfume = async (perfumeData) => {
    const id = crypto.randomUUID();
    const perfumeNoDetail = {
        id,
        name: perfumeData.name,
        brand: perfumeData.brand,
        price: perfumeData.price,
        fragrances: perfumeData.fragrances
    };

    try {
        await fetch(`${baseUrl}/perfumes`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(perfumeNoDetail)
        });

        const res = await fetch(`${baseUrl}/perfume-details`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ id, ...perfumeData })
        });

        if (!res.ok) {
            throw new Error('Errore nell\'aggiunta del profumo');
        }

        return res.json();
    } catch (error) {
        throw new Error(error.message);
    }
};

export const editPerfume = async (perfumeData) => {
    try {
        const res = await fetch(`${baseUrl}/perfume-details/${perfumeData.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(perfumeData)
        });

        if (!res.ok) {
            throw new Error('Errore nella modifica del profumo');
        }

        return res.json();
    } catch (error) {
        throw new Error(error.message);
    }
};


export const deletePerfume = async (id) => {
    try {
        await fetch(`${baseUrl}/perfumes/${id}`, {
            method: "DELETE"
        });

        const res = await fetch(`${baseUrl}/perfume-details/${id}`, {
            method: "DELETE"
        });

        if (!res.ok) {
            throw new Error(`Errore nella cancellazione del profumo con ID: ${id}`);
        }

        return res.json();
    } catch (error) {
        throw new Error(error.message);
    }
};


/*export const getPerfumeList = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    "id": "1",
                    "name": "Esempio Profumo 1",
                    "brand": "Casa Profumi 1",
                    "description": "Descrizione del profumo 1",
                    "price": 50.0,
                    "fragrances": ["Rosa", "Lavanda"],
                    "genre": "maschile",
                    "imageUrl": "http://example.com/image1.jpg"
                },
                {
                    "id": "2",
                    "name": "Esempio Profumo 2",
                    "brand": "Casa Profumi 2",
                    "description": "Descrizione del profumo 2",
                    "price": 70.0,
                    "fragrances": ["Vaniglia", "Gelsomino"],
                    "genre": "femminile",
                    "imageUrl": "http://example.com/image2.jpg"
                },
            ]);
        }, 2000);
    });
};

export const getPerfumeDetail = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: "1",
                name: "Esempio Profumo 1",
                brand: "Casa Profumi 1",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                price: 50.0,
                fragrances: ["Rosa", "Lavanda"],
                genre: "maschile",
                imageUrl: "https://images.unsplash.com/photo-1701291927826-c7775869d822?q=80&w=1910&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            });
        }, 500);
    });
};

export const addPerfume = (perfumeData) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                ...perfumeData,
                id: crypto.randomUUID(), 
            });
        }, 3000);
    });
};

export const editPerfume = (perfumeData) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                ...perfumeData,
            });
        }, 3000);
    });
};

export const deletePerfume = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`L'elemento con ID ${id} è stato cancellato con successo`);
        }, 3000);
    });
};
*/