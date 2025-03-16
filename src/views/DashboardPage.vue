<script setup>
import { ref, onMounted } from 'vue';
import { getCursoInf } from '@/data/servicos'; // Importa a função getCursoInf
import { listaCursos } from '@/data/servicos'; // Importa a lista de cursos

// Array para armazenar os detalhes dos cursos
const cursosDetalhados = ref([]);

//listaCursos.value[0].cursoId
// Função que carrega os detalhes de todos os cursos
async function carregarCursos() {
  // Verifica se listaCursos possui dados
  if (listaCursos.value && listaCursos.value.length > 0) {
    cursosDetalhados.value = []; // Limpa o array antes de adicionar novos dados
    for (let i = 0; i < listaCursos.value.length; i++) {
      const cursoId = listaCursos.value[i].cursoId; // Obtém o cursoId de cada item na lista
      const cursoInfo = await getCursoInf(cursoId); // Obtém as informações do curso com o cursoId

      // Se a função getCursoInf retornar dados válidos, adicione ao array cursosDetalhados
      if (cursoInfo) {
        cursosDetalhados.value.push({
          ...listaCursos.value[i], // Junta as informações do curso com os dados retornados
          ...cursoInfo
        });
      }
    }
  }
}

// Carregar os cursos ao montar o componente
onMounted(() => {
  carregarCursos();
});
</script>

<template>
  <ContainerComponent -gap-comp="25px" display-type="grid">
    <!-- Itera sobre cursosDetalhados para exibir os cursos -->
    <div class="itemC" v-for="curso in cursosDetalhados" :key="curso.cursoId">
      <span>{{ curso.nome }}</span> <!-- Exibe o nome do curso -->
      <p>{{ curso.descricao }}</p> <!-- Exibe a descrição do curso -->
      <p>Valor: {{ curso.valor }}</p> <!-- Exibe o valor do curso -->
      <button>Aprender</button> <!-- Botão para iniciar o curso -->
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
