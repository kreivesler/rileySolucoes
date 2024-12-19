<script setup>
import { ref, onMounted } from 'vue';

const myForm = ref(null);

const formData = ref({
  companyName: '',
  cnpj: '',
  responsibleName: '',
  email: '',
  phoneNumber: '',
  service: '',
  description: '',
  deadline: null,
  budget: ''
});

// Resetando o formulário ao montar o componente
onMounted(() => {
  if (myForm.value) {
    myForm.value.reset();
  }
});

const submitForm = async () => {
  try {
    const response = await fetch('https://formsubmit.co/ajax/contato@rileysolucoes.com.br', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData.value), // Acesso a formData.value
    });

    if (response.ok) {
      alert('Formulário enviado com sucesso! Retornaremos em breve!');
      if (myForm.value) {
        myForm.value.reset(); // Reseta o formulário após envio
      }
    } else {
      alert('Falha ao enviar formulário, tente novamente!');
    }
  } catch (error) {
    console.error('Erro ao enviar formulário:', error);
    alert('Ocorreu um erro ao enviar, tente contato pelo email: contato@rileysolucoes.com.br');
  }
};

</script>

<template>
  <form class="formulario" @submit.prevent="submitForm" ref="myForm" method="post">

    <input type="hidden" name="_captcha" value="false">

    <label for="company-name">Nome da empresa:</label>
    <input type="text" id="company-name" v-model="formData.companyName" placeholder="Sua Empresa LTDA" required>

    <label for="cnpj">CNPJ:</label>
    <input type="text" id="cnpj" v-model="formData.cnpj" placeholder="CNPJ: 00.000.000/0000-00" required>

    <label for="responsible-name">Nome do responsável:</label>
    <input type="text" id="responsible-name" v-model="formData.responsibleName" placeholder="Informe seu nome" required>

    <label for="email">Informe seu email:</label>
    <input type="email" id="email" v-model="formData.email" placeholder="contato@empresa.com.br" required>

    <label for="phone">Informe seu celular:</label>
    <input type="tel" id="phone" v-model="formData.phoneNumber" @input="formatPhoneNumber" maxlength="15"
      placeholder="(00) 0 0000-0000" required>

    <label for="services">Selecione o serviço:</label>
    <input list="listaServicos" id="services" v-model="formData.service" placeholder="Clique duas vezes para selecionar..." required>
    <datalist id="listaServicos">
      <option value="Site Institucional"></option>
      <option value="Landing Page"></option>
      <option value="Otimização de Site"></option>
      <option value="Consultoria e Suporte"></option>
      <option value="Outros"></option>
    </datalist>

    <label for="description">Descrição do projeto:</label>
    <textarea maxlength="700" id="description" v-model="formData.description" placeholder="Descreva brevemente o que você precisa..." required></textarea>

    <label for="deadline">Prazo desejado:</label>
    <input type="date" id="deadline" v-model="formData.deadline" required>

    <label for="budget">Orçamento estimado (opcional):</label>
    <input type="number" id="budget" v-model="formData.budget" placeholder="Digite um valor em R$" >

    <button type="submit">Enviar</button>
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
