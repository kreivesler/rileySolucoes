<script setup>
import ContainerComponent from '@/components/ContainerComponent.vue';
import CardComponent from '@/components/CardComponent.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
import { conteudoServicos } from '@/data/texts';
import { RouterLink } from 'vue-router';
</script>

<template>

  <ContainerComponent id="container4"  display-type="flex" flex-d="column">
    <CardComponent class="cardAbout" bgColor="transparent" titulo-card="Sobre a KR Riley Soluções" font-sizespan="2rem" font-weightspan="800" paragrafo-card="Quem somos" font-sizep="1.2rem">

      <p>A KR Riley Soluções é uma empresa jovem, inovadora e focada em transformar a presença digital dos nossos clientes. Fundada com o objetivo de oferecer desenvolvimento web de qualidade, nossa missão é criar soluções sob medida que atendam às necessidades específicas de cada negócio, seja ele pequeno ou grande.</p>

      <p>Com a visão de proporcionar uma experiência única para nossos clientes, trabalhamos para entregar sites que não só sejam esteticamente agradáveis, mas também funcionais, rápidos e otimizados. Acreditamos que um site bem desenvolvido é uma ferramenta poderosa para o crescimento de qualquer empresa.</p>

      <span class="fonteWeigth" >Nosso compromisso</span>

      <p>Na KR Riley Soluções, nosso compromisso é com a qualidade e satisfação do cliente. Estamos focados em entender as necessidades do seu negócio e oferecer soluções digitais que ajudem você a alcançar seus objetivos online. Com isso, garantimos que o seu site seja não apenas visualmente atraente, mas também eficiente, seguro e otimizado para gerar resultados.</p>

      <span class="fonteWeigth" >Nossa abordagem</span>

      <p>Acreditamos em um desenvolvimento colaborativo. Por isso, trabalhamos em parceria com nossos clientes desde o início do projeto até a entrega final. Nosso processo inclui:</p>

      <ul>
        <li> <b class="fonteWeigth2" >Planejamento cuidadoso</b> para entender suas necessidades.</li>
        <li> <b class="fonteWeigth2" >Design personalizado</b> para criar uma identidade visual única.</li>
        <li> <b class="fonteWeigth2" >Desenvolvimento responsivo</b> para garantir a melhor experiência em todos os dispositivos.</li>
        <li> <b class="fonteWeigth2" >Otimização para SEO</b> para que seu site seja facilmente encontrado.</li>
        <li> <b class="fonteWeigth2" >Suporte contínuo</b> para garantir que seu site continue funcionando sem problemas.</li>
      </ul>

      <span class="fonteWeigth" >Por que escolher a KR Riley Soluções?</span>

      <ul>
        <li> <b class="fonteWeigth2" >Soluções personalizadas:</b> Criamos sites que refletem a identidade e os objetivos de cada cliente.</li>
        <li> <b class="fonteWeigth2" >Foco em desempenho:</b> Garantimos sites rápidos, seguros e fáceis de navegar.</li>
        <li> <b class="fonteWeigth2" >Comprometimento:</b> Estamos dedicados a oferecer o melhor serviço possível e apoiar nossos clientes a cada passo.</li>
      </ul>

      <p>Se você está pronto para dar o próximo passo no mundo digital, estamos aqui para ajudar. Na KR Riley Soluções, o seu sucesso online é a nossa prioridade.</p>
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
.cardAbout {
  align-items: flex-start;
}
.fonteWeigth{
  font-weight: 700;
}
.fonteWeigth2{
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
  #container3 {
    height: 300px !important;
  }

  #container4 {
    height: 800px !important;
  }

  #container4 p {
    margin-bottom: 5px;
  }
}
</style>
