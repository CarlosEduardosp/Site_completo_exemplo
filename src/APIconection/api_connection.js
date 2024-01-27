// Importe o Axios
import axios from 'axios';

export async function ConectarApi() {
  // URL da API fictícia
  //const apiUrl = 'https://backend-cadigreja.onrender.com/select_todos';
  const apiUrl = 'https://api-cadastro-exemplo.onrender.com/select_todos';
  //const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  // Fazendo uma solicitação GET usando Axios e retornando a Promise
  return axios.get(apiUrl)
    .then(response => {
      // Manipule os dados da resposta aqui
      const data = response.data;
      return data;
    })
    .catch(error => {
      // Trate os erros de solicitação ou resposta
      throw error; // Lança o erro novamente para tratamento posterior, se necessário
    });

}

export async function fazerRequisicaoPOST(dados) {
  // URL da API fictícia
  //const apiUrl = 'https://backend-cadigreja.onrender.com/inserir';
  const apiUrl = 'https://api-cadastro-exemplo.onrender.com/inserir';
  //const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  // Fazendo uma solicitação GET usando Axios e retornando a Promise
  return await axios.post(apiUrl, dados)

  // variavel resposta retorna a mensagem de validação da requisição api, se foi inserido ou não e o porque.
  .then(resposta => {
    return resposta.data;
  })
    .then(response => {
      // Manipule os dados da resposta aqui
      const data = response;     
      return data;
    })
    .catch(error => {
      // Trate os erros de solicitação ou resposta
      console.error(error);
      throw error; // Lança o erro novamente para tratamento posterior, se necessário
    });
}


export async function fazerRequisicaoImagemPOST(nome, id_pessoa, imagem) {
  // URL da API fictícia
  //const apiUrl = 'https://backend-cadigreja.onrender.com/inserir_imagem';
  const apiUrl = 'https://api-cadastro-exemplo.onrender.com/inserir_imagem';
 

  // Fazendo uma solicitação GET usando Axios e retornando a Promise
  return await axios.post(apiUrl, nome, id_pessoa, imagem)

  // variavel resposta retorna a mensagem de validação da requisição api, se foi inserido ou não e o porque.
  .then(resposta => {
    return resposta.data;
  })
    .then(response => {
      // Manipule os dados da resposta aqui
      const data = response;     
      return data;
    })
    .catch(error => {
      // Trate os erros de solicitação ou resposta
      console.error(error);
      throw error; // Lança o erro novamente para tratamento posterior, se necessário
    });
}


