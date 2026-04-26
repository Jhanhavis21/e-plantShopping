import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity, addItem } from "./CartSlice";

function CartItem({ onContinueShopping }) {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const totalItems = items.reduce((s, i) => s + i.quantity, 0);
  const totalCost = items.reduce((s, i) =>
    s + parseFloat(i.price.substring(1)) * i.quantity, 0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Shopping Cart</h2>

      <button onClick={onContinueShopping}>Continue Shopping</button>

      <p>Total Items: {totalItems}</p>
      <p>Total Cost: ${totalCost}</p>

      {items.map((item, i) => (
        <div key={i} style={{ marginBottom: "10px" }}>
          <img src={item.image} width="80" />
          <h4>{item.name}</h4>
          <p>{item.price}</p>

          {/* decrement */}
          <button onClick={() => {
            if (item.quantity > 1) {
              dispatch(updateQuantity({
                name: item.name,
                amount: item.quantity - 1
              }));
            } else {
              dispatch(removeItem(item.name));
            }
          }}>-</button>

          {item.quantity}

          {/* increment */}
          <button onClick={() => dispatch(addItem(item))}>+</button>

          <button onClick={() => dispatch(removeItem(item.name))}>
            Delete
          </button>

          <p>
            Subtotal: $
            {parseFloat(item.price.substring(1)) * item.quantity}
          </p>
        </div>
      ))}

      <button onClick={() => alert("Coming Soon")}>
        Checkout
      </button>
    </div>
  );
}

export default CartItem;