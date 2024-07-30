const { Book } = require('../db');

const getById = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id);
    if (book) {
      res.json({ responseMessage: 'Book retrieved successfully', route: 'getById', data: book, responseCode: 1 });
    } else {
      res.status(404).json({ responseMessage: 'Book not found.', responseCode: 0 });
    }
  } catch (err) {
    res.status(500).json({ responseMessage: 'Error fetching book.', responseCode: 0 });
  }
};

module.exports = getById;
