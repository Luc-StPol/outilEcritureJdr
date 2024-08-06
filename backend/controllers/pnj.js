const Pnj = require('../models/pnj.js');

exports.addPnj = (req, res, next) => {
  const pnj = new Pnj({
    ...req.body,
  });
  pnj
    .save()
    .then(() => res.status(201).json({ message: 'Nouveau pnj créé !' }))
    .catch((error) => res.status(400).json({ error }));
};

exports.findPnj = (req, res, next) => {
  Pnj.findOne({
    _id: req.params.id,
  })
    .then((pnj) => res.status(200).json(pnj))
    .catch((error) => res.status(404).json({ error }));
};

exports.findByName = (req, res, next) => {
  Pnj.find({ nom: { $regex: req.query.name, $options: 'i' }, jdrId: req.query.jdrId })
    .then((pnj) => res.status(200).json(pnj))
    .catch((error) => res.status(400).json({ error }));
};

exports.findAllPnj = (req, res, next) => {
  Pnj.find({ jdrId: req.params.jdrId })
    .then((pnj) => res.status(200).json(pnj))
    .catch((error) => res.status(400).json({ error }));
};

exports.updatePnj = (req, res, next) => {
  Pnj.updateOne({ _id: req.params.id }, { ...req.body })
    .then(() => res.status(200).json({ message: 'pnj modiffier' }))
    .catch((error) => res.status(400).json({ error }));
};

exports.deletePnj = (req, res, next) => {
  Pnj.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'pnj suprimer' }))
    .catch((error) => res.status(400).json({ error }));
};
