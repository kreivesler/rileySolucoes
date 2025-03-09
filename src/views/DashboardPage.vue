<script setup>
import ContainerComponent from '@/components/ContainerComponent.vue';
import GridItem from '@/components/GridItem.vue';

</script>
<template>
  <ContainerComponent display-type="grid">
    <GridItem font-sizep="0.8rem" -titulo="Curso de Informática Essencial e Pacote Office" -paragrafo="Aprenda informática essencial e o Pacote Office (Word, Excel, PowerPoint e Outlook). Ideal para melhorar sua produtividade e se destacar no mercado.">
      <button>Começar</button>
    </GridItem>
    <GridItem font-sizep="0.8rem" -titulo="Curso de JavaScript Orientado a Objetos" -paragrafo="Aprenda JavaScript orientado a objetos: classes, herança, encapsulamento e polimorfismo. Escreva códigos mais organizados e reutilizáveis.">
      <button>Começar</button>
    </GridItem>
    <GridItem font-sizep="0.8rem" -titulo="Curso de Microsoft Excel" -paragrafo="Domine o Microsoft Excel! Aprenda desde funções básicas até fórmulas avançadas, tabelas dinâmicas e gráficos para otimizar sua produtividade.">
      <button>Começar</button>
    </GridItem>
  </ContainerComponent>
</template>
<style scoped>
</style>
