export function filterGifts(query, allGifts) {
    return allGifts.filter((gift) =>
        gift.title.toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .includes(query.toLowerCase())
    );
}

export function searchGifts(allGifts, addGift) {
    const searchInput = document.getElementById("search");

    if (!searchInput) {
        console.error("o 'search' nao foi encontrado");
        return;
    }

    searchInput.addEventListener("input", (event) => {
        const query = event.target.value.trim();
        const filteredGifts = filterGifts(query, allGifts);
        addGift(filteredGifts);
    });
}
