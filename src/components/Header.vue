<script>
export default {
  name: 'logoHeader'
}
</script>

<template>
  <header>
    <img src="../assets/imagens/exemplo-logo-275-8809.png" alt="">
  </header>

  <div class="inicio">

    <nav>

      <ul>
        <li>
          <RouterLink to="/">INÍCIO</RouterLink>
        </li>
        <li>
          <RouterLink to="/about">HISTÓRIA</RouterLink>
        </li>
        <li>
          <a href="/contato">CONTATO</a>
        </li>
        <li>
          <a href="/cadastro">CADASTRO</a>
        </li>
        <li>
          <a href="/adm">ADM</a>
        </li>
        
        <!--<li>
          <a href="/pessoas">ADM</a>
        </li>-->
      </ul>

    </nav>
  </div>
</template>


<style scoped>
.titulo {
  font-size: 1.5rem;
  padding: 10px;
}

.subtitulo {
  font-size: 1.3rem;
}

header {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000000e8;
  padding: 20px;
  width: 100%;
  margin-bottom: 10px;
  box-shadow: #f3f3f3 0px 0px 2px 1px;
}

.inicio {
  display: flex;
  flex-direction: column;
}

ul {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 4%;
  padding: 2%;
}

ul li {
  list-style-type: none;
  font-size: 0.8rem;
}

ul li a {
  text-decoration: none;
  color: #f3f3f3;
}

img {
  width: 80%;
}
</style>