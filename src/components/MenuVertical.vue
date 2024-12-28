<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
// Props
defineProps({
  Rotas: Array,
  heightMenu: String
});
const menuAtivo = ref(true)
const fecharMenu = ()=>{
  menuAtivo.value = false
}
</script>

<template>
  <div class="MenuVertical" v-if="menuAtivo" :style="{
    height: heightMenu,
    display: toggleMenu
  }">
    <nav>
      <RouterLink
        v-for="(rota, index) in Rotas"
        :key="index"
        :to="rota.path">
        {{ rota.name }}
      </RouterLink>
    </nav>
    <button @click="fecharMenu" type="button">X</button>
  </div>
</template>

<style scoped>
.MenuVertical {
  width: 70%;
  padding: 10px;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: rgb(32, 32, 32);
}
.MenuVertical button{
  width: 20px;
  height: 20px;
  background-color: transparent;
  border-style: none;
  color: white;
  font-size: 1.2rem;
}
nav{
  display: flex;
  flex-direction: column;
  width: 50%;
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
