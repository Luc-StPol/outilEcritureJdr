const Ville = require('../models/ville.js');
const fs = require('fs');

exports.addVille = (req, res, next) => {
  const ville = new Ville({
    jdrId: req.body.jdrId,
    nom: req.body.nom,
    type: req.body.type,
    markerPos: [
      {
        top: req.body.markerPositonTop,
        left: req.body.markerPositonLeft,
      },
    ],
    mapImg: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
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
  Ville.find({ jdrId: req.params.id })
    .then((villes) => res.status(200).json(villes))
    .catch((error) => res.status(400).json({ error }));
};

exports.updateVille = (req, res, next) => {
  const villeObject = req.file
    ? {
        mapImg: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
        ...req.body,
      }
    : {
        ...req.body,
      };
  if (req.file) {
    Ville.findOne({ _id: req.params.id }).then((ville) => {
      const filename = ville.mapImg.split('/images/')[1];
      fs.unlink(`images/${filename}`, () => {
        Ville.updateOne({ _id: req.params.id }, villeObject)
          .then(() => res.status(200).json({ message: 'Jdr modifié' }))
          .catch((error) => res.status(400).json({ error }));
      });
    });
  } else {
    Ville.updateOne({ _id: req.params.id }, villeObject)
      .then(() => res.status(200).json({ message: 'Jdr modifié' }))
      .catch((error) => res.status(400).json({ error }));
  }
};

exports.deleteVille = (req, res, next) => {
  Ville.findOne({ _id: req.params.id }).then((vile) => {
    const filename = jdr.mapImg.split('/images/')[1];
    fs.unlink(`images/${filename}`, () => {
      Ville.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'vile suprimer' }))
        .catch((error) => res.status(400).json({ error }));
    });
  });
};

exports.addLocation = (req, res, next) => {
  console.log(req.body);
  Ville.findOne({ _id: req.params.id })
    .then((ville) => {
      ville.place.push({ ...req.body });
      ville.save();
      res.status(200).json(ville);
    })
    .catch((error) => res.status(400).json({ error }));
};
