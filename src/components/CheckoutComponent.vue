<script setup>
import { reactive, ref, defineProps, onUnmounted, onMounted } from "vue";
import ImagemUnica from "./ImagemUnica.vue";

const props = defineProps({
  valuePayment: String,
  productName: String,
  valueDiscount: {
    type: String,
    default: '0'
  },
  typeDiscount: String
})

// Estado do cliente
const cliente = reactive({
  name: "",
  cpfCnpj: "",
  email: "",
  billingType: "",
  value: isNaN(parseFloat(props.valuePayment)) ? 0 : parseFloat(props.valuePayment),
  product: props.productName,
  discount: {
    value: isNaN(parseFloat(props.valueDiscount)) ? 0 : parseFloat(props.valueDiscount),
    type: props.typeDiscount //Tipo de desconto: 'FIXED' ou 'PERCENTAGE'
  }
});

// Estado do cartão de crédito
const cartaoCredito = reactive({
  cpfCnpj: "",
  holderName: "",
  email: "",
  number: "",
  expiryMonth: "",
  expiryYear: "",
  cvv: "",
  postalCode: "",
  addressNumber: "",
  phone: "",
});

const headerApiTeste = {
  "Content-Type": "application/json",
  "User-Agent": "Projeto teste"
}
const headerApiProd = {
  "Content-Type": "application/json",
  "User-Agent": "Kr Riley Soluções"
}
const headerApi = {
  headerApiProd,
  headerApiTeste
}
const cobranca = ref(null); // Armazena os dados da cobrança
const imageBase64 = ref(""); // Base64 da imagem do QR Code
const payload = ref(""); // Código para pagamento
const expirationDate = ref(""); // Data de expiração
const showPixDetails = ref(false); // Controla a exibição do Card PIX

const apiProducao = import.meta.env.VITE_API_PRODUCAO;
const apiLocalhost = 'http://localhost:3000'

const isLoading = ref(false);

const resetaFormCartao = (obj) => {
  return {
    ...obj,
    cpfCnpj: "",
    holderName: "",
    email: "",
    number: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: "",
    postalCode: "",
    addressNumber: "",
    phone: "",
  };
};
const resetaForm = (obj) => {
  return {
    ...obj,
    name: "",
    cpfCnpj: "",
    email: "",
    billingType: "",
  }
}

const apiLista = {
  apiProducao,
  apiLocalhost
}
const tempoRestante = ref(180); // 3 minutos em segundos
let intervalo = null;

onMounted(() => {
  intervalo = setInterval(() => {
    if (tempoRestante.value > 0) {
      tempoRestante.value--;
    } else {
      clearInterval(intervalo);
    }
  }, 1000);
});

onUnmounted(() => {
  clearInterval(intervalo);
});

// Formata os segundos para "mm:ss"
const formatarTempo = () => {
  const minutos = Math.floor(tempoRestante.value / 60);
  const segundos = tempoRestante.value % 60;
  return `${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;
};

// Controle do formulário exibido
const showSecondForm = ref(false); // `false` exibe o primeiro formulário, `true` exibe o segundo
// Função para cadastrar cliente e criar cobrança
const cadastroCliente = async (cliente) => {
  if (isLoading.value) return; // Evita cliques múltiplos
  isLoading.value = true; // Desativa o botão

  try {
    if (!cliente.name || !cliente.cpfCnpj || !cliente.email || !cliente.billingType) {
      alert('cadastro inválido');
      return;
    }

    console.log(cliente);

    const response = await fetch(`${apiLista.apiProducao}/c/create`, {
      method: "POST",
      headers: headerApi.headerApiTeste,
      body: JSON.stringify(cliente),
    });

    if (!response.ok) {
      const errorResponse = await response.json().catch(() => response.text());
      console.error("Erro na resposta do servidor:", errorResponse);
      throw new Error("Erro ao cadastrar cliente: " + JSON.stringify(errorResponse));
    }

    const obj = await response.json();
    cobranca.value = obj;
    console.log("Cliente cadastrado com sucesso:", obj);

    if (obj.cobranca.billingType === 'PIX') {
      imageBase64.value = obj.qrCodePix.encodedImage;
      payload.value = obj.qrCodePix.payload;
      expirationDate.value = obj.qrCodePix.expirationDate;
    }
  } catch (error) {
    console.error("Erro na requisição:", error);
  } finally {
    isLoading.value = false; // Reativa o botão
  }
};
// Função chamada ao clicar no botão "Efetuar pagamento" cartao de credito
const paymentCreditCard = async (cliente, cartaoCredito, cobranca) => {
  if (isLoading.value) return; // Evita cliques múltiplos
  isLoading.value = true; // Desativa o botão

  try {
    if (!cartaoCredito) {
      alert('Informe corretamente as informações do cartão.');
      return;
    }

    const obj = cobranca.value;
    console.log({ obj, cartao: cartaoCredito });

    const response = await fetch(`${apiLista.apiProducao}/c/payment`, {
      method: 'POST',
      headers: headerApi.headerApiTeste,
      body: JSON.stringify({
        id: obj.cobranca.id,
        cpfCnpj: cartaoCredito.cpfCnpj,
        holderName: cartaoCredito.holderName,
        email: cartaoCredito.email,
        number: cartaoCredito.number,
        expiryMonth: cartaoCredito.expiryMonth,
        expiryYear: cartaoCredito.expiryYear,
        cvv: cartaoCredito.cvv,
        postalCode: cartaoCredito.postalCode,
        addressNumber: cartaoCredito.addressNumber,
        phone: cartaoCredito.phone,
      })
    });

    const objResposta = await response.json();
    console.log('Resposta completa da API:', response.status, objResposta);

    if (!response.ok) {
      alert(`Não foi possível processar pagamento. \n Motivo: ${objResposta.message || objResposta.error || "Erro desconhecido"}`);
      console.log('Falha no processamento do pagamento: ', objResposta);
      return;
    }

    if (objResposta.message === "Pagamento processado com sucesso!" || objResposta.status === 'CONFIRMED') {
      cartaoCredito = resetaFormCartao(cartaoCredito)
      alert(`${objResposta.message}`)
      cliente = resetaForm(cliente)
      showSecondForm.value = false
      window.location.href = '/Signup'
    }

  } catch (error) {
    console.log('Erro ao efetuar pagamento:', error);
    alert('Erro ao processar pagamento');
  } finally {
    isLoading.value = false; // Reativa o botão
  }
};
//Função chamada ao clicar em próximo
const nextCheckout = async () => {
  // Verifica se os campos obrigatórios do primeiro formulário estão preenchidos
  if (cliente.name && cliente.cpfCnpj && cliente.email && cliente.billingType) {

    await cadastroCliente(cliente); // Função que cadastra o cliente

    if (cliente.billingType === "CREDIT_CARD") {
      showSecondForm.value = true;  // Exibe o formulário de cartão de crédito
      showPixDetails.value = false; // Oculta detalhes do Pix
    } else if (cliente.billingType === "PIX") {
      showSecondForm.value = false; // Garante que o segundo formulário não apareça
      showPixDetails.value = true;  // Exibe detalhes do Pix
    }

  } else {
    alert("Preencha todos os campos antes de continuar.");
    console.log(cliente);
  }
};

const efetuarPagamento = async () => {
  paymentCreditCard(cliente, cartaoCredito, cobranca)
}

const goToRegistro = async () => {
  try {
    if (cliente.billingType === 'PIX' && cobranca.value) {
      const response = await fetch(`${apiLista.apiProducao}/c/${cobranca.value.cobranca.id}`);
      const obj = await response.json();

      if (obj.status === 'CONFIRMED') {
        alert('Pagamento concluído! Redirecionando para criação de usuário...');
        window.location.href = '/Signup'; // Redireciona para a página de criação de usuário
      } else {
        alert(`Pagamento ainda não confirmado. Status atual: ${obj.status}`);
      }
    }
  } catch (err) {
    console.log('Erro ao direcionar usuário', err);
  }
};

// Executa a função após o pagamento
goToRegistro();

</script>

<template>
  <div class="checkout">
    <!-- Formulário 1  -->
    <form v-if="!showSecondForm && !showPixDetails" id="form1" class="formCheckout">
      <div>
        <label for="nome">Nome completo:</label>
        <input type="text" id="nome" v-model="cliente.name" placeholder="Nome Completo" required />
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

      <button @click.prevent="nextCheckout" :disabled="isLoading">
        {{ isLoading ? "Aguarde..." : "Próximo" }}
      </button>
    </form>

    <!-- Formulário Cartao    -->
    <form v-if="showSecondForm" id="form2" class="formCheckout">
      <span style="margin-bottom: 25px; font-size: 1.5rem;">Informações do Titular do Cartão</span>

      <div>
        <label for="nomeTitular">Nome titular do cartão:</label>
        <input type="text" id="nomeTitular" v-model="cartaoCredito.holderName" placeholder="Nome" required />
      </div>

      <div>
        <label for="cpfCnpjCliente">CPF ou CNPJ do titular do cartão:</label>
        <input type="text" id="cpfCnpjCliente" v-model="cartaoCredito.cpfCnpj" placeholder="CPF/CNPJ" required />
      </div>

      <div>
        <label for="emailCliente">Email do titular:</label>
        <input type="email" name="" id="emailCliente" v-model="cartaoCredito.email" placeholder="Email" required>
      </div>

      <span>Informe o CEP, Número e Telefone:</span>
      <div class="phoneCep">
        <input type="text" v-model="cartaoCredito.postalCode" placeholder="CEP" required>
        <input type="text" v-model="cartaoCredito.addressNumber" placeholder="Numero" required>
        <input type="text" v-model="cartaoCredito.phone" placeholder="Celular com DDD" required>
      </div>

      <div>
        <label for="numeroCartao">Número do cartão:</label>
        <input type="text" id="numeroCartao" v-model="cartaoCredito.number" placeholder="9999 9999 9999 9999"
          required />
      </div>


      <span>Código de segurança:</span>
      <div class="dataCartao">
        <input type="text" id="ccvCartao" v-model="cartaoCredito.cvv" placeholder="123" required />
      </div>

      <span>Válido até:</span>
      <div class="dataCartao">
        <input type="text" id="mesCartao" v-model="cartaoCredito.expiryMonth" placeholder="02" required />
        <input type="text" id="anoCartao" v-model="cartaoCredito.expiryYear" placeholder="2027" required />
      </div>

      <span id="resPag">{{ respostaPgamento }}</span>

      <button @click.prevent="efetuarPagamento" :disabled="isLoading">
        {{ isLoading ? "Processando..." : "Efetuar pagamento" }}
      </button>
    </form>

    <!-- QrCode Pix  -->
    <div class="imgpix" v-if="showPixDetails && imageBase64">
      <h2>Valor do pagamento: R$ {{ valuePayment }}</h2>
      <h3> Tempo restante: {{ formatarTempo() }}</h3>
      <ImagemUnica :img-path="imageBase64" :base64="true" img-alt="Erro ao gerar imagem" />
      <span>Código copia e cola:</span>
      <p>{{ payload }}</p>
      <span>Data de expiração: {{ expirationDate }}</span>
    </div>
  </div>

</template>

<style scoped>
.checkout {
  display: flex;
  flex-direction: column;
  border-color: inherit;
  border-width: 2px;
  padding: 30px;
}

.formCheckout input {
  width: 100%;
  padding: 5px;
}

.formCheckout button {
  width: 100%;
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

.phoneCep {
  display: flex;
  flex-direction: row;
}

.imgpix {
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
}

.imgpix img {
  padding: 10%;
}

.imgpix span {
  width: 100%;
}

.imgpix p {
  cursor: pointer;
  font-size: 0.7rem;
  color: #034386;
}

@media only screen and (min-width: 300px) {

  .checkout {
    width: 100%;
  }

  .formCheckout label {
    font-size: 0.8rem;
  }

  .formCheckout input {
    font-size: 0.8rem;
  }

  .formCheckout span {
    font-size: 0.8rem;
  }

  .formCheckout button {
    font-size: 1rem;
    padding: 5px;
  }

  .imgpix img {
    width: 100%;
  }

}

@media only screen and (min-width: 400px) {
  .checkout {
    width: 90%;
  }

  .formCheckout label {
    font-size: 0.9rem;
  }

  .formCheckout input {
    font-size: 0.9rem;
  }

  .formCheckout span {
    font-size: 0.9rem;
  }

  .formCheckout button {
    font-size: 1.2rem;
  }

  .imgpix img {
    width: 100%;
  }
}

@media only screen and (min-width: 600px) {
  .checkout {
    width: 70%;
  }

  .formCheckout label {
    font-size: 1rem;
  }

  .formCheckout span {
    font-size: 1rem;
  }

  .formCheckout input {
    font-size: 1rem;
  }

  .formCheckout button {
    font-size: 1.2rem;
  }

  .imgpix img {
    width: 100%;
  }
}

@media only screen and (min-width: 768px) {
  .checkout {
    width: 50%;
  }

  .formCheckout label {
    font-size: 1rem;
  }

  .formCheckout span {
    font-size: 1rem;
  }

  .formCheckout input {
    font-size: 1rem;
  }

  .formCheckout button {
    font-size: 1.2rem;
  }

  .imgpix {
    width: 100%;
  }

  .imgpix img {
    width: 100%;
  }
}

@media only screen and (min-width: 992px) {
  .checkout {
    width: 50%;
  }

  .formCheckout label {
    font-size: 1rem;
  }

  .formCheckout span {
    font-size: 1rem;
  }

  .formCheckout input {
    font-size: 1rem;
  }

  .formCheckout button {
    font-size: 1.3rem;
  }

  .imgpix {
    width: 100%;
  }

  .imgpix img {
    width: 100%;
  }
}

@media only screen and (min-width: 1200px) {
  .checkout {
    width: 50%;
  }

  .formCheckout label {
    font-size: 1.2rem;
  }

  .formCheckout span {
    font-size: 1rem;
  }

  .formCheckout input {
    font-size: 1.2rem;
  }

  .formCheckout button {
    font-size: 1.5rem;
  }

  .imgpix {
    width: 100%;
  }

  .imgpix img {
    width: 70%;
  }
}
</style>
