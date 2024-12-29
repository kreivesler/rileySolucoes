<script setup>
import ContainerComponent from '@/components/ContainerComponent.vue';
import CardComponent from '@/components/CardComponent.vue';
import { policyService } from '@/data/politica';
</script>

<template>
<ContainerComponent id="container1" display-type="flex" flex-d="column" >
  <CardComponent class="cardPolitic" :titulo-card="policyService.title" bgColor="transparent" font-sizespan="2rem" font-weightspan="800" text-align="left" :paragrafo-card="policyService.introduction">
    <span>1. Prazos de Desenvolvimento</span>
    <ol type="I">
      <li>{{ policyService.terms.developmentTimeline['1.1'] }}</li>
      <li>{{ policyService.terms.developmentTimeline['1.2'] }}</li>
      <li>{{ policyService.terms.developmentTimeline['1.3'] }}</li>
    </ol>

    <span>2. Política de Cancelamento Durante o Desenvolvimento</span>
    <ol type="I" >
      <li>{{ policyService.terms.cancellationDuringDevelopment['2.1'] }}</li>
      <li>{{ policyService.terms.cancellationDuringDevelopment['2.2'] }}</li>
      <ol type="a" >
        <li>{{ policyService.terms.cancellationDuringDevelopment['2.2.1'] }}</li>
      </ol>
    </ol>

    <span>3. Cancelamento Após a Entrega do Projeto</span>
    <ol type="I" >
      <li>{{ policyService.terms.cancellationAfterDelivery['3.1'] }}</li>
      <li>{{ policyService.terms.cancellationAfterDelivery['3.2'].note }}</li>
        <ol type="a" >
          <li>{{ policyService.terms.cancellationAfterDelivery['3.2'].conditions['3.2.1'] }}</li>
          <li>{{ policyService.terms.cancellationAfterDelivery['3.2'].conditions['3.2.2'] }}</li>
          <li>{{ policyService.terms.cancellationAfterDelivery['3.2'].conditions['3.2.3'] }}</li>
        </ol>
      <li>{{ policyService.terms.cancellationAfterDelivery['3.3'].nonCompliance }}</li>
        <ol type="a" >
          <li>{{ policyService.terms.cancellationAfterDelivery['3.3'].penalties[0] }}</li>
          <li>{{ policyService.terms.cancellationAfterDelivery['3.3'].penalties[1] }}</li>
        </ol>
    </ol>

    <span>4. Materiais Visuais e Responsabilidade por Fornecimento</span>
    <ol type="I" >
      <li>{{ policyService.terms.visualMaterials['4.1'] }}</li>
      <li>{{ policyService.terms.visualMaterials['4.2'].note }}</li>
        <ol type="a" >
          <li>{{ policyService.terms.visualMaterials['4.2'].criteria[0] }}</li>
          <li>{{ policyService.terms.visualMaterials['4.2'].criteria[1] }}</li>
          <li>{{ policyService.terms.visualMaterials['4.2'].criteria[2] }}</li>
        </ol>
      <li>{{ policyService.terms.visualMaterials['4.3'] }}</li>
    </ol>

    <span>5. Proibição de Venda ou Repasso do Projeto</span>
    <ol type="I" >
      <li>{{ policyService.terms.projectOwnership['5.1'] }}</li>
      <li>{{ policyService.terms.projectOwnership['5.2'] }}</li>
    </ol>

    <span>6. Direitos de Uso do Projeto</span>
    <ol type="I" >
      <li>{{ policyService.terms.usageRights['6.1'] }}</li>
      <li>{{ policyService.terms.usageRights['6.2'] }}</li>
    </ol>

    <span>7. Proteção Contra Fraudes e Golpes</span>
    <ol type="I" >
      <li>{{ policyService.terms.fraudProtection['7.1'] }}</li>
      <li>{{ policyService.terms.fraudProtection['7.2'] }}</li>
      <li>{{ policyService.terms.fraudProtection['7.3'] }}</li>
      <li>{{ policyService.terms.fraudProtection['7.4'] }}</li>
    </ol>

    <span>8. Responsabilidades do Cliente</span>
    <ol type="I" >
      <li>{{ policyService.terms.clientResponsibilities['8.1'] }}</li>
      <li>{{ policyService.terms.clientResponsibilities['8.2'] }}</li>
      <li>{{ policyService.terms.clientResponsibilities['8.3'] }}</li>
    </ol>

    <span>9. Foro e Disposições Finais</span>
    <ol type="I" >
      <li>{{ policyService.terms.jurisdiction['9.1'] }}</li>
      <li>{{ policyService.terms.jurisdiction['9.2'] }}</li>
    </ol>
  </CardComponent>
</ContainerComponent>



</template>

<style scoped>
.cardPolitic{
  align-items: flex-start;
}
.cardPolitic span{
  font-weight: 600;
}
@media only screen and (min-width: 300px){}
@media only screen and (min-width: 400px){}
@media only screen and (min-width: 600px){}
@media only screen and (min-width: 768px){}
@media only screen and (min-width: 992px){}
@media only screen and (min-width: 1200px){

  #container1 p {
    margin-bottom: 5px;
  }

}
</style>
