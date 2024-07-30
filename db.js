const { Sequelize } = require('sequelize');
const config = require('./config/config.json');
const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];

// Initialize Sequelize with database configuration
const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    logging: false // Set to true to enable SQL logging
  }
);

// Import and initialize models
const BookModel = require('./models/BooksModel');
const Book = BookModel(sequelize);

// Test the database connection
const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

testConnection();

module.exports = { sequelize, Book };
