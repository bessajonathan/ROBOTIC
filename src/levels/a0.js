const administrador = require("../helpers/objGlobais");

const aNivel0 = async (menssagem) => {
  const arrayMenssagem = [];

  arrayMenssagem.push({
    tipo: "texto",
    msg: [
      "*====🤖ROBOTIC====*\nEscolha uma opção:\n\n*1)*-Resetar nível de Cliente\n\n*2)*-Avisar contatos sobre novidade\n\n\n *By*:Jonathan",
    ],
  });

  administrador.nivelAdminsitrador.nivel = 1;
  return arrayMenssagem;
};

module.exports = aNivel0;
