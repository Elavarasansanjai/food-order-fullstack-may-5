import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../store';
import { useSelector } from 'react-redux';
const MenuItem = ({ id, delivery, name, image, price, about }) => {
  const dispatch = useDispatch();

  const btnHandler = () => {
    dispatch(
      addItem({
        id,
        name,
        about,
        delivery,
        image,
        price,
      })
    );
  };
  const data = useSelector(({ cart }) => cart.cart);
  const amount = useSelector(({ cart }) => cart.totalAmount);
  console.log(data, amount);
  return (
    <div key={id} className="menu">
      <img src={image} alt="" />
      <div className="item-detail">
        <h3>{name}</h3>
        <p>{name}</p>
        <h4>{price}</h4>
        <p>{delivery} delivery</p>
      </div>
      <div>
        <button onClick={btnHandler}>Add Cart</button>
      </div>
    </div>
  );
};

export default MenuItem;
