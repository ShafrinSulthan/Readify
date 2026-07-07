import React from 'react'
import { Link } from 'react-router-dom'

const ShowBook = ({ books, keyword, setKeyword, searchBook, deleteBook, filterByCatrgory, filterByGenre, fetchBooks }) => {
    return (
        <div className="px-2 py-3">
            <div className="card shadow-lg border-0 rounded-4">
                <div className="card-body">
                    {/* Heading */}
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3 mb-4">
                        <h2 className="fw-bold text-primary">Book Management</h2>
                        <Link to="add-book" className="btn btn-primary px-4">+ Add Book</Link>
                    </div>

                    {/* Search */}
                    <div className="row mb-4">
                        <div className="col-12 col-md-8 d-flex flex-column flex-sm-row gap-2">
                            <input type="text" className="form-control" placeholder="Search by Book Name" onChange={(e) => setKeyword(e.target.value)} />
                            <button onClick={searchBook} className="btn btn-success">Search</button>
                        </div>
                    </div>

                    {/* Filters */}
                    <div className="d-flex flex-wrap gap-2 mb-4">
                        <button className="btn btn-outline-primary" onClick={() => filterByCatrgory("fiction")}>Fiction</button>
                        <button className="btn btn-outline-primary" onClick={() => filterByCatrgory("non-fiction")}>
                            Non Fiction
                        </button>
                        <button className="btn btn-outline-success" onClick={() => filterByGenre("drama")}>
                            Drama
                        </button>
                        <button className="btn btn-outline-dark" onClick={fetchBooks}>Clear Filters</button>
                    </div>

                    {/* Table */}
                    <div className="table-responsive">
                        <table className="table table-hover table-bordered align-middle table-striped">
                            <thead className="table-dark text-center">
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Author</th>
                                    <th>Category</th>
                                    <th>Genre</th>
                                    <th>Price</th>
                                    <th>Stock</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {books.map((book) => (
                                    <tr key={book.id}>
                                        <td>{book.bookId}</td>
                                        <td className="fw-semibold">{book.bookName}</td>
                                        <td>{book.author}</td>
                                        <td>{book.category}</td>
                                        <td>{book.genre}</td>
                                        <td>₹ {book.price}</td>
                                        <td>{book.stockCount}</td>
                                        <td className="text-center">
                                            <Link to={`/admin/edit/${book.id}`} className="btn btn-warning btn-sm me-2 button">Edit</Link>
                                            <button className="btn btn-danger btn-sm" onClick={() => deleteBook(book.id)}>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowBook