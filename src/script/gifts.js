export function fetchGifts() {
    return fetch('src/json/gifts.json')
        .then((response) => {
            if (!response.ok) {
                throw new Error("erro ao carregar os dados de gifts.json");
            }
            return response.json();
        });
}
