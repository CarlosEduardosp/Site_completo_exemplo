export function obterImagemDaAPI(id) {
    // Substitua a URL abaixo pela URL real da sua API
    //const urlDaAPI = 'https://backend-cadigreja.onrender.com/select_imagem_id?id_pessoa=' + id;
    const urlDaAPI = 'https://api-cadastro-exemplo.onrender.com/select_imagem_id?id_pessoa=' + id;

    return fetch(urlDaAPI)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao obter a imagem da API');
            }
            
            return response.blob();
        })
        .then(blob => {
            // Crie uma URL temporária para a imagem
            const urlDaImagem = URL.createObjectURL(blob);

            // Retorna a URL da imagem
            return urlDaImagem;
        })
        .catch(error => {
            console.error('Erro:', error);
            // Você pode lançar o erro novamente se quiser que quem chama a função trate
            throw error;
        });
}
