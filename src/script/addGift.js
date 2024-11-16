import gifts from './gifts.js';

function insertGiftHTML(img, title, price) {
    return `
      <div class="mt-3" style="border-bottom: 2px solid  #cac4d0; padding-bottom: 10px;">
            <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex flex-row align-items-center">
                    <div>
                        <img class="imageCard lazy" loading="lazy" data-src="${img}" alt="Imagem do presente" style="width: 100px; height: 100px;" />
                    </div>
                    <div class="d-flex flex-column">
                        <span>${title}</span>
                        <div class="d-flex flex-row align-items-center">
                            <small class="h5">${price}</small>
                        </div>
                    </div>
                </div>
                <button type="button" class="btn btn-info" data-mdb-ripple-init onclick="viewPrice(${title})">Preços</button>
            </div>
        </div>
    `;
}

function addGift(gifts) {
   
    const card = document.getElementById("cardList");

    if (!card) {
        console.error("cardList nao encontrado");
        return;
    }

    gifts.forEach(({ img, title, price }) => {
        const giftHTML = insertGiftHTML(img, title, price);
        card.insertAdjacentHTML("beforeend", giftHTML);
    });

}



// Adicionar os presentes
addGift(gifts);
