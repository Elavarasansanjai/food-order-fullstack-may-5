import React from 'react';
import { useSelector } from 'react-redux';

import CartItem from '../components/CartItem';
import CartSummary from '../components/cartSummary';
const Cart = () => {
  const cartData = useSelector(({ cart }) => cart.cart);
  const totalAmount = useSelector(({ cart }) => cart.totalAmount);
  console.log(cartData);
  return (
    <div className="cart">
      <div className="cart-list">
        <h2>Your Cart Items</h2>
        {/* {!totalAmount && <h2>No items you have</h2>} */}
        {cartData.map((item) => {
          return (
            <CartItem
              name={item.name}
              id={item.id}
              about={item.about}
              totalprice={item.totalprice}
              price={item.price}
              image={item.image}
              quantity={item.quantity}
            />
          );
        })}
      </div>
      <div className="cart-summary">
        <CartSummary />
      </div>
    </div>
  );
};
export default Cart;
