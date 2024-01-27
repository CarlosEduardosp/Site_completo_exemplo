// Importe o Axios
import axios from 'axios';

export async function Buscar_Aniversariantes(id) {
    // URL da API fictícia
    const apiUrl = 'https://api-cadastro-exemplo.onrender.com/aniversariantes/' + id;
  
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