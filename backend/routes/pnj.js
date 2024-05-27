const express = require('express');
const router = express.Router();

const pnjCtrl = require('../controllers/pnj.js');

router.post('/add', pnjCtrl.addPnj);
router.post('/searchbylocation', pnjCtrl.findPnjLocation);

router.get('/:id', pnjCtrl.findPnj);
router.get('/', pnjCtrl.findAllPnj);

router.delete('/deletepnj/:id', pnjCtrl.deletePnj);
module.exports = router;
