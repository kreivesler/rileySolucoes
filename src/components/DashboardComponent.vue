<script setup>
const props = defineProps({
  bgImage: {
    type: String,
    default: null
  },
  paddingComp: {
    type: String,
    default: '1rem'
  },
  flexD: {
    type: String,
    default: 'row' // Valor padrão que pode ser passado como prop
  },
  displayType: {
    type: String,
    default: 'block'
  },
  widthDash: {
    type: String
  },
  bgColor: String,
  textCo: String,
  gapComp: {
    type: String,
    default: '40px'
  }
})
</script>

<template>
  <div class="container"
      :class="{ 'has-bg-image': props.bgImage, 'containerGrid': props.displayType === 'grid' }"
      :style="{
        display: props.displayType,
        backgroundImage: props.bgImage ? `url(${props.bgImage})` : 'none',
        flexDirection: props.flexD,
        width: props.widthDash,
        backgroundColor: props.bgColor,
        color: props.textCo,
        padding: props.paddingComp,
        gap: props.gapComp
      }"
  >
    <slot></slot>
  </div>
</template>

<style scoped>
.container {
  width: 100vw;
  min-height: 500px;
  align-items: center;
  gap: 40px;
  justify-content: flex-start;
  display: flex;
  /* Removi flex-direction aqui, pois será aplicado via prop */
}
.containerGrid {
  display: grid;
  align-items: center;
  justify-content: center;
}
.has-bg-image{
  background-position: center;
  background-size: cover;
}
@media (prefers-color-scheme: light) {
    .has-bg-image :deep( .cardComponente) {
        color: white;
    }
    .has-bg-image :deep( h2) {
        font-size: 1.5vw;
        color: rgb(25, 0, 255);
        font-weight: 800;
    }
    .has-bg-image :deep( .GridItem){
      color: white;
    }
}

@media (prefers-color-scheme: dark) {
    .has-bg-image :deep(.cardComponente) {
        color: white;
        border-color: rgba(255, 255, 255, 0.219);
    }
    .has-bg-image :deep(h2) {
        font-size: 2vw;
        color: rgb(25, 0, 255);
        font-weight: 800;
    }
    .has-bg-image :deep(.GridItem){
      color: white;
    }
}
/*Media altera a coluna da grid */
@media only screen and (min-width: 300px){
  .containerGrid{
    padding: 2rem;
    grid-template-columns: repeat(1, 1fr);
  }
}
@media only screen and (min-width: 400px){
  .containerGrid{
    padding: 3rem;
    grid-template-columns: repeat(1, 1fr);
  }
}
@media only screen and (min-width: 600px){
  .containerGrid{
    padding: 4rem;
    grid-template-columns: repeat(2, 1fr);
  }
}
@media only screen and (min-width: 768px){
  .containerGrid{
    padding: 5rem;
    grid-template-columns: repeat(2, 1fr);
  }
}
@media only screen and (min-width: 992px){
  .containerGrid{
    padding: 6rem;
    grid-template-columns: repeat(3, 1fr);
  }
}
@media only screen and (min-width: 1200px){
  .containerGrid{
    padding: 10rem;
    grid-template-columns: repeat(3, 1fr);
  }
}
/* Media queries sobrepõem o valor passado pela prop
@media only screen and (max-width: 768px) {
  .container {
    flex-direction: column !important;
  }
}

@media only screen and (min-width: 768px) {
  .container {
    flex-direction: row !important;
  }
}

@media only screen and (min-width: 992px) {
  .container {
    flex-direction: row-reverse !important;
  }
}

@media only screen and (min-width: 1200px) {
  .container {
    flex-direction: row !important;
  }
}*/
</style>
