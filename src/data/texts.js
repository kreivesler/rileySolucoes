const cardTeste = {
  Title: 'Lorem Ipsum Titulo',
  Subtitle: 'What is Lorem Ipsum?',
  Description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
  largeDesc: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
}

const LoremTeste = {
  Title: 'Lorem Ipsum Titulo',
  Subtitle: 'What is Lorem Ipsum?',
  Description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. `
}

const criaCardTexto = function(titulo, subtitulo, descricao){
  return {
    titulo: titulo,
    subtitulo: subtitulo,
    descricao: descricao
  }
}

const cardTexto1 = new criaCardTexto('Bem-vindo à KR Riley Soluções', 'Transforme a presença online do seu negócio', 'Na KR Riley Soluções, oferecemos desenvolvimento de sites personalizados e profissionais para atender às suas necessidades específicas. Se você busca uma solução única e de qualidade para o seu site, estamos aqui para ajudar.')

const cardTexto2 = new criaCardTexto('Soluções Sob Medida', 'Sites que atendem ao seu negócio', 'Entendemos que cada empresa é única, por isso criamos sites responsivos que se adaptam a todos os dispositivos. Se você precisa de um site institucional, uma landing page ou um projeto mais personalizado, temos a experiência necessária para oferecer a solução ideal.')

const cardTexto3 = new criaCardTexto('Foco no Desempenho', 'Sites rápidos e otimizados', 'Desenvolvemos sites com alto desempenho, garantindo uma navegação rápida e sem falhas. Além disso, nossas soluções são sempre pensadas para garantir a melhor experiência do usuário. A otimização de SEO é parte fundamental do nosso processo, para garantir que seu site seja facilmente encontrado pelos motores de busca.')

const cardTexto4 = new criaCardTexto('Entre em Contato', 'Pronto para começar seu projeto?', 'Estamos prontos para ajudar a levar sua presença online para o próximo nível. Se você está pronto para iniciar seu projeto ou quer saber mais sobre como podemos ajudar, entre em contato agora mesmo.')

const conteudoTexto = [
  cardTexto1,
  cardTexto2,
  cardTexto3,
  cardTexto4
]

export {cardTeste, LoremTeste, conteudoTexto}
