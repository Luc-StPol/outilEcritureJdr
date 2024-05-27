const mongoose = require('mongoose');

const chapSchema = mongoose.Schema({
  jdrId: { type: String },
  chapNumber: { type: String },
  chapTitle: { type: String },
  chapContenu: { type: String },
});

module.exports = mongoose.model('Chapitre', chapSchema);
