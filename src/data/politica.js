const politicaPrivacidade = {
  titulo: "Política de Privacidade",
  introducao: "A KR Riley Soluções respeita a sua privacidade e se compromete a proteger os dados pessoais das empresas e usuários que interagem conosco. Esta Política de Privacidade explica como coletamos, usamos, armazenamos e protegemos os dados, bem como os direitos dos titulares conforme a Lei Geral de Proteção de Dados (LGPD) e o Código de Defesa do Consumidor (CDC).",
  secoes: [
    {
      titulo: "1. Dados que Coletamos",
      descricao: "Coletamos apenas os dados necessários para a prestação dos nossos serviços, tais como:",
      itens: [
        "Nome da empresa ou responsável.",
        "Contato (telefone e e-mail).",
        "CNPJ.",
        "Endereço."
      ],
      finalidade: [
        "Emissão de boletos de cobrança.",
        "Cadastro no nosso banco de dados para gestão de clientes e histórico de atendimento."
      ],
      nota: "Não realizamos serviços para empresas que não forneçam os dados necessários para a emissão de cobranças, conforme previsto no Código de Defesa do Consumidor."
    },
    {
      titulo: "2. Finalidade do Uso dos Dados",
      descricao: "Os dados coletados serão utilizados estritamente para os seguintes fins:",
      itens: [
        "Cumprimento de obrigações legais, como a emissão de documentos fiscais e boletos.",
        "Gerenciamento de contratos e relacionamento com clientes.",
        "Garantia de comunicação eficiente sobre os serviços contratados."
      ]
    },
    {
      titulo: "3. Compartilhamento de Dados",
      descricao: "A KR Riley Soluções não compartilha, vende ou aluga dados pessoais a terceiros. Os dados podem ser acessados apenas por:",
      itens: [
        "Equipe interna da KR Riley Soluções para fins de gestão e suporte técnico.",
        "Entidades governamentais ou órgãos reguladores, somente em caso de exigência legal."
      ]
    },
    {
      titulo: "4. Segurança dos Dados",
      descricao: "Adotamos medidas técnicas e administrativas adequadas para proteger os dados contra acessos não autorizados, alterações, divulgações ou destruições indevidas. Nosso banco de dados utiliza tecnologias de criptografia e sistemas de segurança robustos para garantir a integridade das informações."
    },
    {
      titulo: "5. Direitos dos Titulares",
      descricao: "Os titulares dos dados têm os seguintes direitos, conforme a LGPD:",
      itens: [
        "Solicitar informações sobre o tratamento de seus dados.",
        "Corrigir dados incorretos, incompletos ou desatualizados.",
        "Solicitar a exclusão dos dados, desde que não haja obrigação legal para mantê-los.",
        "Revogar o consentimento para o uso de dados a qualquer momento."
      ],
      contato: "Para exercer qualquer desses direitos, entre em contato conosco pelo e-mail: contato@rileysolucoes.com.br."
    },
    {
      titulo: "6. Retenção de Dados",
      descricao: "Manteremos os dados pessoais armazenados pelo tempo necessário para cumprir as finalidades descritas nesta Política ou enquanto houver uma obrigação legal de preservação."
    },
    {
      titulo: "7. Consentimento",
      descricao: "Ao contratar nossos serviços, você concorda com os termos desta Política de Privacidade e consente com o uso de seus dados conforme descrito. Caso tenha dúvidas ou precise de mais informações, entre em contato."
    },
    {
      titulo: "8. Alterações nesta Política",
      descricao: "Esta Política de Privacidade pode ser atualizada a qualquer momento para refletir mudanças legais ou operacionais. Publicaremos as atualizações em nosso site, com a data da última modificação.",
      ultimaAtualizacao: "17/12/2024"
    },
    {
      titulo: "9. Contato",
      descricao: "Para quaisquer dúvidas, reclamações ou solicitações relacionadas à privacidade de dados, entre em contato conosco:",
      itens: [
        "E-mail: contato@rileysolucoes.com.br",
        "Telefone: (31) XXX-XXXX"
      ]
    }
  ]
};

const policyService = {
  title: "Política de Prestação de Serviços",
  introduction: "A KR Riley Soluções estabelece os seguintes termos para a prestação de serviços de desenvolvimento de sites institucionais. Esta política visa garantir a clareza nas condições de contratação, execução e entrega dos projetos, bem como proteger ambas as partes de eventuais litígios.",
  terms: {
      developmentTimeline: {
          "1.1": "O prazo mínimo para o desenvolvimento de sites institucionais é de 15 (quinze) dias úteis a partir da data de início do projeto.",
          "1.2": "Esse prazo pode ser ajustado para mais dias em casos de alta demanda, necessidade de ajustes adicionais ou solicitações de personalizações fora do escopo inicial.",
          "1.3": "Alterações no prazo serão previamente comunicadas ao cliente."
      },
      cancellationDuringDevelopment: {
          "2.1": "Após a contratação e início do serviço, o cliente terá até 7 (sete) dias corridos para desistir do projeto, conforme o art. 49 do CDC (direito de arrependimento).",
          "2.2": "Caso o serviço já tenha sido iniciado e o cliente opte por cancelar após o prazo de 7 dias:",
          "2.2.1": "Uma multa de 10% (dez por cento) do valor total do serviço será cobrada para cobrir custos operacionais e perdas."
      },
      cancellationAfterDelivery: {
          "3.1": "Após a entrega do projeto, o cliente não poderá solicitar cancelamento ou reembolso, uma vez que estará em posse do produto final (projeto entregue).",
          "3.2": {
              note: "Excepcionalmente, o reembolso poderá ser avaliado e autorizado, desde que o cliente atenda obrigatoriamente às seguintes condições:",
              conditions: {
                  "3.2.1": "Não utilizar o projeto ou partes do código que o compõem, em qualquer forma ou plataforma.",
                  "3.2.2": "Excluir o projeto do servidor de hospedagem imediatamente após o acordo de ressarcimento.",
                  "3.2.3": "Firmar um termo de ciência sobre a exclusão e inutilização do projeto, sob pena de multa e ações legais."
              }
          },
          "3.3": {
              nonCompliance: "Em caso de descumprimento das condições acima e constatada a utilização do projeto ou partes do código após o reembolso, o cliente estará sujeito a:",
              penalties: [
                  "Pagamento integral do valor original do serviço.",
                  "Multa adicional de 2% (dois por cento) ao dia sobre o valor total, contados a partir da data de descumprimento."
              ]
          }
      },
      visualMaterials: {
          "4.1": "Imagens, vídeos e artes visuais (como logomarcas) são de total responsabilidade do cliente e fazem parte do contrato como materiais a serem fornecidos pela empresa contratante.",
          "4.2": {
              note: "A KR Riley Soluções não realiza serviços de design gráfico, edição de vídeos ou criação de logomarcas. O cliente poderá fornecer tais materiais ou, caso não entregue no prazo estipulado:",
              criteria: [
                  "Materiais genéricos ou ilustrativos poderão ser utilizados no desenvolvimento do projeto.",
                  "O cliente terá um prazo máximo de 3 (três) dias úteis para enviar o material necessário.",
                  "Caso o cliente não envie os materiais no prazo, será acrescido ao contrato o valor de serviços de design contratados por terceiros, com aprovação prévia da estimativa de custo."
              ]
          },
          "4.3": "A KR Riley Soluções não aceitará devoluções ou cancelamentos do serviço com alegações relacionadas às imagens ou vídeos ilustrativos utilizados."
      },
      projectOwnership: {
          "5.1": "Após o pagamento e recebimento do projeto, fica proibido ao cliente repassar, vender ou transferir o projeto ou partes do código a terceiros, com ou sem fins lucrativos.",
          "5.2": "Caso seja constatada a revenda ou repasse, o cliente estará sujeito às penalidades previstas em lei e deverá pagar à KR Riley Soluções uma indenização correspondente ao valor do serviço contratado, acrescido de 20% (vinte por cento)."
      },
      usageRights: {
          "6.1": "A propriedade intelectual do código e projeto desenvolvido é da KR Riley Soluções, sendo concedida ao cliente uma licença de uso limitada e intransferível após a quitação integral do valor contratado.",
          "6.2": "A licença permite ao cliente utilizar o projeto exclusivamente para os fins contratados, vedando alterações no código original sem autorização prévia."
      },
      fraudProtection: {
          "7.1": "Antes do início do desenvolvimento, será assinado um contrato detalhado entre as partes, especificando o escopo do projeto, prazos, valores e penalidades.",
          "7.2": "Todos os pagamentos deverão ser realizados por meios rastreáveis (boleto bancário ou transferência). Não aceitamos pagamentos em espécie ou por intermediários.",
          "7.3": "Em caso de suspeita de fraude ou tentativa de golpe, o contrato será imediatamente rescindido e as autoridades competentes serão acionadas.",
          "7.4": "Caso o cliente forneça informações falsas ou incompletas para o contrato ou cadastro, o serviço será suspenso até a regularização dos dados, sem prejuízo de multa contratual."
      },
      clientResponsibilities: {
          "8.1": "É responsabilidade do cliente fornecer todas as informações necessárias para o desenvolvimento do projeto no prazo combinado.",
          "8.2": "Atrasos no envio de materiais ou informações podem impactar o prazo de entrega, sem que isso configure descumprimento de prazo por parte da KR Riley Soluções.",
          "8.3": "O cliente é responsável por garantir o cumprimento das condições descritas nesta política."
      },
      jurisdiction: {
          "9.1": "Esta política é regida pelas leis brasileiras, especialmente pelo Código Civil, Código de Defesa do Consumidor e pela Lei de Direitos Autorais (Lei nº 9.610/1998).",
          "9.2": "Fica eleito o foro da comarca de Viçosa/MG para dirimir quaisquer dúvidas ou litígios decorrentes desta política ou da prestação de serviços."
      }
  }
};


export { politicaPrivacidade, policyService };
