

const express = require('express');
const router = express.Router();
const savingsHandler = require('./handler');

router.post('/', savingsHandler.createSaving);
router.get('/', savingsHandler.getAllSavings);
router.get('/:credentials', savingsHandler.getSavingById);
router.put('/:id', savingsHandler.updateSaving);
router.delete('/:id', savingsHandler.deleteSaving);

module.exports = router;
