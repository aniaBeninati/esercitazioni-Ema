export const getPerfumeList = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    id: "1",
                    title: "Esempio Profumo 1",
                    producer: "Casa Profumi 1",
                    description: "Descrizione del profumo 1",
                    price: 50.0,
                    fragrances: ["Rosa", "Lavanda"],
                    for_men: true,
                    for_women: false,
                    for_kids: false,
                    image_url: "http://example.com/image1.jpg",
                },
                {
                    id: "2",
                    title: "Esempio Profumo 2",
                    producer: "Casa Profumi 2",
                    description: "Descrizione del profumo 2",
                    price: 70.0,
                    fragrances: ["Vaniglia", "Gelsomino"],
                    for_men: false,
                    for_women: true,
                    for_kids: false,
                    image_url: "http://example.com/image2.jpg",
                },
            ]);
        }, 2000);
    });
};

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

export const labels = {
    perfumeTableTitle: "Title",
    perfumeTableProducer: "Producer",
    perfumeTableDescription: "Description",
    perfumeTablePrice: "Price",

    perfumeList: "Perfume List"
};
