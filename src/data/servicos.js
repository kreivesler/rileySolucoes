import { ref } from "vue";

const chave = import.meta.env.VITE_API_PRODUCAO;
const idProduto = ref(null)
const idAlunoAfterLogin = ref(null)
const listaCursos = []

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

async function getAllCursos(){
  try{
    const response = await fetch(`${chave}/a/c/${idAlunoAfterLogin.value}`)
    const lista = await response.json()
    console.log(`Esta é a lista:`)
    console.log(lista)
   listaCursos.push(lista)
   console.log(`Esta é a listaCursos:`)
   console.log(listaCursos)
   return lista
  } catch (error) {
    console.error("Erro ao buscar cursos:", error);
    return null; // Retorna null em caso de erro
  }
}

const dadosCheckout = ref(null)

export { getCursoInf, getAllCursos, dadosCheckout, idProduto, idAlunoAfterLogin, listaCursos };
