<script setup>
import { reactive } from 'vue';
import { headerApi } from '@/data/api';
const api = import.meta.env.VITE_API_PRODUCAO

const dataUser = reactive({
  name: "",
  email: "",
  password: ""
})

// Função para enviar o formulário
const submitForm = async () => {
  try {
    if(!dataUser.name || !dataUser.email || !dataUser.password){
      return alert('Credenciais invalidas, tente novamente')
    }

    const response = await fetch(`${api}/a/login` , {
      method: 'POST',
      headers: headerApi.headerApiTeste ,
      body: JSON.stringify(dataUser),
    });

    if (!response.ok) {
      throw new Error('Erro ao fazer login');
    }

    const data = await response.json();
    console.log('Resposta da API:', data);
    alert('Login bem-sucedido!');
  } catch (error) {
    console.error(error);
    alert('Falha ao fazer login. Verifique suas credenciais.');
  }
};
</script>

<template>
  <form class="formulario" @submit.prevent="submitForm">
    <label for="nameUser">Nome completo:</label>
    <input type="text" id="nameUser" v-model="dataUser.name" placeholder="Nome" required>

    <label for="emailUser">Informe seu email:</label>
    <input id="emailUser" v-model="dataUser.email" type="email" placeholder="Email" required>

    <label for="passUser">Informe sua senha:</label>
    <input type="password" id="passUser" v-model="dataUser.password" placeholder="Senha" required>

    <button type="submit">Fazer login</button>
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
