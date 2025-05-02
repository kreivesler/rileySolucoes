<script setup>
import ContainerComponent from '@/components/ContainerComponent.vue';
import CardComponent from '@/components/CardComponent.vue';
import GridItem from '@/components/GridItem.vue';
import DetailsComponent from '@/components/DetailsComponent.vue'
import ImagemUnica from '@/components/ImagemUnica.vue';
import { planilha, estudo, estudante } from '@/data/images';
import { conteudo } from '@/data/pagCursoInformatica';
import { idProduto, liberaCheckout } from '@/data/servicos';
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue'
import VideoComponent from '@/components/VideoComponent.vue';
import { useHead } from '@vueuse/head'
const router = useRouter()

useHead({
  title: 'Curso de Informática Essencial + Pacote Office 2025',
  meta: [
    {
      name: 'description',
      content: 'Aprenda informática do zero com nosso curso completo de Pacote Office, Internet, Windows, Outlook e mais. Curso para iniciantes e profissionais.'
    },
    { name: 'keywords', content: 'curso de informática, curso pacote office, excel, word, powerpoint, outlook, informática básica, curso online de informática, aprender informática, KR Riley Soluções' },

    // Open Graph
    { property: 'og:title', content: 'Curso de Informática Essencial + Pacote Office 2025' },
    { property: 'og:description', content: 'Aprenda informática do zero com nosso curso completo de Pacote Office, Internet, Windows, Outlook e mais. Curso para iniciantes e profissionais.' },
    { property: 'og:image', content: 'https://rileysolucoes.com.br/curso1.png' },
    { property: 'og:url', content: 'https://rileysolucoes.com.br/curso-de-informatica' },
    { property: 'og:type', content: 'website' },

    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Curso de Informática Essencial + Pacote Office 2025' },
    { name: 'twitter:description', content: 'Aprenda informática do zero com nosso curso completo de Pacote Office, Internet, Windows, Outlook e mais. Curso para iniciantes e profissionais.' },
    { name: 'twitter:image', content: 'https://rileysolucoes.com.br/curso1.png' }
  ]
});


const conteudoVideo = ref(null)

onMounted(()=>{
  conteudoVideo.value = import.meta.env.VITE_VIDEO_C_INFORMATICA
})

const goToCheckout = () => {
  liberaCheckout.checkoutLiberado = true
  router.push('/checkout')
  idProduto.value = import.meta.env.VITE_PROD_C_INFORMATICA
}

</script>
<template>
  <div class="titleH1">
    <h1>Curso de Informatica Essencial e Pacote Office</h1>
  </div>
  <ContainerComponent displayType="flex">
    <VideoComponent id="video" :cont-video="false" :auto-play="true" :muted-video="true" :video-path="conteudoVideo" />
  </ContainerComponent>



  <ContainerComponent displayType="flex" height-comp="300px">
    <CardComponent borderRad="10px" :titulo-card="conteudo[0].titulo" font-sizespan="2rem" font-weightspan="800"
      :subtitulo="conteudo[0].subtitulo" font-sizesub="1.5rem" :paragrafo-card="conteudo[0].descricao" font-sizep="1rem"
      font-weightp="500" text-align="center">

      <button class="button-router" @click="goToCheckout">Comprar agora</button>
    </CardComponent>

    <ImagemUnica imgAlt="Uma estudante de informática segura seu laptop" :imgPath="estudante"></ImagemUnica>
  </ContainerComponent>

  <ContainerComponent id="container2" display-type="flex">
    <CardComponent :titulo-card="conteudo[1].titulo" font-sizespan="2rem" font-weightspan="800"
      :paragrafo-card="conteudo[1].descricao" max-linesp="10" font-sizep="1rem" font-weightp="500"></CardComponent>
  </ContainerComponent>

  <ContainerComponent displayType="flex" height-comp="300px">

    <ImagemUnica imgAlt="Profissional visualizando planilha de excel em seu computador" :imgPath="planilha"></ImagemUnica>


    <CardComponent borderRad="10px" :titulo-card="conteudo[2].titulo" font-sizespan="2rem" font-weightspan="800"
      :paragrafo-card="conteudo[2].descricao" font-sizep="1rem" font-weightp="500" text-align="center">

      <button class="button-router" @click="goToCheckout">Comprar agora</button>


    </CardComponent>
  </ContainerComponent>

  <ContainerComponent id="container1" display-type="grid">
    <GridItem :-titulo="conteudo[6].titulo" :-paragrafo="conteudo[6].descricao" font-s="1.2rem" border-st="none"
      border-wd="2px" border-rad="10px" />
    <GridItem :-titulo="conteudo[7].titulo" :-paragrafo="conteudo[7].descricao" font-s="1.2rem" border-st="none"
      border-wd="2px" border-rad="10px" />
    <GridItem :-titulo="conteudo[8].titulo" :-paragrafo="conteudo[8].descricao" font-s="1.2rem" border-st="none"
      border-wd="2px" border-rad="10px" />
    <GridItem :-titulo="conteudo[9].titulo" :-paragrafo="conteudo[9].descricao" font-s="1.2rem" border-st="none"
      border-wd="2px" border-rad="10px" />

  </ContainerComponent>

  <ContainerComponent>
    <CardComponent :titulo-card="conteudo[3].titulo" font-sizespan="2rem" font-weightspan="800"
      :paragrafo-card="conteudo[3].descricao" font-sizep="1rem" font-weightp="500">

      <button class="button-router" @click="goToCheckout">Comprar agora</button>

    </CardComponent>
  </ContainerComponent>

  <ContainerComponent class="imagemComp1" displayType="flex" :bgImage="estudo">
  </ContainerComponent>


  <ContainerComponent paddingComp="10px" display-type="flex" flexD="column" >
    <DetailsComponent/>
  </ContainerComponent>


  <ContainerComponent id="container2" display-type="flex">
    <CardComponent :titulo-card="conteudo[4].titulo" font-sizespan="2rem" font-weightspan="800"
      :paragrafo-card="conteudo[4].descricao" max-linesp="10" font-sizep="1rem" font-weightp="500"></CardComponent>
    <button class="button-router" @click="goToCheckout">Comprar agora</button>
  </ContainerComponent>

</template>
<style scoped>
.titleH1{
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 10px;
}
.titleH1 h1 {
  font-weight: 800;
}
@media only screen and (min-width: 300px) {
  .imagemComp1 {
    height: 200px !important;
  }

  .titleH1{
    width: 100%;
  }
  .titleH1 h1 {
    font-size: 0.8rem;
  }
}

@media only screen and (min-width: 400px) {
  .imagemComp1 {
    height: 200px !important;
  }

  .titleH1{
    width: 100%;
  }
  .titleH1 h1 {
    font-size: 0.9rem;
  }


}

@media only screen and (min-width: 600px) {
  .imagemComp1 {
    height: 200px !important;
  }

  .titleH1{
    width: 100%;
  }
  .titleH1 h1 {
    font-size: 1rem;
  }


}

@media only screen and (min-width: 768px) {
  .imagemComp1 {
    height: 300px !important;
  }

  .titleH1{
    width: 100%;
  }
  .titleH1 h1 {
    font-size: 1.2rem;
  }


}

@media only screen and (min-width: 992px) {
  .imagemComp1 {
    height: 300px !important;
  }

  .titleH1{
    width: 100%;
  }
  .titleH1 h1 {
    font-size: 1.5rem;
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

  #video {
    width: 100%;
    height: 450px;
  }

  .titleH1{
    width: 100%;
  }
  .titleH1 h1 {
    font-size: 2rem;
  }

}
</style>
