<script setup>
import ContainerComponent from '@/components/ContainerComponent.vue';
import FormComponent from '@/components/FormComponent.vue';
import CardComponent from '@/components/CardComponent.vue';
import { useHead } from '@vueuse/head'

useHead({
  title: 'Fale Conosco - KR Riley Soluções',
  meta: [
    {
      name: 'description',
      content: 'Entre em contato com a KR Riley Soluções. Tire suas dúvidas sobre desenvolvimento de sites, softwares, cursos e serviços personalizados para sua necessidade.'
    },
    { name: 'keywords', content: 'contato KR Riley Soluções, fale conosco, solicitar orçamento, dúvidas sobre cursos, atendimento ao cliente, desenvolvimento de sites, suporte técnico' }
  ]
})
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
