document.addEventListener('DOMContentLoaded', () => {
    loadGenres();  // Charger les genres pour le filtre et le formulaire
    fetchBooks();  // Charger la liste des livres
});

function loadGenres() {
    fetch('/api/genres')
        .then(response => response.json())
        .then(data => {
            const genreSelect = document.getElementById('genre-select');
            const bookGenresSelect = document.getElementById('book-genres');
            data.forEach(genre => {
                const option1 = document.createElement('option');
                option1.value = genre.name;
                option1.textContent = genre.name;
                genreSelect.appendChild(option1);
                
                const option2 = document.createElement('option');
                option2.value = genre.id;
                option2.textContent = genre.name;
                bookGenresSelect.appendChild(option2);
            });
        })
        .catch(error => console.error('Erreur lors de la récupération des genres :', error));
}

function fetchBooks() {
    const genre = document.getElementById('genre-select').value;
    let url = '/api/books';
    if (genre) {
        url += `?genre=${encodeURIComponent(genre)}`;
    }
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const bookList = document.getElementById('book-list');
            bookList.innerHTML = '';
            data.forEach(book => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <strong>${book.title}</strong> - ${book.author}
                    <br> Genres : ${book.genres || 'Aucun'}
                    <br>
                    <button onclick="deleteBook(${book.id})">❌ Supprimer</button>
                `;
                bookList.appendChild(li);
            });
        })
        .catch(error => console.error('Erreur lors de la récupération des livres :', error));
}

document.getElementById('book-form').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const bookId = document.getElementById('book-id').value;
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const selectedGenres = Array.from(document.getElementById('book-genres').selectedOptions).map(option => option.value);
    
    const bookData = { title, author, genres: selectedGenres };
    
    if (bookId) {
        updateBook(bookId, bookData);
    } else {
        createBook(bookData);
    }
});

function createBook(bookData) {
    fetch('/api/books', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookData)
    })
        .then(response => response.json())
        .then(() => {
            document.getElementById('book-form').reset();
            fetchBooks();
        })
        .catch(error => console.error('Erreur lors de l’ajout du livre :', error));
}

function updateBook(bookId, bookData) {
    fetch(`/api/books/${bookId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookData)
    })
        .then(response => response.json())
        .then(() => {
            document.getElementById('book-form').reset();
            fetchBooks();
        })
        .catch(error => console.error('Erreur lors de la modification du livre :', error));
}

function editBook(id, title, author, genres) {
    document.getElementById('book-id').value = id;
    document.getElementById('title').value = title;
    document.getElementById('author').value = author;
    
    const genreSelect = document.getElementById('book-genres');
    Array.from(genreSelect.options).forEach(option => {
        option.selected = genres.split(', ').includes(option.value);
    });
}

function deleteBook(bookId) {
    if (!confirm('Voulez-vous vraiment supprimer ce livre ?')) return;
    
    fetch(`/api/books/${bookId}`, { method: 'DELETE' })
        .then(response => response.json())
        .then(() => fetchBooks())
        .catch(error => console.error('Erreur lors de la suppression du livre :', error));
}
