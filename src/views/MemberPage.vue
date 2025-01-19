<script setup>
import ContainerComponent from '@/components/ContainerComponent.vue';
import VideoComponent from '@/components/VideoComponent.vue';
import { cursoInformatica } from '@/data/videos';
import { ref } from 'vue';

// Estado reativo para o índice do vídeo atualmente exibido
const currentVideoIndex = ref(0);

// Função para navegar para o próximo vídeo
const nextVideo = () => {
  if (currentVideoIndex.value < cursoInformatica[0].video.length - 1) {
    currentVideoIndex.value++;
  }
};

// Função para navegar para o vídeo anterior
const prevVideo = () => {
  if (currentVideoIndex.value > 0) {
    currentVideoIndex.value--;
  }
};
</script>

<template>
  <ContainerComponent display-type="flex" flex-d="column" alignItems="flex-start">
    <div class="caixaVideo">
      <!-- Componente de vídeo -->
      <VideoComponent id="videoAula" :key="currentVideoIndex" :video-path="cursoInformatica[0].video[currentVideoIndex]"
        border-rad="8px" />
        <span>{{ cursoInformatica[0].aula[currentVideoIndex] }}</span>
    </div>
    <div class="infoCurso">
      <span>Módulo: {{ cursoInformatica[0].modulo }}</span>
      <div class="infoAula">
        <span>{{ cursoInformatica[0].aula[currentVideoIndex] }}</span>
      </div>
      <div class="btnAula" >
          <button @click="prevVideo" :disabled="currentVideoIndex === 0">
            Aula Anterior
          </button>
          <button @click="nextVideo" :disabled="currentVideoIndex === cursoInformatica[0].video.length - 1">
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
  font-size: 1.2rem;
}

.caixaVideo {
  display: flex;
  flex-direction: column;

}

.caixaVideo span {
  font-size: 1.5rem;
  padding: 5px;
}
.infoCurso{
  width: 50%;
}

.infoAula {
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 2px;

}
.btnAula{
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
  .btnAula{
    width: 100%;
    display: flex;
    flex-direction: row;
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

  #videoAula {
    width: 100%;
  }
}

@media only screen and (min-width: 600px) {
  .caixaVideo {
    width: 100%;

  }

  #videoAula {
    width: 100%;
  }
}

@media only screen and (min-width: 768px) {
  .caixaVideo {
    width: 80%;

  }

  #videoAula {
    width: 100%;
  }
}

@media only screen and (min-width: 992px) {
  .caixaVideo {
    width: 80%;

  }

  #videoAula {
    width: 100%;
  }
}

@media only screen and (min-width: 1200px) {
  .caixaVideo {
    width: 80%;

  }

  #videoAula {
    width: 100%;
  }
}
</style>
