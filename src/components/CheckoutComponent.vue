<script setup>
import { reactive, ref, defineProps, onUnmounted, onMounted, computed } from "vue";
import { headerApi } from "@/data/api";
import { dadosCheckout } from "@/data/servicos";
import { useRouter } from "vue-router";
import ImagemUnica from "./ImagemUnica.vue";
import { idProduto } from '@/data/servicos';

const router = useRouter();

// Props
const props = defineProps({
  valuePayment: String,
  productName: String,
  valueDiscount: {
    type: String,
    default: '0'
  },
  typeDiscount: String
});

// Evitar mutações diretas em props
const valuePaymentParsed = computed(() => parseFloat(props.valuePayment) || 0);
const valueDiscountParsed = computed(() => parseFloat(props.valueDiscount) || 0);

// Estado do cliente
const cliente = reactive({
  name: "",
  cpfCnpj: "",
  email: "",
  billingType: "",
  value: valuePaymentParsed.value,
  product: props.productName,
  discount: {
    value: valueDiscountParsed.value,
    type: props.typeDiscount
  }
});

const produto = reactive({
  id: parseInt(idProduto.value),
  nome: props.productName
});

// Cartão de crédito
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

const imageBase64 = ref("");
const payload = ref("");
const expirationDate = ref("");
const showPixDetails = ref(false);
const showSecondForm = ref(false);
const isLoading = ref(false);

// Timer
const tempoRestante = ref(180);
let intervalo = null;

onMounted(() => {
  intervalo = setInterval(() => {
    if (tempoRestante.value > 0) tempoRestante.value--;
    else clearInterval(intervalo);
  }, 1000);
});

onUnmounted(() => clearInterval(intervalo));

const formatarTempo = () => {
  const minutos = Math.floor(tempoRestante.value / 60);
  const segundos = tempoRestante.value % 60;
  return `${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;
};

const apiProducao = import.meta.env.VITE_API_PRODUCAO;

// Reset
const resetaFormCartao = () => Object.assign(cartaoCredito, {
  cpfCnpj: "", holderName: "", email: "", number: "", expiryMonth: "",
  expiryYear: "", cvv: "", postalCode: "", addressNumber: "", phone: ""
});

const resetaForm = () => Object.assign(cliente, {
  name: "", cpfCnpj: "", email: "", billingType: ""
});

// Verificações
const goToPage = async () => {
  if (cliente.billingType === "CREDIT_CARD") {
    showSecondForm.value = true;
    showPixDetails.value = false;
  } else if (cliente.billingType === "PIX") {
    showSecondForm.value = false;
    showPixDetails.value = true;
  }
}

const cadastrarProduto = async () => {
  console.log('Chamando cadastrarProduto...');
  const cadastrar = await fetch(`${apiProducao}/a/c/verificar`, {
    method: 'POST',
    headers: headerApi.headerApiTeste,
    body: JSON.stringify({
      userName: cliente.name,
      userEmail: cliente.email,
      idProduto: produto.id
    })
  })

  console.log('Resposta status:', cadastrar.status);
  if (cadastrar.status === 200) {
    alert('Você já possui este curso, vá para a pagina de login')
  }
  if (cadastrar.status === 201) {
    alert('curso obtido com sucesso!')
    return router.push('/login')
  }
}

const verificarStatusPix = async () => {
  if (!dadosCheckout.value?.cobranca?.id) return;

  const idOperacao = dadosCheckout.value.cobranca.id;
  const tempoTotal = 180; // Tempo em segundos
  let tempoDecorrido = 0;
  const intervalo = 5000; // 5 segundos

  const verificarStatus = async () => {
    try {
      const res = await fetch(`${apiProducao}/c/s/${idOperacao}`, {
        method: "GET",
        headers: headerApi.headerApiTeste
      });


      if (res.status === 200) {
        alert('Pagamento concluido!')
        clearInterval(verificador);
        // Verifica se o cliente já tem o produto ou cadastra
        await verificarAluno();
      }

      tempoDecorrido += intervalo / 1000;
      if (tempoDecorrido >= tempoTotal) {
        clearInterval(verificador);
        alert("Tempo expirado! O pagamento via PIX não foi confirmado.");
      }
    } catch (error) {
      console.error("Erro ao verificar status do pagamento:", error);
    }
  };

  const verificador = setInterval(verificarStatus, intervalo);
};

const verificarAluno = async () => {
  const verificarAluno = await fetch(`${apiProducao}/a/verificar`, {
    method: 'POST',
    headers: headerApi.headerApiTeste,
    body: JSON.stringify({
      nomeCliente: cliente.name,
      emailCliente: cliente.email
    })
  });

  if (verificarAluno.status === 404) {
    //aluno não existe
    return router.push('/signup')
  }

  if (verificarAluno.status === 200) {
    //aluno já existe
    return await cadastrarProduto()
  }
}

const cadastroCliente = async (cliente) => {
  if (isLoading.value) return;
  isLoading.value = true;

  try {
    if (!cliente.name || !cliente.cpfCnpj || !cliente.email || !cliente.billingType) {
      alert('Cadastro inválido');
      return;
    }

    const response = await fetch(`${apiProducao}/c/create`, {
      method: "POST",
      headers: headerApi.headerApiTeste,
      body: JSON.stringify(cliente)
    });

    const obj = await response.json().catch(() => null);

    if (!response.ok || !obj) {
      console.error("Erro na resposta do servidor:", obj);
      alert(`${obj.message}`)
      throw new Error("Erro ao cadastrar cliente");
    }

    dadosCheckout.value = obj;

    if (obj.cobranca?.billingType === 'PIX') {
      imageBase64.value = obj.qrCodePix?.encodedImage || '';
      payload.value = obj.qrCodePix?.payload || '';
      expirationDate.value = obj.qrCodePix?.expirationDate || '';

      verificarStatusPix();
    }

    goToPage()

  } catch (error) {
    console.error("Erro na requisição:", error);
    alert("Erro ao cadastrar cliente.");
  } finally {
    isLoading.value = false;
  }
};

const paymentCreditCard = async (cliente, cartaoCredito, dadosCheckout) => {
  if (isLoading.value) return;
  isLoading.value = true;

  try {
    const obj = dadosCheckout?.value;
    if (!obj?.cobranca?.id) {
      alert("Erro no ID de cobrança.");
      return;
    }

    const response = await fetch(`${apiProducao}/c/payment`, {
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
        ccv: cartaoCredito.cvv,
        postalCode: cartaoCredito.postalCode,
        addressNumber: cartaoCredito.addressNumber,
        phone: cartaoCredito.phone,
      })
    });

    const objResposta = await response.json();

    if (!response.ok) {
      alert(`Pagamento recusado: ${objResposta.message || objResposta.error || "Erro desconhecido"}`);
      return;
    }

    if (objResposta.status === 'CONFIRMED') {
      await verificarAluno();
      resetaFormCartao();
      resetaForm();
      showSecondForm.value = false;
    }

  } catch (error) {
    console.error('Erro ao efetuar pagamento:', error);
    alert('Erro ao processar pagamento');
  } finally {
    isLoading.value = false;
  }
};

const proximoPasso = async () => {
  try {
    if (!cliente.name || !cliente.email || !cliente.cpfCnpj) {
      return alert('Todos os campos devem ser preenchidos!')
    }

    await cadastroCliente(cliente)

  } catch (err) {
    console.error('Erro ao pressionar próximo passo:', err);
  }
};

const efetuarPagamento = async () => {
  await paymentCreditCard(cliente, cartaoCredito, dadosCheckout);
};
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
        <div class="btnOpt">
          <button :class="{ selected: cliente.billingType === 'PIX' }" @click.prevent="cliente.billingType = 'PIX'">PIX</button>
          <button :class="{ selected: cliente.billingType === 'CREDIT_CARD' }" @click.prevent="cliente.billingType = 'CREDIT_CARD'">Cartão de crédito</button>
        </div>
      </div>

      <span>Ao clicar em continuar você concorda com nosso <a href="/termo-uso">termo de uso</a>.</span>

      <button @click.prevent="proximoPasso" :disabled="isLoading">
        {{ isLoading ? "Aguarde..." : "Continuar" }}
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

.btnOpt{
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: row;
}
.btnOpt button {
  margin: 5px;
  color: inherit;
  background-color: transparent;
}
.btnOpt button:hover{
  color: white;
}
.btnOpt button.selected{
  background-color: #4CAF50;
  color: white;
  border-color: #4CAF50;
}
a{
  color: #0056b3;
}
@media (prefers-color-scheme: dark){
  .formCheckout button{
    color: white;
  }
  .btnOpt button{
    color: white;
  }
  .btnOpt button:hover{
  color: white;
}
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
