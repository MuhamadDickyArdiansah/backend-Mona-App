<<<<<<< HEAD
const db = require('../db/database'); // Adjusted to your provided path
=======
const { savings } = require('../models/saving');
>>>>>>> 71c966146c6ab9f68a15eb0c32a185436228e0bf

const createSaving = (req, res) => {
  const { date, credentials, amount, title } = req.body;

  if (!date || !credentials || !amount || !title) {
    return res.status(400).send('Missing fields');
  }

<<<<<<< HEAD
  const newSaving = { date, credentials, amount, title };
  
  db.query('INSERT INTO savings SET ?', newSaving, (err, results) => {
    if (err) {
      console.error('Error inserting saving:', err);
      return res.status(500).send('Server error');
    }
    newSaving.id = results.insertId; // Set the ID of the new saving from the database
    res.status(201).send(newSaving);
  });
};

const getAllSavings = (req, res) => {
  const query = 'SELECT * FROM savings';

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching savings:', err);
      return res.status(500).send('Server error');
    }
    res.status(200).json(results);
  });
=======
  const nextId = savings.length > 0 ? savings[savings.length - 1].id + 1 : 1;

  const newSaving = { id: nextId, date, credentials, amount, title };
  savings.push(newSaving);
  // db.query('INSERT INTO savings SET ?', newSaving, (err, results) => {
  //   if (err) throw err;
  //   console.log('Data saved:', results);
  // });
  res.status(201).send(newSaving);
};


const getAllSavings = (req, res) => {
  res.status(200).json(savings);
>>>>>>> 71c966146c6ab9f68a15eb0c32a185436228e0bf
};

const getSavingById = (req, res) => {
  const credentials = req.params.credentials;
<<<<<<< HEAD

  const query = 'SELECT * FROM savings WHERE credentials = ?';
  
  db.query(query, [credentials], (err, results) => {
    if (err) {
      console.error('Error fetching savings:', err);
      return res.status(500).send('Server error');
    }
    if (results.length === 0) {
      return res.status(404).send('Savings not found for the given credentials');
    }
    res.status(200).json(results);
  });
=======
  const userSavings = savings.filter(s => s.credentials === credentials);

  if (userSavings.length === 0) {
    return res.status(404).send('Savings not found for the given credentials');
  }

  res.status(200).json(userSavings);
>>>>>>> 71c966146c6ab9f68a15eb0c32a185436228e0bf
};

const updateSaving = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const { date, amount, title } = req.body;
<<<<<<< HEAD
=======
  const savingIndex = savings.findIndex(s => s.id === id);

  if (savingIndex === -1) {
    return res.status(404).send('Saving not found');
  }
>>>>>>> 71c966146c6ab9f68a15eb0c32a185436228e0bf

  if (!date || !amount || !title) {
    return res.status(400).send('Missing fields');
  }

<<<<<<< HEAD
  const query = 'UPDATE savings SET date = ?, amount = ?, title = ? WHERE id = ?';

  db.query(query, [date, amount, title, id], (err, results) => {
    if (err) {
      console.error('Error updating saving:', err);
      return res.status(500).send('Server error');
    }
    if (results.affectedRows === 0) {
      return res.status(404).send('Saving not found');
    }
    res.status(200).send({ id, date, amount, title });
  });
=======
  const updatedSaving = { id, date, amount, title };
  savings[savingIndex] = updatedSaving;
  res.status(200).send(updatedSaving);
>>>>>>> 71c966146c6ab9f68a15eb0c32a185436228e0bf
};

const deleteSaving = (req, res) => {
  const id = parseInt(req.params.id, 10);
<<<<<<< HEAD

  const query = 'DELETE FROM savings WHERE id = ?';

  db.query(query, [id], (err, results) => {
    if (err) {
      console.error('Error deleting saving:', err);
      return res.status(500).send('Server error');
    }
    if (results.affectedRows === 0) {
      return res.status(404).send('Saving not found');
    }
    res.status(204).send();
  });
=======
  const savingIndex = savings.findIndex(s => s.id === id);

  if (savingIndex === -1) {
    return res.status(404).send('Saving not found');
  }

  savings.splice(savingIndex, 1);
  res.status(204).send();
>>>>>>> 71c966146c6ab9f68a15eb0c32a185436228e0bf
};

module.exports = {
  createSaving,
  getAllSavings,
  getSavingById,
  updateSaving,
  deleteSaving
<<<<<<< HEAD
};
=======
};
>>>>>>> 71c966146c6ab9f68a15eb0c32a185436228e0bf
