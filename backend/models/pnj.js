const mongoose = require('mongoose');

const pnjSchema = mongoose.Schema({
  jdrId: { type: String, require: true },
  nom: { type: String, require: true },
  race: { type: String, require: true },
  age: { type: String, require: true },
  classe: { type: String, require: true },
  description: { type: String, require: true },
  metier: { type: String, require: true },
  quete: { type: String, require: true },
});

module.exports = mongoose.model('Pnj', pnjSchema);
