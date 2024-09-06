"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { getBookById} from '@/components/apiHandler';

export default function Page() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = async () => {
        try {
            console.log('Searching for:', searchTerm);
            const results = await getBookById(searchTerm);
            setSearchResults(results);
        } catch (error) {
            console.error('Failed to search books:', error);
        }
    };

    return (
        <>
            <Link href="/">
                <button className="mt-4 p-2 m-4 bg-blue-500 text-white rounded-md w-1/12">Back</button>
            </Link>
            <div className="flex items-center justify-center w-100 h-100">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-5xl font-bold pt-8">Search For Book</h1>
                    
                    <input
                        type="number"
                        className="w-1/2 p-2 mt-4 border border-gray-300 rounded-md"
                        placeholder="Search for book"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    
                    <button
                        className="w-1/2 p-2 mt-4 bg-blue-500 text-white rounded-md"
                        onClick={handleSearch}>
                        Search
                    </button>
                    
                    {searchResults != null ? (
                        <div className="m-6 p-4 border border-gray-300 rounded-md w-3/4 mx-auto flex flex-col items-center justify-center">
                            <h2 className="text-xl font-bold">Title: {searchResults.title}</h2>
                            <p className="mt-2">Author: {searchResults.author}</p>
                            <p className="text-gray-500">ISBN: {searchResults.isbn}</p>
                        </div>
                    ) : (
                        <p>No books found</p>
                    )}

                </div>
            </div>
        </>
    );
}