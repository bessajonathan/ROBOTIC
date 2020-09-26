const clienteService = require("../service/clienteService");

const nivel0 = async (cliente) => {
  const arrayMenssagens = [];

  arrayMenssagens.push({
    destinatario: "cliente",
    tipo: "texto",
    msg: ["*1)*-Vestidos 👗"],
  });

  arrayMenssagens.push({
    destinatario: "cliente",
    tipo: "texto",
    msg: [
      "🌺 Bem vindo(a) a Boutique\nKamila Vaz\nSegue abaixo menu de opções dos produtos disponíveis\nEscolha uma das opções:",
    ],
  });

  cliente.nivelAtendimento = 1;

  await clienteService.subirNivelDoAtendimento(cliente);

  return arrayMenssagens;
};

module.exports = nivel0;
