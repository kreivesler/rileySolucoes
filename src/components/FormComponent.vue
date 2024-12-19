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
  <form @submit.prevent="submitForm" ref="myForm" method="post">

    <input type="hidden" name="_captcha" value="false">

    <label for="company-name">Nome da empresa:</label>
    <input type="text" id="company-name" v-model="formData.companyName" required>

    <label for="cnpj">CNPJ:</label>
    <input type="text" id="cnpj" v-model="formData.cnpj" required>

    <label for="responsible-name">Nome do responsável:</label>
    <input type="text" id="responsible-name" v-model="formData.responsibleName" required>

    <label for="email">Informe seu email:</label>
    <input type="email" id="email" v-model="formData.email" required>

    <label for="phone">Informe seu celular:</label>
    <input type="tel" id="phone" v-model="formData.phoneNumber" @input="formatPhoneNumber" maxlength="15"
      placeholder="(00) 0 0000 - 0000" required>

    <label for="services">Selecione o serviço:</label>
    <input list="listaServicos" id="services" v-model="formData.service" required>
    <datalist id="listaServicos">
      <option value="Site Institucional"></option>
      <option value="Landing Page"></option>
      <option value="Otimização de Site"></option>
      <option value="Consultoria e Suporte"></option>
      <option value="Outros"></option>
    </datalist>

    <label for="description">Descrição do projeto:</label>
    <textarea id="description" v-model="formData.description" required></textarea>

    <label for="deadline">Prazo desejado:</label>
    <input type="date" id="deadline" v-model="formData.deadline" required>

    <label for="budget">Orçamento estimado (opcional):</label>
    <input type="number" id="budget" v-model="formData.budget">

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

button {
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
