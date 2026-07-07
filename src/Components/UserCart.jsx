import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../App";
import { useNavigate } from "react-router-dom";

const UserCart = () => {
  const { loggedUser } = useContext(MyContext);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchCart();
  }, []);

  async function fetchCart() {
    if (!loggedUser) return;

    try {
      const res = await axios.get(
        `http://https://readify-fdkn.onrender.com/books/cart?username=${loggedUser.username}`
      );
      setCart(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  const increase = async (item) => {
    if (item.quantity >= item.stockCount) {
      alert("Only " + item.stockCount + " books available");
      return;
    }

    await axios.patch(`http://https://readify-fdkn.onrender.com/books/cart/${item.id}`, {
      quantity: item.quantity + 1,
      total: (item.quantity + 1) * item.price,
    });

    fetchCart();
  };

  const decrease = async (item) => {
    if (item.quantity <= 1) return;

    await axios.patch(`http://https://readify-fdkn.onrender.com/books/cart/${item.id}`, {
      quantity: item.quantity - 1,
      total: (item.quantity - 1) * item.price,
    });

    fetchCart();
  };

  const removeItem = async (id) => {
    await axios.delete(`http://https://readify-fdkn.onrender.com/books/cart/${id}`);
    fetchCart();
  };
  const clearCart = async () => {
    try {
      const res = await axios.get(
        `http://https://readify-fdkn.onrender.com/books/cart?username=${loggedUser.username}`
      );

      for (const item of res.data) {
        await axios.delete(`http://https://readify-fdkn.onrender.com/books/cart/${item.id}`);
      }

      fetchCart();
      alert("Cart Cleared Successfully");
    } catch (err) {
      console.log(err);
    }
  };

  const placeOrder = async () => {
    try {
      // Get logged-in user details
      const userRes = await axios.get(
        `http://https://readify-fdkn.onrender.com/books/users?username=${loggedUser.username}`
      );

      const currentUser = userRes.data[0];

      // Check address
      if (
        !currentUser.address ||
        currentUser.address.length === 0
      ) {
        alert("Please add your address before placing the order.");
        navigate("/user/profile");
        return;
      }

      // Get cart items
      const cartRes = await axios.get(
        `http://https://readify-fdkn.onrender.com/books/cart?username=${loggedUser.username}`
      );

      const cartItems = cartRes.data;

      if (cartItems.length === 0) {
        alert("Your cart is empty");
        return;
      }

      for (const item of cartItems) {

        // Save order
        await axios.post("http://https://readify-fdkn.onrender.com/books/orders", {
          ...item,
          username: currentUser.username,
          address: currentUser.address,
          orderDate: new Date().toLocaleDateString(),
          status: "Pending",
        });

        // Get latest book details
        const bookRes = await axios.get(
          `http://https://readify-fdkn.onrender.com/books/books/${item.bookId}`
        );

        const currentBook = bookRes.data;

        // Check stock before reducing
        if (currentBook.stockCount < item.quantity) {
          alert(`${currentBook.bookName} is out of stock.`);
          continue;
        }

        // Update stock
        await axios.patch(
          `http://https://readify-fdkn.onrender.com/books/books/${item.bookId}`,
          {
            stockCount: currentBook.stockCount - item.quantity,
          }
        );

        // Remove from cart
        await axios.delete(
          `http://https://readify-fdkn.onrender.com/books/cart/${item.id}`
        );
      }

      fetchCart();

      alert("Order Placed Successfully");

    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    }
  };


  const grandTotal = cart.reduce((sum, item) => sum + item.total, 0);

  if (cart.length === 0) {
    return (
      <div className="container py-5 text-center">
        <h2>Your Cart is Empty</h2>
      </div>
    );
  }

  return (
    <div className="container py-5">

      <h2 className="mb-4">My Cart</h2>

      <table className="table table-bordered align-middle text-center">

        <thead className="table-dark">
          <tr>
            <th>S.No</th>
            <th>Image</th>
            <th>Book</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Sub Total</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {cart.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>
                <img src={item.imgUrl} alt={item.bookName} width="80" height="100" style={{ objectFit: "cover" }}/>
              </td>
              <td>{item.bookName}</td>
              <td>₹{item.price}</td>
              <td>
                <button className="btn btn-sm btn-outline-dark" disabled={item.quantity === 1} onClick={() => decrease(item)}>-</button>
                <span className="mx-3 fw-bold">{item.quantity}</span>
                <button className="btn btn-sm btn-outline-dark" disabled={item.quantity === item.stockCount} onClick={() => increase(item)}>+</button>
              </td>
              <td>₹{item.total}</td>
              <td>
                <button className="btn btn-danger btn-sm" onClick={() => removeItem(item.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-end">
        <h3 className="fw-bold">Total : ₹{grandTotal}</h3>
      </div>
      <div className="d-flex gap-3 mt-3">
        <button className="btn btn-danger w-50" onClick={clearCart}>Clear Cart</button>
        <button className="btn btn-primary w-50" onClick={placeOrder}>Place Order</button>
      </div>

    </div>
  );
};

export default UserCart;