export function ordGifts(gifts, addGift) {
    const dropdownLinks = document.querySelectorAll('.linkDropdown')

    dropdownLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault()

            const option = link.textContent.trim().toLowerCase();


            if (option === 'a-z') gifts.sort((a, b) => a.title.localeCompare(b.title)); 
            
            else if (option === 'z-a') gifts.sort((a, b) => b.title.localeCompare(a.title));

            else if (option === 'maior valor')
                gifts.sort((a, b) => 
                    parseFloat(b.price.replace(',', '.')) - 
                    parseFloat(a.price.replace(',', '.')));


             else if (option === 'menor valor') 
                gifts.sort((a, b) => 
                    parseFloat(a.price.replace(',', '.')) - 
                parseFloat(b.price.replace(',', '.')));
 
   

            addGift(gifts)
        })
    })
}