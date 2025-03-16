<script setup>
import ContainerComponent from '@/components/ContainerComponent.vue';
import { onMounted } from 'vue';
import { getAllCursos, getCursoInf } from '@/data/servicos';
import { listaCursos } from '@/data/servicos';

onMounted(()=>{
  getAllCursos()
})
//pega o indice da lista contendo alunoId e cursoId dataAquisicao
console.log(listaCursos.value[0].cursoId) //retorna 1
</script>
<template>
  <ContainerComponent -gap-comp="25px" display-type="grid">
    <div v-for="" >
      <span>{{  }}</span>
      <p>{{  }}</p>
      <button>Aprender</button>
    </div>
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
