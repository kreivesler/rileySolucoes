<script setup>
import { reactive, ref, defineProps } from "vue";
import ImagemUnica from "./ImagemUnica.vue";

const props = defineProps({
  valuePayment: String,
  productName: String
})

// Estado do cliente
const cliente = reactive({
  name: "",
  cpfCnpj: "",
  email: "",
  billingType: "",
  value: isNaN(parseFloat(props.valuePayment)) ? 0 : parseFloat(props.valuePayment),
  product: props.productName
});

// Estado do cartão de crédito
const cartaoCredito = reactive({
  cpfCnpj: "",
  name: "",
  numero: "",
  mes: "",
  ano: "",
  ccv: "",
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

const apiProducao = 'https://app.rileysolucoes.com.br/api'
const apiLocalhost = 'http://localhost:3000'

const isLoading = ref(false);


const apiLista = {
  apiProducao,
  apiLocalhost
}
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
    if (!cartaoCredito.name || !cartaoCredito.cpfCnpj || !cartaoCredito.numero ||
      !cartaoCredito.mes || !cartaoCredito.ano || !cartaoCredito.ccv) {
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
        name: cliente.name,
        cpfCnpj: cartaoCredito.cpfCnpj,
        holderName: cartaoCredito.name,
        number: cartaoCredito.numero,
        expiryMonth: cartaoCredito.mes,
        expiryYear: cartaoCredito.ano,
        ccv: cartaoCredito.ccv
      })
    });

    const objResposta = await response.json();
    console.log('Resposta completa da API:', response.status, objResposta);

    if (!response.ok) {
      alert(`Não foi possível processar pagamento. \n Motivo: ${objResposta.message || objResposta.error || "Erro desconhecido"}`);
      console.log('Falha no processamento do pagamento: ', objResposta);
      return;
    }

    if (objResposta?.message && objResposta?.status) {
      alert(`Mensagem: ${objResposta.message} \n Status: ${objResposta.status}`);
    } else {
      alert("Erro ao processar pagamento. Tente novamente.");
    }
  } catch (error) {
    console.log('Erro ao efetuar pagamento:', error);
    alert('Erro ao processar pagamento');
  } finally {
    isLoading.value = false; // Reativa o botão
  }
};


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

</script>

<template>
  <div class="checkout">
    <!-- Formulário 1 -->
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

    <!-- Formulário Cartao  -->
    <form v-if="showSecondForm" id="form2" class="formCheckout">
      <div>
        <label for="cpfCnpjCliente">CPF ou CNPJ do titular do cartão:</label>
        <input type="text" id="cpfCnpjCliente" v-model="cartaoCredito.cpfCnpj" placeholder="CPF/CNPJ" required />
      </div>


      <div>
        <label for="nomeTitular">Nome titular do cartão:</label>
        <input type="text" id="nomeTitular" v-model="cartaoCredito.name" placeholder="Nome do titular" required />
      </div>


      <div>
        <label for="numeroCartao">Número do cartão:</label>
        <input type="text" id="numeroCartao" v-model="cartaoCredito.numero" placeholder="Número do cartão" required />
      </div>


      <span>Código de segurança:</span>
      <div class="dataCartao">
        <input type="text" id="ccvCartao" v-model="cartaoCredito.ccv" placeholder="123" required />
      </div>

      <span>Válido até:</span>
      <div class="dataCartao">
        <input type="text" id="mesCartao" v-model="cartaoCredito.mes" placeholder="02" required />
        <input type="text" id="anoCartao" v-model="cartaoCredito.ano" placeholder="2027" required />
      </div>


      <button @click.prevent="efetuarPagamento" :disabled="isLoading">
        {{ isLoading ? "Processando..." : "Efetuar pagamento" }}
      </button>
    </form>

    <!-- QrCode Pix -->
    <div class="imgpix" v-if="showPixDetails && imageBase64">
      <h5>Valor do pagamento: R$ {{ valuePayment }}</h5>
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
