const clienteService = require('../service/clienteService');

const nivel0 = async (cliente) => {
  const arrayMenssagens = [];

  arrayMenssagens.push({
    destinatario: 'cliente',
    tipo: 'texto',
    msg: [
      '*Olá,sou o Robotic* 🤖\nBem vindo(a) a Boutique da Kamila \nSegue abaixo menu de opções dos produtos disponíveis\nEscolha uma das opções:',
    ],
  });

  arrayMenssagens.push({
    destinatario: 'cliente',
    tipo: 'texto',
    msg: ['*====Produtos====*\n *1)*-Vestidos 👗'],
  });

  cliente.nivelAtendimento = 1;

  await clienteService.subirNivelDoAtendimento(cliente);

  return arrayMenssagens;
};

module.exports = nivel0;
