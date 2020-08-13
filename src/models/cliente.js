const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
  numero: {
    type: String,
    required: true,
  },
  nivelAtendimento: {
    type: Number,
    require: true,
    default: 0,
  },
  dtContato: {
    type: Date,
    default: new Date(),
  },
});

const clienteModel = mongoose.model('clientes', clienteSchema);

module.exports = clienteModel;
