const mongoose = require('mongoose');

const villeSchema = mongoose.Schema({
  jdrId: { type: String, require: true },
  nom: { type: String, require: true, unique: true },
  mapImg: { type: String, require: true },
  markerPos: [{ top: { type: String }, left: { type: String } }],
  type: { type: String, require: true },
  description: { type: String },
  place: [
    {
      name: { type: String },
      type: { type: String },
      markerPos: [{ top: { type: String }, left: { type: String } }],
      description: { type: String },
      pnj: { type: String },
    },
  ],
});

module.exports = mongoose.model('Ville', villeSchema);
