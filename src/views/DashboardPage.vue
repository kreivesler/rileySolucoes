<script setup>
import ContainerComponent from '@/components/ContainerComponent.vue';
import GridItem from '@/components/GridItem.vue';
import { ref, onMounted } from 'vue';
import { getAllCursos, getCursoInf } from '@/data/servicos';
import { listaCursos, idCurso, getAllModulosForCursoId, listaDeModulos, modulos } from '@/data/servicos';
import { useRouter } from 'vue-router';


const router = useRouter();

// Array para armazenar os detalhes dos cursos
const cursosDetalhados = ref([]);
const cursos = ref(null); // Inicializa como um array vazio

onMounted(async () => {
  await getAllCursos(); // Aguarda os cursos serem carregados
  cursos.value = listaCursos.value || []; // Atualiza cursos com a lista carregada

  console.log('Lista no painel:', cursos.value.lista);
  listagem(cursos.value.lista);
});

// Função para obter os detalhes de cada curso e armazenar
async function listagem(lista) {
  if (!lista || lista.length === 0) {
    console.warn('Lista de cursos vazia ou indefinida!');
    return;
  }

  for (let i = 0; i < lista.length; i++) {
    const cursoId = lista[i]?.cursoId;
    if (!cursoId) continue;

    try {
      const cursoInfo = await getCursoInf(cursoId);
      cursosDetalhados.value.push(cursoInfo);
    } catch (error) {
      console.error(`Erro ao buscar detalhes do curso ${cursoId}:`, error);
    }
  }

  console.log('cursosDetalhados:', cursosDetalhados.value);
}

const goToPageMember =async (cursoId) => {
 idCurso.value = cursoId
 await getAllModulosForCursoId(idCurso.value)
 listaDeModulos.value = modulos.value.lista || []
  router.push('/learning');
};
</script>

<template>
  <ContainerComponent -gap-comp="25px" display-type="grid">
    <GridItem v-for="curso in cursosDetalhados" :key="curso.id" class="itemC"
      :-titulo="curso.nome"
      :-paragrafo="curso.descricao"
      font-weight="500"
      font-sizep="0.7rem"
      font-s="1rem">
      <button @click="goToPageMember(curso.id)">Aprender</button>
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

@media only screen and (min-width: 300px) {
  .itemC button {
    width: 100%;
  }
}

@media only screen and (min-width: 400px) {
  .itemC button {
    width: 100%;
  }
}

@media only screen and (min-width: 600px) {
  .itemC button {
    width: calc(100% - 10%);
  }
}

@media only screen and (min-width: 768px) {
  .itemC button {
    width: calc(100% - 10%);
  }
}

@media only screen and (min-width: 992px) {
  .itemC button {
    width: calc(100% - 10%);
  }
}

@media only screen and (min-width: 1200px) {

  .itemC button {
    width: calc(100% - 20%);
  }
}
</style>
