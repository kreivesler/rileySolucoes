<script setup>
import { ref } from 'vue';
import { RouterView } from 'vue-router';
import MenuHorizontal from './components/MenuHorizontal.vue';
import MenuVertical from './components/MenuVertical.vue';
import { rotasMenu } from './data/rotas';
import FooterComponent from './components/FooterComponent.vue';
// Estado para controlar a visibilidade do MenuVertical
const isMenuVerticalActive = ref(false);

// Função para alternar o estado do MenuVertical
const toggleMenuVertical = () => {
  isMenuVerticalActive.value = !isMenuVerticalActive.value;
};
</script>

<template>
  <header>
    <!-- Passa a função de toggle para o MenuHorizontal -->
    <MenuHorizontal Titulo="Kr Riley Soluções" :Rotas="rotasMenu" @toggleMenuVertical="toggleMenuVertical"
      font-weight-span="800" font-size-span="1.2rem" />
  </header>

  <!-- Condicionalmente renderiza o MenuVertical -->
  <div>
    <MenuVertical height-menu="100vh" v-if="isMenuVerticalActive" :Rotas="rotasMenu" />
  </div>

  <RouterView />

  <footer>
    <FooterComponent msg="Feito por" link="https://rileysolucoes.com.br" msgLink="Kr Riley Soluções"
      footer-bg="black" />
  </footer>
</template>
