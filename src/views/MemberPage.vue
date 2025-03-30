<script setup>
import ContainerComponent from '@/components/ContainerComponent.vue';
import VideoComponent from '@/components/VideoComponent.vue';
import { idCurso, getAllAulasForModuloId, modulos, aulas, videoAula, carregaVideo } from '@/data/servicos';
import { onMounted, ref, watch } from 'vue';

const indiceModulo = ref(0);
const indiceAula = ref(0);
const aulasLista = ref([]);
const videoPath = ref(null);
const videoKey = ref(0); // Força a remontagem do vídeo
const tituloAulaAtual = ref(''); // Nova variável para armazenar o título da aula atual

onMounted(async () => {
  if (modulos.value.length > 0) {
    await getAllAulasForModuloId(modulos.value[0].id, idCurso.value);
    listarAulas();
    carregarAula(); // Carrega a primeira aula automaticamente
  }
});

// Atualiza a lista de aulas quando o módulo muda
watch(indiceModulo, async (novoIndice) => {
  if (modulos.value[novoIndice]) {
    await getAllAulasForModuloId(modulos.value[novoIndice].id, idCurso.value);
    listarAulas();
    indiceAula.value = 0; // Sempre começa pela primeira aula do módulo
    carregarAula();
  }
});

// Atualiza `videoPath` quando `videoAula` mudar
watch(videoAula, () => {
  videoPath.value = videoAula.value.url;
  videoKey.value++; // Força a remontagem do componente de vídeo
  // Atualiza o título da aula atual
  tituloAulaAtual.value = aulasLista.value[indiceAula.value].titulo;
});

// Preenche a lista de aulas
const listarAulas = () => {
  aulasLista.value = aulas.value.map((aula) => ({
    titulo: aula.titulo,
    id: aula.id
  }));
};

// Carrega a aula atual
const carregarAula = () => {
  if (aulasLista.value.length > 0) {
    const aulaId = aulasLista.value[indiceAula.value].id;
    carregaVideo(aulaId);
  }
};

// Navega para a próxima aula
const nextAula = () => {
  if (indiceAula.value < aulasLista.value.length - 1) {
    indiceAula.value++;
    carregarAula();
  }
};

// Volta para a aula anterior
const beforeAula = () => {
  if (indiceAula.value > 0) {
    indiceAula.value--;
    carregarAula();
  }
};

// Muda para o próximo módulo
const nextModulo = () => {
  if (indiceModulo.value < modulos.value.length - 1) {
    indiceModulo.value++;
  }
};

// Volta para o módulo anterior
const beforeModulo = () => {
  if (indiceModulo.value > 0) {
    indiceModulo.value--;
  }
};
</script>

<template>
  <ContainerComponent display-type="flex" flex-d="column" alignItems="flex-start">
    <div class="caixaVideo">
      <!-- 🔄 Apenas o componente do vídeo será recriado ao mudar de aula -->
      <VideoComponent :key="videoKey" id="videoAula" :cont-video="true" :video-path="videoPath" border-rad="8px" />
      <!-- Exibe o título da aula atual -->
      <span>{{ tituloAulaAtual }}</span>
      <div class="caixaBtn">
        <button @click="beforeAula" :disabled="indiceAula === 0">Aula anterior</button>
        <button @click="nextAula" :disabled="indiceAula === aulasLista.length - 1">Próxima aula</button>
      </div>
    </div>

    <div class="menuLateral">
      <span v-if="modulos.length > 0">Modulo atual: {{ modulos[indiceModulo].nome }}</span>
      <div class="caixaBtn2">
        <button @click="beforeModulo" :disabled="indiceModulo === 0">Módulo anterior</button>
        <button @click="nextModulo" :disabled="indiceModulo === modulos.length - 1">Próximo módulo</button>
      </div>

      <ul class="listaAulas">
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
  font-size: 1.3rem;
  padding: 5px;
}

#videoAula {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.288);
}



.caixaBtn {
  display: flex;
  flex-direction: row;
  padding: 15px;
}

.caixaBtn button {
  margin: 5px;


}

.caixaBtn button:hover {
  border-color: #0056b3;
}

.caixaBtn2 {
  display: flex;
  width: 100%;
  flex-direction: row;
  margin-bottom: 10px;
}

.caixaBtn2 button {
  margin-right: 10px;

}

.caixaBtn2 button:hover {
  border-color: #0056b3;
}


.menuLateral {
  display: flex;
  flex-direction: column;
  padding: 5px;
}



.listaAulas {
  width: 100%;
}

.listaAulas button {
  width: 100%;
  font-size: 0.9rem;
  text-align: left;
  border-top-style: none;
  border-left-style: none;
  border-right-style: none;
}

.listaAulas button:hover {
  border-color: #0056b3;
  color: #0056b3;
}

@media only screen and (min-width: 300px) {
  .caixaVideo {
    width: 100%;
  }


  button {
    font-size: 1rem;
  }


  #videoAula {
    width: 100%;
  }

  .caixaVideo span {
    font-size: 1rem;
  }

  .caixaBtn button {
    padding: 5px;
    width: 50%;
  }

  .menuLateral {
    width: 100%;
  }

  .menuLateral span {
    font-size: 1rem;
  }

  .caixaBtn2 button {
    width: 50%;
    font-size: 0.9rem;
  }

  .listaAulas button {
    font-size: 0.8rem;
  }
}

@media only screen and (min-width: 400px) {
  .caixaVideo {
    width: 100%;

  }

  button {
    font-size: 1rem;
  }

  #videoAula {
    width: 100%;
  }

  .caixaVideo span {
    font-size: 1rem;
  }

  .caixaBtn button {
    padding: 5px;
    width: 50%;
  }

  .menuLateral {
    width: 100%;
  }

  .menuLateral span {
    font-size: 1rem;
  }

  .caixaBtn2 button {
    width: 50%;
    font-size: 0.9rem;
  }

  .listaAulas button {
    font-size: 0.8rem;
  }
}

@media only screen and (min-width: 600px) {
  .caixaVideo {
    width: 100%;

  }



  button {
    font-size: 1rem;
  }

  #videoAula {
    width: 100%;
  }

  .caixaVideo span {
    font-size: 1.2rem;
  }

  .caixaBtn button {
    padding: 5px;
    width: 50%;
  }

  .menuLateral {
    width: 100%;
  }

  .menuLateral span {
    font-size: 1rem;
  }

  .caixaBtn2 button {
    width: 50%;
    font-size: 0.9rem;
  }

  .listaAulas button {
    font-size: 0.8rem;
  }
}

@media only screen and (min-width: 768px) {
  .caixaVideo {
    width: 60%;

  }




  button {
    font-size: 1rem;
  }

  #videoAula {
    width: 100%;
  }

  .caixaVideo span {
    font-size: 1.2rem;
  }

  .caixaBtn button {
    padding: 5px;
    width: 50%;
  }

  .menuLateral {
    width: 40%;
  }

  .menuLateral span {
    font-size: 1rem;
  }

  .caixaBtn2 button {
    width: 50%;
    font-size: 0.9rem;
  }

  .listaAulas button {
    font-size: 0.8rem;
  }
}

@media only screen and (min-width: 992px) {
  .caixaVideo {
    width: 60%;

  }




  button {
    font-size: 1rem;
  }

  #videoAula {
    width: 100%;
  }

  .caixaVideo span {
    font-size: 1.2rem;
  }

  .caixaBtn button {
    padding: 5px;
    width: 50%;
  }

  .menuLateral {
    width: 40%;
  }

  .menuLateral span {
    font-size: 1.2rem;
  }

  .caixaBtn2 button {
    width: 50%;
    font-size: 0.9rem;
  }

  .listaAulas button {
    font-size: 0.8rem;
  }
}

@media only screen and (min-width: 1200px) {
  .caixaVideo {
    width: 60%;

  }

  button {
    font-size: 1rem;
  }

  #videoAula {
    width: 100%;
  }

  .caixaVideo span {
    font-size: 1.3rem;
  }

  .caixaBtn button {
    padding: 5px;
    width: 20%;
  }

  .menuLateral {
    width: 40%;
  }

  .menuLateral span {
    font-size: 1.3rem;
    margin-bottom: 10px;
  }

  .caixaBtn2 button {
    width: 30%;
    font-size: 0.9rem;
  }

  .listaAulas button {
    font-size: 0.8rem;
  }
}
</style>
