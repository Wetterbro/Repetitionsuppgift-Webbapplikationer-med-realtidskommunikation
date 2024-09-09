const axios = require('axios');

const BASE_URL = 'http://localhost:5062/api';

// Get all books
export async function getBooks() {
    try {
        const response = await axios.get(`${BASE_URL}/book`);
        return response.data;
    } catch (error) {
        console.error(`Error: ${error}`);
        return []; // Return an empty array as a fallback
    }
}

// Get a book by id
export async function getBookById(id) {
    try {
        const response = await axios.get(`${BASE_URL}/book/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}

// Add a new book
export async function addBook(book) {
    try {
        const response = await axios.post(`${BASE_URL}/book`, book);
        return response.data;
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}

// Update a book
export async function updateBook(id, book) {
    console.log("From update! " + JSON.stringify(book));
    try {
        const response = await axios.put(`${BASE_URL}/book/${id}`, book, {
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
export async function deleteBook(id) {
    try {
        const response = await axios.delete(`${BASE_URL}/book/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}

