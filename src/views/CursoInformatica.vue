<script setup>
import ContainerComponent from '@/components/ContainerComponent.vue';
import CardComponent from '@/components/CardComponent.vue';
import GridItem from '@/components/GridItem.vue';
import ImagemUnica from '@/components/ImagemUnica.vue';
import { apresentacao, escritorio, planilha, estudo } from '@/data/images';
import { conteudoTexto, conteudoServicos } from '@/data/texts';
import { idProduto } from '@/data/servicos';
import { useRouter } from 'vue-router';

const router = useRouter()


const goToCheckout = ()=>{
  router.push('/checkout')
  idProduto.value = import.meta.env.VITE_PROD_C_INFORMATICA
}

</script>
<template>
  <ContainerComponent class="imagemComp1" displayType="flex" :bgImage="escritorio">
  </ContainerComponent>



  <ContainerComponent displayType="flex" height-comp="300px">
    <CardComponent borderRad="10px" :titulo-card="conteudoTexto[0].titulo" font-sizespan="2rem" font-weightspan="800"
      :paragrafo-card="conteudoTexto[0].descricao" font-sizep="1rem" font-weightp="500" text-align="center">

      <button class="button-router" @click="goToCheckout" >Comprar agora</button>
    </CardComponent>

    <ImagemUnica :imgPath="apresentacao"></ImagemUnica>
  </ContainerComponent>

  <ContainerComponent id="container2" display-type="flex">
    <CardComponent :titulo-card="conteudoTexto[1].titulo" font-sizespan="2rem" font-weightspan="800"
      :paragrafo-card="conteudoTexto[1].descricao" max-linesp="10" font-sizep="1rem" font-weightp="500"></CardComponent>
  </ContainerComponent>

  <ContainerComponent displayType="flex" height-comp="300px">

    <ImagemUnica :imgPath="planilha"></ImagemUnica>


    <CardComponent borderRad="10px" :titulo-card="conteudoTexto[2].titulo" font-sizespan="2rem" font-weightspan="800"
      :paragrafo-card="conteudoTexto[2].descricao" font-sizep="1rem" font-weightp="500" text-align="center">

      <button class="button-router" @click="goToCheckout" >Comprar agora</button>


    </CardComponent>
  </ContainerComponent>

  <ContainerComponent id="container1" display-type="grid">
    <GridItem :-titulo="conteudoServicos[0].titulo" font-s="1.2rem" border-st="solid" border-wd="2px"
      border-rad="10px" />
    <GridItem :-titulo="conteudoServicos[1].titulo" font-s="1.2rem" border-st="solid" border-wd="2px"
      border-rad="10px" />
    <GridItem :-titulo="conteudoServicos[2].titulo" font-s="1.2rem" border-st="solid" border-wd="2px"
      border-rad="10px" />
    <GridItem :-titulo="conteudoServicos[3].titulo" font-s="1.2rem" border-st="solid" border-wd="2px"
      border-rad="10px" />

  </ContainerComponent>

  <ContainerComponent :bg-image="estudo">
    <CardComponent :titulo-card="conteudoTexto[3].titulo" font-sizespan="2rem" font-weightspan="800"
      :paragrafo-card="conteudoTexto[3].descricao" font-sizep="1rem" font-weightp="500">

      <button class="button-router" @click="goToCheckout" >Comprar agora</button>

    </CardComponent>
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
    padding: 10rem !important;
    grid-template-columns: repeat(4, 1fr);
  }

  #container2 {
    height: 400px !important;
  }


}
</style>
