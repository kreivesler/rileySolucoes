<script setup>
import ContainerComponent from '@/components/ContainerComponent.vue';
import GridItem from '@/components/GridItem.vue';
import { ref, onMounted } from 'vue';
import { getAllCursos, getCursoInf } from '@/data/servicos';
import { listaCursos } from '@/data/servicos';

// Array para armazenar os detalhes dos cursos
const cursosDetalhados = ref([]);
const lista  = listaCursos.value.lista
// Chama a função que obtém todos os cursos ao montar o componente
onMounted(() => {
  getAllCursos();
  listagem(lista); // Chama a função de listagem com a lista de cursos
});
console.log(`Lista no painel:`)
console.log(lista)

// Função para obter os detalhes de cada curso e armazenar
async function listagem(lista) {
  // Itera sobre cada item na lista de cursos
  for (let i = 0; i < lista.length; i++) {
    const cursoId = lista[i].cursoId; // Obtém o cursoId de cada item na lista
    const cursoInfo = await getCursoInf(cursoId); // Obtém os detalhes do curso
    cursosDetalhados.value.push(cursoInfo); // Adiciona ao array
  }

  console.log('cursosDetalhados:', cursosDetalhados.value);
}

</script>

<template>
  <ContainerComponent -gap-comp="25px" display-type="grid">
    <!-- Itera sobre cursosDetalhados para exibir os cursos -->
    <GridItem v-for="curso in cursosDetalhados" :key="curso.id" class="itemC" :-titulo="curso.nome" :-paragrafo="curso.descricao" font-weight="500" font-sizep="0.7rem" font-s="1rem" >
      <button>Aprender</button>
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
