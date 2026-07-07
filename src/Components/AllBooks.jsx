import axios from "axios";
import React, { useEffect, useState } from "react";
import "./css/AllBooks.css";

const AllBooks = () => {
  const [books, setBooks] = useState([]);

  async function getBooks() {
    try {
      const res = await axios.get("http://localhost:5000/books");
      setBooks(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className="container py-5">
      <h1 className="text-center heading mb-5">Our Book Collection</h1>
      <div className="row g-4">
        {books.map((book) => (<div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12" key={book.id}>
          <div className="card h-100 shadow-sm border-0 book-card">
            <img src={book.imgUrl} className="card-img-top" alt={book.bookName} />
            <div className="card-body">
              <h5 className="fw-bold mb-3">{book.bookName}</h5>
              <p className="mb-2"><strong>Author :</strong> {book.author}</p>
              <p className="mb-2"><strong>Category :</strong> {book.category}</p>
              <p className="mb-2"><strong>Genre :</strong> {book.genre}</p>
              <p className="mb-2"><strong>Price :</strong><span className="text-success fw-bold">₹{book.price}</span></p>
              <p><strong>Stock :</strong> <span className={book.stockCount > 10 ? "badge bg-success" : "badge bg-danger"}> {book.stockCount} </span> </p>
            </div>

          </div>

        </div>

        ))}

      </div>

    </div>
  );
};

export default AllBooks;