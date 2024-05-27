const mongoose = require('mongoose');

const jdrSchema = mongoose.Schema({
  jdrTitle: { type: String, require: true, unique: true },
  mapTitle: { type: String, require: true },
  mapImg: { type: String },
  chapitreId: [{ type: String }],
});

const Jdr = mongoose.model('Jdr', jdrSchema);

module.exports = Jdr;
