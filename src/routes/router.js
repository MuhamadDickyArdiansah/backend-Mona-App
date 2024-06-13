const express = require('express');
const router = express.Router();
const savingsHandler = require('../handler/savingHandler');
const transactionsHandler = require('../handler/transactionHandler');

<<<<<<< HEAD
// Savings Routes
router.post('/saving', savingsHandler.createSaving);
router.get('/savings', savingsHandler.getAllSavings);
router.get('/saving/:credentials', savingsHandler.getSavingById);
router.put('/saving/:id', savingsHandler.updateSaving);
router.delete('/saving/:id', savingsHandler.deleteSaving);

// Transactions Routes
router.post('/transaction', transactionsHandler.createTransactions);
router.get('/transactions', transactionsHandler.getAllTransactions);

module.exports = router;
=======
router.post('/saving', savingsHandler.createSaving);
router.get('/savings', savingsHandler.getAllSavings);

router.post('/transaction', transactionsHandler.createTransactions);
router.get('/transactions', transactionsHandler.getAllTransactions);

router.get('/:credentials', savingsHandler.getSavingById);
router.put('/:id', savingsHandler.updateSaving);
router.delete('/:id', savingsHandler.deleteSaving);

module.exports = router;
>>>>>>> 71c966146c6ab9f68a15eb0c32a185436228e0bf
