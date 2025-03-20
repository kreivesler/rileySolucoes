<script setup>
import ContainerComponent from '@/components/ContainerComponent.vue';
import VideoComponent from '@/components/VideoComponent.vue';
import { cursoInformatica } from '@/data/videos';
import { ref, computed, watch } from 'vue';
import { modulos, getAllModulosForCursoId, idCurso } from '@/data/servicos';
import { onMounted } from 'vue';

const listaDeModulos = ref([])

onMounted(async () => {
  await getAllModulosForCursoId(idCurso.value)

  listaDeModulos.value = modulos.value.lista || []

  console.log('curso id:', idCurso.value)
  console.log('Modulos', modulos)
  console.log('Lista completa: ', listaDeModulos.value[0].nome) //exibe o nome do modulo no indice 0

})

// Estados reativos para módulo e vídeo
const currentModuloIndex = ref(0);
const currentVideoIndex = ref(0);

// Observa mudanças no módulo para redefinir o índice do vídeo
watch(currentModuloIndex, () => {
  currentVideoIndex.value = 0; // Redefine para o primeiro vídeo ao mudar de módulo
});

// Gera uma chave única para o componente de vídeo
const videoKey = computed(() => `${currentModuloIndex.value}-${currentVideoIndex.value}`);

// Funções de navegação de módulo
const nextModulo = () => {
  if (currentModuloIndex.value < cursoInformatica.length - 1) {
    currentModuloIndex.value++;
  }
};

const prevModulo = () => {
  if (currentModuloIndex.value > 0) {
    currentModuloIndex.value--;
  }
};

// Funções de navegação de vídeo
const nextVideo = () => {
  if (currentVideoIndex.value < cursoInformatica[currentModuloIndex.value].video.length - 1) {
    currentVideoIndex.value++;
  }
};

const prevVideo = () => {
  if (currentVideoIndex.value > 0) {
    currentVideoIndex.value--;
  }
};
</script>

<template>
  <ContainerComponent display-type="flex" flex-d="column" alignItems="flex-start">
    <div class="caixaVideo">
      <!-- Componente de vídeo com chave dinâmica -->
      <VideoComponent id="videoAula" :key="videoKey"
        :video-path="cursoInformatica[currentModuloIndex].video[currentVideoIndex]" border-rad="8px" />
      <span>{{ cursoInformatica[currentModuloIndex].aula[currentVideoIndex] }}</span>
    </div>

    <div class="infoCurso">
      <span>Módulo: {{ cursoInformatica[currentModuloIndex].modulo }}</span>

      <div class="btnAula">
        <button @click="prevModulo" :disabled="currentModuloIndex === 0">
          Módulo Anterior
        </button>
        <button @click="nextModulo" :disabled="currentModuloIndex === cursoInformatica.length - 1">
          Próximo Módulo
        </button>
      </div>

      <div class="infoAula">
        <span>{{ cursoInformatica[currentModuloIndex].aula[currentVideoIndex] }}</span>
      </div>

      <div class="btnAula">
        <button @click="prevVideo" :disabled="currentVideoIndex === 0">
          Aula Anterior
        </button>
        <button @click="nextVideo"
          :disabled="currentVideoIndex === cursoInformatica[currentModuloIndex].video.length - 1">
          Próxima Aula
        </button>
      </div>
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
    width: 80%;

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
