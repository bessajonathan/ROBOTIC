const clienteService = require('../service/clienteService');

const path = require('path');

const nivel1 = async (menssagem, cliente) => {
  const arrayMenssagens = [];

  if (menssagem == 1) {
    arrayMenssagens.push({
      destinatario: 'cliente',
      tipo: 'texto',
      msg: ['O Valor do produto estará na descrição da imagem'],
    });

    BuscarVestidos(arrayMenssagens);

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
    destinatario: 'cliente',
    tipo: 'imagem',
    path: `${path.resolve(
      __dirname,
      '..',
      '..',
      'public',
      'imagens',
      'v0.jpeg'
    )}`,
    nome: 'Foto',
    descricao: 'Valor *R$ 85,00*',
  });

  arrayMenssagens.push({
    destinatario: 'cliente',
    tipo: 'imagem',
    path: `${path.resolve(
      __dirname,
      '..',
      '..',
      'public',
      'imagens',
      'v1.jpeg'
    )}`,
    nome: 'Foto',
    descricao: 'Valor *R$ 85,00*',
  });

  arrayMenssagens.push({
    destinatario: 'cliente',
    tipo: 'imagem',
    path: `${path.resolve(
      __dirname,
      '..',
      '..',
      'public',
      'imagens',
      'v2.jpeg'
    )}`,
    nome: 'Foto',
    descricao: 'Valor *R$ 85,00*',
  });

  arrayMenssagens.push({
    destinatario: 'cliente',
    tipo: 'imagem',
    path: `${path.resolve(
      __dirname,
      '..',
      '..',
      'public',
      'imagens',
      'v3.jpeg'
    )}`,
    nome: 'Foto',
    descricao: 'Valor *R$ 85,00*',
  });
};

const RespostaOpcaoInvalida = (arrayMenssagens) => {
  arrayMenssagens.push({
    destinatario: 'cliente',
    tipo: 'texto',
    msg: [
      '*Opção inválida*\nSegue abaixo menu de opções dos produtos disponíveis\nEscolha uma das opções:',
    ],
  });

  arrayMenssagens.push({
    destinatario: 'cliente',
    tipo: 'texto',
    msg: ['*====Produtos====*\n *1)*-Vestidos 👗'],
  });
};

module.exports = nivel1;
