<script setup>
const props = defineProps({
  bgColor: String,
  borderSt: String,
  borderWd: String,
  borderCo: String,
  boxShad: String,
  borderRad: String,
  tituloCard: String,
  subtitulo: String,
  paragrafoCard: String,
  fontWeightspan: {
    type: String,
    default: '600'
  },
  fontSizespan: {
    type: String,
    default: '16px'
  },
  fontWeightsub: {
    type: String,
    default: '500'
  },
  fontSizesub: {
    type: String,
    default: '16px'
  },
  fontWeightp: {
    type: String,
    default: '400'
  },
  fontSizep: {
    type: String,
    default: '16px'
  },
  textAlign: String,
  spanColor: String,
  paragrafoColor: String,
  maxLinesp: {
    type: String,
    default: '5'
  },
  spanShad: String,
  paragrafoShad: String
})

</script>

<template>
  <div class="cardComponente"
    :style="{
      backgroundColor: props.bgColor,
      borderStyle: props.borderSt,
      borderWidth: props.borderWd,
      borderColor: props.borderCo,
      boxShadow: props.boxShad,
      borderRadius: props.borderRad,
      textAlign: props.textAlign
    }"
  >
    <span :style="{
      fontWeight: props.fontWeightspan,
      fontSize: props.fontSizespan,
      color: props.spanColor,
      textShadow: props.spanShad
    }">{{ props.tituloCard }}</span>
    <span :style="{
      fontWeight: props.fontWeightsub,
      fontSize: props.fontSizesub,
      color: props.spanColor,
      textShadow: props.spanShad
    }" >
      {{ props.subtitulo }}
    </span>
    <p :style="{
      fontWeight: props.fontWeightp,
      fontSize: props.fontSizep,
      color: props.paragrafoColor,
      maxLines: props.maxLinesp,
      textShadow: props.paragrafoShad
    }">{{ props.paragrafoCard }}</p>
    <slot></slot>
  </div>

</template>

<style scoped>
.cardComponente{
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
span{
  width: 100%;
  margin-bottom: 5px;
}
p{
  width: 100%;
  margin-bottom: 5px;
}
slot img{
  width: 100%;
  height: 100%;
}
@media only screen and (min-width: 300px){
  .cardComponente{
    width: calc(100% - 10%);
  }

}
@media only screen and (min-width: 400px){
  .cardComponente{
    width: calc(100% - 20%);
  }
}
@media only screen and (min-width: 600px){
  .cardComponente{
    width: calc(100% - 30%);
  }
}
@media only screen and (min-width: 768px){
  .cardComponente{
    width: calc(100% - 40%);
  }
}
@media only screen and (min-width: 992px){
  .cardComponente{
    width: calc(100% - 50%);
  }
}
@media only screen and (min-width: 1200px){
  .cardComponente{
    width: calc(100% - 40%);
  }
}
</style>
