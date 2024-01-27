<script>
import { ConectarApi } from '../APIconection/api_connection';
import { obterImagemDaAPI } from '../APIconection/getimagemid';
import { Buscar_Aniversariantes } from '../APIconection/aniversariantes';
import { Todos_os_Homens } from '../APIconection/homens';
import { Todas_as_mulheres } from '../APIconection/mulheres';
import { Faixaetaria } from '../APIconection/faixaEtaria';
import rodape from '/src/components/rodape.vue';
import Header from '/src/components/Header.vue';

export default {
    name: 'Pessoas',

    components: {
        Header,
        rodape
    },
    data() {
        return {
            dados_api: [],
            acesso: false,
            viewpessoa: false,
            login: '',
            senha: '',
            item_pessoa: '',
            imagem: '',
            msg_login: '',
            filtro: false,
            niver: false,
            msg_niver: '',
            num_pessoas: '',
            controle_faixa: false,
            controle_homens: false,
            controle_mulheres: false,
            valor1: '',
            valor2: '',
        };
    },
    methods: {
        async iniciar() {
            try {
                // Realiza a primeira requisição
                const data = await ConectarApi();

                if (data.status_code == 200) {
                    this.dados_api = data.body;
                    this.num_pessoas = data.body.length
                }
            } catch (error) {
                console.error('Erro ao iniciar:', error);
            }
        },
        async aniversariantes(id) {
            try {
                // Realiza a primeira requisição
                const data = await Buscar_Aniversariantes(id);

                if (data.status_code == 200) {
                    this.dados_api = data.body;
                    this.num_pessoas = data.body.length
                }
                else if (data.status_code == 400) {
                    this.num_pessoas = 0
                    this.dados_api = ''
                }
                else {
                    this.dados_api = ''
                }

            } catch (error) {
                console.error('Erro ao iniciar:', error);
            }
        },
        async Todos_homens() {
            try {
                // Realiza a primeira requisição
                const data = await Todos_os_Homens();

                if (data.status_code == 200) {
                    this.dados_api = data.body;
                    this.num_pessoas = data.body.length

                }
                else {
                    this.dados_api = ''
                }

            } catch (error) {
                console.error('Erro ao iniciar:', error);
            }
        },
        async Todas_mulheres() {
            try {
                // Realiza a primeira requisição
                const data = await Todas_as_mulheres();

                if (data.status_code == 200) {
                    this.dados_api = data.body;
                    this.num_pessoas = data.body.length

                }
                else {
                    this.dados_api = ''
                }

            } catch (error) {
                console.error('Erro ao iniciar:', error);
            }
        },
        async Faixa_etaria(valor1, valor2) {

            try {
                // Realiza a primeira requisição
                const data = await Faixaetaria(valor1, valor2);

                if (data.status_code == 200) {
                    this.dados_api = data.body;
                    this.num_pessoas = data.body.length

                }
                else if(data.status_code == 400){
                    this.num_pessoas = 0
                    this.dados_api = ''
                }
                else {
                    this.dados_api = ''
                }

            } catch (error) {
                console.error('Erro ao iniciar faixa etária:', error);

            }
        },
        formatarTel(variavel) {
            // Verificar se a variável tem exatamente 11 dígitos
            if (typeof variavel === 'string' && variavel.length === 11) {
                // Extrair os componentes do telefone
                const codigo = variavel.substring(0, 2);
                const telefone = variavel.substring(2);

                // Formatar o telefone
                const telFormatado = `${codigo} ${telefone}`;

                return telFormatado;
            } else {
                // Caso a variável não tenha 11 dígitos
                //console.error('A variável deve ter exatamente 11 dígitos.');
                return null;
            }
        },

        formatarData(variavel) {
            // Verificar se a variável tem exatamente 8 dígitos
            if (typeof variavel === 'string' && variavel.length === 8) {
                // Extrair os componentes da data
                const dia = variavel.substring(0, 2);
                const mes = variavel.substring(2, 4);
                const ano = variavel.substring(4);

                // Formatar a data
                const dataFormatada = `${dia}/${mes}/${ano}`;

                return dataFormatada;
            } else {
                // Caso a variável não tenha 8 dígitos
                //console.error('A variável deve ter exatamente 8 dígitos.');
                return null;
            }
        },

        abrirpessoa(item) {
            this.item_pessoa = item;
        },

        sair() {
            this.acesso = false;
            this.login = '';
            this.senha = '';
            this.msg_login = '';
            this.niver = false
            this.msg_niver = ''
            this.filtro = false
            this.controle_homens = false
            this.controle_mulheres = false
            this.controle_faixa = false
            this.valor1 = ''
            this.valor2 = ''
            this.iniciar()
        },

        efetuarLogin() {
            const usuarioEsperado = 'exemploteste';
            const senhaEsperada = '102030';

            if (this.login === usuarioEsperado && this.senha === senhaEsperada) {
                this.acesso = !this.acesso;
                this.viewpessoa = false;
                this.msg_login = '';
            } else if (this.login === usuarioEsperado && this.senha !== senhaEsperada) {
                this.msg_login = 'Senha Incorreta... Tente outra vez!';
            } else if (this.login !== usuarioEsperado && this.senha === senhaEsperada) {
                this.msg_login = 'Login Incorreto... Tente outra vez!';
            } else {
                this.msg_login = 'Não foi possível realizar o Login.';
            }
        },

        async obterImagem(id) {
            try {
                // Use a função e manipule a URL da imagem como quiser
                const url = await obterImagemDaAPI(id);
                this.imagem = url;
                // Faça o que precisar com a URL da imagem, como exibir em uma tag <img>
            } catch (error) {
                console.error('Erro ao obter imagem:', error);
            }
        },
        ativar_filtro() {
            this.filtro = !this.filtro
            if (this.filtro == false) {
                this.niver = false
                this.msg_niver = ''
                this.controle_homens = false
                this.controle_mulheres = false
                this.controle_faixa = false
                this.valor1 = ''
                this.valor2 = ''
                this.iniciar()
            }

        },
        ativar_niver() {
            this.niver = !this.niver
            if (this.niver == false) {
                this.msg_niver = ''
                this.iniciar()
            }
        },
        ativar_faixa() {
            this.controle_faixa = !this.controle_faixa
            if(this.controle_faixa == false){
                this.valor1 = ''
                this.valor2 = ''
                this.iniciar()
            }            
        },
        ativar_homens() {

            this.controle_homens = !this.controle_homens

            if (this.controle_homens == true) {
                this.Todos_homens()
            }
            else {
                this.iniciar()
            }
        },
        ativar_mulheres() {

            this.controle_mulheres = !this.controle_mulheres

            if (this.controle_mulheres == true) {
                this.Todas_mulheres()
            }
            else {
                this.iniciar()
            }
        },
        mensagem_niver(num_mes) {

            if (num_mes == 1) {
                this.msg_niver = 'Janeiro'
            }
            else if (num_mes == 2) {
                this.msg_niver = 'Fevereiro'
            }
            else if (num_mes == 3) {
                this.msg_niver = 'Março'
            }
            else if (num_mes == 4) {
                this.msg_niver = 'Abril'
            }
            else if (num_mes == 5) {
                this.msg_niver = 'Maio'
            }
            else if (num_mes == 6) {
                this.msg_niver = 'Junho'
            }
            else if (num_mes == 7) {
                this.msg_niver = 'Julho'
            }
            else if (num_mes == 8) {
                this.msg_niver = 'Agosto'
            }
            else if (num_mes == 9) {
                this.msg_niver = 'Setembro'
            }
            else if (num_mes == 10) {
                this.msg_niver = 'Outubro'
            }
            else if (num_mes == 11) {
                this.msg_niver = 'Novembro'
            }
            else if (num_mes == 12) {
                this.msg_niver = 'Dezembro'
            }



        }

    },
    mounted() {
        this.iniciar();
    },

};


</script>

<template>
    <div class="corpo">
        <div>
            <Header></Header>
        </div>
        <div class="section">

            <form @submit.prevent="efetuarLogin" v-show="acesso == false">


                <div>
                    <h2 class="titulo">Efetue o Login:</h2>
                </div>

                <h2 class="msg_erro" v-show="msg_login">{{ this.msg_login }}</h2>


                <div class="dadospessoais">
                    <div class="dados">
                        <label for="login">Login</label>
                        <input class="input" v-model="login" type="text" placeholder="Login" id="login" required>

                        <label for="nome">Senha</label>
                        <input class="input" v-model="senha" type="password" placeholder="senha" id="senha" required>
                    </div>
                </div>

                <button class="entrar" type="submit">Entrar</button>

            </form>




            <ul v-show="acesso == true && viewpessoa == false">
                <div class="titulo2">
                    <p>Pessoas Cadastradas</p>
                </div>

                <div class="subs">
                    <div class="subregistro">
                        Id
                    </div>
                    <div class="subnome">
                        Nome
                    </div>
                    <div class="subidade">
                        Idade
                    </div>
                    <div class="subtelefone">
                        Telefone
                    </div>

                </div>


                <li v-for="item in dados_api" :key="item.id"
                    @click="abrirpessoa(item), viewpessoa = true, obterImagem(item.id)">
                    <div class="card">
                        <div class="id">{{ item.id }}</div>
                        <div class="nome">{{ item.nome }}</div>
                        <div class="idade">{{ item.idade }} </div>
                        <div class="telefone">{{ item.telefone }}</div>
                    </div>
                </li>

            </ul>

            <div class="pessoa" v-show="viewpessoa == true">

                <div class="image">

                    <img class="foto" :src="imagem" alt="">
                    <p class="carregando" v-show="imagem == ''">Carregando Imagem...</p>
                </div>

                <div class="subtitulo">
                    Dados Pessoais
                </div>
                <div>
                    <div class="text">
                        <h4 class="dados_pessoa">
                            Nome:
                        </h4>
                        <p>
                            {{ item_pessoa.nome }}
                        </p>
                    </div>

                    <div class="text">
                        <h4 class="dados_pessoa">
                            Data de Nascimento:
                        </h4>
                        <p>
                            {{ formatarData(item_pessoa.data_nascimento) }}
                        </p>
                    </div>
                    <div class="text">
                        <h4 class="dados_pessoa">
                            Idade:
                        </h4>
                        <p>
                            {{ item_pessoa.idade }}
                        </p>
                        <h4 class="dados_pessoa">
                            Sexo:
                        </h4>
                        <p>
                            {{ item_pessoa.sexo }}
                        </p>
                    </div>


                    <div class="text">
                        <h4 class="dados_pessoa">
                            Email:
                        </h4>
                        <p>
                            {{ item_pessoa.email }}
                        </p>
                    </div>

                    <div class="text">
                        <h4 class="dados_pessoa">
                            Telefone:
                        </h4>
                        <p>
                            {{ formatarTel(item_pessoa.telefone) }}
                        </p>
                    </div>

                    <div class="status">
                        <h4>Status:</h4>
                        <div v-show="item_pessoa.status == true">Ativo</div>
                        <div v-show="item_pessoa.status == false">Inativo</div>
                    </div>
                </div>

                <div class="subtitulo">
                    Endereço
                </div>
                <div>
                    <div class="text">
                        <h4>Estado:</h4> {{ item_pessoa.estado }}
                    </div>
                    <div class="text">
                        <h4>Cidade:</h4> {{ item_pessoa.cidade }}
                    </div>
                    <div class="text">
                        <h4>Bairro:</h4> {{ item_pessoa.bairro }}
                    </div>
                    <div class="text">
                        <h4>Logradouro:</h4> {{ item_pessoa.logradouro }}
                    </div>
                    <div class="text">
                        <h4> Numero:</h4> {{ item_pessoa.numero }}
                    </div>
                    <div class="text">
                        <h4>Complemento:</h4> {{ item_pessoa.complemento }}
                    </div>
                </div>



            </div>
            <p class="numpessoas" v-show="acesso == true && viewpessoa == false">Total de {{ num_pessoas }} Pessoas</p>

            <button v-show="acesso == true && viewpessoa == false" class="btnfiltro" @click="ativar_filtro">Filtros</button>

            <div class="filtros" v-show="acesso == true && viewpessoa == false && filtro == true">
                <div class="grupo">

                    <div class="btn"
                        v-show="controle_faixa == false && controle_homens == false && controle_mulheres == false">
                        <p @click="ativar_niver()">Aniversariantes</p>
                    </div>

                    <div class="mesbox" v-show="niver == true">
                        <p class="titulo_mes" v-show="msg_niver">Mês de {{ msg_niver }}</p>
                        <p class="titulo_mes" v-show="!msg_niver">Escolha um Mês</p>
                        <div>
                            <button class="meses" v-show="niver"
                                @click="aniversariantes(1) && mensagem_niver(1)">01</button>
                            <button class="meses" v-show="niver"
                                @click="aniversariantes(2) && mensagem_niver(2)">02</button>
                            <button class="meses" v-show="niver"
                                @click="aniversariantes(3) && mensagem_niver(3)">03</button>
                            <button class="meses" v-show="niver"
                                @click="aniversariantes(4) && mensagem_niver(4)">04</button>
                        </div>
                        <div>
                            <button class="meses" v-show="niver"
                                @click="aniversariantes(5) && mensagem_niver(5)">05</button>
                            <button class="meses" v-show="niver"
                                @click="aniversariantes(6) && mensagem_niver(6)">06</button>
                            <button class="meses" v-show="niver"
                                @click="aniversariantes(7) && mensagem_niver(7)">07</button>
                            <button class="meses" v-show="niver"
                                @click="aniversariantes(8) && mensagem_niver(8)">08</button>
                        </div>
                        <div>
                            <button class="meses" v-show="niver"
                                @click="aniversariantes(9) && mensagem_niver(9)">09</button>
                            <button class="meses" v-show="niver"
                                @click="aniversariantes(10) && mensagem_niver(10)">10</button>
                            <button class="meses" v-show="niver"
                                @click="aniversariantes(11) && mensagem_niver(11)">11</button>
                            <button class="meses" v-show="niver"
                                @click="aniversariantes(12) && mensagem_niver(12)">12</button>
                        </div>
                    </div>

                    <div class="btn" v-show="niver == false && controle_homens == false && controle_mulheres == false"
                        @click="ativar_faixa()">
                        Faixa Etária
                    </div>

                    <div class="faixa_total" v-show="controle_faixa == true">

                        <p class="titulo_faixa" v-show="controle_faixa == true">Digite a Faixa Etária Desejada</p>

                        <div class="faixa" v-show="controle_faixa == true">

                            <div class="inputs">
                                <p class="titulo_faixa">Mínimo</p>
                                <input type="number" v-model="valor1" class="input_faixa">
                            </div>

                            <div class="inputs">
                                <p class="titulo_faixa">Máximo</p>
                                <input type="number" v-model="valor2" class="input_faixa">
                            </div>

                        </div>

                        <div class="btn_faixa" v-show="controle_faixa == true">
                            <button class="btn_faixa" @click="Faixa_etaria(valor1, valor2)">Enviar</button>
                        </div>
                    </div>


                    <div class="btn" v-show="niver == false && controle_faixa == false && controle_mulheres == false"
                        @click="ativar_homens()">
                        Homens
                    </div>
                    <div class="btn" v-show="niver == false && controle_faixa == false && controle_homens == false"
                        @click="ativar_mulheres()">
                        Mulheres
                    </div>

                </div>

            </div>

            <button class="sair" @click="sair" v-show="acesso == true && viewpessoa == false">Sair</button>
            <button class="sair" @click="acesso = true, viewpessoa = false, imagem = ''"
                v-show="viewpessoa == true">Voltar</button>



        </div>

    </div>
</template>
<style scoped>
@media (max-width: 720px) {

    .corpo {
        width: 100%;
        height: 100%;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: (#00000085);
        box-shadow: 0px 0px 10px 0px;
        border-radius: 10px;
        width: 80%;
        margin-bottom: 45%;
        margin-top: 10%;
        height: 30rem;
        padding-top: 10%;
    }

    .dadospessoais {
        width: 80%;
        height: 40%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .dados {
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 15px;
        font-size: 1.2rem;
    }

    .section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
    }

    .input {
        width: 100%;
        height: 2rem;
        text-align: center;
        margin: 2px 0px 10px 0px;
        border-radius: 5px;
        border: none;
        outline: none;
        font-size: 1rem;
        padding: 20px;
    }

    .titulo {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 30px;
        font-size: 1.5rem;
        font-weight: bold;
        color: #ffffff;
        letter-spacing: 3px;
        text-shadow: #00ffea 0px 0px 15px;
    }

    .titulo2 {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
        font-size: 1.2rem;
        font-weight: bold;
        color: #000000;
        letter-spacing: 1px;
    }

    label {
        color: #ffffff;
    }

    .entrar {
        padding: 15px;
        width: 65%;
        font-size: 1rem;
        letter-spacing: 2px;
        border-radius: 10px;
        border: none;
        background-color: #0055a5;
        color: #ffffff;
        transition: 0.5s;
        font-weight: bold;
        margin-top: 5%;
        margin-bottom: 10%;
    }

    .sair {
        padding: 15px;
        width: 80%;
        font-size: 1rem;
        letter-spacing: 2px;
        border-radius: 10px;
        border: none;
        background-color: #0055a5;
        color: #ffffff;
        transition: 0.5s;
        font-weight: bold;
        margin-top: 5%;
        margin-bottom: 30%;
    }

    ul {
        width: 80%;
        height: 65vh;
        background-color: #f3f3f3;
        border-radius: 10px;
        margin-top: 20px;
        box-shadow: 0px 0px 10px 0px;

    }

    li {
        display: flex;
        justify-content: center;
        width: 100%;
        cursor: pointer;
        transition: 0.5s;
    }

    li:hover {
        background-color: rgb(2, 247, 165);
    }

    .card {
        width: 100%;
        display: flex;
        flex-direction: row;
        padding: 10px 0px;
        align-items: center;
        justify-content: baseline;
    }

    .id {
        width: 5%;
        margin-left: 5px;
        font-size: 0.8rem;

    }

    .nome {
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: baseline;
        font-size: 0.8rem;
    }

    .idade {
        width: 8%;
        margin-right: 2%;
        margin-left: 2%;
        font-size: 0.8rem;
    }

    .telefone {
        width: 35%;
        font-size: 0.8rem;
    }

    .subs {
        display: flex;
        padding: 10px 0px;
        font-size: 1rem;
    }

    .subregistro {
        width: 10%;
        margin-left: 4px;
    }

    .subnome {
        width: 42%;
    }

    .subidade {
        width: 18%;
    }

    .subtelefone {
        width: 20%;
    }


    .pessoa {
        width: 80%;
        height: 700px;
        background-color: #b8fddb;
        padding: 10px;
        border-radius: 10px;
        box-shadow: 0px 0px 10px 0px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }


    .text {
        font-size: 0.8rem;
        padding: 5px;
        display: flex;
        flex-direction: row;
        gap: 10px;
        letter-spacing: 1px;
    }

    .status {
        font-size: 0.8rem;
        padding: 5px;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 20px;
    }

    .subtitulo {
        width: 93%;
        font-size: 1rem;
        padding: 3%;
        margin: 3%;
        letter-spacing: 5px;
        border: 2px solid #8cdabc;
        border-radius: 8px;
        color: #211355;
        text-align: center;
        font-weight: bold;
    }

    .image {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .foto {
        height: 200px;
        border-radius: 20px;
    }

    .carregando {
        background-color: #000000;
        color: #f3f3f3;
        font-size: 1.5rem;
        padding: 10px;
        text-align: center;
        border-radius: 10px;
    }

    .msg_erro {
        margin: 5px;
        padding: 10px;
        margin-bottom: 20px;
        background-color: #b8fddb;
        color: brown;
        border-radius: 10px;
        font-size: 1rem;
    }

    .btnfiltro {
        padding: 15px;
        width: 80%;
        font-size: 1rem;
        letter-spacing: 2px;
        border-radius: 10px;
        border: none;
        background-color: #0055a5;
        color: #ffffff;
        transition: 0.5s;
        font-weight: bold;
        margin-top: 5%;
    }

    .btn {
        padding: 10px;
        width: 100%;
        font-size: 0.8rem;
        border-radius: 05px;
        border: none;
        background-color: #ffffff;
        color: #000000;
        font-weight: bold;
        margin: 0% 10% 0% 10%;
        text-align: center;
    }

    .grupo {
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 10px;
        gap: 10px;
    }

    .filtros {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
    }

    .mesbox {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 2 solid #00ffea;
    }

    .meses {
        font-size: 1rem;
        padding: 8px 25px;
    }

    .titulo_mes {
        color: #ffffff;
        letter-spacing: 1.4px;
        margin-bottom: 5px;
    }

    .numpessoas {
        color: #ffffff;
        margin-top: 10px;
    }

    .faixa {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-top: 5px;
        width: 80%;
    }

    .input_faixa {
        width: 80%;
        height: 30px;
        border-radius: 10px;
        text-align: center;
        border: 1px solid #000000;
    }

    .inputs {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 5px;
    }

    .faixa_total {
        width: 90%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #fff;
        border-radius: 10px;
        padding: 10px;
        gap: 5px;
    }

    .titulo_faixa {
        font-size: 0.8rem;
        margin-top: 5px;
    }

    .btn_faixa {
        width: 100%;
        height: 40px;
        border-radius: 10px;
        border: none;
        background-color: #5289c7;
    }
}

@media (min-width: 721px) {
    .corpo {
        background: linear-gradient(#34629ee8, #000e27);
        background-position: center, center;
        background-size: cover;
        background-position-y: 0px;
        background-repeat: no-repeat;
    }

    .section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .titulo {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
        font-size: 20px;
        font-weight: bold;
    }

    ul {
        width: 90%;
        background-color: #f3f3f3;
        border-radius: 10px;
    }

    li {
        display: flex;
        justify-content: center;
        width: 100%;
        cursor: pointer;
        transition: 0.3s;
    }

    li:hover {
        background-color: aquamarine;
    }

    .card {
        width: 100%;
        display: flex;
        flex-direction: row;
        padding: 5px;
    }

    .id {
        width: 5%;
    }

    .nome {
        width: 28%;

    }

    .idade {
        width: 10%;

    }

    .telefone {
        width: 20%;

    }

    .email {}


    .subs {
        display: flex;
        padding: 10px 0px;
        font-size: 18px;
    }

    .subregistro {
        width: 5%;
        padding-left: 3px;
    }

    .subnome {
        width: 26%;
    }

    .subidade {
        width: 11%;
    }

    .subtelefone {
        width: 20%;
    }
}</style>