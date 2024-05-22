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

exports.findAllPnj = (req, res, next) => {
  Pnj.find()
    .then((pnj) => res.status(200).json(pnj))
    .catch((error) => res.status(400).json({ error }));
};

exports.findPnjLocation = (req, res, next) => {
  Pnj.find({ lieu: req.body.lieu })
    .then((pnj) => res.status(200).json(pnj))
    .catch((error) => res.status(400).json({ error }));
};
