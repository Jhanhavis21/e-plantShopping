import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity, addItem } from "./CartSlice";

function CartItem({ onContinueShopping }) {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const totalCost = items.reduce((sum, item) => {
    return sum + parseFloat(item.price.substring(1)) * item.quantity;
  }, 0);

  return (
    <div>

      <h2>Cart</h2>

      <button onClick={onContinueShopping}>Continue Shopping</button>

      <p>Total Items: {totalItems}</p>
      <p>Total Cost: ${totalCost}</p>

      {items.map((item, i) => (
        <div key={i}>
          <img src={item.image} />
          <h3>{item.name}</h3>
          <p>{item.price}</p>

          <button onClick={() =>
            dispatch(updateQuantity({
              name: item.name,
              amount: item.quantity - 1
            }))
          }>-</button>

          {item.quantity}

          <button onClick={() => dispatch(addItem(item))}>+</button>

          <button onClick={() => dispatch(removeItem(item.name))}>
            Delete
          </button>
        </div>
      ))}

      <button onClick={() => alert("Coming Soon")}>
        Checkout
      </button>

    </div>
  );
}

export default CartItem;