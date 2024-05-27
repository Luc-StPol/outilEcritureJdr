const Jdr = require('../models/jdr.js');
const Chapitre = require('../models/chapitre.js');
const Pnj = require('../models/pnj.js');
const Ville = require('../models/ville.js');
const fs = require('fs');

// JDR //

exports.addJdr = (req, res, next) => {
  const jdr = new Jdr({
    jdrTitle: JSON.parse(req.body.jdrTitle),
    mapTitle: JSON.parse(req.body.mapTitle),
    mapImg: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
  });
  jdr
    .save()
    .then(() => res.status(201).json({ message: 'Nouveau Jdr ajouté' }))
    .catch((error) => res.status(400).json({ error }));
};

exports.findJdr = (req, res, next) => {
  Jdr.findOne({
    _id: req.params.id,
  })
    .then((jdr) => res.status(200).json(jdr))
    .catch((error) => res.status(400).json({ error }));
};

exports.findAllJdr = (req, res, next) => {
  Jdr.find()
    .then((jdr) => res.status(200).json(jdr))
    .catch((error) => res.status(400).json({ error }));
};

exports.updateJdr = (req, res, next) => {
  const mapObject = req.file
    ? {
        jdrTitle: JSON.parse(req.body.jdrTitle),
        mapTitle: JSON.parse(req.body.mapTitle),
        mapImg: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
      }
    : {
        jdrTitle: JSON.parse(req.body.jdrTitle),
        mapTitle: JSON.parse(req.body.mapTitle),
      };
  if (req.file) {
    Jdr.findOne({ _id: req.params.id }).then((jdr) => {
      const filename = jdr.mapImg.split('/images/')[1];
      fs.unlink(`images/${filename}`, () => {
        Jdr.updateOne({ _id: req.params.id }, mapObject)
          .then(() => res.status(200).json({ message: 'Jdr modifié' }))
          .catch((error) => res.status(400).json({ error }));
      });
    });
  } else {
    Jdr.updateOne({ _id: req.params.id }, mapObject)
      .then(() => res.status(200).json({ message: 'Jdr modifié' }))
      .catch((error) => res.status(400).json({ error }));
  }
};

exports.deleteJdr = (req, res, next) => {
  Jdr.findOne({ _id: req.params.id }).then((jdr) => {
    const filename = jdr.mapImg.split('/images/')[1];
    fs.unlink(`images/${filename}`, () => {
      Chapitre.deleteMany({ jdrId: req.params.id })
        .then(() => {
          Ville.deleteMany({ jdrId: req.params.id }), Pnj.deleteMany({ jdrId: req.params.id });
        })
        .then(() => Jdr.deleteOne({ _id: req.params.id }))
        .then(() => res.status(200).json({ message: 'Jdr suprimer' }))
        .catch((error) => res.status(400).json({ error }));
    });
  });
};

// Chapitre de Jdr //

exports.findChapitre = (req, res, next) => {
  Chapitre.findOne({ _id: req.params.id })
    .then((chap) => res.status(200).json(chap))
    .catch((error) => res.status(400).json({ error }));
};

exports.findAllChapitre = (req, res, next) => {
  Chapitre.find({ jdrId: req.params.id })
    .then((chaps) => res.status(200).json(chaps))
    .catch((error) => res.status(400).json({ error }));
};

exports.addChapitre = (req, res, next) => {
  const paramsId = req.params.id;
  const chapitreNumber = req.body.chapNumber;

  const chap = new Chapitre({
    jdrId: paramsId,
    chapNumber: req.body.chapNumber,
    chapTitle: req.body.chapTitle,
    chapContenu: req.body.chapContenu,
  });
  chap.save();
  Jdr.updateOne(
    { _id: req.params.id },
    {
      $push: { chapitreId: chap._id },
    }
  )
    .then(() => {
      res.status(200).json({ message: 'nouveau chapitre crée' });
    })
    .catch((error) => res.status(400).json({ error }));
};

exports.updateChapitre = (req, res, next) => {
  Chapitre.updateOne(
    { _id: req.params.id },
    {
      $set: { ...req.body },
    }
  )
    .then((jdr) => res.status(200).json(jdr))
    .catch((error) => res.status(400).json({ error }));
};

exports.deleteChapitre = (req, res, next) => {
  Chapitre.deleteOne({ _id: req.params.id })
    .then(() => Jdr.updateOne({ chapitreId: req.params.id }, { $pull: { chapitreId: req.params.id } }))
    .then(() => res.status(200).json({ message: 'chapitre suprimer' }))
    .catch((error) => res.status(400).json({ error }));
};
