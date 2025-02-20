const Book = require('../models/bookModel');

const BookService = {
    getAllBooks: (req, res) => {
        const genre = req.query.genre;
        
        Book.getAll(genre, (err, results) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json(results);
        });
    },
    
    getBookById: (req, res) => {
        const id = req.params.id;
        Book.getById(id, (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            if (result.length === 0) return res.status(404).json({ message: "Book not found" });
            res.json(result[0]);
        });
    },
    
    createBook: (req, res) => {
        const { title, author, genres } = req.body;
        if (!title || !author) return res.status(400).json({ error: "Title and Author are required" });
        
        Book.create({ title, author, genres }, (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            res.status(201).json({ message: "Book created successfully", bookId: result.insertId });
        });
    },
    
    updateBook: (req, res) => {
        const id = req.params.id;
        const { title, author, genres } = req.body;
        
        Book.update(id, { title, author, genres }, (err) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ message: "Book updated successfully" });
        });
    },
    
    deleteBook: (req, res) => {
        const id = req.params.id;
        Book.delete(id, (err) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ message: "Book deleted successfully" });
        });
    }
};

module.exports = BookService;
