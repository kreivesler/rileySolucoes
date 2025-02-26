const chave = import.meta.env.VITE_API_PRODUCAO;

async function getCursoInf() {
  try {
    const response = await fetch(`${chave}/s/1`);
    const servicoUm = await response.json();

    return {
      nome: servicoUm.nome,
      descricao: servicoUm.descricao,
      valor: servicoUm.valor
    };
  } catch (error) {
    console.error("Erro ao buscar serviço:", error);
    return null; // Retorna null em caso de erro
  }
}

export { getCursoInf };
