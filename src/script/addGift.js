function addGift(img, title, price) {
    setTimeout(() => {
        var card = document.getElementById("cardList");

        card.insertAdjacentHTML("beforeend",` <div class="mt-3" style="border-bottom: 2px solid  #cac4d0; padding-bottom: 10px;">

                    <div class="d-flex justify-content-between align-items-center">

                        <div class="d-flex flex-row align-items-center">

                            <div class="imageCard img-fluid" style='background-image: url("${img}");'></div>

                            <div class="d-flex flex-column">

                                <span>${title}</span>

                                <div class="d-flex flex-row align-items-center">
                                    <small class="h5">${price}</small>
                                </div>

                            </div>


                        </div>

                        <button type="button" class="btn btn-primary" data-mdb-ripple-init">Button</button>

                    </div>

                </div>`
        )
    }, 500)
};


// travesseiros
addGift("https://altenburg.vtexassets.com/arquivos/ids/162015-800-800?v=638491288439170000&width=800&height=800&aspect=true", 
        "Travesseiro Altenburg Suporte Firme 50cm x 70cm", 
        "R$37,90"
    );
addGift("https://precolandia.vtexassets.com/arquivos/ids/212652-800-auto?v=638435912891000000&width=800&height=auto&aspect=true",
        "Travesseiro Mega Nasa 48x68cm - Nap", 
        "R$74,90"
    );

addGift("https://http2.mlstatic.com/D_NQ_NP_2X_948133-MLB71548572201_092023-F.webp", 
        "Panela de Fondue 11 peças Monte Verde preta Meridional", 
        "R$ 159,90"
    );
