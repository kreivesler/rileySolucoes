<script setup>
import CheckoutComponent from '@/components/CheckoutComponent.vue';
import ContainerComponent from '@/components/ContainerComponent.vue';
import CardComponent from '@/components/CardComponent.vue';
</script>
<template>
  <ContainerComponent display-type="flex" align-items="center" padding-comp="2%">
    <CheckoutComponent valuePayment="5.00" type-discount="FIXED" productName="Curso de Informática" />
    <CardComponent text-align="center" titulo-card="Curso de informática Essencial e Pacote Office"
      paragrafo-card="Faça o pagamento e receba o acesso as aulas!">
      <span>Por apenas R$55,00 Avista!</span>
      <h5>*Garantia de 7 dias</h5>
    </CardComponent>

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
