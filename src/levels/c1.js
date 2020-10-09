const clienteService = require("../service/clienteService");

const path = require("path");

const nivel1 = async (menssagem, cliente) => {
  const arrayMenssagens = [];

  if (menssagem.body == 1) {
    arrayMenssagens.push({
      destinatario: "cliente",
      tipo: "texto",
      msg: ["*====Opções====*\n *0*-Voltar\n *9*-Mais informações"],
    });

    BuscarVestidos(arrayMenssagens);

    arrayMenssagens.push({
      destinatario: "cliente",
      tipo: "texto",
      msg: ["O Valor do produto estará na descrição da imagem"],
    });

    arrayMenssagens.push({
      destinatario: "cliente",
      tipo: "texto",
      msg: ["Vou te enviar as fotos"],
    });

    cliente.nivelAtendimento = 2;

    await clienteService.subirNivelDoAtendimento(cliente);

    return arrayMenssagens;
  } else {
    RespostaOpcaoInvalida(arrayMenssagens);
    return arrayMenssagens;
  }
};

const BuscarVestidos = (arrayMenssagens) => {
  arrayMenssagens.push({
    destinatario: "cliente",
    tipo: "imagem",
    path: `${path.resolve(
      __dirname,
      "..",
      "..",
      "public",
      "imagens",
      "v0.jpeg"
    )}`,
    nome: "Foto",
    descricao: "Valor *R$ 85,00*",
  });

  arrayMenssagens.push({
    destinatario: "cliente",
    tipo: "imagem",
    path: `${path.resolve(
      __dirname,
      "..",
      "..",
      "public",
      "imagens",
      "v1.jpeg"
    )}`,
    nome: "Foto",
    descricao: "Valor *R$ 85,00*",
  });

  arrayMenssagens.push({
    destinatario: "cliente",
    tipo: "imagem",
    path: `${path.resolve(
      __dirname,
      "..",
      "..",
      "public",
      "imagens",
      "v2.jpeg"
    )}`,
    nome: "Foto",
    descricao: "Valor *R$ 85,00*",
  });
};

const RespostaOpcaoInvalida = (arrayMenssagens) => {
  arrayMenssagens.push({
    destinatario: "cliente",
    tipo: "texto",
    msg: ["*====Produtos====*\n *1*-Vestidos 👗"],
  });

  arrayMenssagens.push({
    destinatario: "cliente",
    tipo: "texto",
    msg: [
      "*Opção inválida*\nSegue abaixo menu de opções dos produtos disponíveis\nEnvie uma mensagem com o número correspondente da opção desejada",
    ],
  });
};

module.exports = nivel1;
