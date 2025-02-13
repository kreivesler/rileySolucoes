<script setup>
import { computed } from 'vue'

const props = defineProps({
  imgPath: String,
  imgAlt: String,
  boxShad: String,
  borderRad: String,
  base64: Boolean
})

// Computando o src da imagem com base na prop base64
const imgSrc = computed(() =>
  props.base64 ? `data:image/png;base64,${props.imgPath}` : props.imgPath
)
</script>

<template>
  <img
    class="imagemUnica"
    :src="imgSrc"
    :alt="props.imgAlt"
    :style="{
      boxShadow: props.boxShad,
      borderRadius: props.borderRad
    }"
  >
</template>

<style scoped>
.imagemUnica{
  height: auto;
  border-radius: 10px;
}
@media only screen and (min-width: 300px){
  .imagemUnica{
    width: calc(100% - 10%);
  }
}
@media only screen and (min-width: 400px){
  .imagemUnica{
    width: calc(100% - 20%);
  }
}
@media only screen and (min-width: 600px){
  .imagemUnica{
    width: calc(100% - 30%);
  }
}
@media only screen and (min-width: 768px){
  .imagemUnica{
    width: calc(100% - 40%);
  }
}
@media only screen and (min-width: 992px){
  .imagemUnica{
    width: calc(100% - 50%);
  }
}
@media only screen and (min-width: 1200px){
  .imagemUnica{
    width: calc(100% - 60%);
  }
}
</style>
