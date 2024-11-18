 
/**
 * Requisita uma api para gerar um qr code do pix
 * O qr code é gerado baseado nos parametros da url
 * 
 * @param {name} na - o nome da pessoa no qr code
 * @returns {Promise<Object>} Uma promessa que retorna json
 * @throws erro né
 */
export function qrCode(name, city, ) {
    axios.get('https://gerarqrcodepix.com.br/api/v1?nome=Agatha%20Leticia&cidade=Sao%20Paulo&saida=br&valor=100&chave=463.272.628-13')
    .then(function (response) {
        // handle success
        console.log(response);
      })
}

export function brCode(name, city, ) {
    return fetch('https://gerarqrcodepix.com.br/api/v1?nome=Cec%C3%ADlia%20Dev%C3%AAza&cidade=Ouro%20Preto&saida=qr&chave=2aa96c40-d85f-4b98-b29f-d158a1c45f7f')
        .then((response) => response.json())
        .catch((error) => console.error(error))
}