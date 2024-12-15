<script setup>
import { ref } from 'vue';
import IconSetaRight from './icons/IconSetaRight.vue';
import IconSetaLeft from './icons/IconSetaLeft.vue';

const index = ref(0);
const props = defineProps({
    ImgPath: {
        type: Array,
        required: true
    }
});

function MudarImagemSeguinte() {
    // Verifica se o índice atual é o último, se for, volta ao início
    if (index.value < props.ImgPath.length - 1) {
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
        index.value = props.ImgPath.length - 1; // Vai para a última imagem
    }
}
</script>

<template>
    <div
        class="carrocel-componente"
        :style="{ backgroundImage: `url(${props.ImgPath[index]})`}"
    >
        <button @click="MudarImagemAnterior" type="button">
            <IconSetaLeft />
        </button>

        <button @click="MudarImagemSeguinte" type="button">
            <IconSetaRight />
        </button>

        <slot></slot>
    </div>
</template>

<style scoped>
.carrocel-componente {
    width: 100%;
    height: 300px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 10px;
    background-position: center;
    background-size: cover;
    justify-content: space-evenly;
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
@media only screen and (min-width: 300px) {
    .carrocel-componente {
        max-width: calc(100% - 10%);
        gap: 50%;
    }
}

@media only screen and (min-width: 400px) {
    .carrocel-componente {
        max-width: calc(100% - 20%);
        gap: 60%;
    }
}

@media only screen and (min-width: 600px) {
    .carrocel-componente {
        max-width: calc(100% - 30%);
        gap: 70%;
    }
}

@media only screen and (min-width: 768px) {
    .carrocel-componente {
        max-width: calc(100% - 40%);
        gap: 80%;
    }
}

@media only screen and (min-width: 992px) {
    .carrocel-componente {
        max-width: calc(100% - 50%);
        gap: 80%;
    }
}

@media only screen and (min-width: 1200px) {
    .carrocel-componente {
        max-width: calc(100% - 50%);
        gap: 80%;
    }
}
</style>
