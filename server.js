const express = require('express');
const app = express();
const port = 3000;

const booksRouter = require('./routes/books');

// Middleware to parse JSON bodies
app.use(express.json());

app.use('/api/books', booksRouter);

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello world', code: 1 });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

