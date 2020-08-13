const nivelAdministrador = require('../helpers/variaveisGlobais');

const aNivel1 = async (menssagem) => {
  const arrayMenssagem = [];

  if (menssagem == 1) {
  } else {
    RespostaOpcaoInvalida(arrayMenssagem);
  }
};

module.exports = aNivel1;

const RespostaOpcaoInvalida = (arrayMenssagem) => {
  arrayMenssagens.push({
    tipo: 'texto',
    msg: [
      '*Opção inválida*\nEscolha uma opção:\n\n*1)*-Resetar nível de Cliente',
    ],
  });
};
