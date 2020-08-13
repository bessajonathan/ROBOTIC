const nivelAdministrador = require('../helpers/variaveisGlobais');

const aNivel0 = async (menssagem) => {
  const arrayMenssagem = [];

  arrayMenssagem.push({
    tipo: 'texto',
    msg: [
      '====🤖*ROBOTIC-Assistente*====\nEscolha uma opção:\n\n*1)*-Resetar nível de Cliente\n\n\n\n *By*:Jonathan',
    ],
  });

  nivelAdministrador = 1;
  return arrayMenssagem;
};

module.exports = aNivel0;
