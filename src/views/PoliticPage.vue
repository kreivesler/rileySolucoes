<script setup>
import ContainerComponent from '@/components/ContainerComponent.vue';
import CardComponent from '@/components/CardComponent.vue';
import { politicaPrivacidade } from '@/data/politica';
import { conteudoServicos } from '@/data/texts';
</script>

<template>
  <ContainerComponent id="container1" display-type="flex" flex-d="column">
    <CardComponent class="cardPolitic" :titulo-card="politicaPrivacidade.titulo" bgColor="transparent"
      font-sizespan="2rem" font-weightspan="800" text-align="left" :paragrafo-card="politicaPrivacidade.introducao">
      <span>{{ politicaPrivacidade.secoes[0].titulo }}</span>
      <p>{{ politicaPrivacidade.secoes[0].descricao }}</p>
      <ul>
        <li>{{ politicaPrivacidade.secoes[0].itens[0] }}</li>
        <li>{{ politicaPrivacidade.secoes[0].itens[1] }}</li>
        <li>{{ politicaPrivacidade.secoes[0].itens[2] }}</li>
        <li>{{ politicaPrivacidade.secoes[0].itens[3] }}</li>
      </ul>
      <p>Esses dados são coletados para:</p>
      <ul>
        <li>{{ politicaPrivacidade.secoes[0].finalidade[0] }}</li>
        <li>{{ politicaPrivacidade.secoes[0].finalidade[1] }}</li>
      </ul>
      <p>{{ politicaPrivacidade.secoes[0].nota }}</p>

      <span>{{ politicaPrivacidade.secoes[1].titulo }}</span>
      <p>{{ politicaPrivacidade.secoes[1].descricao }}</p>
      <ul>
        <li>{{ politicaPrivacidade.secoes[1].itens[0] }}</li>
        <li>{{ politicaPrivacidade.secoes[1].itens[1] }}</li>
        <li>{{ politicaPrivacidade.secoes[1].itens[2] }}</li>
      </ul>

      <span>{{ politicaPrivacidade.secoes[2].titulo }}</span>
      <p>{{ politicaPrivacidade.secoes[2].descricao }}</p>
      <ul>
        <li>{{ politicaPrivacidade.secoes[2].itens[0] }}</li>
        <li>{{ politicaPrivacidade.secoes[2].itens[1] }}</li>
      </ul>

      <span>{{ politicaPrivacidade.secoes[3].titulo }}</span>
      <p>{{ politicaPrivacidade.secoes[3].descricao }}</p>

      <span>{{ politicaPrivacidade.secoes[4].titulo }}</span>
      <p>{{ politicaPrivacidade.secoes[4].descricao }}</p>
      <ul>
        <li>{{ politicaPrivacidade.secoes[4].itens[0] }}</li>
        <li>{{ politicaPrivacidade.secoes[4].itens[1] }}</li>
        <li>{{ politicaPrivacidade.secoes[4].itens[2] }}</li>
        <li>{{ politicaPrivacidade.secoes[4].itens[3] }}</li>
      </ul>
      <p>{{ politicaPrivacidade.secoes[4].contato }}</p>

      <span>{{ politicaPrivacidade.secoes[5].titulo }}</span>
      <p>{{ politicaPrivacidade.secoes[5].descricao }}</p>

      <span>{{ politicaPrivacidade.secoes[6].titulo }}</span>
      <p>{{ politicaPrivacidade.secoes[6].descricao }}</p>

      <span>{{ politicaPrivacidade.secoes[7].titulo }}</span>
      <p>{{ politicaPrivacidade.secoes[7].descricao }}</p>
      <p>Última atualização:{{ politicaPrivacidade.secoes[7].ultimaAtualizacao }}</p>

      <span>{{ politicaPrivacidade.secoes[8].titulo }}</span>
      <p>{{ politicaPrivacidade.secoes[8].descricao }}</p>
      <ul>
        <li>{{ politicaPrivacidade.secoes[8].itens[0] }}</li>
        <li>{{ politicaPrivacidade.secoes[8].itens[1] }}</li>
      </ul>
    </CardComponent>
  </ContainerComponent>

  <ContainerComponent id="container2" display-type="flex" bg-color="black" flex-d="row">
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
        <a href="/services">{{ conteudoServicos[0].titulo }}</a>
        <a href="/services">{{ conteudoServicos[1].titulo }}</a>
        <a href="/services">{{ conteudoServicos[2].titulo }}</a>
        <a href="/services">{{ conteudoServicos[3].titulo }}</a>
      </nav>
    </div>

    <div class="cardFooter">
      <span>Sobre a KR Riley Soluções:</span>
      <nav>
        <a href="/sobre">Quem somos</a>
        <a href="/politica/privacidade">Política de privacidade</a>
        <a href="/politica/servicos">Política de serviços</a>
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
.cardPolitic {
  align-items: flex-start;
}

@media only screen and (min-width: 300px) {
  .cardFooter {
    display: flex;
    flex-direction: column;
    height: 80%;
  }

  .cardFooter span {
    font-size: 1.2rem;
  }

  .cardFooter nav {
    display: flex;
    flex-direction: column;
    padding-bottom: 2px;
  }

  .cardFooter a {
    text-decoration: none;
    color: white;
  }

}

@media only screen and (min-width: 400px) {}

@media only screen and (min-width: 600px) {}

@media only screen and (min-width: 768px) {}

@media only screen and (min-width: 992px) {}

@media only screen and (min-width: 1200px) {

  #container1 p {
    margin-bottom: 5px;
  }

  #container2 {
    height: 300px !important;
  }
}
</style>
