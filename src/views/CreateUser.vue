<script setup>
import ContainerComponent from '@/components/ContainerComponent.vue';
import CardComponent from '@/components/CardComponent.vue';
import FomCreateUserComponent from '@/components/FomCreateUserComponent.vue';
</script>
<template>
  <!--<span id="msg"  >Pagina indisponível no momento!</span>-->
  <ContainerComponent id="container1" display-type="flex" flex-d="row">
    <CardComponent titulo-card="Criar usuário" font-sizespan="2rem" font-weightspan="800" paragrafo-card="Preencha o formulário para ter acesso ao curso adquirido." />

    <FomCreateUserComponent/>
  </ContainerComponent>


</template>
<style scoped>
#msg{
  width: 100%;
  height: 500px;
  padding-top: 20%;
  text-align: center;
  color: red;
  font-size: 1.8rem;
  font-weight: 800;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.644);

}
@media only screen and (min-width:300px) {

}
@media only screen and (min-width:400px) {

}
@media only screen and (min-width:600px) {

}
@media only screen and (min-width:768px) {

}
@media only screen and (min-width:992px) {

}
@media only screen and (min-width:1200px) {
  #container1{
    height: 500px !important;
  }

}
</style>
