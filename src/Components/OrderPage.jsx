import axios from "axios";
import { useEffect, useState } from "react";
import ShowOrders from "./ShowOrders";

const OrderPage = () => {
  const [orders, setOrders] = useState([]);

  async function fetchOrders() {
    try {
      const res = await axios.get("https://readify-fdkn.onrender.com/books/orders");
      setOrders(res.data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="container">
      <h2>Orders</h2>
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>S.No</th>
            <th>User</th>
            <th>Image</th>
            <th>Book</th>
            <th>Address</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.username}</td>
              <td> <img src={item.imgUrl} width="60" height="80" alt={item.bookName}/></td>
              <td>{item.bookName}</td>
              <td> {item.address && item.address.length > 0 ? (
                  <>
                    {item.address[0].doorNo},
                    <br />
                    {item.address[0].apartment},
                    <br />
                    {item.address[0].street},
                    <br />
                    {item.address[0].city} - {item.address[0].pincode}
                  </>
                ) : ("No Address")}
              </td>
              <td>{item.quantity}</td>
              <td>₹{item.price}</td>
              <td>₹{item.total}</td>
              <td>{item.status}</td>
              <td>{item.orderDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderPage;