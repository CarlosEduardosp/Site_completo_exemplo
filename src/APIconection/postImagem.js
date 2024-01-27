export async function enviarParaAPI(imagem, nome, id_pessoa) {
    try {
      const formData = new FormData();
      formData.append('imagem', imagem, imagem.name);
  
      const params = new URLSearchParams();
      params.append('nome', nome);
      params.append('id_pessoa', id_pessoa);
  
      //const url = 'https://backend-cadigreja.onrender.com/inserir_imagem?' + params.toString();
      const url = 'https://api-cadastro-exemplo.onrender.com/inserir_imagem?' + params.toString();
  
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          // 'Content-Type': 'multipart/form-data' // Não é necessário definir manualmente
        },
        body: formData
      });
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erro ao enviar imagem para a API:', error);
      throw error; // Rejeita a Promise com o erro para que possa ser tratado externamente, se necessário
    }
  }
  