const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/bookRoutes');
const genreRoutes = require('./routes/genreRoutes');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/books', bookRoutes);
app.use('/genres', genreRoutes);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
