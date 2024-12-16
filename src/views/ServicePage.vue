<script setup>
import ContainerComponent from '@/components/ContainerComponent.vue';
import GridItem from '@/components/GridItem.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
import { LoremTeste, conteudoServicos } from '@/data/texts';
</script>

<template>
  <ContainerComponent id="container1" display-type="grid" >
    <GridItem :-titulo="conteudoServicos[0].titulo" :-paragrafo="conteudoServicos[0].descricao" font-s="1.2rem" border-st="solid" border-wd="2px" border-rad="10px" />
    <GridItem :-titulo="conteudoServicos[1].titulo" :-paragrafo="conteudoServicos[1].descricao" font-s="1.2rem" border-st="solid" border-wd="2px" border-rad="10px" />
    <GridItem :-titulo="conteudoServicos[2].titulo" :-paragrafo="conteudoServicos[2].descricao" font-s="1.2rem" border-st="solid" border-wd="2px" border-rad="10px" />
    <GridItem :-titulo="conteudoServicos[3].titulo" :-paragrafo="conteudoServicos[3].descricao" font-s="1.2rem" border-st="solid" border-wd="2px" border-rad="10px" />
  </ContainerComponent>

  <ContainerComponent id="container2" display-type="flex"   >
    <ButtonComponent msg="Entrar em contato"  type-button="button" />
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
      <span>Redes Sociais:</span>
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

@media only screen and (min-width: 992px) {
  #container2 button{
    position: absolute;
    margin-bottom: 150px;
  }
}

@media only screen and (min-width: 1200px) {
  #container1{
    padding: 10rem !important;
    grid-template-columns: repeat(4, 1fr);
  }

  #container2 button{
    position: absolute;
    margin-bottom: 150px;
  }

  #container3 {
    height: 300px !important;
  }
}
</style>
