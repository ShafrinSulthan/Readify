import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
    const [errors, setErrors] = useState({});;
    const [book, setBook] = useState({
        bookId: '',
        bookName: "",
        author: "",
        imgUrl: "",
        category: "",
        genre: "",
        price: '',
        stockCount: ''
    })
    const myNavi = useNavigate()
    function handleChange(e) {

        setBook({
            ...book, [e.target.name]: e.target.name === 'bookId' || e.target.name === 'price' || e.target.name === 'stockCount'
                ? Number(e.target.value) : e.target.value
        })
    }
    async function addBook(e) {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        try {
            const res = await axios.get(
                `https://readify-fdkn.onrender.com/books?bookId=${book.bookId}`
            );

            if (res.data.length === 0) {
                await axios.post("https://readify-fdkn.onrender.com/books", book);

                alert("Added Successfully");

                setBook({
                    bookId: 0,
                    bookName: "",
                    author: "",
                    imgUrl: "",
                    category: "",
                    genre: "",
                    price: "",
                    stockCount: 0
                });

                myNavi("/admin");
            } else {
                alert("Book already exists");
            }
        } catch (error) {
            console.log(error);
        }
    }

    function validateForm() {
        let newErrors = {};

        // const urlRegex = /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))$/i;

        if (book.bookId <= 0) {
            newErrors.bookId = "Book ID must be greater than 0";
        }

        if (book.bookName.trim() === "") {
            newErrors.bookName = "Book name is required";
        }

        if (book.author.trim() === "") {
            newErrors.author = "Author name is required";
        }

        // if (book.imgUrl.trim() === "") {
        //     newErrors.imgUrl = "Image URL is required";
        // } else if (!urlRegex.test(book.imgUrl)) {
        //     newErrors.imgUrl = "Enter a valid image URL";
        // }

        if (book.category === "") {
            newErrors.category = "Select a category";
        }

        if (book.genre.trim() === "") {
            newErrors.genre = "Genre is required";
        }

        if (book.price <= 0) {
            newErrors.price = "Price must be greater than 0";
        }

        if (book.stockCount < 0) {
            newErrors.stockCount = "Stock cannot be negative";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    }


    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-lg-7 col-md-9">
                    <div className="card shadow-lg border-0 rounded-4">
                        <div className="card-header bg-success text-white text-center py-3 rounded-top-4">
                            <h3 className="mb-0"> Add New Book</h3>
                        </div>

                        <div className="card-body p-4">
                            <form onSubmit={addBook}>
                                <div className="mb-3">
                                    <label className="form-label fw-semibold">Book ID</label>
                                    <input type="number" value={book.bookId} name="bookId" onChange={handleChange} placeholder="Enter Book ID" className="form-control" required />
                                    {errors.bookId && (<small className="text-danger">{errors.bookId}</small>)}
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-semibold">Book Name</label>
                                    <input type="text" value={book.bookName} name="bookName" onChange={handleChange} placeholder="Enter Book Name" className="form-control" required />
                                    {errors.bookName && (<small className="text-danger">{errors.bookName}</small>)}
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-semibold">Author</label>
                                    <input type="text" value={book.author} name="author" onChange={handleChange} placeholder="Enter Author Name" className="form-control" required />
                                    {errors.author && (<small className="text-danger">{errors.author}</small>)}
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-semibold">Image URL</label>
                                    <input type="text" value={book.imgUrl} name="imgUrl" onChange={handleChange} placeholder="Enter Image URL" className="form-control" />
                                    {errors.imgUrl && (<small className="text-danger">{errors.imgUrl}</small>)}
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-semibold">Category</label>
                                    <select name="category" value={book.category} onChange={handleChange} className="form-select">
                                        <option value="">Select Category</option>
                                        <option value="fiction">Fiction</option>
                                        <option value="non-fiction">Non Fiction</option>
                                    </select>
                                    {errors.category && (<small className="text-danger">{errors.category}</small>)}
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-semibold">Genre</label>
                                    <input type="text" value={book.genre} name="genre" onChange={handleChange} placeholder="Enter Genre" className="form-control" required />
                                    {errors.genre && (<small className="text-danger">{errors.genre}</small>)}
                                </div>

                                <div className="row">

                                    <div className="col-md-6 mb-3">
                                        <label className="form-label fw-semibold">Price</label>
                                        <input type="number" value={book.price} name="price" onChange={handleChange} placeholder="Enter Price" className="form-control" required />
                                        {errors.price && (<small className="text-danger">{errors.price}</small>)}
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <label className="form-label fw-semibold">Stock Count</label>
                                        <input type="number" value={book.stockCount} name="stockCount" onChange={handleChange} placeholder="Enter Stock Count" className="form-control" required />
                                        {errors.stockCount && (<small className="text-danger">{errors.stockCount}</small>)}
                                    </div>

                                </div>
                                <div className="d-flex justify-content-between mt-4">

                                    <button className="btn btn-dark px-4" onClick={() => myNavi(-1)}> Back</button>
                                    <button type="submit" className="btn btn-success px-4">+ Add Book</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default AddBook