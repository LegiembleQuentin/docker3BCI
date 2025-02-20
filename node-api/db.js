const mysql = require('mysql2');

const connectWithRetry = () => {
    const db = mysql.createPool({
        host: 'db',  // Nom du service Docker (dans docker-compose)
        user: 'root',
        password: 'root',
        database: 'librarydb',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    });
    
    db.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to database: ', err);
            setTimeout(connectWithRetry, 2000); // Réessayer après 2s si échec
        } else {
            console.log('Connected to database');
            connection.release();
        }
    });
    
    return db;
};

const db = connectWithRetry();
module.exports = db;
