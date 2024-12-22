<script setup>
import { RouterLink } from 'vue-router';
// Props
defineProps({
  Rotas: Array,
  heightMenu: String
});

</script>

<template>
  <div class="MenuVertical" :style="{
    height: heightMenu
  }">
    <nav>
      <RouterLink
        v-for="(rota, index) in Rotas"
        :key="index"
        :to="rota.path">
        {{ rota.name }}
      </RouterLink>
    </nav>
    <button type="button">X</button>
  </div>
</template>

<style scoped>
.MenuVertical {
  width: 60%;
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: rgb(32, 32, 32);
}
nav{
  display: flex;
  flex-direction: column;
  width: 90%;
}
nav a{
  padding: 5px;
  margin: 2px;
  width: 100%;
  text-decoration: none;
  color: inherit;
}
nav a:hover{
  transition: 0.5s;
  transition-delay: 15ms;
  background-color: rgba(255, 255, 255, 0.534);
}
@media (prefers-color-scheme: light){
  nav a{
    color: white;
  }
}
@media (prefers-color-scheme: dark){
  nav a:hover{
    color: black;
  }
}
@media only screen and (min-width: 768px){
  .MenuVertical{
    display: none;
  }
}
@media only screen and (min-width: 992px){
  .MenuVertical{
    display: none;
  }
}
@media only screen and (min-width: 1200px){
  .MenuVertical{
    display: none;
  }
}
</style>
