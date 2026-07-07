import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ShowBook from './ShowBook'

const ViewPage = () => {
    const [books, setBooks] = useState([])
    const [keyword, setKeyword] = useState("")
    async function fetchBooks(params) {
        try {
            const res = await axios.get('https://readify-fdkn.onrender.com/books/books')
            setBooks(res.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchBooks()
    }, [])

    function filterByCatrgory(catrgory) {
        const filtered = books.filter(book => book.category === catrgory)
        setBooks(filtered)
    }

    function filterByGenre(genre) {
        const filtered = books.filter(book => book.genre.includes(genre))
        setBooks(filtered)
    }

    function searchBook() {
        const filtered = books.filter(book => book.bookName.toLowerCase().includes(keyword.toLowerCase()))
        setBooks(filtered)

    }
    async function deleteBook(id) {
        try {
            const res = await axios.delete(`https://readify-fdkn.onrender.com/books/books/${id}`)
            console.log(res.data)
            alert("Book delete successfully")
            fetchBooks()
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <h3 className='text-center text-primary fw-bold fs-1 mb-4'>All Books</h3>
            <ShowBook
                books={books}
                keyword={keyword}
                setKeyword={setKeyword}
                searchBook={searchBook}
                deleteBook={deleteBook}
                filterByCatrgory={filterByCatrgory}
                filterByGenre={filterByGenre}
                fetchBooks={fetchBooks} />
        </div>
    )
}

export default ViewPage;