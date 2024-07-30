const { Book } = require('../db');

const getAll = async (req, res) => {
  try {
    console.log('Fetching all books...');
    const books = await Book.findAll();
    console.log('Books fetched:', books);
    res.json({ responseMessage: 'Books fetched successfully', data: books, responseCode: 1 });
  } catch (err) {
    console.error('Error fetching books:', err);
    res.status(500).json({ responseMessage: 'Error fetching books.', responseCode: 0 });
  }
};

module.exports = getAll;

