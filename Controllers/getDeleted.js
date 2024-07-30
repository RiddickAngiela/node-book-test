const { Op } = require('sequelize');
const { Book } = require('../db');

// Fetch only deleted books
const getDeletedBooks = async (req, res) => {
  try {
    const deletedBooks = await Book.findAll({ where: { deletedAt: { [Op.ne]: null } } });
    res.json({ responseMessage: 'Deleted books fetched successfully.', data: deletedBooks, responseCode: 1 });
  } catch (err) {
    res.status(500).json({ responseMessage: 'Error fetching deleted books.', responseCode: 0 });
  }
};

module.exports = getDeletedBooks;
