const express = require('express');
const router = express.Router();

const multer = require('../middleware/multer-config.js');
const jdrCtrl = require('../controllers/jdr.js');

router.post('/addjdr', multer, jdrCtrl.addJdr);
router.post('/updatejdr/:id', multer, jdrCtrl.updateJdr);
router.get('/:id', jdrCtrl.findJdr);
router.get('/', jdrCtrl.findAllJdr);
router.delete('/deletejdr/:id', jdrCtrl.deleteJdr);

router.post('/addchapitre/:id', jdrCtrl.addChapitre);
router.post('/updatechapitre/:id', jdrCtrl.updateChapitre);
router.get('/findchapitre/:id', jdrCtrl.findChapitre);
router.get('/findallchapitre/:id', jdrCtrl.findAllChapitre);
router.delete('/deletechap/:id', jdrCtrl.deleteChapitre);

module.exports = router;
