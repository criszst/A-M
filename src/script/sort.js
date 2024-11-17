import { addGift } from "./render";

function sortGifts(gifts, sortBy) {
    switch (sortBy) {
        case "A-Z":
            return gifts.sort((a, b) => a.title.localeCompare(b.title));
        case "Z-A":
            return gifts.sort((a, b) => b.title.localeCompare(a.title));
        case "Maior Valor":
            return gifts.sort((a, b) => b.price - a.price);
        case "Menor Valor":
            return gifts.sort((a, b) => a.price - b.price);
        default:
            return gifts;
    }
}

export function returnSortedGifts(gifts) {
    setTimeout(() => {


        const dropdownLinks = document.querySelectorAll('.section-dropdown a');

        dropdownLinks.forEach(link => {
            link.addEventListener('click', function (event) {
                event.preventDefault();
                const selectedSort = link.getAttribute('data-sort');

                document.querySelector('.for-dropdown').innerHTML = `ORDENAR LISTA: ${selectedSort} <i class="fas fa-angle-down"></i>`;

                const sortedGifts = sortGifts(gifts, selectedSort);

                addGift(sortedGifts);
            });
        });
    }, 500)
}