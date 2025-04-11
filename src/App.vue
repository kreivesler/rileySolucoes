<script setup>
import { ref } from 'vue';
import { RouterView } from 'vue-router';
import MenuHorizontal from './components/MenuHorizontal.vue';
import MenuVertical from './components/MenuVertical.vue';
import { rotasMenu } from './data/rotas';
import FooterComponent from './components/FooterComponent.vue';
import { conteudoServicos } from './data/texts';
import ButtonComponent from './components/ButtonComponent.vue';
import ContainerComponent from './components/ContainerComponent.vue';
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
  <div class="menuVertical">
    <MenuVertical height-menu="100vh" v-if="isMenuVerticalActive" :Rotas="rotasMenu" />
  </div>

  <RouterView />


  <ContainerComponent id="container2" display-type="flex" bg-color="black" flex-d="row">
    <div class="cardFooter">
      <span>Treinamentos:</span>
      <nav>
        <RouterLink :to="{ path: '/curso-javascript' }">
          JavaScript Orientado a Objetos
        </RouterLink>
        <RouterLink :to="{ path: '/curso-de-informatica' }">
          Curso de Informática e Pacote Office
        </RouterLink>
      </nav>
    </div>

    <div class="cardFooter">
      <span>Nossos Serviços:</span>
      <nav>
        <RouterLink :to="{ path: '/servicos', query: { titulo: conteudoServicos[0].titulo } }">
          {{ conteudoServicos[0].titulo }}
        </RouterLink>
        <RouterLink :to="{ path: '/servicos', query: { titulo: conteudoServicos[1].titulo } }">
          {{ conteudoServicos[1].titulo }}
        </RouterLink>
        <RouterLink :to="{ path: '/servicos', query: { titulo: conteudoServicos[2].titulo } }">
          {{ conteudoServicos[2].titulo }}
        </RouterLink>
        <RouterLink :to="{ path: '/servicos', query: { titulo: conteudoServicos[3].titulo } }">
          {{ conteudoServicos[3].titulo }}
        </RouterLink>
      </nav>
    </div>

    <div class="cardFooter">
      <span>Institucional:</span>
      <nav>
        <RouterLink :to="{ path: '/', query: { titulo: 'Home' } }">
          Home page
        </RouterLink>
        <RouterLink :to="{ path: '/sobre', query: { titulo: 'Quem somos' } }">
          Quem somos
        </RouterLink>
        <RouterLink :to="{ path: '/privacidade', query: { titulo: 'Política de privacidade' } }">
          Política de privacidade
        </RouterLink>
        <RouterLink :to="{ path: '/politica-servicos', query: { titulo: 'Política de serviços' } }">
          Política de serviços
        </RouterLink>
        <RouterLink :to="{ path: '/termo-uso', query: { titulo: 'Termo de Uso' } }">
          Termo de Uso
        </RouterLink>
      </nav>
    </div>

    <div class="cardFooter">
      <span>Redes Sociais:</span>
      <ButtonComponent path="https://www.facebook.com/people/Kr-Riley-Solu%C3%A7%C3%B5es/61552679426384/"
        type-button="button" msg="Facebook" bg-color="transparent" text-color="white" />
      <ButtonComponent path="https://www.instagram.com/rileysolucoes/" type-button="button" msg="Instagram"
        bg-color="transparent" text-color="white" />
      <ButtonComponent path="https://www.linkedin.com/company/rileysolucoes/" type-button="button" msg="Linkedin"
        bg-color="transparent" text-color="white" />
    </div>


  </ContainerComponent>

  <footer>
    <FooterComponent msg="Feito por Kr Riley Soluções" footer-bg="black" />
  </footer>
</template>
<style scoped>
.menuVertical {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}

@media only screen and (min-width: 1200px) {

  #container2 {
    height: 300px !important;
  }
}
</style>
