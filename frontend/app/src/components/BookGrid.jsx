import React from 'react';
import { useState } from 'react';
import { updateBook, deleteBook } from '@/components/apiHandler';
import Modal from './UpdateBookModal';

export default function BookGrid({ books, onBookChanged }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editBook, setEditBook] = useState(null);

    const handleEditBook = (book) => {
        setEditBook(book);
        setIsModalOpen(true);
    };

    const handleUpdateBook = async (updatedBook) => {
        try {
            const updateBookDto = {
                title: updatedBook.title,
                author: updatedBook.author,
                isbn: updatedBook.isbn
            };
            await updateBook(updatedBook.id, updateBookDto);
            onBookChanged();
            setIsModalOpen(false);
        } catch (error) {
            console.error('Error updating book:', error);
        }
    };
    
    const handleDeleteBook = async (id) => {
        try {
            await deleteBook(id);
            console.log('Book deleted successfully');
            onBookChanged();
        } catch (error) {
            console.error('Error deleting book:', error);
        }
    };
    
        
    return (
        <div className="mt-10 w-full">
            {isModalOpen &&
                <Modal book={editBook} onUpdateBook={handleUpdateBook} onClose={() => setIsModalOpen(false)}/>}
            <table className="table-auto w-full text-left whitespace-no-wrap">
                <thead>
                <tr className="text-sm font-medium text-gray-700 dark:text-gray-400 bg-gray-200 dark:bg-gray-800 rounded-lg">
                    <th className="px-4 py-3">Title</th>
                    <th className="px-4 py-3">Author</th>
                    <th className="px-4 py-3">ISBN</th>
                    <th className={"px-4 py-3"}>Actions</th>
                </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-700">
                {books.map((book) => (
                    <tr key={book.id} className="text-gray-700 dark:text-gray-400">
                        <td className="px-4 py-3">{book.title}</td>
                        <td className="px-4 py-3">{book.author}</td>
                        <td className="px-4 py-3">{book.isbn}</td>
                        <td className="px-4 py-3 flex justify-between">
                            <div className="btn-group">
                                <button
                                    className="bg-indigo-600 text-white hover:bg-indigo-900 px-2 py-1 rounded-l-md border border-indigo-600 hover:border-indigo-900"
                                    onClick={() => handleEditBook(book)}>Edit
                                </button>
                                <button
                                    className="bg-red-600 text-white hover:bg-red-900 px-2 py-1 rounded-r-md border border-red-600 hover:border-red-900"
                                    onClick={() => handleDeleteBook(book.id)}>Delete
                                </button>
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}