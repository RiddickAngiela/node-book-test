// Controllers/create.js
const { response } = require('express');
const { Book } = require('../db');

const create = async (req, res) => {
  try {
    const { title, author, publishedDate } = req.body;
    if (!title || !author || !publishedDate) {
      return res.status(400).json({ responseMessage: 'Missing required fields.', responseCode: 0 });
    }

    const newBook = await Book.create({ title, author, publishedDate });
    res.json({ responseMessage: 'Book created successfully', route: 'create', data: newBook, responseCode: 1 });
  } catch (err) {
    console.error('Error creating book:', err);
    res.status(500).json({ responseMessage: 'Error creating book.', responseCode: 0 });
  }
};

module.exports = create;
