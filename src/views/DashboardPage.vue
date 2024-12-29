<script setup>
import ContainerComponent from '@/components/ContainerComponent.vue';
import GridItem from '@/components/GridItem.vue';

</script>
<template>
  <ContainerComponent display-type="grid">
    <GridItem -titulo="Testando grid" -paragrafo="Testando o grid item"/>
    <GridItem -titulo="Testando grid" -paragrafo="Testando o grid item"/>
    <GridItem -titulo="Testando grid" -paragrafo="Testando o grid item"/>
  </ContainerComponent>
</template>
<style scoped>
</style>
