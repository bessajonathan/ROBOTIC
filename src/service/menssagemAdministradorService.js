const aNivel0 = require('../levels/a0');
const aNivel1 = require('../levels/a1');
const nivelAdministrador = require('../helpers/variaveisGlobais');

const resposta = async (menssagem) => {
  switch (nivelAdministrador) {
    case 0:
      return await aNivel0(menssagem);
      break;

    case 1:
      return await aNivel1(menssagem);
      break;

    default:
      break;
  }
};

module.exports = resposta;
