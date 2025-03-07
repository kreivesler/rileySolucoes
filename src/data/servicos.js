import { ref } from "vue";

const chave = import.meta.env.VITE_API_PRODUCAO;
const idProduto = ref(null)

async function getCursoInf() {
  try {
    const response = await fetch(`${chave}/p/${idProduto.value}`);
    const servicoUm = await response.json();

    return {
      id: servicoUm.id,
      nome: servicoUm.nome,
      descricao: servicoUm.descricao,
      valor: servicoUm.valor
    };
  } catch (error) {
    console.error("Erro ao buscar serviço:", error);
    return null; // Retorna null em caso de erro
  }
}

const dadosCheckout = ref(null)

export { getCursoInf, dadosCheckout, idProduto };
