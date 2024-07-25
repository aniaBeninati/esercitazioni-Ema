export const getPerfumeList = () => {
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
                image_url: "https://images.unsplash.com/photo-1701291927826-c7775869d822?q=80&w=1910&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
/*export const addPerfume = (perfumeData) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (perfumeData) {
                console.log("Perfume added:", perfumeData);
                resolve({ message: "Perfume added successfully" });
            } else {
                reject(new Error("Failed to add perfume"));
            }
        }, 1000);
    });
};*/

/* 
export const getPerfumeList = async () => {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        return res.json();
    } catch (error) {
        throw new Error("Error:", error);
    }
}; 
*/


