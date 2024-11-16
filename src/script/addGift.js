function insertGiftHTML(img, title, category, price ) {
    return `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
         <div class="card">
            <div class="bg-image hover-zoom ripple ripple-surface ripple-surface-light" data-mdb-ripple-color="light">
               <img src="${img}" class="w-100 img-fluid imgCardList" />
               <a href="#!">
                  <div class="mask" style="background-color: hsla(0, 0%, 0%, 0.3) !important;">
                     <div class="d-flex justify-content-start align-items-end h-100">
                        <h5><span class="badge bg-primary ms-2">R$ ${price}</span></h5>
                     </div>
                  </div>
                  <div class="hover-overlay">
                     <div class="mask" style="background-color: rgba(251, 251, 251, 0.10);"></div>
                  </div>
               </a>
            </div>
            <div class="card-body">
               <a href="" class="text-reset">
                  <h5 class="card-title mb-3">${title}</h5>
               </a>
               <a href="" class="text-reset">
                  <p>${category}</p>
               </a>

               <button type="button" class="btn btn-info" onclick="viewPrice('${title}')" 
               style="background-color: #463754">
               Ver Informações
               </button>
            </div>
         </div>
      </div>
    `;
}

function addGift(gifts) {
    const cardList = document.getElementById("cardList");

    if (!cardList) {
        console.error("Elemento com ID 'cardList' não encontrado.");
        return;
    }

    // Limpa os cards antigos antes de adicionar os novos
    cardList.innerHTML = "";

    // Adiciona os novos cards
    gifts.forEach(({ img, title, price }) => {
        const giftHTML = insertGiftHTML(img, title, "Panelas", price);
        cardList.insertAdjacentHTML("beforeend", giftHTML);
    });
}


function fetchGifts() {
    return fetch('src/script/gifts.json')
        .then((response) => {
            if (!response.ok) {
                throw new Error("Erro ao carregar os dados de gifts.json");
            }
            return response.json();
        })
        .then((gifts) => {
            addGift(gifts);
        })
        .catch((error) => {
            console.error(error);
        });
}

function viewPrice(title) {
    console.log("Precos de presentes: " + title);
}


// Adicionar os presentes
fetchGifts();
