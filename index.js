const venom = require("venom-bot");
const clienteController = require("./src/controller/ClienteController");
const administradorController = require("./src/controller/AdministradorController");
require("dotenv").config();

const database = require("./src/database/configuracao");
const ClienteController = require("./src/controller/ClienteController");

const Iniciar = async () => {
  venom
    .create("robotic", "", "", { browserArgs: ["--no-sandbox"] })
    .then((client) => start(client));
  // venom.create().then((client) => start(client));
  database();

  function start(client) {
    client.onMessage(async (message) => {
      if (message.from === process.env.ADMINISTRADOR) {
        await Administrador(client, message);
      } else {
        await Cliente(client, message);
      }
    });
  }
};

const Cliente = async (client, message) => {
  const resposta = await clienteController.AtenderCliente(message);
  resposta.forEach((item) => {
    if (item.destinatario === "cliente") {
      if (item.tipo === "imagem") {
        client.sendImage(message.from, item.path, item.nome, item.descricao);
      } else {
        for (let i = 0; i < item.msg.length; i++) {
          const msg = item.msg[i];
          client.sendText(message.from, msg);
        }
      }
    } else {
      if (item.tipo === "texto") {
        for (let i = 0; i < item.msg.length; i++) {
          const msg = item.msg[i];
          client.sendText(process.env.ADMINISTRADOR, msg);
        }
      } else {
        client.sendImage(
          process.env.ADMINISTRADOR,
          item.path,
          item.nome,
          item.descricao
        );
      }
    }
  });
};

const Administrador = async (client, message) => {
  const resposta = await administradorController.funcoesAdministrador(message);
  resposta.forEach((item) => {
    if (item.tipo === "texto") {
      if (item.destinatario === "cliente") {
        for (let i = 0; i < item.msg.length; i++) {
          const msg = item.msg[i];
          const numero = item.numero;
          client.sendText(numero, msg);
        }
      } else {
        for (let i = 0; i < item.msg.length; i++) {
          const msg = item.msg[i];
          client.sendText(process.env.ADMINISTRADOR, msg);
        }
      }
    } else {
      client.sendImage(
        process.env.ADMINISTRADOR,
        item.path,
        item.nome,
        item.descricao
      );
    }
  });
};

Iniciar();
