const mongoose = require('mongoose');

const pnjSchema = mongoose.Schema({
  nom: { type: String, require: true, unique: true },
  race: { type: String, require: true },
  age: { type: String, require: true },
  role: { type: String, require: true },
  description: { type: String, require: true },
  metier: { type: String, require: true },
  lieu: { type: String, require: true },
  quete: { type: String, require: true },
});

module.exports = mongoose.model('Pnj', pnjSchema);
