<script setup>
import { RouterLink } from 'vue-router';

// Props
defineProps({
  Titulo: String,
  Rotas: Array,
  fontSizeSpan: {
    type: String,
    default: '1rem'
  },
  fontWeightSpan: String,
  bgColor: String,
  colorSpan: String,
  rotaColor: {
    type: String,
    default: 'inherit'
  }
});

// Função para emitir o evento de toggle
const emit = defineEmits(['toggleMenuVertical']);
const toggleMenu = () => {
  emit('toggleMenuVertical'); // Emite o evento para o componente pai
};
</script>

<template>
  <div class="menu-h" :style="{backgroundColor: bgColor}">
    <h1 :style="{
      fontSize: fontSizeSpan,
      fontWeight: fontWeightSpan,
      color: colorSpan
    }">{{ Titulo }}</h1>

    <nav>
      <RouterLink
        v-for="(rota, index) in Rotas"
        :key="index"
        :to="rota.path"
        :style="{
          color: rotaColor
        }"
        >
        {{ rota.name }}
      </RouterLink>
    </nav>

    <!-- Botão para ativar/desativar o MenuVertical -->
    <button type="button" :style="{
      color: rotaColor,
      borderColor: rotaColor
    }" @click="toggleMenu">Menu</button>
  </div>
</template>

<style scoped>
.menu-h{
    width: 100vw;
    height: 80px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
}
span{
  font-size: 1rem;
}
nav {
  display: flex;
  justify-content: center;
  align-items: center;
}
nav a{
  padding: 10px;
  margin: 5px;
  text-decoration: none;
}
nav a:hover{
  transition: 0.6s;
  transition-delay: 15ms;
  font-weight: 800;
}
button{
  padding: 5px;
  font-size: 1rem;
  background-color: transparent;
  color: inherit;
  border-style: none;
  cursor: pointer;
  border-color: inherit;
}
button:hover{
  font-weight: 800;
  transition: 0.6s;
  transition-delay: 15ms;
}
@media (prefers-color-scheme: dark){
nav a:hover{
  color: black;
}
}
@media only screen and (min-width: 300px){
  nav{
    display: none;
  }
  button{
    display: block;
  }
}
@media only screen and (min-width: 400px){
  nav{
    display: none;
  }
  button{
    display: block;
  }
}
@media only screen and (min-width: 600px){
  nav{
    display: none;
  }
  button{
    display: block;
  }
}
@media only screen and (min-width: 768px){
  nav{
    display: flex;
  }
  button{
    display: none;
  }
}
@media only screen and (min-width: 992px){
  nav{
    display: flex;
  }
  button{
    display: none;
  }
}
@media only screen and (min-width: 1200px){
  nav{
    display: flex;
  }
  button{
    display: none;
  }
}

</style>
