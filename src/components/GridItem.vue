<script setup>
const props = defineProps({
  Imagem: {
    type: String,
    required: false
  },
  Alt: {
    type: String,
    required: false
  },
  Titulo: {
    type: String
  },
  Paragrafo: {
    type: String
  },
  bgColor: String,
  borderSt: String,
  borderWd: String,
  borderCo: String,
  boxShad: String,
  borderRad: String,
  textShad: String,
  textColor: String,
  imagePath: String,
  tituloColor: String,
  paragrafoColor: String,
  fontWeight: {
    type: String,
    default: '800'
  },
  fontS: {
    type: String,
    default: '1.2rem'
  },
  widthImgComp: {
    type: String,
    default: '100%'
  },
  heightImgComp: {
    type: String,
    default: '100%'
  },
  fontSizep: {
    type: String,
    default: '1rem'
  },
  textAlign: {
    type: String,
    default: 'left'
  }
})
</script>

<template>
  <!-- Adiciona a classe 'has-image' dinamicamente se props.Imagem existir -->
  <div :class="['GridItem', { 'has-image': props.Imagem, 'has-bg-image': props.imagePath }]"
    :style="{
      borderStyle: props.borderSt,
      backgroundColor: props.bgColor,
      borderWidth: props.borderWd,
      borderColor: props.borderCo,
      boxShadow: props.boxShad,
      borderRadius: props.borderRad,
      textShadow: props.textShad,
      color: props.textColor,
      backgroundImage: props.imagePath ? `url(${props.imagePath})` : ''
    }">
    <img v-if="props.Imagem" :src="props.Imagem" :alt="props.Alt"
      :style="{
        borderRadius: props.borderRad,
        width: props.widthImgComp,
        height: props.heightImgComp
        }"
    />
    <h3 :style="{
      color: props.tituloColor,
      fontWeight: props.fontWeight,
      textAlign: props.textAlign,
      fontSize: props.fontS
    }">{{ props.Titulo }}</h3>
    <p :style="{
      fontSize: props.fontSizep,
      textAlign: props.textAlign,
      color: props.paragrafoColor
    }">{{ props.Paragrafo }}</p>
    <slot></slot>
  </div>
</template>

<style scoped>
.GridItem {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  background-position: center;
  background-size: cover;
  transition: 0.6s;
  box-sizing: border-box;
}

.GridItem:hover {
  transform: scale(1.1);
}

/* Remove o box-shadow quando a GridItem tem uma imagem */
.GridItem.has-image:hover {
  box-shadow: none !important;
}

img {
  width: 100%;
  height: 100%;
}

img:hover {
  transition: 0.6s;
  transform: scale(1.1);
}

h3 {
  width: 100%;
  font-size: 1.2rem;
  font-weight: 800;
}

p {

  margin-bottom: 5px;
}

@media (prefers-color-scheme: light) {
  img:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
  .has-bg-image{
    color: white;
    text-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
}

@media (prefers-color-scheme: Dark) {
  .GridItem {
    text-shadow: none !important;
  }
  .has-bg-image{
    color: white;
    text-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
}
</style>
