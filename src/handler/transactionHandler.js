const { transactions } = require('../models/transaction');
<<<<<<< HEAD
const db = require('../db/database');
=======
>>>>>>> 71c966146c6ab9f68a15eb0c32a185436228e0bf

const createTransactions = (req, res) => {
    const { date, credentials, category, amount, title, action } = req.body;
  
    if (!date || !credentials || !category || !amount || !title || !action) {
      return res.status(400).send('Missing fields');
    }
  
<<<<<<< HEAD
    const newTransaction = { date, credentials, category, amount, title, action };
  
    db.query('INSERT INTO transactions SET ?', newTransaction, (err, results) => {
      if (err) {
        console.error('Error inserting transaction:', err);
        return res.status(500).send('Server error');
      }
      newTransaction.id = results.insertId; // Set the ID of the new transaction from the database
      res.status(201).send(newTransaction);
    });
  };

  const getAllTransactions = (req, res) => {
    const query = 'SELECT * FROM transactions';
  
    db.query(query, (err, results) => {
      if (err) {
        return res.status(500).send('Server error');
      }
      res.status(200).json(results);
    });
=======
    const nextId = transactions.length > 0 ? transactions[transactions.length - 1].id + 1 : 1;
  
    const newTransaction = { id: nextId, date, credentials, category, amount, title, action };
    transactions.push(newTransaction);
    // db.query('INSERT INTO transactions SET ?', newTransaction, (err, results) => {
    //   if (err) throw err;
    //   console.log('Data saved:', results);
    // });
    res.status(201).send(newTransaction);
  };

  const getAllTransactions = (req, res) => {
    res.status(200).json(transactions);
>>>>>>> 71c966146c6ab9f68a15eb0c32a185436228e0bf
  };

  module.exports = {
    createTransactions,
    getAllTransactions
  };