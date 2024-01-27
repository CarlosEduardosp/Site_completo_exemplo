<template>
    <div class="section">
        <Header></Header>

            <div class="main">

                <p class="contatos">NOSSOS CONTATOS</p>
                <img src="../assets/imagens/exemplo-logo-275-8809.png" alt="" class="imagem">
                    <ul>
                        <p class="titulo">Secretaria</p>
                        <li class="secretaria">
                            <p class="sub">Email: </p>
                            <p class="atributo">Email para contato, podendo adicionar outros contatos.</p>
                        </li>
                        <p class="titulo">Mídias Sociais</p>
                        <div class="icones">
                                                    
                        <li>                            
                            <a href="" class="atributo">
                                <img src="../assets/icones/whatsapp_1384023.png" alt="" class="icone">
                            </a>
                        </li>
                        
                        <li>
                            <a href="" class="atributo">
                                <img src="../assets/icones/instagram.png" alt="" class="icone">
                            </a>
                        </li>
                                               
                        <li>
                            <a href="" class="atributo">
                                <img src="../assets/icones/facebook.png" alt="" class="icone">
                            </a>
                        </li>

                        <li>
                            <a href="" class="atributo">
                                <img src="../assets/icones/youtube.png" alt="" class="icone">
                            </a>
                        </li>                        
                        </div>
                        <p class="legenda">Siga nossa jornada por aqui.</p>
                    </ul>
                       
            </div>

            
    </div>
</template>

<script>
import rodape from '/src/components/rodape.vue';
import Header from '/src/components/Header.vue';

export default {
    name: 'Contato',
    components: {
        Header,
        rodape
    },
    data () {
        return {
            imagem: '',
        }
    },
    // No seu componente Vue
  methods: { 

    
       
  }

}
</script>

<style scoped>
@media (max-width: 720px) {
    .section {
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .main{
        background-color:  #0a428b81 ;
        width: 80%;
        height: auto;
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content:center;
        box-shadow: 0px 0px 8px 1px; 
        border-radius:10px;  
        margin-top: 20px; 
    }
    ul{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
    }
    li{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        padding: 0px 10px;        
        color: #ffffff;
    }
    .contatos{        
        font-size: 1.2rem;
        letter-spacing: 2px;
        color: #ffffff;
        font-weight: bold;
        margin: 20px 0px;
        text-shadow: #00ffea 0px 0px 15px;
    }
    .sub{
        font-size: 1.2rem;
    }
    .atributo{
        font-size: 1rem;
        text-align: center;
    }
    .titulo{
        text-align: center;
        font-size: 1.2rem;
        color: #ffffff;
        padding-top: 40px;
        padding-bottom: 20px;
    }
    a{
        list-style-type: none;
        text-decoration: none;
        font-size: 1.2rem;
        color: #000000;
        -color: #fffb00;
        border-radius: 8px;
        padding: 8px;
    }

  .icone{
    width: 35px;    
}
  .icones{
    width: 90%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #f3f3f3;
    border-radius: 10px;
    margin-bottom: 20px;
  }  
  .imagem{
    width: 80%;
    border-radius: 10px;
  }
  .secretaria{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap:5px;
  }
  .legenda{
    color:#fff;
    margin-bottom: 30px;
  }
}


@media (min-width: 721px) {

    .section {
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #fcfcfc;

    }

}
</style>"