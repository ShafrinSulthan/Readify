import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const EditBook = () => {
    const [errors, setErrors] = useState({});
    
    const [book, setBook] = useState({
        bookId: 0,
        bookName: "",
        author: "",
        imgUrl: "",
        category: "",
        genre: "",
        price: '',
        stockCount: 0
    })
    const { id } = useParams()
    const myNavi= useNavigate()
    useEffect(() => {
        async function getBook() {
            try {
                const res = await axios.get(`https://readify-fdkn.onrender.com/books/books/${id}`);
                setBook(res.data);
            } catch (error) {
                console.log(error);
            }
        }

        getBook();
    }, [id]);


    function handleChange(e) {

        setBook({
            ...book, [e.target.name]: e.target.name === 'bookId' || e.target.name === 'price' || e.target.name === 'stockCount'
                ? Number(e.target.value) : e.target.value
        })
    }
    function validateForm() {
    let newErrors = {};

    const urlRegex = /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))$/i;

    if (book.bookName.trim() === "") {
        newErrors.bookName = "Book name is required";
    }

    if (book.author.trim() === "") {
        newErrors.author = "Author name is required";
    }

    if (book.imgUrl.trim() === "") {
        newErrors.imgUrl = "Image URL is required";
    } else if (!urlRegex.test(book.imgUrl)) {
        newErrors.imgUrl = "Enter a valid image URL";
    }

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

    async function EditBook(e) {
    e.preventDefault();

    if (!validateForm()) {
        return;
    }

    try {
        const res = await axios.put(
            `https://readify-fdkn.onrender.com/books/books/${id}`,
            book
        );

        if (res.status === 200) {
            alert("Book Updated Successfully");
            myNavi("/admin");
        }
    } catch (error) {
        console.log(error);
    }
}

    return (
    <div className="container py-5">
        <div className="row justify-content-center">
            <div className="col-lg-7 col-md-9">
                <div className="card shadow-lg border-0 rounded-4">

                    <div className="card-header bg-primary text-white text-center py-3 rounded-top-4">
                        <h3 className="mb-0">Edit Book</h3>
                    </div>

                    <div className="card-body p-4">

                        <form onSubmit={EditBook}>

                            <div className="mb-3">
                                <label className="form-label fw-semibold">Book ID</label>
                                <input type="text" value={book.bookId}  name="bookId" onChange={handleChange} className="form-control" readOnly required/>
                            {errors.bookName && (<small className="text-danger">{errors.bookName}</small>)}
                            </div>

                            <div className="mb-3">
                                <label className="form-label fw-semibold">Book Name</label>
                                <input type="text" value={book.bookName} name="bookName" onChange={handleChange} placeholder="Enter Book Name" className="form-control" required/>
                            {errors.bookName && (<small className="text-danger">{errors.bookName}</small>)}
                            </div>

                            <div className="mb-3">
                                <label className="form-label fw-semibold">Author</label>
                                <input type="text" value={book.author} name="author" onChange={handleChange} placeholder="Enter Author Name" className="form-control" required/>
                            {errors.author && (<small className="text-danger">{errors.author}</small>)}
                            </div>

                            <div className="mb-3">
                                <label className="form-label fw-semibold">Image URL</label>
                                <input type="text" value={book.imgUrl} name="imgUrl" onChange={handleChange} placeholder="Enter Image URL" className="form-control" required/>
                            {errors.imgUrl && (<small className="text-danger">{errors.imgUrl}</small>)}
                            </div>

                            <div className="mb-3">
                                <label className="form-label fw-semibold">Category</label>
                                <select name="category" value={book.category} onChange={handleChange} className="form-select">
                                    <option value="fiction">Fiction</option>
                                    <option value="non-fiction">Non Fiction</option>
                                </select>
                            {errors.category && (<small className="text-danger">{errors.category}</small>)}
                            </div>

                            <div className="mb-3">
                                <label className="form-label fw-semibold">Genre</label>
                                <input type="text" value={book.genre} name="genre" onChange={handleChange} placeholder="Enter Genre" className="form-control" required/>
                            {errors.genre && (<small className="text-danger">{errors.genre}</small>)}
                            </div>

                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label className="form-label fw-semibold">Price</label>
                                    <input type="text" value={book.price} name="price" onChange={handleChange} placeholder="Price" className="form-control" required/>
                                {errors.price && (<small className="text-danger">{errors.price}</small>)}
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label className="form-label fw-semibold">Stock Count</label>
                                    <input type="text" value={book.stockCount} name="stockCount" onChange={handleChange} placeholder="Stock Count" className="form-control" required/>
                                {errors.stockCount && (<small className="text-danger">{errors.stockCount}</small>)}
                                </div>

                            </div>

                            <div className="d-flex justify-content-between mt-4">
                                <button className="btn btn-dark px-4" onClick={() => myNavi(-1)}>Back</button>
                                <button type="submit" className="btn btn-primary px-4">Update Book</button>
                            </div>

                        </form>

                    </div>

                </div>

            </div>

        </div>

    </div>
);
}

export default EditBook