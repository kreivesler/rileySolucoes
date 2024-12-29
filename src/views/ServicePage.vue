<script setup>
import ContainerComponent from '@/components/ContainerComponent.vue';
import GridItem from '@/components/GridItem.vue';
import { conteudoServicos } from '@/data/texts';
import CardComponent from '@/components/CardComponent.vue';
import ImagemUnica from '@/components/ImagemUnica.vue';
import { imagenSite } from '@/data/images';
import { RouterLink } from 'vue-router';
</script>

<template>
  <ContainerComponent id="container1" display-type="grid" :bg-image="imagenSite[6]">
    <GridItem :-titulo="conteudoServicos[0].titulo" font-s="1.2rem" border-st="solid" border-wd="2px"
      border-rad="10px" />
    <GridItem :-titulo="conteudoServicos[1].titulo" font-s="1.2rem" border-st="solid" border-wd="2px"
      border-rad="10px" />
    <GridItem :-titulo="conteudoServicos[2].titulo" font-s="1.2rem" border-st="solid" border-wd="2px"
      border-rad="10px" />
    <GridItem :-titulo="conteudoServicos[3].titulo" font-s="1.2rem" border-st="solid" border-wd="2px"
      border-rad="10px" />
  </ContainerComponent>



  <ContainerComponent display-type="flex" flex-d="column">

    <CardComponent class="cardServices" :titulo-card="conteudoServicos[0].titulo" text-align="left">
      <p>{{ conteudoServicos[0].descricao }}</p>
      <ul>
        <li>{{ conteudoServicos[0].beneficios.beneficio1 }}</li>
        <li>{{ conteudoServicos[0].beneficios.beneficio2 }}</li>
        <li>{{ conteudoServicos[0].beneficios.beneficio3 }}</li>
      </ul>

      <RouterLink class="button-router" :to="{ path: '/contato', query: { titulo: 'Entrar em contato' } }">
        Entrar em contato
      </RouterLink>

    </CardComponent>

    <ImagemUnica :imgPath="imagenSite[8]"></ImagemUnica>

  </ContainerComponent>

  <ContainerComponent display-type="flex" flex-d="column">

    <ImagemUnica :imgPath="imagenSite[10]"></ImagemUnica>

    <CardComponent class="cardServices" :titulo-card="conteudoServicos[1].titulo" text-align="left">
      <p>{{ conteudoServicos[1].descricao }}</p>
      <ul>
        <li>{{ conteudoServicos[1].beneficios.beneficio1 }}</li>
        <li>{{ conteudoServicos[1].beneficios.beneficio2 }}</li>
        <li>{{ conteudoServicos[1].beneficios.beneficio3 }}</li>
      </ul>
    </CardComponent>


  </ContainerComponent>

  <ContainerComponent display-type="flex" flex-d="column">

    <CardComponent class="cardServices" :titulo-card="conteudoServicos[2].titulo" text-align="left">
      <p>{{ conteudoServicos[2].descricao }}</p>
      <ul>
        <li>{{ conteudoServicos[2].beneficios.beneficio1 }}</li>
        <li>{{ conteudoServicos[2].beneficios.beneficio2 }}</li>
        <li>{{ conteudoServicos[2].beneficios.beneficio3 }}</li>
      </ul>

      <RouterLink class="button-router" :to="{ path: '/contato', query: { titulo: 'Entrar em contato' } }">
        Entrar em contato
      </RouterLink>

    </CardComponent>

    <ImagemUnica :imgPath="imagenSite[9]"></ImagemUnica>

  </ContainerComponent>

  <ContainerComponent display-type="flex" flex-d="column">

    <ImagemUnica :imgPath="imagenSite[11]"></ImagemUnica>

    <CardComponent class="cardServices" :titulo-card="conteudoServicos[3].titulo" text-align="left">
      <p>{{ conteudoServicos[3].descricao }}</p>
      <ul>
        <li>{{ conteudoServicos[3].beneficios.beneficio1 }}</li>
        <li>{{ conteudoServicos[3].beneficios.beneficio2 }}</li>
        <li>{{ conteudoServicos[3].beneficios.beneficio3 }}</li>
      </ul>

    </CardComponent>


  </ContainerComponent>

  <ContainerComponent display-type="flex" flex-d="column" :bg-image="imagenSite[7]">



    <CardComponent class="cardServices" titulo-card="Por que contratar a KR Riley Soluções?" text-align="left">
      <ul>
        <li> <b class="fonteWeigth2">Atendimento personalizado: </b>Trabalhamos lado a lado com você para entender suas
          demandas e criar soluções que atendam às suas expectativas.</li>
        <li> <b class="fonteWeigth2">Soluções acessíveis: </b>Oferecemos serviços de alta qualidade com preços
          competitivos.</li>
        <li> <b class="fonteWeigth2">Compromisso com resultados: </b>Nosso foco é ajudar sua empresa a crescer no
          ambiente digital.</li>
      </ul>
      <p>Pronto para transformar sua presença online? Entre em contato conosco e descubra como podemos ajudar seu
        negócio a alcançar novos patamares.</p>

      <RouterLink class="button-router" :to="{ path: '/contato', query: { titulo: 'Entrar em contato' } }">
        Entrar em contato
      </RouterLink>


    </CardComponent>


  </ContainerComponent>

</template>

<style scoped>
.cardServices {
  align-items: flex-start;
}

.cardServices button {
  margin-left: 20%;
  margin-top: 5px;
}

.fonteWeigth {
  font-weight: 700;
}

.fonteWeigth2 {
  font-weight: 600;
}

@media only screen and (min-width: 300px) {}

@media only screen and (min-width: 400px) {}

@media only screen and (min-width: 600px) {}

@media only screen and (min-width: 768px) {}

@media only screen and (min-width: 992px) {}

@media only screen and (min-width: 1200px) {
  #container1 {
    padding: 10rem !important;
    grid-template-columns: repeat(4, 1fr);
  }

}
</style>
