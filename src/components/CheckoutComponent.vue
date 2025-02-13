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
  value: parseFloat(props.valuePayment),
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


const imageBase64 = ref(""); // Base64 da imagem do QR Code
const payload = ref(""); // Código para pagamento
const expirationDate = ref(""); // Data de expiração
const showPixDetails = ref(false); // Controla a exibição do Card PIX

const apiProducao = 'https://app.rileysolucoes.com.br'
const apiLocalhost = 'http://localhost:3000'
const apiTunnel = 'a084edb6-9aad-4ff9-af53-a8f1962d44fb.cfargotunnel.com'

const apiLista = {
  apiProducao,
  apiLocalhost,
  apiTunnel
}
// Controle do formulário exibido
const showSecondForm = ref(false); // `false` exibe o primeiro formulário, `true` exibe o segundo

// Função para cadastrar cliente e criar cobrança
const cadastroCliente = async (cliente) => {
  try {
    if(!cliente.name || !cliente.cpfCnpj || !cliente.email || !cliente.billingType ){
      alert('cadastro inválido')
    }

    console.log(cliente)

      const response = await fetch(`${apiLista.apiTunnel}/api/c/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "Projeto teste"
        },
        body: JSON.stringify({
          name: cliente.name,
          cpfCnpj: cliente.cpfCnpj,
          email: cliente.email,
          billingType: cliente.billingType,
          value: cliente.value,
          product: cliente.product
        }),
      });

      if (!response.ok) {
        const errorResponse = await response.json().catch(() => response.text());
        console.error("Erro na resposta do servidor:", errorResponse);
        throw new Error("Erro ao cadastrar cliente: " + JSON.stringify(errorResponse));
      }

      const obj = await response.json();
      console.log("Cliente cadastrado com sucesso:", obj);

  } catch (error) {
    console.error("Erro na requisição:", error);
  }
};


// Função chamada ao clicar no botão "Próximo"
const nextCheckout = async () => {
  if (cliente.name && cliente.cpfCnpj && cliente.email && cliente.billingType && cliente.product && cliente.value) {

    cadastroCliente(cliente);
    if (cliente.billingType === 'CREDIT_CARD') {
      showSecondForm.value = true
    }
    if (cliente.billingType === 'PIX') {
      showPixDetails.value = true
    }

  } else {
    alert("Preencha todos os campos antes de continuar.");
    console.log(cliente)
  }
};

// Função chamada ao clicar no botão "Efetuar pagamento" cartao de credito


</script>

<template>
  <div class="checkout">
    <!-- Formulário 1 -->
    <form v-if="!showSecondForm" id="form1" class="formCheckout">
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

      <button @click.prevent="nextCheckout">Próximo</button>
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
        <input type="text" id="mesCartao" v-model="cartaoCredito.mes" placeholder="Mês" required />
        <input type="text" id="anoCartao" v-model="cartaoCredito.ano" placeholder="Ano" required />
      </div>


      <button @click.prevent="paymentCreditCard">Efetuar pagamento</button>
    </form>

    <!-- QrCode Pix -->
    <div class="imgpix" v-if="showPixDetails && imageBase64">
      <ImagemUnica :img-path="imageBase64" img-alt="Erro ao gerar imagem" />
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

.imgpix span {
  width: 100%;
}

.imgpix p {
  font-size: 0.7rem;
  color: #034386;
}

@media only screen and (min-width: 300px) {

  .checkout {
    width: 100%;
  }

  .formCheckout label {
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

@media only screen and (min-width: 400px) {
  .checkout {
    width: 100%;
  }

  .formCheckout label {
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

@media only screen and (min-width: 600px) {
  .checkout {
    width: 100%;
  }

  .formCheckout label {
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
    width: 100%;
  }
}
</style>
