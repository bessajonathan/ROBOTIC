const clienteService = require("../service/clienteService");

const nivel0 = async (cliente) => {
  const arrayMenssagens = [];

  arrayMenssagens.push({
    destinatario: "cliente",
    tipo: "texto",
    msg: ["*1 *-Vestidos 👗"],
  });

  arrayMenssagens.push({
    destinatario: "cliente",
    tipo: "texto",
    msg: [
      "🌺 Olá, seja Bem vindo(a) a Boutique Kamila Vaz\nSegue abaixo menu de opções dos produtos disponíveis\nEnvie uma mensagem com o número correspondente da opção desejada",
    ],
  });

  cliente.nivelAtendimento = 1;

  await clienteService.subirNivelDoAtendimento(cliente);

  return arrayMenssagens;
};

module.exports = nivel0;
