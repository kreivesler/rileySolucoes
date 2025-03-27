import { ref } from "vue";

const chave = import.meta.env.VITE_API_PRODUCAO;
const idProduto = ref(null);
const idAlunoAfterLogin = ref(null);
const listaCursos = ref(null);
const listaDeModulos = ref(null);
const modulos = ref(null);
const idCurso = ref(null);
let aulas

async function getCursoInf(idProduto) {
  try {
    const response = await fetch(`${chave}/p/${idProduto}`);
    const servicoUm = await response.json();

    return {
      id: servicoUm.id,
      nome: servicoUm.nome,
      descricao: servicoUm.descricao,
      valor: servicoUm.valor,
    };
  } catch (error) {
    console.error("Erro ao buscar serviço:", error);
    return null; // Retorna null em caso de erro
  }
}

async function getAllCursos() {
  try {
    const response = await fetch(`${chave}/a/c/${idAlunoAfterLogin.value}`);
    const obj = await response.json();

    console.log(`Esta é a lista:`);
    console.log(obj);
    return (listaCursos.value = obj);
  } catch (error) {
    console.error("Erro ao buscar cursos:", error);
    return null; // Retorna null em caso de erro
  }
}

async function getAllModulosForCursoId(cursoId) {
  try {
    const response = await fetch(`${chave}/m/${cursoId}`);
    const lista = await response.json();

    return (modulos.value = lista);
  } catch (error) {
    console.error("Erro ao buscar modulos:", error);
    return null; // Retorna null em caso de erro
  }
}

async function getAllAulasForModuloId(moduloID, cursoID) {
  try {
    const response = await fetch(`${chave}/m/${moduloID}/${cursoID}`);
    const lista = await response.json();
    console.log('lista de aulas api:', lista)
    return (aulas = lista);
  } catch (error) {
    console.error("Erro ao buscar aulas:", error);
    return null; // Retorna null em caso de erro
  }
}

const dadosCheckout = ref(null);

export {
  getCursoInf,
  getAllCursos,
  dadosCheckout,
  idProduto,
  idAlunoAfterLogin,
  listaCursos,
  modulos,
  getAllModulosForCursoId,
  idCurso,
  getAllAulasForModuloId,
  listaDeModulos,
  aulas,
};
