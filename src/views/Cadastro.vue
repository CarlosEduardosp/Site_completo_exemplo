<template>
  <div class="corpo">


    <form @submit.prevent="cadastro_pessoas">

      <Header></Header>

      <div class="inicio">
        <h2 class="titulo">Bem Vindo ao Nosso Cadastro</h2>
        <p class="boasvindas">Por favor preencha todos os campos abaixo, para que possamos ter seus dados sempre atualizados conosco.</p>
      </div>

      

      <div class="dadospessoais">

        <div class="sub">
          <p class="subtitulo">Dados Pessoais:</p>
        </div>

        <label for="imagem">Adicione uma Foto Sua</label>
        <input class="input" type="file" id="imagem" accept="image/*" ref="fileInput" @change="carregarImagem" required>

        <label for="nome">Nome Completo</label>
        <input class="input" v-model="nome" type="text" id="nome" required>

        <label for="telefone">Telefone</label>
        <input class="input" v-model="telefone" type="text" id="telefone" required>

        <label for="Email">Email</label>
        <input class="input" v-model="email" type="email" id="Email" required>

        <label for="data_nascimento">Data de Nascimento</label>
        <input class="input" v-model="data_nascimento" type="date" id="data_nascimento" required>

        <div class="sexo">

          <label for="">Sexo: </label>
          <div>
            <label>
              <input class="input-sexo" v-model="sexo" type="radio" name="sexo" value="M" required> Masculino
            </label>
            <label>
              <input class="input-sexo" type="radio" v-model="sexo" name="sexo" value="F" required> Feminino
            </label>
          </div>
        </div>
      </div>


      <div class="end">

        <div class="sub">
          <p class="subtitulo">Endereço:</p>
        </div>

        <label>Estado</label>
        <input class="input" v-model="estado" type="text" id="estado" required>

        <label>Cidade</label>
        <input class="input" v-model="cidade" type="text" id="cidade" required>

        <label>Bairro</label>
        <input class="input" v-model="bairro" type="text" id="bairro" required>

        <label>Rua/Avenida/Estrada</label>
        <input class="input" v-model="logradouro" type="text" id="logradouro" required>

        <label>Numero</label>
        <input class="input" v-model="numero" type="text" id="numero" required>

        <label>Complemento</label>
        <input class="input" v-model="complemento" type="text" id="complemento" required>

      </div>
      
      <h4 class="resposta" v-show="resposta_requisicao">{{ resposta_requisicao }}</h4>

      <button type="submit" @click="enviar">CADASTRAR</button>

      
    </form>
    <rodape class="rodape"></rodape>
    
  </div>
</template>
  
<script>
import rodape from '/src/components/rodape.vue';
import Header from '/src/components/Header.vue';
import { ConectarApi } from '../APIconection/api_connection';
import { fazerRequisicaoPOST } from '../APIconection/api_connection';
import { fazerRequisicaoImagemPOST } from '../APIconection/api_connection'
import { enviarParaAPI } from '../APIconection/postImagem'

export default {
  name: 'Cadastro',

  components: {
    Header,
    rodape
  },
  data() {
    return {
      itens: [],
      nome: '',
      telefone: '',
      email: '',
      data_nascimento: '',
      sexo: '',
      estado: '',
      cidade: '',
      bairro: '',
      logradouro: '',
      numero: '',
      complemento: '',
      resposta_requisicao: '',
      imagem: '',
    }
  },
  methods: {
    cadastro_pessoas() {

      // função para formatar a data para o formato aceito na api.
      const nova_data = this.formatarData(this.data_nascimento)


      // dados do formulario para enviar para a api.
      const dadosParaEnviar = {
        'nome': this.nome,
        'data_nascimento': nova_data,
        'telefone': this.telefone,
        'email': this.email,
        'sexo': this.sexo,
        'estado': this.estado,
        'cidade': this.cidade,
        'bairro': this.bairro,
        'logradouro': this.logradouro,
        'numero': this.numero,
        'status': true,
        'complemento': this.complemento,
      };
      // chamando a função que realiza a requisição POST.
      const responsePost = this.inserir_no_banco(dadosParaEnviar)


        // realizando a leitura da promisse, com o '.then';
        .then(responsePost => {
          console.log(responsePost)
          if (responsePost.success == false) {

            // retorna alguma mensagem de erro na validação do backend.
            this.resposta_requisicao = responsePost.data;
            
          }
          else {
            // retorna uma resposta de confirmação.
            this.resposta_requisicao = responsePost.message;
            
            // chamada da função que realiza o post da imagem
            const respostaimagem = enviarParaAPI(this.imagem, this.nome, responsePost.data.id)

              .then(respostaimagem => {
                console.log('resposta imagem:', respostaimagem);
              })
              .catch(error => {
                console.error('Erro:', error);
              });



            // zerando as respostas dos formularios.
            this.nome = '',
              this.telefone = '',
              this.data_nascimento = '',
              this.email = '',
              this.sexo = '',
              this.estado = '',
              this.cidade = '',
              this.bairro = '',
              this.logradouro = '',
              this.numero = '',
              this.status = '',
              this.complemento = ''
          }
        })

    },
    async inserir_no_banco(dadosParaEnviar) {

      try {
        // formatando dados para o formato JSON.
        const dadosJson = JSON.stringify(dadosParaEnviar);

        // realizando a requisição POST com os dados enviados.
        const respostapost = await fazerRequisicaoPOST(dadosParaEnviar);

        // retornando a resposta da requisição.
        return respostapost;

      } catch (error) {
        // Trata os erros para ambas as requisições aqui
        console.error('Erro:', error);
      }
    },

    formatarData(dataString) {
      // Divida a string da data nos traços
      const partes = dataString.split('-');

      // Extraia o ano, mês e dia
      const ano = partes[0];
      const mes = partes[1];
      const dia = partes[2];

      // Retorne a data formatada
      return `${dia}${mes}${ano}`;
    },

    // Função chamada quando o usuário seleciona uma imagem
    carregarImagem(event) {
      const fileInput = event.target;
      if (fileInput.files.length > 0) {

        // Obtém a primeira imagem do array de arquivos
        const imagem = fileInput.files[0];
        this.imagem = imagem
      }
    },

  }
}

</script>
  
<style scoped>
@media (max-width: 720px) {  
  
  .corpo{
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .titulo {
    padding: 15px 0px;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .dadospessoais {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fcfcfc;
    width: 80%;
    height: 40%;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px;
    margin-bottom: 2%;
  }

  .end {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fcfcfc;
    width: 80%;
    height: 50%;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px;
  }

  .sub {
    width: 80%;
    background-color: #000000;
    padding: 8px;
    text-align: center;
    border-radius: 10px;
    margin: 10px;
  }

  .subtitulo {
    font-size: 1rem;
    color: #ffffff;
  }

  .input {
    width: 80%;
    height: 2rem;
    text-align: center;
    margin: 2px 0px 10px 0px;
    border-radius: 5px;
    border: none;
    background-color: #e4e4e4;
    outline: none;

  }

  button {
    padding: 20px;
    width: 80%;
    font-size: 1rem;
    letter-spacing: 2px;
    border-radius: 10px;
    border: none;
    background-color: #0055a5;
    color: #ffffff;
    transition: 0.5s;
    font-weight: bold;
    margin-top: 2%;
  }

  button:hover {
    font-size: 1.2rem;
    background-color: #0055a5;
    color: #ffffff;
  }

  .sexo {
    margin: 10px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    margin-bottom: 20px;
  }
  .resposta{
    padding: 2%;
    margin: 1%;
    background-color: aquamarine;
    border-radius: 10px;
    color: #0055a5;
  }
  .titulo{
    padding: 10px;
    margin: 10px;
    margin-bottom: 5px;
    border-radius: 10px;
    font-size: 1.2rem;
    color: #f3f3f3;
    text-shadow: #00ffea 0px 0px 10px;

  }
  .rodape{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
  }
  .inicio{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    margin-bottom: 20px;   
  }
  .boasvindas{
    width: 80%;
    color: #f3f3f3;
    text-align: center;
    font-size: 0.7rem;
  }
 
}

@media (min-width: 721px) {
  .corpo {
    height: 100%;
    background: linear-gradient(#34629ee8, #000e27);
    background-position: center, center;
    background-size: cover;
    background-position-y: 0px;
    background-repeat: no-repeat;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }

  .dadospessoais {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fcfcfc;
    width: 70%;
    height: 450px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px;
    margin-bottom: 30px;
  }

  .end {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fcfcfc;
    width: 70%;
    height: 450px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px;
  }

  .sub {
    width: 80%;
    background-color: rgb(198, 240, 247);
    padding: 10px;
    text-align: center;
    border-radius: 10px;
    margin: 10px;
  }

  .subtitulo {
    font-size: 20px;
    color: #000000;
  }

  .input {
    width: 80%;
    height: 30px;
    text-align: center;
    margin: 2px 0px 10px 0px;
    border-radius: 5px;
    border: none;
    background-color: #e4e4e4;
    outline: none;
  }

  button {
    padding: 10px;
    width: 70%;
    height: 50px;
    font-size: 15px;
    letter-spacing: 2px;
    border-radius: 10px;
    border: none;
    background-color: #0055a5;
    color: #ffffff;
    transition: 0.5s;
    font-weight: bold;
    margin-top: 30px;
  }

  button:hover {
    font-size: 20px;
    background-color: #0055a5;
    color: #ffffff;
  }

  .sexo {
    margin: 10px 0px;
  }

}
</style>