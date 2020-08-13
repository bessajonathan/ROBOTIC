const aNivel0 = require('../levels/a0');
const aNivel1 = require('../levels/a1');
const administrador = require('../helpers/objGlobais');

const resposta = async (menssagem) => {
  switch (administrador.nivelAdminsitrador.nivel) {
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
