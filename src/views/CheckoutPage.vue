<script setup>
import CheckoutComponent from '@/components/CheckoutComponent.vue';
import ContainerComponent from '@/components/ContainerComponent.vue';
import CardComponent from '@/components/CardComponent.vue';
import { getCursoInf } from '@/data/servicos';
import { ref, onMounted } from "vue";

const cursoInf = ref(null);

onMounted(async () => {
  cursoInf.value = await getCursoInf();
});
</script>

<template>
  <ContainerComponent display-type="flex" align-items="center" padding-comp="2%">
    <template v-if="cursoInf">
      <CheckoutComponent :valuePayment="cursoInf.valor" type-discount="FIXED" productName="Curso de Informática" />
      <CardComponent text-align="center" titulo-card="Curso de informática Essencial e Pacote Office"
        paragrafo-card="Faça o pagamento e receba o acesso às aulas!">
        <span>Por apenas R${{ cursoInf.valor }} à vista!</span>
        <h5>*Garantia de 7 dias</h5>
      </CardComponent>
    </template>
    <p v-else>Carregando informações de pagamento...</p>
  </ContainerComponent>
</template>

<style scoped>
@media only screen and (min-width: 300px){

}
@media only screen and (min-width: 400px){

}
@media only screen and (min-width: 600px){

}
@media only screen and (min-width: 768px){

}
@media only screen and (min-width: 992px){

}
@media only screen and (min-width: 1200px){

}
</style>
