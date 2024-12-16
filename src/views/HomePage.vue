<script setup>
import ContainerComponent from '@/components/ContainerComponent.vue';
import CardComponent from '@/components/CardComponent.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
import GridItem from '@/components/GridItem.vue';
import ImagemUnica from '@/components/ImagemUnica.vue';
import { imagenSite } from '@/data/images';
import { LoremTeste, conteudoTexto, conteudoServicos } from '@/data/texts';
</script>

<template>
    <ContainerComponent class="imagemComp1" displayType="flex" :bgImage="imagenSite[6]">
    </ContainerComponent>



  <ContainerComponent displayType="flex" height-comp="300px" >
    <CardComponent borderRad="10px" :titulo-card="conteudoTexto[0].titulo"  font-sizespan="2rem"
      font-weightspan="800" :paragrafo-card="conteudoTexto[0].descricao"  font-sizep="1rem"
      font-weightp="500" text-align="center">

      <ButtonComponent msg="Entrar em contato" typeButton="button"
        path="https://rileysolucoes.com.br" />

    </CardComponent>

    <ImagemUnica :imgPath="imagenSite[8]"></ImagemUnica>
  </ContainerComponent>

  <ContainerComponent id="container2" display-type="flex" >
    <CardComponent :titulo-card="conteudoTexto[1].titulo"  font-sizespan="2rem" font-weightspan="800"
      :paragrafo-card="conteudoTexto[1].descricao" max-linesp="10"  font-sizep="1rem"
      font-weightp="500"></CardComponent>
  </ContainerComponent>

  <ContainerComponent displayType="flex" height-comp="300px" >

    <ImagemUnica :imgPath="imagenSite[9]"></ImagemUnica>


    <CardComponent borderRad="10px" :titulo-card="conteudoTexto[2].titulo"  font-sizespan="2rem"
      font-weightspan="800" :paragrafo-card="conteudoTexto[2].descricao"  font-sizep="1rem"
      font-weightp="500" text-align="center">

      <ButtonComponent msg="Entrar em contato" typeButton="button"
        path="https://rileysolucoes.com.br" />

    </CardComponent>
  </ContainerComponent>

  <ContainerComponent id="container1" display-type="grid" >
    <GridItem :-titulo="conteudoServicos[0].titulo" :-paragrafo="conteudoServicos[0].descricao" font-s="1.2rem" border-st="solid" border-wd="2px" border-rad="10px" />
    <GridItem :-titulo="conteudoServicos[1].titulo" :-paragrafo="conteudoServicos[1].descricao" font-s="1.2rem" border-st="solid" border-wd="2px" border-rad="10px" />
    <GridItem :-titulo="conteudoServicos[2].titulo" :-paragrafo="conteudoServicos[2].descricao" font-s="1.2rem" border-st="solid" border-wd="2px" border-rad="10px" />
    <GridItem :-titulo="conteudoServicos[3].titulo" :-paragrafo="conteudoServicos[3].descricao" font-s="1.2rem" border-st="solid" border-wd="2px" border-rad="10px" />

  </ContainerComponent>

  <ContainerComponent :bg-image="imagenSite[7]">
    <CardComponent :titulo-card="conteudoTexto[3].titulo" font-sizespan="2rem" font-weightspan="800" :paragrafo-card="conteudoTexto[3].descricao" font-sizep="1rem" font-weightp="500">

      <ButtonComponent msg="Entrar em contato" typeButton="button"
      path="https://rileysolucoes.com.br" />
    </CardComponent>
  </ContainerComponent>

  <ContainerComponent id="container3" display-type="flex" bg-color="black" flex-d="row">
    <div class="cardFooter">
      <span>{{ LoremTeste.Title }}</span>
      <nav>
        <a href="http://">{{ LoremTeste.Subtitle }}</a>
        <a href="http://">{{ LoremTeste.Subtitle }}</a>
        <a href="http://">{{ LoremTeste.Subtitle }}</a>
      </nav>
    </div>

    <div class="cardFooter">
      <span>{{ LoremTeste.Title }}</span>
      <nav>
        <a href="http://">{{ LoremTeste.Subtitle }}</a>
        <a href="http://">{{ LoremTeste.Subtitle }}</a>
        <a href="http://">{{ LoremTeste.Subtitle }}</a>
        <a href="http://">{{ LoremTeste.Subtitle }}</a>
      </nav>
    </div>

    <div class="cardFooter">
      <span>{{ LoremTeste.Title }}</span>
      <nav>
        <a href="http://">{{ LoremTeste.Subtitle }}</a>
        <a href="http://">{{ LoremTeste.Subtitle }}</a>
        <a href="http://">{{ LoremTeste.Subtitle }}</a>
        <a href="http://">{{ LoremTeste.Subtitle }}</a>
        <a href="http://">{{ LoremTeste.Subtitle }}</a>
        <a href="http://">{{ LoremTeste.Subtitle }}</a>
      </nav>
    </div>

    <div class="cardFooter">
      <span>{{ LoremTeste.Title }}</span>
      <ButtonComponent type-button="button" msg="Facebook" bg-color="transparent" text-color="white" />
      <ButtonComponent type-button="button" msg="Instagram" bg-color="transparent" text-color="white" />
      <ButtonComponent type-button="button" msg="Twitter" bg-color="transparent" text-color="white" />
    </div>


  </ContainerComponent>
</template>

<style scoped>
@media only screen and (min-width: 300px) {
  .imagemComp1 {
    height: 200px !important;
  }

  .cardFooter {
    display: flex;
    flex-direction: column;
    height: 80%;
  }

  .cardFooter span {
    font-size: 1.2rem;
  }

  .cardFooter nav {
    display: flex;
    flex-direction: column;
    padding-bottom: 2px;
  }

  .cardFooter a {
    text-decoration: none;
    color: white;
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

  #container1{
    padding: 10rem !important;
    grid-template-columns: repeat(4, 1fr);
  }

  #container2 {
    height: 400px !important;
  }

  #container3 {
    height: 300px !important;
  }
}
</style>
