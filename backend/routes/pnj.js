const express = require('express');
const router = express.Router();

const pnjCtrl = require('../controllers/pnj.js');

router.post('/add', pnjCtrl.addPnj);

router.put('/:id', pnjCtrl.updatePnj);

router.get('/research', pnjCtrl.findByName);
router.get('/all/:jdrId', pnjCtrl.findAllPnj);
router.get('/:id', pnjCtrl.findPnj);

router.delete('/deletepnj/:id', pnjCtrl.deletePnj);
module.exports = router;
