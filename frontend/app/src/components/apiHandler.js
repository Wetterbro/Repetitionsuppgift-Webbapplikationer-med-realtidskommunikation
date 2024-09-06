"use Server";
const axios = require('axios');

// Get all books
async function getBooks() {
    try {
        const response = await axios.get('http://localhost:5062/api/book');
        return response.data;
    } catch (error) {
        console.error(`Error: ${error}`);
        return []; // Return an empty array as a fallback
    }
}

// Get a book by id
async function getBookById(id) {
    try {
        const response = await axios.get(`http://localhost:5062/api/book/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}

// Add a new book
async function addBook(book) {
    try {
        const response = await axios.post('http://localhost:5062/api/book', book);
        return response.data;
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}

// Update a book
async function updateBook(id, book) {
    console.log("From update! "+book);
    try {
        const response = await axios.put(`http://localhost:5062/api/book/${id}`, book, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}

// Delete a book
async function deleteBook(id) {
    try {
        const response = await axios.delete(`http://localhost:5062/api/book/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}

module.exports = {
    getBooks,
    getBookById,
    addBook,
    updateBook,
    deleteBook
};