const mongoose = require('mongoose');
require('dotenv').config();

const db = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.USUARIO}:${process.env.SENHA}@cluster.cekm8.gcp.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log('Conectado ao banco');
  } catch (error) {
    console.log(error);
  }
};

module.exports = db;
