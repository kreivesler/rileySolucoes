<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import IconSetaRight from './icons/IconSetaRight.vue';
import IconSetaLeft from './icons/IconSetaLeft.vue';

const index = ref(0);

const props = defineProps({
  bgImage: {
    type: Array,
    required: true
  },
  flexD: {
    type: String,
    default: 'row' // Valor padrão que pode ser passado como prop
  },
  displayType: {
    type: String,
    default: 'block'
  },
  GapComp: {
    type: String,
    default: '40px'
  },
  paddingComp: {
    type: String,
    default: '1rem'
  },
  bgColor: {
    type: String,
    default: 'none'
  },
  opacityComp: {
    type: String,
    default: 'none'
  }
})

function MudarImagemSeguinte() {
    // Verifica se o índice atual é o último, se for, volta ao início
    if (index.value < props.bgImage.length - 1) {
        index.value++;
    } else {
        index.value = 0; // Reseta para a primeira imagem
    }
}

function MudarImagemAnterior() {
    // Verifica se o índice atual é o primeiro, se for, vai para o último
    if (index.value > 0) {
        index.value--;
    } else {
        index.value = props.bgImage.length - 1; // Vai para a última imagem
    }
}

// Função para mudar a imagem automaticamente a cada 3 segundos
function MudarImagemAutomatico() {
  setInterval(() => {
    MudarImagemSeguinte();
  }, 4000);
}

// Iniciar e limpar o intervalo quando o componente for montado/desmontado
onMounted(() => {
  MudarImagemAutomatico();
});

onUnmounted(() => {
  clearInterval(MudarImagemAutomatico);
});

</script>

<template>
  <div class="container"
      :class="{ 'has-bg-image': props.bgImage, 'containerGrid': props.displayType === 'grid' }"
      :style="{
        display: props.displayType,
        backgroundImage: props.bgImage ? `url(${props.bgImage[index]})` : 'none',
        flexDirection: props.flexD,
        gap: props.GapComp,
        padding: props.paddingComp,
        backgroundColor: props.bgColor,
        opacity: props.opacityComp
      }"
  >
        <button @click="MudarImagemAnterior" type="button">
            <IconSetaLeft />
        </button>

        <button @click="MudarImagemSeguinte" type="button">
            <IconSetaRight />
        </button>
  </div>
</template>

<style scoped>
.container {
  width: 100vw;
  min-height: 500px;
  padding: 1rem;
  align-items: center;
  gap: 40px;
  justify-content: space-around;
  display: flex;
}
.containerGrid {
  display: grid;
  align-items: center;
  justify-content: center;
}
.has-bg-image{
  background-position: center;
  background-size: cover;
}

button {
    width: 50px;
    height: 50px;
    font-size: 20px;
    border-style: none;
    border-radius: 100%;
    background-color: transparent;
}

svg {
    fill: rgba(194, 194, 194, 0.404); /* Cor do ícone */
    width: 100%; /* Largura do ícone */
    height: 100%; /* Altura do ícone */
}
svg:hover{
  fill: rgba(255, 255, 255, 0.863);
}

@media (prefers-color-scheme: light) {
    .has-bg-image :deep(.cardComponente) {
        color: white;
    }
    .has-bg-image :deep(h2) {
        font-size: 1.5vw;
        color: rgb(25, 0, 255);
        font-weight: 800;
    }
    .has-bg-image :deep(.GridItem){
      color: white;
    }
}

@media (prefers-color-scheme: dark) {
    .has-bg-image :deep(.cardComponente) {
        color: white;
        border-color: rgba(255, 255, 255, 0.219);
    }
    .has-bg-image :deep(h2) {
        font-size: 2vw;
        color: rgb(25, 0, 255);
        font-weight: 800;
    }
    .has-bg-image :deep(.GridItem){
      color: white;
    }
}
/*Media altera a coluna da grid */
@media only screen and (min-width: 300px){
  .containerGrid{
    padding: 2rem !important;
    grid-template-columns: repeat(1, 1fr);
  }
}
@media only screen and (min-width: 400px){
  .containerGrid{
    padding: 3rem !important;
    grid-template-columns: repeat(1, 1fr);
  }
}
@media only screen and (min-width: 600px){
  .containerGrid{
    padding: 4rem !important;
    grid-template-columns: repeat(2, 1fr);
  }
}
@media only screen and (min-width: 768px){
  .containerGrid{
    padding: 5rem !important;
    grid-template-columns: repeat(2, 1fr);
  }
}
@media only screen and (min-width: 992px){
  .containerGrid{
    padding: 6rem !important;
    grid-template-columns: repeat(3, 1fr);
  }
}
@media only screen and (min-width: 1200px){
  .containerGrid{
    padding: 10rem !important;
    grid-template-columns: repeat(3, 1fr);
  }
}
/* Media queries sobrepõem o valor passado pela prop */
@media only screen and (max-width: 768px) {
  .container {
    flex-direction: column !important;
  }
}

@media only screen and (min-width: 768px) {
  .container {
    flex-direction: row !important;
  }
}

@media only screen and (min-width: 992px) {
  .container {
    flex-direction: row-reverse !important;
  }
}

@media only screen and (min-width: 1200px) {
  .container {
    flex-direction: row !important;
  }
}
</style>
