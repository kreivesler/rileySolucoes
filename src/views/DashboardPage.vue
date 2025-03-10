<script setup>
import ContainerComponent from '@/components/ContainerComponent.vue';
import GridItem from '@/components/GridItem.vue';

</script>
<template>
  <ContainerComponent -gap-comp="25px" display-type="grid">
    <GridItem class="itemC" font-sizep="0.7rem" border-rad="2px" border-st="solid"
      -titulo="Curso de Informática Essencial e Pacote Office"
      -paragrafo="Aprenda informática essencial e o Pacote Office (Word, Excel, PowerPoint e Outlook). Ideal para melhorar sua produtividade e se destacar no mercado.">
      <button>Começar</button>
    </GridItem>
    <GridItem class="itemC" font-sizep="0.7rem" border-rad="2px" border-st="solid" -titulo="Curso de JavaScript Orientado a Objetos"
      -paragrafo="Aprenda JavaScript orientado a objetos: classes, herança, encapsulamento e polimorfismo. Escreva códigos mais organizados e reutilizáveis.">
      <button>Começar</button>
    </GridItem>
    <GridItem class="itemC" font-sizep="0.7rem" border-rad="2px" border-st="solid" -titulo="Curso de Microsoft Excel"
      -paragrafo="Domine o Microsoft Excel! Aprenda desde funções básicas até fórmulas avançadas, tabelas dinâmicas e gráficos para otimizar sua produtividade.">
      <button>Começar</button>
    </GridItem>
  </ContainerComponent>

</template>
<style scoped>
.itemC button {
  padding: 10px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  font-weight: 600;
}

.itemC button:hover {
  background-color: #0056b3;
}
@media only screen and (min-width: 300px){
  .itemC button {
    width: 100%;
  }
}
@media only screen and (min-width: 400px){
  .itemC button {
    width: 100%;
  }
}
@media only screen and (min-width: 600px){
  .itemC button {
    width: calc(100% - 10%);
  }
}
@media only screen and (min-width: 768px){
  .itemC button {
    width: calc(100% - 10%);
  }
}
@media only screen and (min-width: 992px){
  .itemC button {
    width: calc(100% - 10%);
  }
}
@media only screen and (min-width: 1200px){

  .itemC button {
    width: calc(100% - 20%);
  }
}
</style>
