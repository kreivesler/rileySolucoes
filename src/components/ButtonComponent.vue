<script setup>
const props = defineProps({
  textColor: {
    type: String,
    required: true
  },
  bgColor: {
    type: String,
    required: true
  },
  typeButton: {
    type: String,
    required: true
  },
  msg: {
    type: String,
    required: true
  },
  path: {
    type: String,
    required: true
  },
  paddingComp: {
    type: String,
    default: '10px'
  },
  borderRad: {
    type: String,
    default: '10px'
  },
  borderSt: {
    type: String,
    default: 'none'
  }
})
const handleClick = ()=>{
  window.location.href = props.path
}
</script>

<template>
  <button class="button-componente" :type="props.typeButton"
    :style="{
      backgroundColor: props.bgColor,
      color: props.textColor,
      padding: props.paddingComp,
      borderRadius: props.borderRad,
      borderStyle: props.borderSt
      }"
    @click="handleClick"
    >
    {{ props.msg }}
  </button>
</template>

<style scoped>
.button-componente{
  cursor: pointer;
  font-weight: 500;
}
.button-componente:hover{
  font-weight: 800;
  transform: scale(1.1);
  transition: 0.6s;
  transition-delay: 15ms;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
@media only screen and (min-width: 300px){
  .button-componente{
    font-size: calc(1.5rem - 0.6rem);
    padding: 5px !important;
  }
}
@media only screen and (min-width: 400px){
  .button-componente{
    font-size: calc(1.5rem - 0.5rem);
    padding: 8px !important;
  }
}
@media only screen and (min-width: 600px){
  .button-componente{
    font-size: calc(1.5rem - 0.2rem);
  }
}
@media only screen and (min-width: 768px){
  .button-componente{
    font-size: calc(1.5rem - 0.4rem);
  }
}
@media only screen and (min-width: 992px){
  .button-componente{
    font-size: calc(1.2rem - 0.2rem);
  }
}
@media only screen and (min-width: 1200px){
  .button-componente{
    font-size: 1rem;
  }
}
</style>
