export default [
  {
    errorCode: 'H001',
    httpCode: 400,
    title: 'Horario indisponivel',
    description:
      'O Horario informado para agendamento esta Indisponivel para esse Profissional'
  },
  {
    errorCode: 'U001',
    httpCode: 401,
    title: 'Usuario nao Autorizado',
    description:
      'Usuario nao esta autorizado a fazer esta açao. Faça login novamente e tente outra vez'
  },

  {
    errorCode: 'A001',
    httpCode: 500,
    title: 'Erro na coonexao com banco de dados',
    description:
      'Não foi possivelk conectar ao banco de dados para salvar o agendamento'
  },
  {
    errorCode: 'A005',
    httpCode: 400,
    title: 'Agendamento nao autorizado',
    description: 'Voce nao pode fazer um agendamento com voce mesmo'
  }
];
