const express = require('express');
const router = express.Router();
const BookService = require('../services/bookService');

router.get('/', BookService.getAllBooks);
router.get('/:id', BookService.getBookById);
router.post('/', BookService.createBook);
router.put('/:id', BookService.updateBook);
router.delete('/:id', BookService.deleteBook);

module.exports = router;
