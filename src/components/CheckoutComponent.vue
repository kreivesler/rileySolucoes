<script setup>
import { reactive, ref } from "vue";
import CardComponent from "./CardComponent.vue";
import ImagemUnica from "./ImagemUnica.vue";

const chaveApiBanco = "$aact_MzkwODA2MWY2OGM3MWRlMDU2NWM3MzJlNzZmNGZhZGY6OmU0NGI4NjMwLWIxNmItNGQzMC04ZGU3LTZlZTg0N2FmNTVhZDo6JGFhY2hfOWU2YmEzYWMtY2MxYy00NzMyLTkyOTMtMmRmYzQwMTU1NzE5"

const idCarteira = "e2c7b2a2-094a-4e3a-89ce-ea4e890a3500"
// Estado do cliente
const cliente = reactive({
  nome: "",
  cpfCnpj: "",
  email: "",
  billingType: "",
  idCobranca: "",
  id: ""
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

const imageBase64 = ref(""); // Base64 da imagem do QR Code
const payload = ref(""); // Código para pagamento
const expirationDate = ref(""); // Data de expiração
const showPixDetails = ref(false); // Controla a exibição do Card PIX

// Controle do formulário exibido
const showSecondForm = ref(false); // `false` exibe o primeiro formulário, `true` exibe o segundo

// Função para criar o cliente via API
const criarCliente = async (cliente) => {
  try {
    const response = await fetch("https://sandbox.asaas.com/api/v3/customers", {
      method: "POST",
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "KR Riley Soluções",
          "access_token": chaveApiBanco,
      },
      body: JSON.stringify({
        name: cliente.nome,
        cpfCnpj: cliente.cpfCnpj,
        email: cliente.email,
      }),
    })

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

//Criar cobrança
const criarCobranca = async () => {
  try {
    const response = await fetch("https://sandbox.asaas.com/api/v3/payments", {
      method: "POST",
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "KR Riley Soluções",
          "access_token": chaveApiBanco,
      },
      body: JSON.stringify({
        customer: cliente.id,
        billingType: cliente.billingType,
        value: 55,
        dueDate: new Date(Date.now() + 12 * 60 * 60 * 1000).toISOString().split("T")[0], // Data de vencimento em 12 horas
        split: [
          {
            walletId: idCarteira
          }
        ],
        callback: {
          successUrl: "https://rileysolucoes.com.br/user"
        }
      }),
    });

    const data = await response.json();
    if (response.ok) {
      console.log("Cobrança criada com sucesso:", data);
      cliente.idCobranca = data.id; // Salva o ID da cobrança
    } else {
      console.error("Erro ao criar cobrança:", data);
    }
  } catch (error) {
    console.error("Erro na requisição:", error);
  }
};

const gerarQrCodePix = async () => {
  try {
    const response = await fetch(
      `https://sandbox.asaas.com/api/v3/payments/${cliente.idCobranca}/pixQrCode`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "KR Riley Soluções",
          "access_token": chaveApiBanco, // Certifique-se de que esta variável tem o valor correto!
        },
      }
    );

    const data = await response.json();

    if (response.ok) {
      console.log("QR Code PIX gerado:", data);
      imageBase64.value = `data:image/png;base64,${data.encodedImage}`;
      payload.value = data.payload;
      expirationDate.value = data.expirationDate;
      showPixDetails.value = true;
    } else {
      console.error("Erro ao gerar QR Code PIX:", data);
    }
  } catch (error) {
    console.error("Erro na requisição:", error);
  }
};



// Função chamada ao clicar no botão "Próximo"
const nextCheckout = async () => {
  if (cliente.nome && cliente.cpfCnpj && cliente.email) {
    try {
      await criarCliente(cliente);
      await criarCobranca();

      if (cliente.billingType === "PIX") {
        const pixResponse = await gerarQrCodePix();

        if (!pixResponse) {
          alert("Erro ao gerar QR Code PIX. Tente novamente.");
          return;
        }

        imageBase64.value = pixResponse.imageBase64;
        payload.value = pixResponse.payload;
        expirationDate.value = pixResponse.expirationDate;
        showPixDetails.value = true;
      } else if (cliente.billingType === "CREDIT_CARD") {
        showSecondForm.value = true;
      }
    } catch (error) {
      console.error("Erro ao processar o checkout:", error);
      alert("Houve um erro ao processar sua solicitação. Tente novamente.");
    }
  } else {
    alert("Preencha todos os campos antes de continuar.");
  }
};


// Função chamada ao clicar no botão "Efetuar pagamento" cartao de credito
const paymentCreditCard = async () => {
  try {
    const response = await fetch(
      `https://sandbox.asaas.com/api/v3/payments/${cliente.idCobranca}/payWithCreditCard`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "KR Riley Soluções",
          "access_token": chaveApiBanco,
        },
        body: JSON.stringify({
          creditCard: {
            holderName: cartaoCredito.nome,
            number: cartaoCredito.numero,
            expiryMonth: cartaoCredito.mes,
            expiryYear: cartaoCredito.ano,
            ccv: cartaoCredito.ccv,
          },
          creditCardHolderInfo: {
            name: cartaoCreditoCliente.nome,
            cpfCnpj: cartaoCreditoCliente.cpfCnpj,
          },
        }),
      }
    );

    const data = await response.json();
    if (response.ok) {
      console.log("Pagamento realizado com sucesso:", data);
    } else {
      console.error("Erro ao processar pagamento:", data);
    }
  } catch (error) {
    console.error("Erro na requisição:", error);
  }
};

</script>

<template>
  <div class="checkout">
    <!-- Formulário 1 -->
    <form v-if="!showSecondForm" id="form1" class="formCheckout">
      <div>
        <label for="nome">Nome completo:</label>
        <input type="text" id="nome" v-model="cliente.nome" placeholder="Nome Completo" required />
      </div>

      <div>
        <label for="cpf">Informe seu CPF/CNPJ:</label>
        <input type="text" id="cpf" v-model="cliente.cpfCnpj" placeholder="CPF/CNPJ" required />
      </div>

      <div>
        <label for="e-mail">Seu melhor e-mail:</label>
        <input type="email" id="e-mail" v-model="cliente.email" placeholder="Email" required />
      </div>

      <div>
        <label for="billingType">Forma de pagamento:</label>
        <select v-model="cliente.billingType" id="billingType" required>
          <option value="PIX">PIX</option>
          <option value="CREDIT_CARD">Cartão de Crédito</option>
        </select>
      </div>

      <button @click.prevent="nextCheckout">Próximo</button>
    </form>

    <!-- Formulário 2 -->
    <form v-if="showSecondForm" id="form2" class="formCheckout">
      <div>
        <label for="nomeCompleto">Nome completo:</label>
        <input type="text" id="nomeCompleto" v-model="cartaoCreditoCliente.nome" placeholder="Nome completo" required />
      </div>


      <div>
        <label for="cpfCnpjCliente">CPF/CNPJ:</label>
        <input type="text" id="cpfCnpjCliente" v-model="cartaoCreditoCliente.cpfCnpj" placeholder="CPF/CNPJ" required />
      </div>


      <div>
        <label for="nomeTitular">Nome titular do cartão:</label>
        <input type="text" id="nomeTitular" v-model="cartaoCredito.nome" placeholder="Nome do titular" required />
      </div>


      <div>
        <label for="numeroCartao">Número do cartão:</label>
        <input type="text" id="numeroCartao" v-model="cartaoCredito.numero" placeholder="Número do cartão" required />
      </div>


      <span>Data de vencimento e código ccv:</span>


      <div class="dataCartao">
        <input type="text" id="mesCartao" v-model="cartaoCredito.mes" placeholder="01" required />
        <input type="text" id="anoCartao" v-model="cartaoCredito.ano" placeholder="25" required />
        <input type="text" id="ccvCartao" v-model="cartaoCredito.ccv" placeholder="123" required />
      </div>


      <button @click.prevent="paymentCreditCard">Efetuar pagamento</button>
    </form>

    <CardComponent v-if="showPixDetails && imageBase64">
      <ImagemUnica :img-path="imageBase64" />
      <span>Código para pagamento: {{ payload }}</span>
      <span>Data de expiração: {{ expirationDate }}</span>
    </CardComponent>
  </div>



</template>

<style scoped>
.checkout {
  display: flex;
  flex-direction: column;
  border-style: solid;
  border-color: inherit;
  border-width: 2px;
  border-radius: 10px;
  padding: 30px;
}

.formCheckout input {
  width: 100%;
  padding: 5px;
  border-radius: 10px;
  border-style: solid;
  border-color: none;
  margin-bottom: 5px;
  color: rgb(2, 2, 2);
}

.formCheckout button {
  width: 100%;
  border-radius: 10px;
  border-style: none;
  color: white;
  font-weight: 500;
  background-color: #007bff;
  margin-top: 15px;
}

.formCheckout button:hover {
  background-color: #0056b3;
}

.dataCartao {
  display: flex;
  flex-direction: row;
}

.dataCartao input {
  width: 60px;
}

@media only screen and (min-width: 300px){

  .checkout {
    width: 100%;
  }
  .formCheckout label{
    font-size: 1rem;
  }
  .formCheckout input{
    font-size: 1rem;
  }
  .formCheckout button{
    font-size: 1.2rem;
  }
}
@media only screen and (min-width: 400px){
  .checkout {
    width: 100%;
  }
  .formCheckout label{
    font-size: 1rem;
  }
  .formCheckout input{
    font-size: 1rem;
  }
  .formCheckout button{
    font-size: 1.2rem;
  }
}
@media only screen and (min-width: 600px){
  .checkout {
    width: 100%;
  }
  .formCheckout label{
    font-size: 1rem;
  }
  .formCheckout input{
    font-size: 1rem;
  }
  .formCheckout button{
    font-size: 1.2rem;
  }
}
@media only screen and (min-width: 768px){
  .checkout {
    width: 100%;
  }
  .formCheckout label{
    font-size: 1rem;
  }
  .formCheckout input{
    font-size: 1rem;
  }
  .formCheckout button{
    font-size: 1.2rem;
  }
}
@media only screen and (min-width: 992px){
  .checkout {
    width: 50%;
  }
  .formCheckout label{
    font-size: 1rem;
  }
  .formCheckout input{
    font-size: 1rem;
  }
  .formCheckout button{
    font-size: 1.3rem;
  }
}
@media only screen and (min-width: 1200px){
  .checkout {
    width: 50%;
  }
  .formCheckout label{
    font-size: 1.2rem;
  }
  .formCheckout input{
    font-size: 1.2rem;
  }
  .formCheckout button{
    font-size: 1.5rem;
  }
}
</style>
