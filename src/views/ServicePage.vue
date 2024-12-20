<script setup>
import ContainerComponent from '@/components/ContainerComponent.vue';
import GridItem from '@/components/GridItem.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
import { conteudoServicos } from '@/data/texts';
import CardComponent from '@/components/CardComponent.vue';
import ImagemUnica from '@/components/ImagemUnica.vue';
import { imagenSite } from '@/data/images';
</script>

<template>
  <ContainerComponent id="container1" display-type="grid" :bg-image="imagenSite[6]" >
    <GridItem :-titulo="conteudoServicos[0].titulo" font-s="1.2rem" border-st="solid" border-wd="2px"
      border-rad="10px" />
    <GridItem :-titulo="conteudoServicos[1].titulo" font-s="1.2rem" border-st="solid" border-wd="2px"
      border-rad="10px" />
    <GridItem :-titulo="conteudoServicos[2].titulo" font-s="1.2rem" border-st="solid" border-wd="2px"
      border-rad="10px" />
    <GridItem :-titulo="conteudoServicos[3].titulo" font-s="1.2rem" border-st="solid" border-wd="2px"
      border-rad="10px" />
  </ContainerComponent>



  <ContainerComponent display-type="flex" flex-d="column">

    <CardComponent class="cardServices" :titulo-card="conteudoServicos[0].titulo" text-align="left">
      <p>{{ conteudoServicos[0].descricao }}</p>
      <ul>
        <li>{{ conteudoServicos[0].beneficios.beneficio1 }}</li>
        <li>{{ conteudoServicos[0].beneficios.beneficio2 }}</li>
        <li>{{ conteudoServicos[0].beneficios.beneficio3 }}</li>
      </ul>

      <ButtonComponent msg="Entrar em contato" type-button="button" path="/contato" />
    </CardComponent>
    <ImagemUnica :imgPath="imagenSite[8]"></ImagemUnica>

  </ContainerComponent>

  <ContainerComponent display-type="flex" flex-d="column">

    <ImagemUnica :imgPath="imagenSite[10]"></ImagemUnica>

    <CardComponent class="cardServices" :titulo-card="conteudoServicos[1].titulo" text-align="left">
      <p>{{ conteudoServicos[1].descricao }}</p>
      <ul>
        <li>{{ conteudoServicos[1].beneficios.beneficio1 }}</li>
        <li>{{ conteudoServicos[1].beneficios.beneficio2 }}</li>
        <li>{{ conteudoServicos[1].beneficios.beneficio3 }}</li>
      </ul>
    </CardComponent>


  </ContainerComponent>

  <ContainerComponent display-type="flex" flex-d="column">

    <CardComponent class="cardServices" :titulo-card="conteudoServicos[2].titulo" text-align="left">
      <p>{{ conteudoServicos[2].descricao }}</p>
      <ul>
        <li>{{ conteudoServicos[2].beneficios.beneficio1 }}</li>
        <li>{{ conteudoServicos[2].beneficios.beneficio2 }}</li>
        <li>{{ conteudoServicos[2].beneficios.beneficio3 }}</li>
      </ul>

      <ButtonComponent msg="Entrar em contato" type-button="button" path="/contato" />
    </CardComponent>
    <ImagemUnica :imgPath="imagenSite[9]"></ImagemUnica>

  </ContainerComponent>

  <ContainerComponent display-type="flex" flex-d="column">

    <ImagemUnica :imgPath="imagenSite[11]"></ImagemUnica>

    <CardComponent class="cardServices" :titulo-card="conteudoServicos[3].titulo" text-align="left">
      <p>{{ conteudoServicos[3].descricao }}</p>
      <ul>
        <li>{{ conteudoServicos[3].beneficios.beneficio1 }}</li>
        <li>{{ conteudoServicos[3].beneficios.beneficio2 }}</li>
        <li>{{ conteudoServicos[3].beneficios.beneficio3 }}</li>
      </ul>

    </CardComponent>


  </ContainerComponent>

  <ContainerComponent display-type="flex" flex-d="column" :bg-image="imagenSite[7]" >



    <CardComponent class="cardServices" titulo-card="Por que contratar a KR Riley Soluções?" text-align="left">
      <ul>
        <li> <b class="fonteWeigth2">Atendimento personalizado: </b>Trabalhamos lado a lado com você para entender suas
          demandas e criar soluções que atendam às suas expectativas.</li>
        <li> <b class="fonteWeigth2">Soluções acessíveis: </b>Oferecemos serviços de alta qualidade com preços
          competitivos.</li>
        <li> <b class="fonteWeigth2">Compromisso com resultados: </b>Nosso foco é ajudar sua empresa a crescer no
          ambiente digital.</li>
      </ul>
      <p>Pronto para transformar sua presença online? Entre em contato conosco e descubra como podemos ajudar seu
        negócio a alcançar novos patamares.</p>

      <ButtonComponent msg="Entrar em contato" type-button="button" path="/contato" />
    </CardComponent>


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
        <a href="/privacidade">Política de privacidade</a>
        <a href="/politica-servicos">Política de serviços</a>
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
.cardServices {
  align-items: flex-start;
}

.cardServices button {
  margin-left: 20%;
  margin-top: 5px;
}

.fonteWeigth {
  font-weight: 700;
}

.fonteWeigth2 {
  font-weight: 600;
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
  #container1 {
    padding: 10rem !important;
    grid-template-columns: repeat(4, 1fr);
  }


  #container3 {
    height: 300px !important;
  }
}
</style>
