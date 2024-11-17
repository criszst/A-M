export function insertGiftHTML(img, title, category, price) {
   return `
      <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="card">
           <div class="bg-image hover-zoom ripple ripple-surface ripple-surface-light" data-mdb-ripple-color="light">
              <img src="${img}" class="w-100 img-fluid imgCardList" />
              <a href="#!">
                 <div class="mask" style="background-color: hsla(0, 0%, 0%, 0.3) !important;">
                    <div class="d-flex justify-content-start align-items-end h-100">
                       <h5><span class="badge ms-2" style="background-color: #463754">R$ ${price}</span></h5>
                    </div>
                 </div>
                 <div class="hover-overlay">
                    <div class="mask" style="background-color: rgba(251, 251, 251, 0.10);"></div>
                 </div>
              </a>
           </div>
           <div class="card-body">
              <a href="" class="text-reset">
                 <h6 class="card-title mb-3">${title}</h6>
              </a>
              <a href="" class="text-reset">
                 <p>${category}</p>
              </a>
     
              <button type="button" class="btn btn-info" onclick="viewPrice('${title}')" style="background-color: #463754"
                 data-mdb-modal-init data-mdb-target="#exampleModal">
                 Ver Informações
              </button>
     
           </div>
        </div>
     </div>
   `;
}

export function addGift(gifts) {
   const cardList = document.getElementById("cardList");

   if (!cardList) {
       console.error(" o 'cardList' nao foi encontrado");
       return;
   }

   cardList.innerHTML = "";

   gifts.forEach(({ img, title, category, price }) => {
       const giftHTML = insertGiftHTML(img, title, category, price);
       cardList.insertAdjacentHTML("beforeend", giftHTML);
   });
}
