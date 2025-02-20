CREATE TABLE IF NOT EXISTS books (
                                     id INT AUTO_INCREMENT PRIMARY KEY,
                                     title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL
    );

CREATE TABLE IF NOT EXISTS genres (
                                      id INT AUTO_INCREMENT PRIMARY KEY,
                                      name VARCHAR(100) NOT NULL UNIQUE
    );

CREATE TABLE IF NOT EXISTS book_genre (
                                          book_id INT NOT NULL,
                                          genre_id INT NOT NULL,
                                          PRIMARY KEY (book_id, genre_id),
    FOREIGN KEY (book_id) REFERENCES books(id) ON DELETE CASCADE,
    FOREIGN KEY (genre_id) REFERENCES genres(id) ON DELETE CASCADE
    );

INSERT INTO genres (name) VALUES
                              ('Cyberpunk'),
                              ('Science-Fiction'),
                              ('Post-Apocalyptique'),
                              ('Seinen'),
                              ('Dark Fantasy'),
                              ('Samouraï'),
                              ('Action'),
                              ('Thriller');

INSERT INTO books (title, author) VALUES
                                      ('Trigun', 'Yasuhiro Nightow'),
                                      ('Ascension', 'Shinichi Sakamoto'),
                                      ('Dorohedoro', 'Q Hayashida'),
                                      ('Blame!', 'Tsutomu Nihei'),
                                      ('Gunnm', 'Yukito Kishiro'),
                                      ('Vagabond', 'Takehiko Inoue'),
                                      ('Claymore', 'Norihiro Yagi');


INSERT INTO book_genre (book_id, genre_id) VALUES
                                               (1, 1),
                                               (1, 3),
                                               (1, 4),
                                               (2, 4),
                                               (2, 7),
                                               (2, 8),
                                               (3, 5),
                                               (3, 4),
                                               (3, 7),
                                               (4, 1),
                                               (4, 2),
                                               (4, 4),
                                               (5, 1),
                                               (5, 2),
                                               (5, 7),
                                               (6, 6),
                                               (6, 4),
                                               (6, 7),
                                               (7, 5),
                                               (7, 4),
                                               (7, 7);
