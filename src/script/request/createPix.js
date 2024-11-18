import { Pix } from '../request/api.js';

export function openModal(img, title, price, links) {
    const modalTitle = document.querySelector('#modalPrice .modal-title');

    modalTitle.textContent = '';
   modalTitle.textContent = title;

   document.querySelector('.card-title').textContent = '';
   document.querySelector('.card-title').textContent = title;

    const imgElement = document.querySelector('.imgCardList');

   imgElement.src = '';
   imgElement.src = img;

   document.querySelector('#modalPrice .badge').textContent = `R$ ${price}`;

   createPix(title.replace(' ', ''), price);


}

window.openModal = openModal;

export function createPix(description, price) {
   const pix = new Pix(
      "46327262813",
      `${description.replace(/[0-9\s]/g, '').substring(0, 20)}`,
      "Agatha",
      "SaoPaulo",
      `${createTxtID()}`,
      parseFloat(price.replace(',', '.')),
   );

   const payload = pix.getPayload();

   const payloadElement = document.querySelector('#modalPrice .pix-payload');

   payloadElement.textContent = '';
   payloadElement.textContent = payload;

   console.log(payload)
   console.log(description.replace(/[0-9]/g, ''))
}

function createTxtID() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const length = Math.floor(Math.random() * 16) + 10; // Comprimento entre 1 e 25
    let result = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }

    return result;
}

