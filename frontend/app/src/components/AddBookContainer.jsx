"use client";
import React, {useEffect} from 'react';
import { addBook as addBookToServer } from '@/components/apiHandler';

export default function AddBookContainer({onBookAdded}) {

    async function addBook(event) {
        event.preventDefault();

        const form = event.target.elements;
        const book = {title: form.title.value, author: form.author.value, isbn: form.isbn.value};

        try {
            await addBookToServer(book);
            event.target.reset();
            onBookAdded();
        } catch (error) {
            console.error('Error adding book:', error);
        }
    }

    return (
        <div className={"pt-5"}>
            <form onSubmit={addBook} className={"outline outline-gray-300 rounded-2xl p-4 "}>
                <label htmlFor="title">
                    <input id="title" name={"title"} type="text" placeholder="Title" />
                </label>
                <label htmlFor="author">
                    <input id="author" name={"author"} type="text" placeholder="Author" />
                </label>
                <label htmlFor="isbn">
                    <input id="isbn" name={"isbn"} type="text" placeholder="ISBN" />
                </label>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-4 py-2 px-4 rounded">Add Book</button>
            </form>
        </div>
    );
};