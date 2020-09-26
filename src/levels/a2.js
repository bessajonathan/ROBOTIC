const clienteService = require("../service/clienteService");
const administrador = require("../helpers/objGlobais");

const aNivel2 = async (menssagem) => {
  const arrayMenssagens = [];

  if (menssagem.body.length == 17) {
    const codigoCorerto = menssagem.body.includes("@c.us");

    if (codigoCorerto) {
      await clienteService.resetarNivelCliente(menssagem.body);

      arrayMenssagens.push({
        tipo: "texto",
        msg: [
          "*====🤖ROBOTIC====*\nEscolha uma opção:\n\n*1)*-Resetar nível de Cliente\n\n*2)*-Avisar contatos sobre novidade\n\n\n *By*:Jonathan",
        ],
      });

      arrayMenssagens.push({
        tipo: "texto",
        msg: ["Nivel do cliente resetado com Sucesso"],
      });

      administrador.nivelAdminsitrador.nivel = 0;
      return arrayMenssagens;
    }
  }

  arrayMenssagens.push({
    tipo: "texto",
    msg: ["Informe o Código do Cliente"],
  });

  return arrayMenssagens;
};

module.exports = aNivel2;
