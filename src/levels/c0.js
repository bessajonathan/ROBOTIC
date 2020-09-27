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
    msg: ["Envie uma menssagem com o número correspondente da opção desejada"],
  });

  arrayMenssagens.push({
    destinatario: "cliente",
    tipo: "texto",
    msg: ["Segue abaixo menu de opções dos produtos disponíveis"],
  });

  arrayMenssagens.push({
    destinatario: "cliente",
    tipo: "texto",
    msg: ["🌺 Olá, seja Bem vindo(a) a Boutique Kamila Vaz"],
  });

  cliente.nivelAtendimento = 1;

  await clienteService.subirNivelDoAtendimento(cliente);

  return arrayMenssagens;
};

module.exports = nivel0;
