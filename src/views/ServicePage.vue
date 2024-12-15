<script setup>
import ContainerComponent from '@/components/ContainerComponent.vue';
import GridItem from '@/components/GridItem.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
import { LoremTeste } from '@/data/texts';
import { imagenSite } from '@/data/images';
</script>

<template>
  <ContainerComponent id="container1" display-type="grid" >
    <GridItem :-imagem="imagenSite[1]" :-titulo="LoremTeste.Title"  font-s="1.5rem" />
    <GridItem :-imagem="imagenSite[4]" :-titulo="LoremTeste.Title"  font-s="1.5rem" />
    <GridItem :-imagem="imagenSite[5]" :-titulo="LoremTeste.Title"  font-s="1.5rem" />
    <GridItem :-imagem="imagenSite[2]" :-titulo="LoremTeste.Title"  font-s="1.5rem" />
    <GridItem :-imagem="imagenSite[3]" :-titulo="LoremTeste.Title"  font-s="1.5rem" />
    <GridItem :-imagem="imagenSite[0]" :-titulo="LoremTeste.Title"  font-s="1.5rem" />
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

@media only screen and (min-width: 992px) {
  #container2 button{
    position: absolute;
    margin-bottom: 150px;
  }
}

@media only screen and (min-width: 1200px) {
  #container2 button{
    position: absolute;
    margin-bottom: 150px;
  }

  #container3 {
    height: 300px !important;
  }
}
</style>
