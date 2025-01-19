<script setup>
import ContainerComponent from '@/components/ContainerComponent.vue';
import FormComponent from '@/components/FormComponent.vue';
import CardComponent from '@/components/CardComponent.vue';
</script>

<template>
  <ContainerComponent id="container1" display-type="flex" flex-d="row" alignItems="flex-start" >
    <CardComponent titulo-card="Fale Conosco" font-sizespan="2rem" font-weightspan="800" paragrafo-card="Estamos prontos para ajudar você! Preencha o formulário ao lado com suas informações e detalhes do serviço desejado. Nossa equipe analisará sua solicitação e entrará em contato o mais rápido possível." >
      <p>Se preferir, você também pode nos enviar um e-mail diretamente para contato@rileysolucoes.com.br. Estamos à disposição para transformar suas ideias em realidade!</p>
    </CardComponent>
      <FormComponent />

  </ContainerComponent>


</template>

<style scoped>

@media only screen and (min-width: 300px) {}

@media only screen and (min-width: 400px) {}

@media only screen and (min-width: 600px) {}

@media only screen and (min-width: 768px) {
  #container1{
    align-items: flex-start;
  }
}

@media only screen and (min-width: 992px) {}

@media only screen and (min-width: 1200px) {

  #container1{
    align-items: flex-start;
  }

}
</style>
