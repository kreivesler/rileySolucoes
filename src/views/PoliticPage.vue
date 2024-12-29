<script setup>
import ContainerComponent from '@/components/ContainerComponent.vue';
import CardComponent from '@/components/CardComponent.vue';
import { politicaPrivacidade } from '@/data/politica';
</script>

<template>
  <ContainerComponent id="container1" display-type="flex" flex-d="column">
    <CardComponent class="cardPolitic" :titulo-card="politicaPrivacidade.titulo" bgColor="transparent"
      font-sizespan="2rem" font-weightspan="800" text-align="left" :paragrafo-card="politicaPrivacidade.introducao">
      <span>{{ politicaPrivacidade.secoes[0].titulo }}</span>
      <p>{{ politicaPrivacidade.secoes[0].descricao }}</p>
      <ul>
        <li>{{ politicaPrivacidade.secoes[0].itens[0] }}</li>
        <li>{{ politicaPrivacidade.secoes[0].itens[1] }}</li>
        <li>{{ politicaPrivacidade.secoes[0].itens[2] }}</li>
        <li>{{ politicaPrivacidade.secoes[0].itens[3] }}</li>
      </ul>
      <p>Esses dados são coletados para:</p>
      <ul>
        <li>{{ politicaPrivacidade.secoes[0].finalidade[0] }}</li>
        <li>{{ politicaPrivacidade.secoes[0].finalidade[1] }}</li>
      </ul>
      <p>{{ politicaPrivacidade.secoes[0].nota }}</p>

      <span>{{ politicaPrivacidade.secoes[1].titulo }}</span>
      <p>{{ politicaPrivacidade.secoes[1].descricao }}</p>
      <ul>
        <li>{{ politicaPrivacidade.secoes[1].itens[0] }}</li>
        <li>{{ politicaPrivacidade.secoes[1].itens[1] }}</li>
        <li>{{ politicaPrivacidade.secoes[1].itens[2] }}</li>
      </ul>

      <span>{{ politicaPrivacidade.secoes[2].titulo }}</span>
      <p>{{ politicaPrivacidade.secoes[2].descricao }}</p>
      <ul>
        <li>{{ politicaPrivacidade.secoes[2].itens[0] }}</li>
        <li>{{ politicaPrivacidade.secoes[2].itens[1] }}</li>
      </ul>

      <span>{{ politicaPrivacidade.secoes[3].titulo }}</span>
      <p>{{ politicaPrivacidade.secoes[3].descricao }}</p>

      <span>{{ politicaPrivacidade.secoes[4].titulo }}</span>
      <p>{{ politicaPrivacidade.secoes[4].descricao }}</p>
      <ul>
        <li>{{ politicaPrivacidade.secoes[4].itens[0] }}</li>
        <li>{{ politicaPrivacidade.secoes[4].itens[1] }}</li>
        <li>{{ politicaPrivacidade.secoes[4].itens[2] }}</li>
        <li>{{ politicaPrivacidade.secoes[4].itens[3] }}</li>
      </ul>
      <p>{{ politicaPrivacidade.secoes[4].contato }}</p>

      <span>{{ politicaPrivacidade.secoes[5].titulo }}</span>
      <p>{{ politicaPrivacidade.secoes[5].descricao }}</p>

      <span>{{ politicaPrivacidade.secoes[6].titulo }}</span>
      <p>{{ politicaPrivacidade.secoes[6].descricao }}</p>

      <span>{{ politicaPrivacidade.secoes[7].titulo }}</span>
      <p>{{ politicaPrivacidade.secoes[7].descricao }}</p>
      <p>Última atualização:{{ politicaPrivacidade.secoes[7].ultimaAtualizacao }}</p>

      <span>{{ politicaPrivacidade.secoes[8].titulo }}</span>
      <p>{{ politicaPrivacidade.secoes[8].descricao }}</p>
      <ul>
        <li>{{ politicaPrivacidade.secoes[8].itens[0] }}</li>
        <li>{{ politicaPrivacidade.secoes[8].itens[1] }}</li>
      </ul>
    </CardComponent>
  </ContainerComponent>



</template>

<style scoped>
.cardPolitic {
  align-items: flex-start;
}

@media only screen and (min-width: 300px) {}

@media only screen and (min-width: 400px) {}

@media only screen and (min-width: 600px) {}

@media only screen and (min-width: 768px) {}

@media only screen and (min-width: 992px) {}

@media only screen and (min-width: 1200px) {

  #container1 p {
    margin-bottom: 5px;
  }

}
</style>
