const aNivel0 = require("../levels/a0");
const aNivel1 = require("../levels/a1");
const aNivel2 = require("../levels/a2");
const aNivel3 = require("../levels/a3");
const administrador = require("../helpers/objGlobais");

const resposta = async (menssagem) => {
  switch (administrador.nivelAdminsitrador.nivel) {
    case 0:
      return await aNivel0(menssagem);
      break;

    case 1:
      return await aNivel1(menssagem);
      break;

    case 2:
      return await aNivel2(menssagem);
      break;

    case 3:
      return await aNivel3(menssagem);
      break;
    default:
      break;
  }
};

module.exports = resposta;
