import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../CartSlice';

function CartItem() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Cart</h2>

      {items.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        items.map((item, index) => (
          <div key={index}>

            <h3>{item.name}</h3>
            <p>{item.cost}</p>

            <button
              onClick={() =>
                dispatch(updateQuantity({
                  name: item.name,
                  amount: item.quantity - 1
                }))
              }
            >
              -
            </button>

            <span>{item.quantity}</span>

            <button
              onClick={() =>
                dispatch(updateQuantity({
                  name: item.name,
                  amount: item.quantity + 1
                }))
              }
            >
              +
            </button>

            <button onClick={() => dispatch(removeItem(item.name))}>
              Remove
            </button>

          </div>
        ))
      )}
    </div>
  );
}

export default CartItem;