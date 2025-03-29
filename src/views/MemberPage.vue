<script setup>
import ContainerComponent from '@/components/ContainerComponent.vue';
import VideoComponent from '@/components/VideoComponent.vue';
import { idCurso, getAllAulasForModuloId, modulos, aulas, videoAula, carregaVideo } from '@/data/servicos';
import { onMounted, ref, watch } from 'vue';

const indiceModulo = ref(0);
const indiceAula = ref(0); // Índice da aula dentro do módulo
const aulasLista = ref([]); // Lista de aulas do módulo atual
const videoPath = ref(null);

onMounted(async () => {
  console.log('Curso ID:', idCurso.value);
  console.log('Lista completa:', modulos.value);

  if (modulos.value.length > 0) {
    console.log('Módulo ID:', modulos.value[0].id);
    await getAllAulasForModuloId(modulos.value[0].id, idCurso.value);
    listarAulas();
  }
});

// Atualiza a lista de aulas e reseta o índice quando muda de módulo
watch(indiceModulo, async (novoIndice) => {
  if (modulos.value[novoIndice]) {
    await getAllAulasForModuloId(modulos.value[novoIndice].id, idCurso.value);
    listarAulas();
    indiceAula.value = 0; // Reseta para a primeira aula do novo módulo
    carregarAula(); // Carrega o primeiro vídeo do novo módulo
  }
});

// Atualiza a lista de aulas do módulo atual
const listarAulas = () => {
  aulasLista.value = aulas.value.map((aula) => ({
    titulo: aula.titulo,
    id: aula.id
  }));
};

// Carrega o vídeo da aula atual
const carregarAula = () => {
  if (aulasLista.value.length > 0) {
    const aulaId = aulasLista.value[indiceAula.value].id;
    carregaVideo(aulaId);
    videoPath.value = videoAula.value;
  }
};

// Navegar para a próxima aula
const nextAula = () => {
  if (indiceAula.value < aulasLista.value.length - 1) {
    indiceAula.value++;
    carregarAula();
  }
};

// Navegar para a aula anterior
const beforeAula = () => {
  if (indiceAula.value > 0) {
    indiceAula.value--;
    carregarAula();
  }
};

// Mudar para o próximo módulo
const nextModulo = () => {
  if (indiceModulo.value < modulos.value.length - 1) {
    indiceModulo.value++;
  }
};

// Mudar para o módulo anterior
const beforeModulo = () => {
  if (indiceModulo.value > 0) {
    indiceModulo.value--;
  }
};
</script>

<template>
  <ContainerComponent display-type="flex" flex-d="column" alignItems="flex-start">
    <div class="caixaVideo">
      <VideoComponent id="videoAula" :video-path="videoPath" border-rad="8px" />
      <div id="caixaBtn">
        <button @click="beforeAula" :disabled="indiceAula === 0">Aula anterior</button>
        <button @click="nextAula" :disabled="indiceAula === aulasLista.length - 1">Próxima aula</button>
      </div>
    </div>

    <div>
      <span v-if="modulos.length > 0">{{ modulos[indiceModulo].nome }}</span>
      <div>
        <button @click="nextModulo" :disabled="indiceModulo === modulos.length - 1">Próximo módulo</button>
        <button @click="beforeModulo" :disabled="indiceModulo === 0">Módulo anterior</button>
      </div>

      <ul>
        <li v-for="(aula, index) in aulasLista" :key="aula.id">
          <button @click="indiceAula = index; carregarAula()">{{ aula.titulo }}</button>
        </li>
      </ul>
    </div>
  </ContainerComponent>
</template>


<style scoped>
ul {
  width: 80%;
  list-style: none;
  padding: 0;
}

li {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
}

span {
  font-size: 1rem;
}

button {
  width: 100%;
  padding: 5px;
  cursor: pointer;
  border-style: none;
  border-radius: 2px;
  background-color: transparent;
  color: inherit;
  border-style: solid;
  border-width: 2px;
  border-color: inherit;
}

.caixaVideo {
  display: flex;
  flex-direction: column;

}

.caixaVideo span {
  font-size: 1.5rem;
  padding: 5px;
}

#videoAula {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.288);
}


.infoAula {
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 2px;

}

.btnAula {
  width: 20%;
  display: flex;
  flex-direction: row;
}

#caixaBtn {
  display: flex;
  flex-direction: row;
  padding: 15px;
}

@media only screen and (min-width: 300px) {
  .caixaVideo {
    width: 100%;
  }

  .infoAula {
    flex-direction: column;
  }

  .infoCurso {
    width: 100%;
  }

  .btnAula {
    width: 100%;
  }

  button {
    font-size: 1rem;
  }


  #videoAula {
    width: 100%;
  }
}

@media only screen and (min-width: 400px) {
  .caixaVideo {
    width: 100%;

  }

  .infoAula {
    flex-direction: column;
  }

  .infoCurso {
    width: 100%;
  }

  .btnAula {
    width: 100%;
  }

  button {
    font-size: 1rem;
  }

  #videoAula {
    width: 100%;
  }
}

@media only screen and (min-width: 600px) {
  .caixaVideo {
    width: 100%;

  }

  .infoCurso {
    width: 100%;
  }

  .btnAula {
    width: 100%;
  }

  button {
    font-size: 1rem;
  }

  #videoAula {
    width: 100%;
  }
}

@media only screen and (min-width: 768px) {
  .caixaVideo {
    width: 80%;

  }

  .infoCurso {
    width: 100%;
  }

  .btnAula {
    width: 100%;
  }

  button {
    font-size: 1rem;
  }

  #videoAula {
    width: 100%;
  }
}

@media only screen and (min-width: 992px) {
  .caixaVideo {
    width: 80%;

  }

  .infoCurso {
    width: 100%;
  }

  .btnAula {
    width: 100%;
  }

  button {
    font-size: 1rem;
  }

  #videoAula {
    width: 100%;
  }
}

@media only screen and (min-width: 1200px) {
  .caixaVideo {
    width: 60%;

  }

  .infoCurso {
    width: 40%;
  }

  .btnAula {
    width: 100%;
  }

  button {
    font-size: 1rem;
  }

  #videoAula {
    width: 100%;
  }
}
</style>
