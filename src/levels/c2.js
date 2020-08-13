const clienteService = require('../service/clienteService');

const nivel2 = async (menssagem, cliente) => {
  const arrayMenssagens = [];

  if (menssagem.body == 0) {
    arrayMenssagens.push({
      destinatario: 'cliente',
      tipo: 'texto',
      msg: ['*====Produtos====*\n *1)*-Vestidos 👗'],
    });

    cliente.nivelAtendimento = 1;

    await clienteService.descerNivelDoAtendimento(cliente);

    return arrayMenssagens;
  }

  if (menssagem.body == 9) {
    const horario = new Date().getHours();

    //Definindo Horário de atendimento

    if (horario >= 9 && horario <= 22) {
      arrayMenssagens.push({
        destinatario: 'cliente',
        tipo: 'texto',
        msg: [
          '😀 Que legal\nVou avisar a Kamila para continuar o seu atendimento ok? é rapidinho 🏃‍♀️',
        ],
      });
    } else {
      arrayMenssagens.push({
        destinatario: 'cliente',
        tipo: 'texto',
        msg: [
          '😔 A Kamila não está disponível no momento\nVou deixar seu recado\nAssim que possível ela entrará em contato',
        ],
      });
    }

    // cliente.nivelAtendimento = 9;

    // await clienteService.subirNivelDoAtendimento(cliente);

    arrayMenssagens.push({
      destinatario: 'administrador',
      tipo: 'texto',
      msg: [
        `🤖 Kamila o cliente\nCódigo ${menssagem.from}\nNome : ${menssagem.sender.name}\nEstá te esperando`,
      ],
    });

    arrayMenssagens.push({
      destinatario: 'administrador',
      tipo: 'imagem',
      path: menssagem.sender.profilePicThumbObj.eurl,
      nome: 'Foto',
      descricao: menssagem.sender.name,
    });

    return arrayMenssagens;
  }

  arrayMenssagens.push({
    destinatario: 'cliente',
    tipo: 'texto',
    msg: [
      'Gostou de algum produto?\nVou te apresentar algumas opções\nEscolha alguma delas',
    ],
  });

  arrayMenssagens.push({
    destinatario: 'cliente',
    tipo: 'texto',
    msg: ['*====Opções====*\n *0)*-Voltar\n *9)*-Comprar'],
  });

  return arrayMenssagens;
};

module.exports = nivel2;
