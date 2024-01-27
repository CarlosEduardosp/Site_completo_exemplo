// Importe o Axios
import axios from 'axios';

export async function Faixaetaria(valor1, valor2) {
    // URL da API fictícia
    //const apiUrl = 'https://backend-cadigreja.onrender.com/select_todos';
    const apiUrl = 'https://api-cadastro-exemplo.onrender.com/faixaetaria/' + valor1 + '/' + valor2;
    //const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  
    // Fazendo uma solicitação GET usando Axios e retornando a Promise
    return axios.get(apiUrl)
      .then(response => {
        // Manipule os dados da resposta aqui
        const data = response.data;
        console.log(data)
        return data;
      })
      .catch(error => {
        // Trate os erros de solicitação ou resposta
        throw error; // Lança o erro novamente para tratamento posterior, se necessário
      });
  
  }