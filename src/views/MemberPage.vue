<script setup>
import ContainerComponent from '@/components/ContainerComponent.vue';
import VideoComponent from '@/components/VideoComponent.vue';
import { idCurso, getAllAulasForModuloId, aulas, modulos } from '@/data/servicos';

console.log('curso id:', idCurso.value)
console.log('Modulos', modulos)
console.log('Lista completa: ', modulos.value) //exibe o nome do modulo no indice 0
console.log('id', modulos.value[0].id) //Exibe o primeiro id do modulo no indice 0

getAllAulasForModuloId(modulos.value[0].id, idCurso.value)

console.log('Aulas do modulo 1:', aulas.value)
console.log('Aula 1: ', aulas.value[0].titulo)


</script>

<template>
  <ContainerComponent display-type="flex" flex-d="column" alignItems="flex-start">
    <div class="caixaVideo">
      <!-- Componente de vídeo com chave dinâmica -->
      <VideoComponent id="videoAula" video-path="" border-rad="8px" />
      <div id="caixaBtn">
        <button>Aula anterior</button>
        <button>Próxima aula</button>
      </div>

    </div>

    <span>Modulo 1</span>
    <div>
      <span>{{  }}</span>
      <ul>
        <li><button>{{  }}</button></li>
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

#videoAula{
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
