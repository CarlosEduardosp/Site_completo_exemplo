<template>
  <div class="section">
    <Header></Header>
    <div class="main">

      <div class="sobre">

        <h2>Nome da Igreja</h2>

        <p class="texto">
          Aqui apresentamos um resumo detalhado da história da igreja, abrangendo desde seus primórdios até os dias
          atuais, destacando momentos significativos, eventos importantes e figuras chave que moldaram sua trajetória.
          Além disso, oferecemos insights sobre sua missão, valores e impacto na comunidade local e global. Nosso conteúdo
          é enriquecido com uma variedade de recursos visuais, incluindo fotos históricas, vídeos inspiradores e textos
          informativos, proporcionando aos visitantes uma experiência completa e envolvente ao explorar a história e o
          legado da igreja.


        </p>
        <p class="frase">“Frase de finalização”</p>
        <p class="assinatura">Nome do Pr, ou outras informações finais.</p>

      </div>
      <rodape></rodape>
    </div>



  </div>
</template>

<script>

import rodape from '/src/components/rodape.vue';
import Header from '/src/components/Header.vue';


export default {
  name: 'Sobre',

  components: {
    Header,
    rodape
  }

}
</script>

<style scoped>
@media (max-width: 720px) {
  .section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

  }

  .main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
  }

  .rodape {
    width: 80%;
    height: auto;
  }

  .sobre {
    width: 80%;
    height: 560px;
    background-color: #0a428b81;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .texto {
    padding: 1.5rem;
    letter-spacing: 1px;
    text-align: justify;
    line-height: 1.3rem;
    color: #e0e0e0;
    font-size: 0.7rem;
  }

  .frase {
    padding: 0rem 1.5rem;
    letter-spacing: 1px;
    text-align: center;
    line-height: 1.3rem;
    font-size: 0.8rem;
    color: #fff;
  }

  .assinatura {
    padding: 1.2rem 1.5rem;
    letter-spacing: 1px;
    text-align: left;
    line-height: 1.3rem;
    font-size: 1.2rem;
    color: #fff;
    text-align: center;
  }

  h2 {
    text-align: center;
    letter-spacing: 1px;
    color: #ffffff;
    font-size: 1.6rem;
    text-shadow: #00ffea 0px 0px 15px;

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
    background: linear-gradient(#34629ee8, #000e27);
    background-position: center, center;
    background-size: cover;
    background-position-y: 0px;
    background-repeat: no-repeat;
  }

}</style>