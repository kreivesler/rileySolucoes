<script setup>
import ContainerComponent from '@/components/ContainerComponent.vue';
import CardComponent from '@/components/CardComponent.vue';
import GridItem from '@/components/GridItem.vue';
import ImagemUnica from '@/components/ImagemUnica.vue';
import { escritorio, planilha, estudo } from '@/data/images';
import { conteudo } from '@/data/pagCursoInformatica';
import { idProduto } from '@/data/servicos';
import { useRouter } from 'vue-router';
import VideoComponent from '@/components/VideoComponent.vue';
const router = useRouter()

const conteudoVideo = import.meta.env.VITE_VIDEO_C_INFORMATICA

const goToCheckout = ()=>{
  router.push('/checkout')
  idProduto.value = import.meta.env.VITE_PROD_C_INFORMATICA
}

</script>
<template>
  <ContainerComponent  displayType="flex"  >
    <VideoComponent id="video" :cont-video="false" :auto-play="true" :muted-video="true" :video-path="conteudoVideo" />
  </ContainerComponent>



  <ContainerComponent displayType="flex" height-comp="300px">
    <CardComponent borderRad="10px" :titulo-card="conteudo[0].titulo" font-sizespan="2rem" font-weightspan="800" :subtitulo="conteudo[0].subtitulo" font-sizesub="1.5rem"
      :paragrafo-card="conteudo[0].descricao" font-sizep="1rem" font-weightp="500" text-align="center">

      <button class="button-router" @click="goToCheckout" >Comprar agora</button>
    </CardComponent>

    <ImagemUnica :imgPath="escritorio"></ImagemUnica>
  </ContainerComponent>

  <ContainerComponent id="container2" display-type="flex">
    <CardComponent :titulo-card="conteudo[1].titulo" font-sizespan="2rem" font-weightspan="800"
      :paragrafo-card="conteudo[1].descricao" max-linesp="10" font-sizep="1rem" font-weightp="500"></CardComponent>
  </ContainerComponent>

  <ContainerComponent displayType="flex" height-comp="300px">

    <ImagemUnica :imgPath="planilha"></ImagemUnica>


    <CardComponent borderRad="10px" :titulo-card="conteudo[2].titulo" font-sizespan="2rem" font-weightspan="800"
      :paragrafo-card="conteudo[2].descricao" font-sizep="1rem" font-weightp="500" text-align="center">

      <button class="button-router" @click="goToCheckout" >Comprar agora</button>


    </CardComponent>
  </ContainerComponent>

  <ContainerComponent id="container1" display-type="grid">
    <GridItem :-titulo="conteudo[6].titulo" :-paragrafo="conteudo[6].descricao" font-s="1.2rem" border-st="none" border-wd="2px"
      border-rad="10px" />
    <GridItem :-titulo="conteudo[7].titulo" :-paragrafo="conteudo[7].descricao" font-s="1.2rem" border-st="none" border-wd="2px"
      border-rad="10px" />
    <GridItem :-titulo="conteudo[8].titulo" :-paragrafo="conteudo[8].descricao" font-s="1.2rem" border-st="none" border-wd="2px"
      border-rad="10px" />
    <GridItem :-titulo="conteudo[9].titulo" :-paragrafo="conteudo[9].descricao" font-s="1.2rem" border-st="none" border-wd="2px"
      border-rad="10px" />

  </ContainerComponent>

  <ContainerComponent >
    <CardComponent :titulo-card="conteudo[3].titulo" font-sizespan="2rem" font-weightspan="800"
      :paragrafo-card="conteudo[3].descricao" font-sizep="1rem" font-weightp="500">

      <button class="button-router" @click="goToCheckout" >Comprar agora</button>

    </CardComponent>
  </ContainerComponent>

  <ContainerComponent class="imagemComp1" displayType="flex" :bgImage="estudo">
  </ContainerComponent>

  <ContainerComponent id="container2" display-type="flex">
    <CardComponent :titulo-card="conteudo[4].titulo" font-sizespan="2rem" font-weightspan="800"
      :paragrafo-card="conteudo[4].descricao" max-linesp="10" font-sizep="1rem" font-weightp="500"></CardComponent>
      <button class="button-router" @click="goToCheckout" >Comprar agora</button>
  </ContainerComponent>

</template>
<style scoped>
@media only screen and (min-width: 300px) {
  .imagemComp1 {
    height: 200px !important;
  }

}

@media only screen and (min-width: 400px) {
  .imagemComp1 {
    height: 200px !important;
  }



}

@media only screen and (min-width: 600px) {
  .imagemComp1 {
    height: 200px !important;
  }



}

@media only screen and (min-width: 768px) {
  .imagemComp1 {
    height: 300px !important;
  }



}

@media only screen and (min-width: 992px) {
  .imagemComp1 {
    height: 300px !important;
  }


}

@media only screen and (min-width: 1200px) {
  .imagemComp1 {
    height: 300px !important;
  }

  #container1 {
    padding: 5rem !important;
    grid-template-columns: repeat(4, 1fr);
  }

  #container2 {
    height: 400px !important;
  }
  #video{
    width: 100%;
    height: 450px;
  }

}
</style>
