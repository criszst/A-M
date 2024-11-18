export function fetchJson(json) {
    return fetch(json)
        .then((response) => {
            if (!response.ok) {
                throw new Error("erro ao carregar os dados de gifts.json slkk");
            }
            return response.json();
        })
        .catch((error) => {
            console.error(error);
        });
}