<script setup>
const props = defineProps({
  videoPath: {
    type: String,
    required: true
  },
  boxShad: String,
  borderRad: String,
  widthVideo: String,
  heightVideo: String,
  contVideo: Boolean,
  autoPlay: Boolean,
  mutedVideo: Boolean
})
</script>

<template>
  <video
    class="meu-video"
    crossorigin="anonymous"
    :controls="props.contVideo"
    :autoplay="props.autoPlay"
    :muted="props.mutedVideo"
    :style="{
      boxShadow: props.boxShad,
      borderRadius: props.borderRad,
      width: props.widthVideo,
      height: props.heightVideo,
      objectFit: 'cover'
    }"
  >
    <source :src="props.videoPath" type="video/mp4" />
    Seu navegador não suporta o elemento de vídeo.
  </video>
</template>

<style scoped>
.meu-video{
  height: auto;
}
@media only screen and (min-width: 300px){
  .meu-video{
    width: calc(100% - 10%);
  }
}
@media only screen and (min-width: 400px){
  .meu-video{
    width: calc(100% - 20%);
  }
}
@media only screen and (min-width: 600px){
  .meu-video{
    width: calc(100% - 30%);
  }
}
@media only screen and (min-width: 768px){
  .meu-video{
    width: calc(100% - 40%);
  }
}
@media only screen and (min-width: 992px){
  .meu-video{
    width: calc(100% - 50%);
  }
}
@media only screen and (min-width: 1200px){
  .meu-video{
    width: calc(100% - 60%);
  }
}
</style>
