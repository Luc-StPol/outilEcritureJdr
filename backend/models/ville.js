const mongoose = require('mongoose');

const villeSchema = mongoose.Schema({
  nom: { type: String, require: true, unique: true },
  type: { type: String, require: true },
  places: [{ type: String }],
  comerces: [{ type: String }],
  habitations: [{ type: String }],
});

module.exports = mongoose.model('Ville', villeSchema);
