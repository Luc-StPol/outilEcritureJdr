const express = require('express');
const router = express.Router();
const multer = require('../middleware/multer-config.js');

const villeCtrl = require('../controllers/ville.js');

router.post('/addville', multer, villeCtrl.addVille);
router.post('/updateville/:id', multer, villeCtrl.updateVille);
router.post('/addplace/:id', villeCtrl.addLocation);

router.get('/:id', villeCtrl.findVille);
router.get('/all/:id', villeCtrl.findAllVille);

router.delete('/deleteville/:id', villeCtrl.deleteVille);

module.exports = router;
