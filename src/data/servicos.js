import { ref } from "vue";

const chave = import.meta.env.VITE_API_PRODUCAO;
const idProduto = ref(null)
const idAlunoAfterLogin = ref(null)
const listaCursos = ref(null)

async function getCursoInf(idProduto) {
  try {
    const response = await fetch(`${chave}/p/${idProduto}`);
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

async function getAllCursos(){
  try{
    const response = await fetch(`${chave}/a/c/${idAlunoAfterLogin.value}`)
    const obj = await response.json()

    console.log(`Esta é a lista:`)
    console.log(obj)
   return listaCursos.value = obj
  } catch (error) {
    console.error("Erro ao buscar cursos:", error);
    return null; // Retorna null em caso de erro
  }
}

const dadosCheckout = ref(null)

export { getCursoInf, getAllCursos, dadosCheckout, idProduto, idAlunoAfterLogin, listaCursos };
