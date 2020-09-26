const cNivel0 = require("../levels/c0");
const cNivel1 = require("../levels/c1");
const cNivel2 = require("../levels/c2");

const resposta = async (cliente, menssagem) => {
  console.log();
  switch (cliente.nivelAtendimento) {
    case 0:
      return await cNivel0(cliente);
      break;

    case 1:
      return await cNivel1(menssagem, cliente);
      break;

    case 2:
      return await cNivel2(menssagem, cliente);
      break;

    default:
      break;
  }
};

module.exports = resposta;
