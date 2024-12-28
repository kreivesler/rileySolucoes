<script setup>
import ContainerComponent from '@/components/ContainerComponent.vue';
import { conteudoServicos } from '@/data/texts';
import FormComponent from '@/components/FormComponent.vue';
import CardComponent from '@/components/CardComponent.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
import { RouterLink } from 'vue-router';
</script>

<template>
  <ContainerComponent id="container1" display-type="flex" flex-d="row"  >
    <CardComponent titulo-card="Fale Conosco" font-sizespan="2rem" font-weightspan="800" paragrafo-card="Estamos prontos para ajudar você! Preencha o formulário ao lado com suas informações e detalhes do serviço desejado. Nossa equipe analisará sua solicitação e entrará em contato o mais rápido possível." >
      <p>Se preferir, você também pode nos enviar um e-mail diretamente para contato@rileysolucoes.com.br. Estamos à disposição para transformar suas ideias em realidade!</p>
    </CardComponent>
      <FormComponent />

  </ContainerComponent>

  <ContainerComponent id="container3" display-type="flex" bg-color="black" flex-d="row">
    <div class="cardFooter">
      <span>Treinamentos:</span>
      <nav>
        <a
          href="https://www.udemy.com/course/javascript-do-basico-ao-avancado-orientado-a-objetos/?referralCode=9F4A4286CA81D5381F16">JavaScript
          Orientado a Objetos</a>
        <a href="https://www.udemy.com/course/curso-de-informatica-essencial/?referralCode=EB7A53AB3FDC78443041">Informática
          e Pacote Office</a>
        <a href="https://www.udemy.com/course/microsoft-excel-intermediario/?referralCode=CE4301E4AC8E4D423FF2">Microsoft
          Excel</a>
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
      <span>Sobre a KR Riley Soluções:</span>
      <nav>
        <RouterLink :to="{ path: '/sobre', query: { titulo: 'Quem somos' } }">
            Quem somos
        </RouterLink>
        <RouterLink :to="{ path: '/privacidade', query: { titulo: 'Política de privacidade' } }">
          Política de privacidade
        </RouterLink>
        <RouterLink :to="{ path: '/politica-servicos', query: { titulo: 'Política de serviços' } }">
          Política de serviços
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
</template>

<style scoped>
#divForm {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: flex-start;
  justify-content: center;
  box-sizing: border-box;
  background-color: rgb(5, 78, 78);
}

@media only screen and (min-width: 300px) {}

@media only screen and (min-width: 400px) {}

@media only screen and (min-width: 600px) {}

@media only screen and (min-width: 768px) {
  #container1{
    align-items: flex-start;
  }
}

@media only screen and (min-width: 992px) {}

@media only screen and (min-width: 1200px) {

  #container1{
    align-items: flex-start;
  }

  #container3 {
    height: 300px !important;
  }

}
</style>
