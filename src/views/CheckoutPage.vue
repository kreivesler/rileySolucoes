<script setup>
import CheckoutComponent from '@/components/CheckoutComponent.vue';
import ContainerComponent from '@/components/ContainerComponent.vue';
import CardComponent from '@/components/CardComponent.vue';
import { getCursoInf } from '@/data/servicos';
import { ref, onMounted } from "vue";

const cursoInf = ref(null);
const typeDiscount = import.meta.env.VITE_TYPE_DISCOUNT

onMounted(async () => {
  cursoInf.value = await getCursoInf();
});
</script>

<template>
  <ContainerComponent display-type="flex" align-items="center" padding-comp="2%">
    <template v-if="cursoInf">
      <CheckoutComponent :valuePayment="cursoInf.valor" :type-discount="typeDiscount" :productName="cursoInf.nome" />
      <CardComponent text-align="center" :titulo-card="cursoInf.nome"
        paragrafo-card="Faça o pagamento e receba o acesso às aulas!">
        <span>Por apenas R${{ cursoInf.valor }} à vista!</span>
        <h5>*Garantia de 7 dias após o pagamento</h5>
      </CardComponent>
    </template>
    <p v-else>Carregando informações de pagamento...</p>
  </ContainerComponent>
</template>

