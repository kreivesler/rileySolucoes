<script setup>
import CheckoutComponent from '@/components/CheckoutComponent.vue';
import ContainerComponent from '@/components/ContainerComponent.vue';
import CardComponent from '@/components/CardComponent.vue';
</script>
<template>
  <ContainerComponent display-type="flex" align-items="center" padding-comp="2%">
    <CheckoutComponent valuePayment="55" productName="Curso de Informática" />
    <CardComponent text-align="center" titulo-card="Curso de informática Essencial e Pacote Office"
      paragrafo-card="Faça o pagamento e receba o acesso as aulas!">
      <span>Por apenas R$55,00 Avista!</span>
      <h5>*Garantia de 7 dias</h5>
    </CardComponent>
  </ContainerComponent>

</template>
<style scoped></style>
