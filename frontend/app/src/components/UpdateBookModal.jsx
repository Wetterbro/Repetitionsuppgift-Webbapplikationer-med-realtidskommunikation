import React, { useState } from 'react';

export default function Modal({ book, onUpdateBook, onClose }) {
    const [updatedBook, setUpdatedBook] = useState(book);

    const handleSubmit = (event) => {
        event.preventDefault();
        onUpdateBook(updatedBook);
    };

    const handleChange = (event) => {
        setUpdatedBook({ ...updatedBook, [event.target.name]: event.target.value });
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50  flex items-center justify-center">
            <form className="bg-white rounded-lg p-10 " onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold mb-4 text-center">Update Book</h2>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                        Title
                    </label>
                    <input
                        id="title"
                        name="title"
                        placeholder={"Title"}
                        value={updatedBook.title}
                        onChange={handleChange}
                        className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none w-full"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="author">
                        Author
                    </label>
                    <input
                        id="author"
                        name="author"
                        placeholder={"Author"}
                        value={updatedBook.author}
                        onChange={handleChange}
                        className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none w-full"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="isbn">
                        ISBN
                    </label>
                    <input
                        id="isbn"
                        name="isbn"
                        placeholder={"ISBN"}
                        value={updatedBook.isbn}
                        onChange={handleChange}
                        className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none w-full"
                    />
                </div>

                <div className="flex justify-center mt-4">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Update
                    </button>

                    <button type="button" onClick={onClose} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4">
                        Close
                    </button>
                </div>
            </form>
        </div>
    );
}