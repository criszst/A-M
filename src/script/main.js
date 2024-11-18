import { fetchGifts } from './gifts.js';
import { addGift } from './render.js';
import { searchGifts } from './search.js';
import { ordGifts } from './order.js';
import { qrCode } from './request/api.js';

let allGifts = []; 

function initializeApp() {
    fetchGifts()
        .then((gifts) => {
            allGifts = gifts;
            addGift(allGifts);
            searchGifts(allGifts, addGift);
            ordGifts(allGifts, addGift);
            qrCode('Agatha%20Leticia', 'Sao%20Paulo')
        })
    
        .catch((error) => console.error("erro ao inicializar os scripts bb:", error));
}


initializeApp();

