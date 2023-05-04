import { useDispatch } from 'react-redux';
import { addItem, removeItem } from '../store';
const CartItem = ({ name, id, price, about, totalprice, image, quantity }) => {
  const dispatch = useDispatch();
  const addItemHandler = () => {
    dispatch(
      addItem({
        id,
        price,
        totalprice,
        quantity,
      })
    );
  };
  const removeItemHandler = () => {
    dispatch(
      removeItem({
        id,
        price,
        totalprice,
        quantity,
      })
    );
  };
  return (
    <div key={id} className="cart-item">
      <div className="item-img">
        <img alt="" src={image} />
      </div>
      <div className="item-detail">
        <h2>{name}</h2>
        <p>{about}</p>
        <h3>$ {price}</h3>
        <div className="control-quantity">
          <button onClick={addItemHandler}>+</button>
          <p>{quantity}</p>
          <button onClick={removeItemHandler}>-</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
