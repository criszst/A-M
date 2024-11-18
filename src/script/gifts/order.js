export function ordGifts(gifts, addGift) {
    const dropdownLinks = document.querySelectorAll('.linkDropdown');

    const order = {
        'a-z': (a, b) => a.title.localeCompare(b.title),
        'z-a': (a, b) => b.title.localeCompare(a.title),

        'menor valor': (a, b) => parseFloat(a.price.replace(',', '.')) - parseFloat(b.price.replace(',', '.')),
        'maior valor': (a, b) => parseFloat(b.price.replace(',', '.')) - parseFloat(a.price.replace(',', '.'))
    };

    dropdownLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            const dropdownSelected = link.textContent.trim().toLowerCase();

            removeClassList();

            gifts.sort(order[dropdownSelected])
            
            link.classList.add('active');

            addGift(gifts);
        });
    });
}

function removeClassList() {
    const links = document.querySelectorAll('.linkDropdown');
    links.forEach(link => {
        link.classList.remove('active');
    });
}