<script setup>
import ContainerComponent from '@/components/ContainerComponent.vue';
import CardComponent from '@/components/CardComponent.vue';
import FormLoginComponent from '@/components/FormLoginComponent.vue';
import { useHead } from '@vueuse/head'

useHead({
  title: 'Acesso ao Portal do Aluno - KR Riley Soluções',
  meta: [
    {
      name: 'description',
      content: 'Área de login exclusiva para alunos da KR Riley Soluções. Acesse seus cursos de informática, JavaScript e conteúdos especiais com segurança.'
    },
    { name: 'keywords', content: 'acesso ao portal do aluno, login cursos KR Riley Soluções, área do aluno, acessar curso online, KR Riley Soluções login' }
  ]
})
</script>
<template>
  <!--<span id="msg"  >Pagina indisponível no momento!</span>-->
  <ContainerComponent id="container1" display-type="flex" flex-d="row">
    <CardComponent id="lUser" titulo-card="Faça login" font-sizespan="2rem" font-weightspan="800" paragrafo-card="Preencha o formulário para ter acesso ao curso adquirido." />

    <FormLoginComponent/>
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
#lUser{
  justify-content: flex-start;
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
