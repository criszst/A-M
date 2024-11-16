const gifts = [
    {
        img: "https://altenburg.vtexassets.com/arquivos/ids/162015-800-800?v=638491288439170000&width=800&height=800&aspect=true",
        title: "Travesseiro Altenburg Suporte Firme 50cm x 70cm",
        price: "R$37,90",
    },
  
    {
        img: "https://precolandia.vtexassets.com/arquivos/ids/212652-800-auto?v=638435912891000000&width=800&height=auto&aspect=true",
        title: "Travesseiro Mega Nasa 48x68cm - Nap",
        price: "R$74,90",
    },

    {
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_948133-MLB71548572201_092023-F.webp",
        title: "Panela de Fondue 11 peças Monte Verde preta Meridional",
        price: "R$ 159,90"
    },

    {
        img: "https://ocapi.nadir.com.br/on/demandware.static/-/Sites-nadir-main-catalog/default/dw08b05b92/nadir/zoom/70640201414660_a_1000px.webp",
        title: "Jogo de Copos Long Drink Dubai Nadir 500ml com 6 peças",
        price: "R$54,90",
    },

    {
        img: "https://precolandia.vtexassets.com/arquivos/ids/245328-800-auto?v=638519836002500000&width=800&height=auto&aspect=true",
        title: "Conjunto 2 Copos de Chá Moderno 260mL - Lyor",
        price: "R$ 47,90",
    },

    {
        img: "https://precolandia.vtexassets.com/arquivos/ids/206543-800-auto?v=638038821721130000&width=800&height=auto&aspect=true",
        title: "Conjunto de Taças De Sobremesa Lights 6 Peças - Nadir Figueiredo",
        price: "R$ 44,90",
    },

    {
        img: "https://precolandia.vtexassets.com/arquivos/ids/208732-800-auto?v=638054411834530000&width=800&height=auto&aspect=true",
        title: "Jogo de Taças De Água Barone 6 Peças - Nadir Figueiredo",
        price: "R$ 66,90",
        link: "https://www.precolandia.com.br/jogo-de-tacas-de-agua-barone-6-pecas-nadir-figueiredo-846899/p",
    },

    {
        img: "https://precolandia.vtexassets.com/arquivos/ids/227684-800-auto?v=638509510324570000&width=800&height=auto&aspect=true",
        title: "Jarra com Tampa em Bambu Sense 1,5l",
        price: "R$ 143,90",
        link: "https://www.precolandia.com.br/jarra-com-tampa-em-bambu-sense-15l--072354/p",
    },

    {
        img: "https://precolandia.vtexassets.com/arquivos/ids/205159-800-auto?v=638038813078730000&width=800&height=auto&aspect=true",
        title: "Coqueteleira 500mL - Hercules",
        price: "R$ 44,90",
        link: "https://www.precolandia.com.br/coqueteleira-500ml-hercules-563331/p",
    },

    {
        img: "https://precolandia.vtexassets.com/arquivos/ids/206946-800-auto?v=638334305826530000&width=800&height=auto&aspect=true",
        title: "Prato de Melamina 19cm Preto - Marcamix",
        price: "R$ 23,90",
        link: "https://www.precolandia.com.br/prato-de-melamina-19cm-preto-marcamix-923974/p",
    },

    {
        img: "https://precolandia.vtexassets.com/arquivos/ids/210965-800-auto?v=638309249306530000&width=800&height=auto&aspect=true",
        title: "Petisqueira Bambu 30x14,5cm - Yoi",
        price: "R$ 52,90",
        link: "https://www.precolandia.com.br/petisqueira-bambu-30x145cm-yoi-647420/p",
    },

    {
        img: "https://precolandia.vtexassets.com/arquivos/ids/190778-800-auto?v=638038636126570000&width=800&height=auto&aspect=true",
        title: "Colher Bailarina de Aço Inox 30,3cm - Hércules",
        price: "R$ 6,00",
        links: {
            "precolandia": "https://www.precolandia.com.br/colher-bailarina-de-aco-inox-303cm-hercules-436500/p",
        }
    },

    {
        img: "https://precolandia.vtexassets.com/arquivos/ids/209607-800-auto?v=638392819267570000&width=800&height=auto&aspect=true",
        title: "Jogo para Churrasco Dynamic 3 Peças - Tramontina",
        price: "R$ 95,90",
        link: {
            "precolandia": "https://www.precolandia.com.br/jogo-para-churrasco-dynamic-3-pecas-tramontina-673617/p",
        }
    },

    {
        img: "https://precolandia.vtexassets.com/arquivos/ids/206960-800-auto?v=638254851859400000&width=800&height=auto&aspect=true",
        title: "Jogo de Facas Tramontina 3 Peças Affilata Preto",
        price: "R$ 84,90",
        links: {
            "precolandia": "https://www.precolandia.com.br/colher-bailarina-de-aco-inox-303cm-hercules-436500/p",
        }
    },

    {
        img: "https://precolandia.vtexassets.com/arquivos/ids/195773-800-auto?v=638235572917700000&width=800&height=auto&aspect=true",
        title: "Jogo de Facas Tramontina Plenus 6 Peças Colorido",
        price: "R$ 67,90",
        links: {
            "precolandia": "https://www.precolandia.com.br/jogo-de-facas-tramontina-plenus-6-pecas-colorido-508055/p",
        }
    },

    {
        img: "https://precolandia.vtexassets.com/arquivos/ids/214003-800-auto?v=638266874070770000&width=800&height=auto&aspect=true",
        title: "Tesoura de Cozinha Multiuso Mundial",
        price: "R$ 17,90",
        links: {
            "precolandia": "https://www.precolandia.com.br/tesoura-de-cozinha-multiuso-mundial-829439/p",
        }
    },

    {
        img: "https://precolandia.vtexassets.com/arquivos/ids/226001-300-300?v=638493923644930000&width=300&height=300&aspect=true",
        title: "Conjunto Faca Kitchen 4 Peças - Mundial",
        price: "R$ 67,90",
        links: {
            "precolandia": "https://www.precolandia.com.br/conjunto-faca-kitchen-4-pecas-mundial-088986/p",
        }
    },

    {
        img: "https://precolandia.vtexassets.com/arquivos/ids/219372-800-auto?v=638242777698570000&width=800&height=auto&aspect=true",
        title: "Tábua de Carne com Alça Delicate 34x19cm Madeira - Tramontina",
        price: "R$ 52,90",
        links: {
            "precolandia": "https://www.precolandia.com.br/tabua-de-carne-com-alca-delicate-34x19cm-madeira-tramontina-034185/p"
        }
    },

    {
        img: "https://precolandia.vtexassets.com/arquivos/ids/188686-800-auto?v=638120004101430000&width=800&height=auto&aspect=true",
        title: "Porta Guardanapo Branco Liso - Martiplast",
        price: "R$ 14,90",
        links: {
            "precolandia": "https://www.precolandia.com.br/porta-guardanapo-branco-liso-martiplast-161780/p"
        }
    },

    {
        img: "https://precolandia.vtexassets.com/arquivos/ids/243677-800-auto?v=638486859315770000&width=800&height=auto&aspect=true",
        title: "Porta Papel Toalha de Bambu 33cm - Oikos",
        price: "R$ 44,90",
        links: {
            "precolandia": "https://www.precolandia.com.br/porta-papel-toalha-de-bambu-33cm-oikos-075213/p?idsku=31686&gad_source=1&gclid=Cj0KCQiAouG5BhDBARIsAOc08RSiR2yx-I8ssCLN4_sXFM8ofqmOP56YYI8xoBQHvB223s_vIflVuysaAso-EALw_wcB"
        }
    },

    {
        img: "https://precolandia.vtexassets.com/arquivos/ids/197912-800-auto?v=638132083075630000&width=800&height=auto&aspect=true",
        title: "Porta Papel Toalha Black - Arthi",
        price: "R$ 41,90",
        links: {
            "precolandia": "https://www.precolandia.com.br/porta-papel-toalha-black-arthi-498610/p"
        }
    },

    {
        img: "https://precolandia.vtexassets.com/arquivos/ids/189309-800-auto?v=638242595683030000&width=800&height=auto&aspect=true",
        title: "Saleiro de Parede Preto 13cm - Coza",
        price: "R$ 29,90",
        links: {
            "precolandia": "https://www.precolandia.com.br/saleiro-de-parede-preto-13cm-coza-268720/p"
        }
    },

    {
        img: "https://precolandia.vtexassets.com/arquivos/ids/216159-800-auto?v=638258039091100000&width=800&height=auto&aspect=true",
        title: "Porta Condimentos com Suporte Preto/ Prata 6 Peças - Arthi",
        price: "R$ 67,90",
        links: {
            "precolandia": "https://www.precolandia.com.br/porta-condimentos-com-suporte-preto-prata-6-pecas-arthi-554030/p"
        }
    },

    {
        img: "https://precolandia.vtexassets.com/arquivos/ids/210941-800-auto?v=638333361056800000&width=800&height=auto&aspect=true",
        title: "Moedor Temperos Grind Branco Fosco - Yoi",
        price: "R$ 67,90",
        links: {
            "precolandia": "https://www.precolandia.com.br/moedor-temperos-grind-branco-fosco-yoi-649317/p"
        }
    },

    {
        img: "https://precolandia.vtexassets.com/arquivos/ids/197272-800-auto?v=638412702667830000&width=800&height=auto&aspect=true",
        title: "Pote Hermético de Vidro com Tampa Transparente Retangular 1,5L - Oikos",
        price: "R$ 59,90",
        links: {
            "precolandia": "https://www.precolandia.com.br/pote-hermetico-retangular-152l-oikos-546518/p?idsku=3847&gad_source=1&gclid=Cj0KCQiAouG5BhDBARIsAOc08RQhgqrWaZpNri4NGIcjrtRoIPIh5IFJP48QqXGRHfagl7Vnp3ug4CAaAo_BEALw_wcB",
            "amazon": "https://www.amazon.com.br/Vidro-Tampa-Transparente-Retangular-Herm%C3%A9tico/dp/B0983YS5ZK/ref=asc_df_B0983YS5ZK/?tag=googleshopp00-20&linkCode=df0&hvadid=709870389015&hvpos=&hvnetw=g&hvrand=8222294876878561138&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9195762&hvtargid=pla-1434375558423&mcid=222b50cf885736f886eec0f7b34f4f4d&gad_source=1&th=1"
        }
    },
    
    {
        img: "https://precolandia.vtexassets.com/arquivos/ids/241810-800-auto?v=638450705066770000&width=800&height=auto&aspect=true",
        title: "Pote Hermético de Vidro com Tampa Transparente Retangular 570ml - Oikos",
        price: "R$ 28,04", 
        links: {
            "precolandia": "Sem Dados",
            "amazon": "https://www.amazon.com.br/Pote-Vidro-Retangular-570ML-OIKOS/dp/B08ZNNFRHH/ref=asc_df_B08ZNNFRHH/?tag=googleshopp00-20&linkCode=df0&hvadid=709874962041&hvpos=&hvnetw=g&hvrand=2744229186348289169&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9195762&hvtargid=pla-1420086349176&psc=1&mcid=dbb453591f2a3b51ba182c279467fea1&gad_source=1",

        }
    },

    {
        img: "https://precolandia.vtexassets.com/arquivos/ids/241835-800-auto?v=638450722913800000&width=800&height=auto&aspect=true",
        title: "Pote Hermético Quadrado 800mL Transparente - Oikos",
        price: "R$ 39,90",
        links: {
            "precolandia": "https://www.precolandia.com.br/pote-hermetico-quadrado-800ml-transparente-oikos-094153/p"
        }
    },

    {
        img: "https://precolandia.vtexassets.com/arquivos/ids/241789-800-auto?v=638450704886430000&width=800&height=auto&aspect=true",
        title: "Pote Hermético Retangular 570mL Transparente - Oikos",
        price: "R$ 27,90",
        links: {
            "precolandia": "https://www.precolandia.com.br/pote-hermetico-retangular-570ml-transparente-oikos-094110/p?idsku=31041&gad_source=1&gclid=Cj0KCQiAouG5BhDBARIsAOc08RRT4eJhVtzJwVAck-ddcjsGTT1SuONDrQIY1oHUl6r7ScxBSEZb04caApBMEALw_wcB"
        }
    },

    {
        img: "https://precolandia.vtexassets.com/arquivos/ids/213612-800-auto?v=638460254596130000&width=800&height=auto&aspect=true",
        title: "Tela Protetora para Alimentos 35cm - Union Chance",
        price: "R$ 14,90",
        links: {
            "precolandia": "https://www.precolandia.com.br/tela-protetora-para-alimentos-35cm-union-chance-646733/p"
        }
    },

    {
        img: "https://precolandia.vtexassets.com/arquivos/ids/216157-800-auto?v=638240820263570000&width=800&height=auto&aspect=true",
        title: "Queijeira de Plástico Break Chumbo 16cm - Martiplast",
        price: "R$ 36,90",
        links: {
            "precolandia": "https://www.precolandia.com.br/queijeira-de-plastico-break-chumbo-16cm-martiplast-467375/p"
        }
    },

    {
        img: "",
        title: "",
        price: "",
        links: {
            "precolandia": ""
        }
    },

    {
        img: "",
        title: "",
        price: "",
        links: {
            "precolandia": ""
        }
    },

    {
        img: "",
        title: "",
        price: "",
        links: {
            "precolandia": ""
        }
    },

    {
        img: "",
        title: "",
        price: "",
        links: {
            "precolandia": ""
        }
    },

    {
        img: "",
        title: "",
        price: "",
        links: {
            "precolandia": ""
        }
    },

    {
        img: "",
        title: "",
        price: "",
        links: {
            "precolandia": ""
        }
    },

    {
        img: "",
        title: "",
        price: "",
        links: {
            "precolandia": ""
        }
    },

    {
        img: "",
        title: "",
        price: "",
        links: {
            "precolandia": ""
        }
    },

    {
        img: "",
        title: "",
        price: "",
        links: {
            "precolandia": ""
        }
    },

    {
        img: "",
        title: "",
        price: "",
        links: {
            "precolandia": ""
        }
    },

    {
        img: "",
        title: "",
        price: "",
        links: {
            "precolandia": ""
        }
    },

    {
        img: "",
        title: "",
        price: "",
        links: {
            "precolandia": ""
        }
    },


]

export default gifts;