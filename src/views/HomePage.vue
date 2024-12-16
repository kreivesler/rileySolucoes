<script setup>
import ContainerComponent from '@/components/ContainerComponent.vue';
import CardComponent from '@/components/CardComponent.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
import GridItem from '@/components/GridItem.vue';
import ImagemUnica from '@/components/ImagemUnica.vue';
import { imagenSite } from '@/data/images';
import { conteudoTexto, conteudoServicos } from '@/data/texts';
</script>

<template>
    <ContainerComponent class="imagemComp1" displayType="flex" :bgImage="imagenSite[6]">
    </ContainerComponent>



  <ContainerComponent displayType="flex" height-comp="300px" >
    <CardComponent borderRad="10px" :titulo-card="conteudoTexto[0].titulo"  font-sizespan="2rem"
      font-weightspan="800" :paragrafo-card="conteudoTexto[0].descricao"  font-sizep="1rem"
      font-weightp="500" text-align="center">

      <ButtonComponent msg="Entrar em contato" typeButton="button"
        path="https://rileysolucoes.com.br" />

    </CardComponent>

    <ImagemUnica :imgPath="imagenSite[8]"></ImagemUnica>
  </ContainerComponent>

  <ContainerComponent id="container2" display-type="flex" >
    <CardComponent :titulo-card="conteudoTexto[1].titulo"  font-sizespan="2rem" font-weightspan="800"
      :paragrafo-card="conteudoTexto[1].descricao" max-linesp="10"  font-sizep="1rem"
      font-weightp="500"></CardComponent>
  </ContainerComponent>

  <ContainerComponent displayType="flex" height-comp="300px" >

    <ImagemUnica :imgPath="imagenSite[9]"></ImagemUnica>


    <CardComponent borderRad="10px" :titulo-card="conteudoTexto[2].titulo"  font-sizespan="2rem"
      font-weightspan="800" :paragrafo-card="conteudoTexto[2].descricao"  font-sizep="1rem"
      font-weightp="500" text-align="center">

      <ButtonComponent msg="Entrar em contato" typeButton="button"
        path="https://rileysolucoes.com.br" />

    </CardComponent>
  </ContainerComponent>

  <ContainerComponent id="container1" display-type="grid" >
    <GridItem :-titulo="conteudoServicos[0].titulo"  font-s="1.2rem" border-st="solid" border-wd="2px" border-rad="10px" />
    <GridItem :-titulo="conteudoServicos[1].titulo"  font-s="1.2rem" border-st="solid" border-wd="2px" border-rad="10px" />
    <GridItem :-titulo="conteudoServicos[2].titulo"  font-s="1.2rem" border-st="solid" border-wd="2px" border-rad="10px" />
    <GridItem :-titulo="conteudoServicos[3].titulo"  font-s="1.2rem" border-st="solid" border-wd="2px" border-rad="10px" />

  </ContainerComponent>

  <ContainerComponent :bg-image="imagenSite[7]">
    <CardComponent :titulo-card="conteudoTexto[3].titulo" font-sizespan="2rem" font-weightspan="800" :paragrafo-card="conteudoTexto[3].descricao" font-sizep="1rem" font-weightp="500">

      <ButtonComponent msg="Entrar em contato" typeButton="button"
      path="https://rileysolucoes.com.br" />
    </CardComponent>
  </ContainerComponent>

  <ContainerComponent id="container3" display-type="flex" bg-color="black" flex-d="row">
    <div class="cardFooter">
      <span>Treinamentos:</span>
      <nav>
        <a href="https://www.udemy.com/course/javascript-do-basico-ao-avancado-orientado-a-objetos/?referralCode=9F4A4286CA81D5381F16">JavaScript Orientado a Objetos</a>
        <a href="https://www.udemy.com/course/curso-de-informatica-essencial/?referralCode=EB7A53AB3FDC78443041">Informática e Pacote Office</a>
        <a href="https://www.udemy.com/course/microsoft-excel-intermediario/?referralCode=CE4301E4AC8E4D423FF2">Microsoft Excel</a>
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
        <a href="/about">Quem somos</a>
        <a href="http://">Política de privacidade</a>
        <a href="http://">Política de reembolso</a>
      </nav>
    </div>

    <div class="cardFooter">
      <span>Redes Sociais:</span>
      <ButtonComponent path="https://www.facebook.com/people/Kr-Riley-Solu%C3%A7%C3%B5es/61552679426384/" type-button="button" msg="Facebook" bg-color="transparent" text-color="white" />
      <ButtonComponent path="https://www.instagram.com/rileysolucoes/" type-button="button" msg="Instagram" bg-color="transparent" text-color="white" />
      <ButtonComponent path="https://www.linkedin.com/company/rileysolucoes/" type-button="button" msg="Linkedin" bg-color="transparent" text-color="white" />
    </div>


  </ContainerComponent>
</template>

<style scoped>
@media only screen and (min-width: 300px) {
  .imagemComp1 {
    height: 200px !important;
  }

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

@media only screen and (min-width: 400px) {
  .imagemComp1 {
    height: 200px !important;
  }

}

@media only screen and (min-width: 600px) {
  .imagemComp1 {
    height: 200px !important;
  }

}

@media only screen and (min-width: 768px) {
  .imagemComp1 {
    height: 300px !important;
  }

}

@media only screen and (min-width: 992px) {
  .imagemComp1 {
    height: 300px !important;
  }
}

@media only screen and (min-width: 1200px) {
  .imagemComp1 {
    height: 300px !important;
  }

  #container1{
    padding: 10rem !important;
    grid-template-columns: repeat(4, 1fr);
  }

  #container2 {
    height: 400px !important;
  }

  #container3 {
    height: 300px !important;
  }
}
</style>
