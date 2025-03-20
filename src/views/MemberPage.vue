<script setup>
import ContainerComponent from '@/components/ContainerComponent.vue';
import VideoComponent from '@/components/VideoComponent.vue';
import { ref } from 'vue';
import { modulos, getAllModulosForCursoId, idCurso } from '@/data/servicos';
import { onMounted } from 'vue';

const listaDeModulos = ref([])

onMounted(async () => {
  await getAllModulosForCursoId(idCurso.value)

  listaDeModulos.value = modulos.value.lista || []

  console.log('curso id:', idCurso.value)
  console.log('Modulos', modulos)
  console.log('Lista completa: ', listaDeModulos.value) //exibe o nome do modulo no indice 0

})


</script>

<template>
  <ContainerComponent display-type="flex" flex-d="column" alignItems="flex-start">
    <div class="caixaVideo">
      <!-- Componente de vídeo com chave dinâmica -->
      <VideoComponent id="videoAula"
        video-path="https://app.rileysolucoes.com.br/videos/modulo_informatica/aula1.mp4" border-rad="8px" />
      <span>{{  }}</span>
    </div>

    <span v-if="listaDeModulos.length > 0">{{ listaDeModulos[0].nome }}</span>
    <span v-else>Carregando módulos...</span>
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
