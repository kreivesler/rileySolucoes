<script setup>
const props = defineProps({
    msg: String,
    link: String,
    msgLink: String,
    footerColor: {
      type: String,
      default: 'inherit'
    },
    footerBg: String,
    msgLinkColor: {
      type: String,
      default: 'rgb(58, 55, 236)'
    }
})

function encaminharUser() {
    window.location.href = props.link
}
</script>

<template>
    <footer class="footer-componente" :style="{
      color: props.footerColor,
      backgroundColor: props.footerBg
    }"  >
        {{ props.msg }}
        <a @click="encaminharUser" :style="{
          color: props.msgLinkColor
        }">{{ props.msgLink }}</a>
    </footer>
</template>

<style scoped>
.footer-componente {
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
}
a{
  cursor: pointer;
  text-decoration: none;
}
</style>
