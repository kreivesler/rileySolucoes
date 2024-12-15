<script setup>
import ContainerComponent from '@/components/ContainerComponent.vue';
import CardComponent from '@/components/CardComponent.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
import { cardTeste } from '@/data/texts';
import { LoremTeste } from '@/data/texts';
</script>

<template>

  <ContainerComponent id="container4"  display-type="flex" lex-d="column">
    <CardComponent bgColor="transparent" :titulo-card="cardTeste.Title" font-sizespan="2rem" font-weightspan="800"
        :paragrafo-card="cardTeste.Subtitle" font-sizep="1.2rem">
      <p>{{ cardTeste.largeDesc }}</p>
      <p>{{ cardTeste.largeDesc }}</p>
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

@media only screen and (min-width: 400px) {}

@media only screen and (min-width: 600px) {}

@media only screen and (min-width: 768px) {}

@media only screen and (min-width: 992px) {}

@media only screen and (min-width: 1200px) {
  #container3 {
    height: 300px !important;
  }

  #container4 {
    height: 800px !important;
  }

  #container4 p {
    margin-bottom: 5px;
  }
}
</style>
