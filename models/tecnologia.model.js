const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let tecnologiaSchema = new Schema({
  nome: {type: String, required: true},
  backend: {type: Boolean, required: true},
  frontend: {type: Boolean, required: true},
  frameworks: {type: Array, required: true},
});

module.exports = mongoose.model('tecnologia', tecnologiaSchema);