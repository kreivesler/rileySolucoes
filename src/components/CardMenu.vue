<script setup>
const props = defineProps({
  bgColor: String,
  borderRad: String,
  borderSt: {
    type: String,
    default: 'none'
  },
  paddingComp: {
    type: String,
    default: '5px'
  },
  flexD: {
    style: String,
    default: 'row'
  },
  widthComp: {
    style: String,
    default: '100%'
  },
  heigthComp: {
    style: String,
    default: '100%'
  }
})
</script>

<template>
    <div class="cardMenu"
      :style="{
        width: props.widthComp,
        heigth: props.heigthComp,
        backgroundColor: props.bgColor,
        borderRadius: props.borderRad,
        borderStyle: props.borderSt,
        padding: props.paddingComp,
        flexDirection: props.flexD
      }">
      <slot></slot>
    </div>

</template>

<style scoped>
.cardMenu{

  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

@media only screen and (min-width: 1200px){
  :deep(.carrocel-componente){
    width: 100%;
  }
}
</style>
