const clienteService = require("../service/clienteService");
const BuscarMenssagem = require("../service/menssagemClienteService");

module.exports = {
  AtenderCliente: async (menssagem) => {
    const cliente = await clienteService.BuscarClienteNaBase(menssagem);

    if (cliente != null) {
      const resposta = await BuscarMenssagem(cliente, menssagem);
      return resposta;
    }
  },
};
