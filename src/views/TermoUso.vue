<script setup>
import ContainerComponent from '@/components/ContainerComponent.vue';
import CardComponent from '@/components/CardComponent.vue';
import { termoUsoCurso } from '@/data/termoUso';
</script>

<template>
  <ContainerComponent id="container-termo" display-type="flex" flex-d="column">
    <CardComponent
      class="cardTermo"
      :titulo-card="termoUsoCurso.titulo"
      bgColor="transparent"
      font-sizespan="2rem"
      font-weightspan="800"
      text-align="left"
      :paragrafo-card="termoUsoCurso.introducao"
    >
      <template v-for="(secao, index) in termoUsoCurso.secoes" :key="index">
        <span>{{ secao.titulo }}</span>
        <p>{{ secao.descricao }}</p>
      </template>
    </CardComponent>
  </ContainerComponent>
</template>
<style scoped>
.cardTermo {
  align-items: flex-start;
}

@media only screen and (min-width: 300px) {}

@media only screen and (min-width: 400px) {}

@media only screen and (min-width: 600px) {}

@media only screen and (min-width: 768px) {}

@media only screen and (min-width: 992px) {}

@media only screen and (min-width: 1200px) {

  #container-termo p {
    margin-bottom: 5px;
  }

}
</style>
