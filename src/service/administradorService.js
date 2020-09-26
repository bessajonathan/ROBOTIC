const clienteModel = require("../models/cliente");

module.exports = {
  BuscarTodosClientes: async () => {
    const clientes = await clienteModel.find({});
    return clientes;
  },
};
