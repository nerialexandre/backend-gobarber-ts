export default {
  HorarioIndisponivel: {
    httpCode: 500,
    response: {
      errorCode: 'HorarioIndisponivel',
      description: 'o Horario esta Indisponivel para esse profissional',
    },
  },
  REQ001: {
    httpCode: 400,
    response: {
      errorCode: 'REQ-001',
      description:
        'Campos inválidos ou ausentes. Por favor, verifique os campos informados na resposta.',
    },
  },
  REQ002: {
    httpCode: 400,
    response: {
      errorCode: 'REQ-002',
      description: 'Body da requisição inválido. Verifique se o JSON é válido.',
    },
  },
  REQ003: {
    httpCode: 422,
    response: {
      errorCode: 'REQ-003',
      description:
        'Valores duplicados. Por favor, verifique os campos informados na resposta.',
    },
  },
  REQ004: {
    httpCode: 422,
    response: {
      errorCode: 'REQ-004',
      description:
        'Não foi possível encontrar um parceiro com o id informado no body.',
    },
  },
  CUS001: {
    httpCode: 404,
    response: {
      errorCode: 'CUS-001',
      description:
        'Não foi encontrado uma requisição vinculada ao Cliente, com o status válido para cancelamento.',
    },
  },
  CUS002: {
    httpCode: 404,
    response: {
      errorCode: 'CUS-002',
      description:
        'Não foi encontrado uma requisição vinculada ao Cliente, com o status válido para avaliação.',
    },
  },
  CUS003: {
    httpCode: 422,
    response: {
      errorCode: 'CUS-003',
      description: 'CPF informado já se encontra em uso.',
    },
  },
  CUS004: {
    httpCode: 422,
    response: {
      errorCode: 'CUS-004',
      description:
        'Dados informados inconsistentes com a base de dados da receita. Verifique o cpf e a data de nascimento informados.',
    },
  },
  CUS005: {
    httpCode: 404,
    response: {
      errorCode: 'CUS-005',
      description:
        'Não foi encontrada uma conta com o status apto para atualização do cpf. O cpf do Cliente tem status inválido para atualização ou o identificador de conta é inválido.',
    },
  },
  CUS006: {
    httpCode: 430,
    response: {
      errorCode: 'CUS-006',
      description:
        'A conta do cliente possui uma ou mais informações pendentes. Por favor, verifique número de telefone, email e cpf.',
    },
  },
  PTN001: {
    httpCode: 404,
    response: {
      errorCode: 'PTN-001',
      description:
        'Não foi encontrada uma conta com o status apto para aprovação administrativa. A conta do parceiro pode se encontrar aprovada ou aguardando aprovação da equipe administrativa ou seu identificador de conta é inválido.',
    },
  },
  PTN002: {
    httpCode: 404,
    response: {
      errorCode: 'PTN-002',
      description:
        'Não foi encontrada uma conta com o status apto para compra de uma nova assinatura. A conta do parceiro pode se encontrar com uma assinatura ativa ou seu identificador de conta é inválido.',
    },
  },
  PTN003: {
    httpCode: 404,
    response: {
      errorCode: 'PTN-003',
      description:
        'Não foi encontrada uma conta com o status apto para cancelamento de assinatura. A conta do parceiro pode se encontrar com uma assinatura inativa ou seu identificador de conta é inválido.',
    },
  },
  PTN004: {
    httpCode: 404,
    response: {
      errorCode: 'PTN-004',
      description:
        'Não foi encontrada uma conta com o status apto para atualização de assinatura. A conta do parceiro pode se encontrar com uma assinatura inativa ou seu identificador de conta é inválido.',
    },
  },
  PTN005: {
    httpCode: 404,
    response: {
      errorCode: 'PTN-005',
      description:
        'Não foi encontrado um Serviço apto para vinculação ao Parceiro. O Serviço se encontrar inativo, pendente de aprovação da Equipe Administrativa ou seu identificador é inválido.',
    },
  },
  PTN006: {
    httpCode: 404,
    response: {
      errorCode: 'PTN-006',
      description:
        'Não foi encontrado uma requisição vinculada ao Parceiro, com o status válido para aprovação.',
    },
  },
  PTN007: {
    httpCode: 404,
    response: {
      errorCode: 'PTN-007',
      description:
        'Não foi encontrado uma requisição vinculada ao Parceiro, com o status válido para cancelamento.',
    },
  },
  PTN008: {
    httpCode: 404,
    response: {
      errorCode: 'PTN-008',
      description:
        'Não foi encontrado uma requisição vinculada ao Parceiro, com o status válido para atualizá-lo para em progresso.',
    },
  },
  PTN009: {
    httpCode: 404,
    response: {
      errorCode: 'PTN-009',
      description:
        'Não foi encontrado uma requisição vinculada ao Parceiro, com o status válido para rejeição.',
    },
  },
  PTN010: {
    httpCode: 404,
    response: {
      errorCode: 'PTN-010',
      description:
        'Não foi encontrado uma requisição vinculada ao Parceiro, com o status e/ou tipo de pagamento válido para finalização custom.',
    },
  },
  PTN011: {
    httpCode: 404,
    response: {
      errorCode: 'PTN-011',
      description:
        'Não foi encontrado uma requisição vinculada ao Parceiro, com o status e/ou tipo de pagamento válido para finalização Moip.',
    },
  },
  PTN012: {
    httpCode: 404,
    response: {
      errorCode: 'PTN-012',
      description:
        'Não foi encontrado uma requisição vinculada ao Parceiro, com o status válido para avaliação.',
    },
  },
  PTN013: {
    httpCode: 404,
    response: {
      errorCode: 'PTN-013',
      description:
        'Não foi encontrado um Parceiro válido para setar uma visualização.',
    },
  },
  PTN014: {
    httpCode: 422,
    response: {
      errorCode: 'PTN-014',
      description:
        'Esta visualização não pode ser setada, pois o usuário já visualizou este parceiro recentemente.',
    },
  },
  PTN015: {
    httpCode: 404,
    response: {
      errorCode: 'PTN-014',
      description:
        'Não foi encontrado um Parceiro válido com o slug informado.',
    },
  },
  PAY001: {
    httpCode: 422,
    response: {
      errorCode: 'PAY-001',
      description:
        'A finalização da requisição não pôde ser completada, pois o pagamento Moip retornou o status CANCELLED.',
    },
  },
  GUE001: {
    httpCode: 400,
    response: {
      errorCode: 'GUE-001',
      description:
        'Campos inválidos ou ausentes. Por favor, verifique os campos informados na resposta.',
    },
  },
  AUT001: {
    httpCode: 401,
    response: {
      errorCode: 'AUT-001',
      description: 'Credenciais ausentes ou inválidas.',
    },
  },
  AUT002: {
    httpCode: 403,
    response: {
      errorCode: 'AUT-002',
      description:
        'Não foi possível emitir um novo token JWT, o refresh token informado está inválido, revogado ou expirado.',
    },
  },
  AUT003: {
    httpCode: 403,
    response: {
      errorCode: 'AUT-003',
      description:
        'Não foi possível emitir um novo token JWT, o token JWT informado ainda não está expirado ou é inválido.',
    },
  },
  AUT004: {
    httpCode: 403,
    response: {
      errorCode: 'AUT-004',
      description: 'Você não possui permissão para efetuar esta ação.',
    },
  },
  AUT005: {
    httpCode: 403,
    response: {
      errorCode: 'AUT-005',
      description: 'Código de confirmação inválido ou expirado.',
    },
  },
  AUT006: {
    httpCode: 403,
    response: {
      errorCode: 'AUT-006',
      description:
        'Não é possível completar a requisição, pois a conta do usuário precisa estar ativa.',
    },
  },
  AUT007: {
    httpCode: 403,
    response: {
      errorCode: 'AUT-007',
      description: 'A conta do usuário já se encontra ativa.',
    },
  },
  AUT008: {
    httpCode: 403,
    response: {
      errorCode: 'AUT-008',
      description: 'Já existe uma sessão mobile ativa.',
    },
  },
  AUT009: {
    httpCode: 403,
    response: {
      errorCode: 'AUT-009',
      description:
        'The OAuth2 Provider and/or email address is already connected to another account.',
    },
  },
  AUT010: {
    httpCode: 404,
    response: {
      errorCode: 'AUT-010',
      description:
        'Não foi possível encontrar o usuário para ativar sua conta.',
    },
  },
  AUT011: {
    httpCode: 404,
    response: {
      errorCode: 'AUT-011',
      description:
        'Não foi possível encontrar o usuário para desativar sua conta.',
    },
  },
  SCK001: {
    response: {
      errorCode: 'SCK-001',
      description:
        'Erro de autenticação de socket, não foi detectado usuário autenticado.',
    },
  },
  SCK002: {
    response: {
      errorCode: 'SCK-001',
      description:
        'Erro de autenticação de socket, token jwt e/ou usuário inválidos.',
    },
  },
  SRV001: {
    httpCode: 500,
    response: {
      errorCode: 'SRV-001',
      description:
        'Um erro interno ocorreu e foi efetuado o log da requisição.',
    },
  },
  SRV002: {
    httpCode: 502,
    response: {
      errorCode: 'SRV-002',
      description:
        'Um erro interno ocorreu quando o servidor fez uma requisição para API da Moip.',
    },
  },
  SRV003: {
    httpCode: 502,
    response: {
      errorCode: 'SRV-003',
      description: 'Não foi possível processar o Webhook Moip.',
    },
  },
  SRV004: {
    httpCode: 502,
    response: {
      errorCode: 'SRV-004',
      description:
        'Um erro interno ocorreu quando o servidor fez uma requisição para API de verificação CPF/CNPJ.',
    },
  },
  SRV005: {
    httpCode: 502,
    response: {
      errorCode: 'SRV-005',
      description:
        'Um erro interno ocorreu quando o servidor fez uma requisição para API da Pagar.me.',
    },
  },
  SRV006: {
    httpCode: 502,
    response: {
      errorCode: 'SRV-006',
      description: 'Não foi possível processar o Webhook Pagar.me.',
    },
  },
  SRV007: {
    httpCode: 502,
    response: {
      errorCode: 'SRV-005',
      description:
        'Um erro interno ocorreu quando o servidor fez uma requisição para API da Pagar.me. Verifique os dados do cartão e tente novamente.',
    },
  },
  SUB001: {
    httpCode: 422,
    response: {
      errorCode: 'SUB-001',
      description: 'Apple receipt is invalid',
    },
  },
  SUB002: {
    httpCode: 422,
    response: {
      errorCode: 'SUB-002',
      description: 'Apple receipt is expired',
    },
  },
  SUB003: {
    httpCode: 422,
    response: {
      errorCode: 'SUB-003',
      description: 'Apple receipt is cancelled',
    },
  },
  SUB004: {
    httpCode: 404,
    response: {
      errorCode: 'SUB-004',
      description:
        'Não foi encontrada uma conta com o status apto para compra de uma nova assinatura. A conta do parceiro pode se encontrar com uma assinatura ativa ou seu identificador de conta é inválido.',
    },
  },
  SUB005: {
    httpCode: 404,
    response: {
      errorCode: 'SUB-005',
      description:
        'Não foi encontrada uma conta com o status apto para consulta de faturas. A conta do parceiro pode se encontrar sem assinatura ou seu identificador de conta é inválido.',
    },
  },
  SUB006: {
    httpCode: 404,
    response: {
      errorCode: 'SUB-006',
      description:
        'Não foi encontrada uma conta com o status apto para cancelamento. A conta do parceiro pode se encontrar com assinatura cancelada, sem assinatura ou seu identificador de conta é inválido.',
    },
  },
  SUB007: {
    httpCode: 404,
    response: {
      errorCode: 'SUB-007',
      description: 'Não foi encontrada a assinatura informada.',
    },
  },
  SUB008: {
    httpCode: 400,
    response: {
      errorCode: 'SUB-008',
      description:
        'Não fui possível gerar cobrança para os dados do cartão de crédito informado. Verifique se as informações estão corretas ou se o cartão possui limite disponível.',
    },
  },
  MGS001: {
    httpCode: 404,
    response: {
      errorCode: 'MSG-001',
      description:
        'Não foi encontrada uma mensagem com o identificador informado.',
    },
  },
  MSG002: {
    httpCode: 422,
    response: {
      errorCode: 'MSG-002',
      description:
        'Não é possível marcar esta mensagem como lida, pois ela já foi marcada como lida recentemente.',
    },
  },
  USR001: {
    httpCode: 403,
    response: {
      errorCode: 'USR-001',
      description:
        'Não é possível executar a ação para o usuário informado nos parâmetros da requisição. Credenciais inválidas.',
    },
  },
  RBL001: {
    httpCode: 403,
    response: {
      errorCode: 'RBL-001',
      description: 'Não é possível criar o link no rebrandly. Consulte o erro.',
    },
  },
  CPF001: {
    httpCode: 403,
    response: {
      errorCode: 'CPF-001',
      description: 'Não foi possível consultar o Cpf ou Cnpj. Consulte o erro.',
    },
  },
};
