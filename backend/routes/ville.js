const express = require('express');
const router = express.Router();
const multer = require('../middleware/multer-config.js');

const villeCtrl = require('../controllers/ville.js');

router.post('/addville', multer, villeCtrl.addVille);
router.post('/updateville/:id', multer, villeCtrl.updateVille);

router.get('/:id', villeCtrl.findVille);
router.get('/', villeCtrl.findAllVille);

router.delete('/deleteville/:id', villeCtrl.deleteVille);

module.exports = router;
