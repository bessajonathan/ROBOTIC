const BuscarMenssagem = require('../service/menssagemAdministradorService');

module.exports = {
  funcoesAdministrador: async (menssagem) => {
    const resposta = await BuscarMenssagem(menssagem);
    return resposta;
  },
};
