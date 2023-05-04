import React from 'react';
import { useSelector } from 'react-redux';
const CartSummary = () => {
  const totalAmount = useSelector(({ cart }) => cart.totalAmount);
  console.log(totalAmount);
  const totalQuantity = useSelector(({ cart }) => cart.totalQuantity);
  return (
    <div className="cart-summary-content">
      <h3>Summary</h3>
      <div>
        <p>Total Quantity</p>
        <p>{totalQuantity}</p>
      </div>
      <div>
        <p>Total Amount</p>
        <p>{totalAmount}</p>
      </div>
      <button>Payment</button>
    </div>
  );
};

export default CartSummary;
