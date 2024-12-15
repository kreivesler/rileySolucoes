<script setup>
const props = defineProps({
  bgImage: {
    type: String,
    default: null
  },
  flexD: {
    type: String,
    default: 'row' // Valor padrão que pode ser passado como prop
  },
  displayType: {
    type: String,
    default: 'block'
  },
  GapComp: {
    type: String,
    default: '40px'
  },
  paddingComp: {
    type: String,
    default: '1rem'
  },
  bgColor: {
    type: String,
    default: 'none'
  },
  heightComp: {
    type: String,
    default: '500px'
  },
  opacityComp: {
    type: String,
    default: 'none'
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
        gap: props.GapComp,
        padding: props.paddingComp,
        backgroundColor: props.bgColor,
        height: props.heightComp,
        opacity: props.opacityComp
      }"
  >
    <slot></slot>
  </div>
</template>

<style scoped>
.container {
  width: 100vw;
  padding: 1rem;
  align-items: center;
  gap: 40px;
  justify-content: space-around;
  display: flex;
  box-sizing: border-box;
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
    .has-bg-image ::v-deep .cardComponente {
        color: white;
    }
    .has-bg-image ::v-deep h2 {
        font-size: 1.5vw;
        color: rgb(25, 0, 255);
        font-weight: 800;
    }
    .has-bg-image ::v-deep .GridItem{
      color: white;
    }
}

@media (prefers-color-scheme: dark) {
    .has-bg-image ::v-deep .cardComponente {
        color: white;
        border-color: rgba(255, 255, 255, 0.219);
    }
    .has-bg-image ::v-deep h2 {
        font-size: 2vw;
        color: rgb(25, 0, 255);
        font-weight: 800;
    }
    .has-bg-image ::v-deep .GridItem{
      color: white;
    }
}
/*Media altera a coluna da grid */
@media only screen and (min-width: 300px){
  .containerGrid{
    padding: 2rem !important;
    grid-template-columns: repeat(1, 1fr);
  }
  .container{
    height: auto !important;
  }
}
@media only screen and (min-width: 400px){
  .containerGrid{
    padding: 3rem !important;
    grid-template-columns: repeat(1, 1fr);
  }
  .container{
    height: auto !important;
  }
}
@media only screen and (min-width: 600px){
  .containerGrid{
    padding: 4rem !important;
    grid-template-columns: repeat(2, 1fr);
  }
  .container{
    height: auto !important;
  }
}
@media only screen and (min-width: 768px){
  .containerGrid{
    padding: 5rem !important;
    grid-template-columns: repeat(2, 1fr);
  }
  .container{
    height: auto !important;
  }
}
@media only screen and (min-width: 992px){
  .containerGrid{
    padding: 6rem !important;
    grid-template-columns: repeat(3, 1fr);
  }
  .container{
    height: auto !important;
  }
}
@media only screen and (min-width: 1200px){
  .containerGrid{
    padding: 5rem !important;
    grid-template-columns: repeat(3, 1fr);
  }
}
/* Media queries sobrepõem o valor passado pela prop */
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
}
</style>
