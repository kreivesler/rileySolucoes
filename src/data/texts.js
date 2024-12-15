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
class CriaCardTextoServico {
  constructor(titulo, descricao, beneficio1, beneficio2, beneficio3) {
    this.titulo = titulo;
    this.descricao = descricao;
    this.beneficios = {
      beneficio1: beneficio1,
      beneficio2: beneficio2,
      beneficio3: beneficio3,
    };
  }
}

const cardTexto1 = new criaCardTexto('Bem-vindo à KR Riley Soluções', 'Transforme a presença online do seu negócio', 'Na KR Riley Soluções, oferecemos desenvolvimento de sites personalizados e profissionais para atender às suas necessidades específicas. Se você busca uma solução única e de qualidade para o seu site, estamos aqui para ajudar.')

const cardTexto2 = new criaCardTexto('Soluções Sob Medida', 'Sites que atendem ao seu negócio', 'Entendemos que cada empresa é única, por isso criamos sites responsivos que se adaptam a todos os dispositivos. Se você precisa de um site institucional, uma landing page ou um projeto mais personalizado, temos a experiência necessária para oferecer a solução ideal.')

const cardTexto3 = new criaCardTexto('Foco no Desempenho', 'Sites rápidos e otimizados', 'Desenvolvemos sites com alto desempenho, garantindo uma navegação rápida e sem falhas. Além disso, nossas soluções são sempre pensadas para garantir a melhor experiência do usuário. A otimização de SEO é parte fundamental do nosso processo, para garantir que seu site seja facilmente encontrado pelos motores de busca.')

const cardTexto4 = new criaCardTexto('Entre em Contato', 'Pronto para começar seu projeto?', 'Estamos prontos para ajudar a levar sua presença online para o próximo nível. Se você está pronto para iniciar seu projeto ou quer saber mais sobre como podemos ajudar, entre em contato agora mesmo.')

const cardServico1 = new CriaCardTextoServico('Criação de Sites Institucionais', 'Destaque sua empresa com um site profissional que reflita sua identidade e valores. Criamos sites institucionais modernos, projetados para atrair e engajar seu público, transmitindo credibilidade e confiança.', 'Design responsivo para todos os dispositivos.', 'Navegação simples e intuitiva.', 'Personalização para atender às necessidades da sua marca.')

const cardServico2 = new CriaCardTextoServico('Landing Pages para Campanhas', 'Precisa de uma página de alta conversão para sua campanha ou promoção? Desenvolvemos landing pages focadas em resultados, ideais para capturar leads e aumentar as vendas.', 'Layouts limpos e atrativos.', 'Foco em destacar sua mensagem principal.', 'Integração com ferramentas de marketing, se necessário.')

const cardServico3 = new CriaCardTextoServico('Otimização de Sites para SEO', 'Melhore a visibilidade do seu site nos motores de busca com nossas técnicas de otimização SEO. Ajudamos seu site a alcançar melhores posições no Google, aumentando o tráfego orgânico e potencializando seus resultados.', 'Aplicamos as melhores práticas de SEO técnico.', 'Estruturamos o conteúdo para aumentar a relevância.', 'Garantimos velocidade e desempenho.')

const cardServico4 = new CriaCardTextoServico('Consultoria e Suporte', 'Além de criar o site perfeito, oferecemos consultoria e suporte técnico para garantir que tudo funcione como deveria. Este serviço inclui:', 'Ajustes e melhorias no design e funcionalidade.', 'Resolução de problemas técnicos.', 'Orientação para manter seu site atualizado.')

const conteudoTexto = [
  cardTexto1,
  cardTexto2,
  cardTexto3,
  cardTexto4
]

const conteudoServicos = [
  cardServico1,
  cardServico2,
  cardServico3,
  cardServico4
]

export {cardTeste, LoremTeste, conteudoTexto, conteudoServicos}
