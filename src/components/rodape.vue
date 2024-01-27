<template>
    <div class="main">
        <div class="borda">
        <div class="texto">
            <p class="text">NOME DA IGREJA AQUI</p>
            
        </div>

        <div class="icones">
            <a href="">
                <img class="icone"  src="../assets/icones/facebook.png" alt="">
            </a>

            

            <a href="">
                <img class="icone"  src="../assets/icones/instagram.png" alt="">
            </a>

            

            <a href="">
                <img class="icone"  src="../assets/icones/youtube.png" alt="">
            </a>

            

                <a href="">
                    <img class="icone" src="../assets/icones/whatsapp_1384023.png" alt="">
                    </a>
                </div>

                <p class="legenda">Siga nossa jornada nas redes.</p>

        <div class="local">
            <p class="text"></p>
            <div class="caixamapa">
            <a href="" target="blank">
                <img class="mapa" src="../assets/imagens/maps.google.com_logo-1536x864.png" alt="">
            </a></div>
        </div>
        <p class="legenda">Conheça Nossa Localização</p>
        
    </div>
    </div>
</template>

<script>
export default {
    name: 'Rodape'
}
</script>

<style scoped>
.main{
    margin-bottom: 30px;
}
.texto {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px ;
}

.local {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap: 10px;
    margin-top: 20px;
}

.mapa {
    width: 225px;
    height: 60px;
    padding: 10px;
    object-fit:cover;
    border-radius: 10px;
}
.icone{
    width: 40px;
}

.text {
    font-size: 0.8rem;
    letter-spacing: 1px;
    color: #000000;
}
.icones{
    width: 80%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px;
    border-radius: 10px;
    padding: 10px;
}
.legenda{
    color:#000000;
    margin-top: 5px;
    font-size: 0.8rem;
    text-align: center;
}

.borda{
    width: 80%;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    padding: 20px 0px;
}
</style>