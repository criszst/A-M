export function filterGifts(query, allGifts) {
    return allGifts.filter((gift) =>
        gift.title.toLowerCase().includes(query.toLowerCase())
    );
}

export function setupSearch(allGifts, addGift) {
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
