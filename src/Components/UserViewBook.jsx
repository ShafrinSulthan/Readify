import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MyContext } from "../App";

const UserViewBook = () => {
  const { id } = useParams();
  const { loggedUser } = useContext(MyContext);
  const [book, setBook] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const getBooks = async () => {
    const res = await axios.get(`http://localhost:5000/books/${id}`);
    setBook(res.data);
  };

  useEffect(() => {
    getBooks();
  }, []);

  if (!book) return <h3>Loading...</h3>;

  const increase = () => {
    if (quantity < book.stockCount) {
      setQuantity(quantity + 1);
    }
  };

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addToCart = async () => {
    try {

      // Check if this book already exists in the user's cart
      const res = await axios.get(
        `http://localhost:5000/cart?username=${loggedUser.username}&bookId=${book.id}`
      );

      if (res.data.length > 0) {

        // Book already exists
        const existingItem = res.data[0];

        const newQuantity = existingItem.quantity + quantity;

        if (newQuantity > book.stockCount) {
          alert(`Only ${book.stockCount} books are available.`);
          return;
        }

        await axios.patch(
          `http://localhost:5000/cart/${existingItem.id}`,
          {
            quantity: newQuantity,
            total: newQuantity * book.price,
          }
        );

      } else {

        // New book
        const cartItem = {
          bookId: book.id,
          bookName: book.bookName,
          author: book.author,
          imgUrl: book.imgUrl,
          price: book.price,
          quantity: quantity,
          total: quantity * book.price,
          stockCount: book.stockCount,
          username: loggedUser.username,
        };

        await axios.post(
          "http://localhost:5000/cart",
          cartItem
        );
      }

      alert("Book Added Successfully");
      navigate("/user/cart");

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-5 text-center">
          <img src={book.imgUrl} alt={book.bookName} className="img-fluid rounded shadow" style={{ maxHeight: "500px" }}/>
        </div>
        <div className="col-md-7">
          <h1>{book.bookName}</h1>
          <h4>Author : {book.author}</h4>
          <h2 className="text-success">₹{book.price}</h2>
          <p><strong>Genre :</strong> {book.genre}</p>
          <p><strong>Category :</strong> {book.category}</p>
          <div className="d-flex align-items-center my-4">
            <button className="btn btn-outline-dark" onClick={decrease}>-</button>
            <span className="mx-4 fs-4">{quantity}</span>
            <button className="btn btn-outline-dark" onClick={increase}> +</button>
          </div>
          <button className="btn btn-primary btn-lg" onClick={addToCart}>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default UserViewBook;