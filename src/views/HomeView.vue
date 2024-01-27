<script >
import { RouterLink, RouterView } from 'vue-router'
import rodape from '/src/components/rodape.vue';
import Header from '/src/components/Header.vue';

export default {
  name: 'Home',

  components: {
    Header,
    rodape
  }

}
</script>

<template>
  <div class="section">


    <Header></Header>    
      
    <div class="inicio">
      <p class="titulo_anuncio">Texto curto sobre o anúncio.</p>
      <p class="sub_anuncio"> Título do anúncio</p>
      <a href="">
        <img class="anuncio" src="../assets/imagens/exemplo-logo-275-8809.png" alt="">
        </a>
        <P class="obs">Mais algumas informações extras sobre o conteúdo.</P>
      </div>

      <div class="inicio">
      <p class="titulo_anuncio">Texto curto sobre o anúncio.</p>
      <p class="sub_anuncio">Título do anúncio</p>
      <a href="">
        <img class="anuncio" src="../assets/imagens/exemplo-logo-275-8809.png" alt="">
        </a>
        <P class="obs">Mais algumas informações extras sobre o conteúdo.</P>
      </div>

    <div class="main">
      <h2>NOSSA PROGRAMAÇÃO</h2>

      <div class="card">
        <img
          src="../assets/imagens/biblia.png"
          alt="" class="imagem">
        <div class="texto">
          <p class="subtitulo">Cultos</p>
        </div>
      </div>

      <div class="conteudo">
        <ul>
          <li>
            <h4>Culto de Adoração</h4>
            <p class="info">Quarta Feira às 19:30h</p>
          </li>
          <li>
            <h4>Culto de Oração</h4>
            <p class="info">Sexta feira às 20h</p>
          </li>
          <li>
            <h4>Domingo</h4>
            <p class="info">Manhã às 10h, Noite às 19h</p>
          </li>
          <li>
            <h4>Ceia do Senhor</h4>
            <p class="info">1º Domingo do mês, às 10h e 19h</p>

          </li>
          <li>
            <h4>Culto da Familia</h4>
            <p class="info">2º Domingo do mês, às 10h e 19h</p>

          </li>
        </ul>
      </div>

      <div class="card">
        <div class="texto">
          <p class="subtitulo">Estudos</p>
        </div>
        <img src="../assets/imagens/igreja.jpg" alt="" class="imagem">
      </div>

      <div class="conteudo">
        <ul>
          <li>
            <h4>EBD</h4>
            <p class="info">Domingo às 8:30h</p>
          </li>
          <li>
            <h4>Discipulado para os Jovens</h4>
            <p class="info">Domingo às 9h</p>
          </li>
          <li>
            <h4>Discipulado para os Adolescentes</h4>
            <p class="info">Domingo às 9h</p>
          </li>
          <li>
            <h4>SETEB</h4>
            <p class="info">Início em 2024</p>
          </li>
        </ul>
      </div>

    </div>

    <RouterView></RouterView>
    <rodape class="rodape"></rodape>
  </div>  
</template>

<style scoped>
@media (max-width: 720px) {
  .section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .main {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    padding: 40px 10px;
    box-shadow: 0px 0px 10px -1px;
    border-radius: 15px;
    margin-top: 20px;
    background-color: #0a428b81;
  }

  .card {
    width: 80%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .imagem {
    width: 20%;
    height: 20%;
    padding: 0px;
    object-fit: contain;
    border-radius: 10px;
    background-color: #fff;

  }

  li {
    padding: 5px 0px;
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }

  h2 {
    color: #fcfcfc;
    text-shadow: #00ffea 0px 0px 15px;
    letter-spacing: 0.3rem;
    padding: 15px;
    font-size: 0.9rem;

  }

  .subtitulo {
    color: #f3f3f3;
    font-size: 1.5rem;
    letter-spacing: 5px;
  }

  h4 {
    color: #f0f0f0;
    text-shadow: #000000 0px 0px 5px;
    font-size: 0.8rem;
  }

  .info {
    color: #cef8f5;
    font-size: 0.7rem;
  }

  .rodape {
    width: 100%;
    height: auto;
    background-color: transparent;
    box-shadow: none;
    gap: 0px; 
    border-radius: 0px;   
  }
  .inicio{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px 0px;
  }
  a{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .anuncio{
    width: 80%;
    border-radius: 10px;
    box-shadow: 0px 0px 1px 0px;
  }
  .titulo_anuncio{
    color: #ffffff;
    font-size: 1rem;
    margin-bottom: 5px;
  }
  .sub_anuncio{
    color: #ffee00;
    font-size: 1.2rem;
    margin-bottom: 10px;
    letter-spacing: 3px;
    font-weight: bold;
    text-shadow: #000000 0px 0px 10px;

  }
  .obs{
    color: #ffffff;
    font-size: 0.8rem;
    margin-top: 5px;
  }

}


@media (min-width: 721px) {

  .section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fcfcfc;
  }

}</style>