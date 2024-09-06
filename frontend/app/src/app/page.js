"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AddBookContainer from "@/components/addBookContainer";
import BookGrid from "@/components/BookGrid";
import { getBooks, addBook, updateBook, deleteBook } from '@/components/apiHandler';

export default function Home() {
    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true); // Define isLoading state here
    const [updateSignal, setUpdateSignal] = useState(false);

    useEffect(() => {

        const fetchBooks = async () => {
            try {
                const data = await getBooks();
                if (data.length === 0) {
                    setError('No books found');
                } else {
                    setBooks(data);
                }
            } catch {
                setError('Failed to fetch books');
            }
            setIsLoading(false); // Set isLoading to false after fetching books
        };

        fetchBooks();
    }, [updateSignal]);


    const handleBookAdded = () => {
        setUpdateSignal(prevState => !prevState);
        console.log("runs**********************");
    };
    
  return (
      <>
          <div className="flex items-center justify-center w-100 h-100">
              <div className="flex flex-col items-center justify-center">
                  <h1 className="text-4xl font-bold pt-10 text-center">Welcome To The Library</h1>
                  <AddBookContainer onBookAdded={handleBookAdded}/>
                  <Link href="/searchForBook">
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-4 py-2 px-4 rounded">
                          Search for a Book
                      </button>
                  </Link>
                  <BookGrid books={books} onBookChanged={handleBookAdded}/>
                  {isLoading && <div className="border-t-4 mt-10 border-gray-200 h-12 w-12 rounded-full animate-spin"></div>}
                  {error && <div className="font-bold text-red-500 pt-4 ">{error}</div>}
              </div>
          </div>
      </>
  );
}
