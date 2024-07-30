const sequelize = require('./db');
const Book = require('./models/BooksModel');

const syncDatabase = async () => {
  try {
    // Sync all models
    await sequelize.sync({ alter: true }); // Use `force: true` to drop and recreate tables
    console.log('Database synchronized successfully.');
  } catch (error) {
    console.error('Error synchronizing database:', error);
  }
};

syncDatabase();
