import { fetchGifts } from './gifts.js';
import { addGift } from './render.js';
import { searchGifts } from './search.js';
import { returnSortedGifts } from './sort.js';

let allGifts = []; 

function initializeApp() {
    fetchGifts()
        .then((gifts) => {
            allGifts = gifts;
            addGift(allGifts);
            searchGifts(allGifts, addGift); 
            returnSortedGifts(allGifts));
        })
    
        .catch((error) => console.error("erro ao inicializar os scripts bb:", error));
}


initializeApp();

