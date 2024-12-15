<script setup>
import { RouterLink } from 'vue-router';

// Props
defineProps({
  Rotas: Array,
  widthComp: String,
  heigthComp: String,
  bgColor: {
    type: String,
    default: 'rgb(32, 32, 32)'
  }
});
</script>

<template>
  <div class="MenuLateral"
    :style="{
      width: widthComp,
      height: heigthComp,
      backgroundColor: bgColor
    }"
  >
    <nav>
      <RouterLink
        v-for="(rota, index) in Rotas"
        :key="index"
        :to="rota.path">
        {{ rota.name }}
      </RouterLink>
    </nav>
  </div>
</template>

<style scoped>
.MenuLateral {
  display: flex;
  min-height: 500px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}
nav{
  display: flex;
  flex-direction: column;
  width: 100%;
}
nav a{
  padding: 5px;
  margin: 0px;
  width: 100%;
  text-decoration: none;
  color: inherit;
  text-align: center;
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
@media only screen and (min-width: 300px){
  .MenuLateral{
    display: none;
  }
}
@media only screen and (min-width: 400px){
  .MenuLateral{
    display: none;
  }
}
@media only screen and (min-width: 600px){
  .MenuLateral{
    display: none;
  }
}
@media only screen and (min-width: 768px){
  .MenuLateral{
    display: flex;
  }
}
@media only screen and (min-width: 992px){
  .MenuLateral{
    display: flex;
  }
}
@media only screen and (min-width: 1200px){
  .MenuLateral{
    display: flex;
  }
}
</style>
