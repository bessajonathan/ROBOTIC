const clienteModel = require('../models/cliente');

module.exports = {
  BuscarClienteNaBase: async (numero) => {
    if (numero.from === '556193537517@c.us') {
      const cliente = await clienteModel.findOne({ numero: numero.from });
      if (cliente != null) {
        return cliente;
      } else {
        const cliente = await cadastrarNovoCliente(numero.from);
        return cliente;
      }
    }
  },
  subirNivelDoAtendimento: async (cliente) => {
    await clienteModel.findOneAndUpdate({ _id: cliente.id }, cliente);
  },
  descerNivelDoAtendimento: async (cliente) => {
    await clienteModel.findOneAndUpdate({ _id: cliente.id }, cliente);
  },
};

const cadastrarNovoCliente = async (numero) => {
  try {
    const novoCliente = new clienteModel({
      numero: numero,
      nivelAtendimento: 0,
    });

    await novoCliente.save();
    return novoCliente;
  } catch (erro) {
    console.log('CADASTRAR_CLIENTE_ERRO' + erro);
  }
};
