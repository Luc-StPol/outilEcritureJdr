const Ville = require('../models/ville.js');

exports.addVille = (req, res, next) => {
  const ville = new Ville({
    ...req.body,
  });
  ville
    .save()
    .then(() => res.status(201).json({ message: 'ville ajouté' }))
    .catch((error) => res.status(400).json({ error }));
};

exports.findVille = (req, res, next) => {
  Ville.findOne({
    _id: req.params.id,
  })
    .then((ville) => res.status(200).json(ville))
    .catch((error) => res.status(400).json({ error }));
};

exports.findAllVille = (req, res, next) => {
  Ville.find()
    .then((villes) => res.status(200).json(villes))
    .catch((error) => res.status(400).json({ error }));
};
