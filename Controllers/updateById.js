const { Book } = require('../db');

const updateById = async (req, res) => {
  try {
    const { title, author, publishedDate } = req.body;
    const [updated] = await Book.update({ title, author, publishedDate }, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedBook = await Book.findByPk(req.params.id);
      res.json({ responseMessage: 'Book Updated successfully', route: 'updateById', data: updatedBook, responseCode: 1 });
    } else {
      res.status(404).json({ responseMessage: 'Book not found.', responseCode: 0 });
    }
  } catch (err) {
    res.status(500).json({ responseMessage: 'Error updating book.', responseCode: 0 });
  }
};

module.exports = updateById;
