const administradorService = require("../service/administradorService");
const administrador = require("../helpers/objGlobais");

const aNivel1 = async (menssagem) => {
  const arrayMenssagem = [];

  if (menssagem.body == 3) {
    arrayMenssagem.push({
      tipo: "texto",
      msg: ["Informe o Código do Cliente"],
    });

    administrador.nivelAdminsitrador.nivel = 3;
    return arrayMenssagem;
  }

  if (menssagem.body == 1) {
    arrayMenssagem.push({
      tipo: "texto",
      msg: ["Informe o Código do Cliente"],
    });

    administrador.nivelAdminsitrador.nivel = 2;
    return arrayMenssagem;
  } else if (menssagem.body == 2) {
    arrayMenssagem.push({
      tipo: "texto",
      msg: ["🤖 Contatos avisados"],
    });

    const clientes = await administradorService.BuscarTodosClientes();

    clientes.forEach((cliente) => {
      arrayMenssagem.push({
        destinatario: "cliente",
        numero: cliente.numero,
        tipo: "texto",
        msg: [
          "🌺 Olá td bem?\nestamos com novidades na Boutique Kamilva Vaz 🏃‍♀️🏃‍♀️",
        ],
      });
    });

    administrador.nivelAdminsitrador.nivel = 0;
    return arrayMenssagem;
  } else {
    RespostaOpcaoInvalida(arrayMenssagem);
    return arrayMenssagem;
  }
};

module.exports = aNivel1;

const RespostaOpcaoInvalida = (arrayMenssagem) => {
  arrayMenssagem.push({
    tipo: "texto",
    msg: [
      "*Opção inválida*\nEscolha uma opção:\n\n*1)*-Resetar nível de Cliente\n\n*2)*-Avisar contatos sobre novidade\n\n*3)*-Assumir atendimento\n\n\n *By*:Jonathan",
    ],
  });
};
