import React from "react";

const ShowOrders = ({ orders }) => {
  return (
    <div className="px-2 py-3">
      <div className="card shadow-lg border-0 rounded-4">
        <div className="card-body">
          <h2 className="fw-bold text-primary mb-4">Order Management</h2>
          <div className="table-responsive">
            <table className="table table-hover table-bordered align-middle table-striped">
              <thead className="table-dark text-center">
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Book</th>
                  <th>Quantity</th>
                  <th>Total Price</th>
                  <th>Order Date</th>
                  <th>Payment</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td>{order.orderId}</td>
                    <td>{order.customerName}</td>
                    <td>{order.bookName}</td>
                    <td>{order.quantity}</td>
                    <td>₹ {order.totalPrice}</td>
                    <td>{order.orderDate}</td>
                    <td>{order.paymentStatus}</td>
                    <td>{order.status}</td>
                  </tr>
                ))}

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowOrders;