const administrador = require('../helpers/objGlobais');

const aNivel1 = async (menssagem) => {
  const arrayMenssagem = [];

  if (menssagem.body == 1) {
    arrayMenssagem.push({
      tipo: 'texto',
      msg: ['Informe o Código do Cliente'],
    });

    administrador.nivelAdminsitrador.nivel = 2;
  } else {
    RespostaOpcaoInvalida(arrayMenssagem);
    return arrayMenssagem;
  }
};

module.exports = aNivel1;

const RespostaOpcaoInvalida = (arrayMenssagem) => {
  arrayMenssagem.push({
    tipo: 'texto',
    msg: [
      '*Opção inválida*\nEscolha uma opção:\n\n*1)*-Resetar nível de Cliente',
    ],
  });
};
