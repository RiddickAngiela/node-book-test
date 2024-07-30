const express = require('express');
const router = express.Router();

const getAll = require('../Controllers/getAll');
const getById = require('../Controllers/getById');
const create = require('../Controllers/create');
const updateById = require('../Controllers/updateById');
const deleteById = require('../Controllers/delete');
const getDeletedBooks = require('../Controllers/getDeleted'); // Import the getDeletedBooks controller

// Define routes
router.post('/getAll', getAll);
router.post('/getById/:id', getById);
router.post('/create', create);
router.post('/updateById/:id', updateById);
router.post('/delete/:id', deleteById);
router.post('/getDeletedBooks', getDeletedBooks); // Add route for deleted books

module.exports = router;
