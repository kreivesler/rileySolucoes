<script setup>
import { reactive, computed } from 'vue';
import { headerApi } from '@/data/api';
const api = import.meta.env.VITE_API_PRODUCAO


const userData = reactive({
  email: "",
  password: "",
  twoPassword: "",
})

const senha = computed(()=>{
  return userData.password === userData.twoPassword ? userData.password : ""
})


const submitForm = async ()=>{
  try{
    const usuario = userData.value
    if(!usuario.email || !senha.value){
      return alert('Preencha todos os campos corretamente')
    }

    const cadastraUser = await fetch(`${api}`,{
      method: 'POST',
      headers: headerApi.headerApiTeste,
      body: JSON.stringify({
        userIdCheckout: '' ,
        userEmail: usuario.email,
        userPassword: toString(senha),
        cursoId: ''
      })
    })

    if(!cadastraUser.ok){
      const erroCadastro = cadastraUser.json().catch(()=> response.text())
      throw new Error('Erro ao cadastrar usuário: '+ JSON.stringify(erroCadastro))
    }

    const response = cadastraUser.json()

  } catch (err){
    console.log('Erro ao criar acesso para usuário', err)
  }
}

</script>
<template>
  <form class="formulario" @submit.prevent="submitForm">
    <label for="emailUser">Escreva seu e-mail:</label>
    <input id="emailUser" v-model="email" type="email" placeholder="Digite seu e-mail" required>

    <label for="passUser">Sua senha:</label>
    <input type="password" id="passUser" v-model="password" placeholder="Digite sua senha" required>

    <input type="password" v-model="twoPassword" placeholder="Digite novamente" required>

    <button type="submit">Criar acesso</button>
  </form>
</template>
<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

input,
textarea,
button {
  padding: 10px;
  font-size: 16px;
}
textarea{
  resize: none;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  font-weight: 600;
}

button:hover {
  background-color: #0056b3;
}
@media only screen and (min-width: 300px){
  .formulario{
    width: 100%;
    padding: 15px;
  }
  .formulario textarea{
    height: 200px;
  }
  .formulario input,
  textarea,
  button {
    width: 100%;
  }
}
@media only screen and (min-width: 400px){
  .formulario{
    width: 100%;
    padding: 25px;
  }
  .formulario textarea{
    height: 200px;
  }
  .formulario input,
  textarea,
  button {
    width: 100%;
  }
}
@media only screen and (min-width: 600px){
  .formulario{
    width: 100%;
    margin-left: 5%;
  }
  .formulario textarea{
    height: 200px;
  }
  .formulario input,
  textarea,
  button {
    width:calc(100% - 10%);
  }
}
@media only screen and (min-width: 768px){
  .formulario{
    width: 100%;
    margin-left: 5%;
  }
  .formulario textarea{
    height: 200px;
  }
  .formulario input,
  textarea,
  button {
    width:calc(100% - 10%);
  }
}
@media only screen and (min-width: 992px){
  .formulario{
    width: 50%;
  }
  .formulario textarea{
    height: 200px;
  }
  .formulario input,
  textarea,
  button {
    width: calc(100% - 10%);
  }
}
@media only screen and (min-width: 1200px){
  .formulario{
    width: 50%;
  }
  .formulario textarea{
    height: 200px;
  }
  .formulario input,
  textarea,
  button {
    width: calc(100% - 20%);
  }
}
</style>
