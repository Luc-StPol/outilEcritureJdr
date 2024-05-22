const express = require('express');
const router = express.Router();

const villeCtrl = require('../controllers/ville.js');

router.post('/addville', villeCtrl.addVille);

router.get('/:id', villeCtrl.findVille);
router.get('/', villeCtrl.findAllVille);

module.exports = router;
