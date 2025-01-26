<script setup>
import { reactive, ref } from "vue";

// Estado do cliente
const cliente = reactive({
  nome: "",
  cpfCnpj: "",
  email: "",
  billingType: "",
});

// Estado do cartão de crédito
const cartaoCredito = reactive({
  nome: "",
  numero: "",
  mes: "",
  ano: "",
  ccv: "",
});

// Estado do cliente associado ao cartão
const cartaoCreditoCliente = reactive({
  nome: "",
  cpfCnpj: "",
});

// Controle do formulário exibido
const showSecondForm = ref(false); // `false` exibe o primeiro formulário, `true` exibe o segundo

// Função para criar o cliente via API
const criarCliente = async (cliente) => {
  try {
    const response = await fetch("https://sandbox.asaas.com/api/v3/customers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "minhaAplicacao",
        access_token:
          "$aact_MzkwODA2MWY2OGM3MWRlMDU2NWM3MzJlNzZmNGZhZGY6OmRlZDA4NjY2LTYyMWItNGJlNC05MzdhLTNiNjE1YzNmOGJhNjo6JGFhY2hfNTIwNTk4YTItNzNiMC00MzIxLThlOGEtYjAyZjk2ODY4MWZm",
      },
      body: JSON.stringify({
        name: cliente.nome,
        cpfCnpj: cliente.cpfCnpj,
        email: cliente.email,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      console.log("Cliente criado com sucesso:", data);
      cliente.id = data.id; // Armazena o ID no objeto cliente
    } else {
      console.error("Erro ao criar cliente:", data);
    }
  } catch (error) {
    console.error("Erro na requisição:", error);
  }
};

// Função chamada ao clicar no botão "Próximo"
const nextCheckout = async () => {
  if (cliente.nome && cliente.cpfCnpj && cliente.email) {
    await criarCliente(cliente);

    if (cliente.billingType === "CREDIT_CARD") {
      showSecondForm.value = true; // Muda para o segundo formulário
    } else {
      console.log("Pagamento via PIX ou outro método:", cliente);
    }
  } else {
    console.error("Preencha todos os campos antes de continuar.");
  }
};

// Função chamada ao clicar no botão "Efetuar pagamento"
const paymentCreditCard = async () => {
  console.log("Pagamento com cartão de crédito:", cartaoCredito, cartaoCreditoCliente);
  // Implementar lógica de pagamento aqui
};
</script>

<template>
  <!-- Formulário 1 -->
  <form v-if="!showSecondForm" id="form1">
    <input type="text" v-model="cliente.nome" placeholder="Nome Completo" required />
    <input type="text" v-model="cliente.cpfCnpj" placeholder="CPF/CNPJ" required />
    <input type="email" v-model="cliente.email" placeholder="Email" required />
    <select v-model="cliente.billingType" id="billingType" required>
      <option value="PIX">PIX</option>
      <option value="CREDIT_CARD">Cartão de Crédito</option>
    </select>
    <button @click.prevent="nextCheckout">Próximo</button>
  </form>

  <!-- Formulário 2 -->
  <form v-if="showSecondForm" id="form2">
    <input type="text" v-model="cartaoCreditoCliente.nome" placeholder="Nome completo" required />
    <input type="text" v-model="cartaoCreditoCliente.cpfCnpj" placeholder="CPF/CNPJ" required />
    <input type="text" v-model="cartaoCredito.nome" placeholder="Nome do titular" required />
    <input type="text" v-model="cartaoCredito.numero" placeholder="Número do cartão" required />
    <input type="text" v-model="cartaoCredito.mes" placeholder="Mês" required />
    <input type="text" v-model="cartaoCredito.ano" placeholder="Ano" required />
    <input type="text" v-model="cartaoCredito.ccv" placeholder="Código de segurança" required />
    <button @click.prevent="paymentCreditCard">Efetuar pagamento</button>
  </form>
</template>

<style scoped>
/* Adicione estilos personalizados, se necessário */
</style>
