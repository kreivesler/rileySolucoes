import { criaCardTexto } from "./texts";

const cardTexto1 = new criaCardTexto(
  'Domine a Informática e o Pacote Office ',
  'Destaque-se no Mercado de Trabalho!',
  'Com o Curso de Informática Essencial e Pacote Office, você aprenderá as habilidades que as empresas exigem e terá mais oportunidades para crescer profissionalmente.'
)
const cardTexto2 = new criaCardTexto(
  'Aprenda do Zero mesmo sendo iniciante',
  '',
  'Nosso curso foi desenvolvido para quem deseja aprender de forma prática e sem complicação. Você entenderá desde o básico, como navegar na internet e organizar arquivos, até o uso avançado do Word, Excel, PowerPoint e Outlook para criar documentos profissionais, relatórios, apresentações e gerenciar e-mails.'
)
const cardTexto3 = new criaCardTexto(
  'Aumento Imediato da Produtividade',
  '',
  'Com as técnicas ensinadas no curso, você conseguirá executar tarefas no computador até 3x mais rápido, otimizando seu tempo e tornando seu trabalho mais eficiente. Isso significa menos esforço e melhores resultados, seja no seu emprego atual ou em um novo desafio profissional.'
)
const cardTexto4 = new criaCardTexto(
  'Mais Oportunidades no Mercado de Trabalho',
  '',
  'O domínio do Pacote Office é um dos requisitos mais exigidos em entrevistas de emprego. Empresas procuram profissionais que saibam usar planilhas, documentos e apresentações de forma eficaz. Com esse curso, você estará pronto para conquistar mais vagas e salários melhores!'
)
const cardTexto5 =  new criaCardTexto(
  'Suporte Personalizado e Certificado de Conclusão',
  '',
  'Dúvidas? Você não estará sozinho! Nosso suporte estará disponível para ajudar você em cada etapa do aprendizado. Além disso, ao concluir o curso, você receberá um certificado válido, que pode ser adicionado ao seu currículo e perfil no LinkedIn, destacando seu conhecimento.'
)

const cardTexto6 = {
  titulo: 'Quem Deve Fazer Este Curso?',
  opcao1: '✅ Quem quer aprender informática do zero e perder o medo do computador',
  opcao2: '✅ Profissionais que desejam melhorar suas habilidades e se destacar no mercado',
  opcao3: '✅ Estudantes que precisam preparar trabalhos e apresentações com qualidade',
  opcao4: '✅ Empreendedores que querem organizar melhor seu negócio e suas finanças'
}

const conteudo = [
  cardTexto1,
  cardTexto2,
  cardTexto3,
  cardTexto4,
  cardTexto5,
  cardTexto6
]

export {
  conteudo
}
