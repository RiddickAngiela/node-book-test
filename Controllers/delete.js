const { Book } = require('../db');

const deleteById = async (req, res) => {
  try {
    const deleted = await Book.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.json({ message: 'Book deleted successfully', route: 'delete', status: 1 });
    } else {
      res.status(404).json({ message: 'Book not found.', status: 0 });
    }
  } catch (err) {
    console.error('Error deleting book:', err);
    res.status(500).json({ message: 'Error deleting book.', status: 0 });
  }
};

module.exports = deleteById;

