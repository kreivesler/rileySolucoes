import { ref } from "vue"
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
const tokenLogin = ref(null)

export { headerApi, tokenLogin }
