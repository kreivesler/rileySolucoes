<script setup>
import { reactive, computed } from 'vue';
import { headerApi } from '@/data/api';
import { dadosCheckout, idProduto } from '@/data/servicos';
const api = import.meta.env.VITE_API_PRODUCAO


const userData = reactive({
  email: "",
  password: "",
  twoPassword: "",
})

console.log(`Cobrança id: ${dadosCheckout.value.cobranca.id}`)
console.log(`Produto id: ${idProduto}`)

const senha = computed(() => {
  return userData.password === userData.twoPassword ? userData.password : ""
})


const submitForm = async () => {
  try {
    // Verifique se todos os campos necessários estão preenchidos
    if (!userData.email || !senha.value || !userData.password || !userData.twoPassword) {
      return alert('Preencha todos os campos corretamente');
    }

    const cadastraUser = await fetch(`${api}/a/`, {
      method: 'POST',
      headers: headerApi.headerApiTeste,
      body: JSON.stringify({
        userIdCheckout: dadosCheckout.value.cobranca.id,
        userEmail: userData.email,
        userPassword: senha.value, // Não precisa de .toString()
        cursoId: idProduto
      })
    });

    if (!cadastraUser.ok) {
      const erroCadastro = await cadastraUser.json().catch(() => response.text());
      throw new Error('Erro ao cadastrar usuário: ' + JSON.stringify(erroCadastro));
    }

    const response = await cadastraUser.json(); // Aguarde a resposta da API

    alert(`Cadastro realizado: ${response}`);
  } catch (err) {
    console.log('Erro ao criar acesso para usuário', err);
  }
};


</script>
<template>
  <form class="formulario" @submit.prevent="submitForm">
    <label for="emailUser">Informe seu e-mail:</label>
    <input id="emailUser" v-model="userData.email" type="email" placeholder="Email" required>

    <label for="passUser">Crie uma senha:</label>
    <input type="password" id="passUser" v-model="userData.password" placeholder="Senha de acesso" required>

    <input type="password" v-model="userData.twoPassword" placeholder="Repetir senha" required>

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

textarea {
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

@media only screen and (min-width: 300px) {
  .formulario {
    width: 100%;
    padding: 15px;
  }

  .formulario textarea {
    height: 200px;
  }

  .formulario input,
  textarea,
  button {
    width: 100%;
  }
}

@media only screen and (min-width: 400px) {
  .formulario {
    width: 100%;
    padding: 25px;
  }

  .formulario textarea {
    height: 200px;
  }

  .formulario input,
  textarea,
  button {
    width: 100%;
  }
}

@media only screen and (min-width: 600px) {
  .formulario {
    width: 100%;
    margin-left: 5%;
  }

  .formulario textarea {
    height: 200px;
  }

  .formulario input,
  textarea,
  button {
    width: calc(100% - 10%);
  }
}

@media only screen and (min-width: 768px) {
  .formulario {
    width: 100%;
    margin-left: 5%;
  }

  .formulario textarea {
    height: 200px;
  }

  .formulario input,
  textarea,
  button {
    width: calc(100% - 10%);
  }
}

@media only screen and (min-width: 992px) {
  .formulario {
    width: 50%;
  }

  .formulario textarea {
    height: 200px;
  }

  .formulario input,
  textarea,
  button {
    width: calc(100% - 10%);
  }
}

@media only screen and (min-width: 1200px) {
  .formulario {
    width: 50%;
  }

  .formulario textarea {
    height: 200px;
  }

  .formulario input,
  textarea,
  button {
    width: calc(100% - 20%);
  }
}
</style>
