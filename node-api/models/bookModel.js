const db = require('../db');

const Book = {
    getAll: (genre, callback) => {
        let query = `
            SELECT books.id, books.title, books.author,
                   GROUP_CONCAT(genres.name) AS genres
            FROM books
            LEFT JOIN book_genre ON books.id = book_genre.book_id
            LEFT JOIN genres ON book_genre.genre_id = genres.id
        `;
        
        let params = [];
        
        if (genre) {
            query += ` WHERE books.id IN (
                SELECT book_id FROM book_genre
                JOIN genres ON book_genre.genre_id = genres.id
                WHERE genres.name = ?
            )`;
            params.push(genre);
        }
        
        query += " GROUP BY books.id;";
        
        db.query(query, params, callback);
    },
    
    getById: (id, callback) => {
        const query = `
            SELECT books.id, books.title, books.author,
                   GROUP_CONCAT(genres.name) AS genres
            FROM books
            LEFT JOIN book_genre ON books.id = book_genre.book_id
            LEFT JOIN genres ON book_genre.genre_id = genres.id
            WHERE books.id = ? GROUP BY books.id;
        `;
        db.query(query, [id], callback);
    },
    
    create: (book, callback) => {
        const { title, author, genres } = book;
        db.query('INSERT INTO books (title, author) VALUES (?, ?)',
            [title, author], (err, result) => {
                if (err) return callback(err);
                const bookId = result.insertId;
                if (genres.length > 0) {
                    const values = genres.map((genreId) => [bookId, genreId]);
                    db.query('INSERT INTO book_genre (book_id, genre_id) VALUES ?', [values], callback);
                } else {
                    callback(null, result);
                }
            });
    },
    
    update: (id, book, callback) => {
        const { title, author, genres } = book;
        db.query('UPDATE books SET title = ?, author = ? WHERE id = ?',
            [title, author, id], (err, result) => {
                if (err) return callback(err);
                db.query('DELETE FROM book_genre WHERE book_id = ?', [id], (err) => {
                    if (err) return callback(err);
                    if (genres.length > 0) {
                        const values = genres.map((genreId) => [id, genreId]);
                        db.query('INSERT INTO book_genre (book_id, genre_id) VALUES ?', [values], callback);
                    } else {
                        callback(null, result);
                    }
                });
            });
    },
    
    delete: (id, callback) => {
        db.query('DELETE FROM books WHERE id = ?', [id], callback);
    }
};

module.exports = Book;
