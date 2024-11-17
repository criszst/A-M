import { fetchGifts } from './gifts.js';
import { addGift } from './render.js';
import { setupSearch } from './search.js';

let allGifts = []; 

function initializeApp() {
    fetchGifts()
        .then((gifts) => {
            allGifts = gifts;
            addGift(allGifts);
            setupSearch(allGifts, addGift); 
        })
        .catch((error) => console.error("erro ao inicializar os scripts bb:", error));
}

// Inicializa a aplicação
initializeApp();
