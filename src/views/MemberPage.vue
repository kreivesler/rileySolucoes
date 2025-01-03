<script setup>
import ContainerComponent from '@/components/ContainerComponent.vue';
import VideoComponent from '@/components/VideoComponent.vue';
import { video } from '@/data/videos';
import { ref } from 'vue';

// Estado reativo para o índice do vídeo atualmente exibido
const currentVideoIndex = ref(0);

// Função para atualizar o índice do vídeo
const changeVideo = (index) => {
  currentVideoIndex.value = index;
};
</script>

<template>
  <ContainerComponent class="caixaVideo" display-type="flex" flex-d="row">
    <span>{{ video[currentVideoIndex].aula }}</span>
  </ContainerComponent>
  <ContainerComponent display-type="flex" flex-d="column">
    <!-- Componente de vídeo -->
      <VideoComponent :key="currentVideoIndex" :video-path="video[currentVideoIndex].video" border-rad="8px" />


    <!-- Lista de aulas com botões -->
    <div>
      <span> Módulo: {{ video[currentVideoIndex].modulo }}</span>
      <ul>
        <li v-for="(item, index) in video" :key="index">
          <button type="button" @click="changeVideo(index)">Assistir</button>
          <span>{{ item.aula }}</span>

        </li>
      </ul>
    </div>

  </ContainerComponent>
</template>

<style scoped>
ul {
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
  margin-right: 8px;
  padding: 2px 4px;
  cursor: pointer;
  border-style: none;
  border-radius: 2px;
}
.caixaVideo span{
  font-size: 1.2rem;
  padding: 5px;
}
</style>
