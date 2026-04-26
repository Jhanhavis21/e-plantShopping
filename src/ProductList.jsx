import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";
import { useState } from "react";
import CartItem from "./CartItem";
import "./App.css";

function ProductList({ goHome }) {
  const dispatch = useDispatch();

  const totalItems = useSelector(state =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  const [showCart, setShowCart] = useState(false);
  const [added, setAdded] = useState({});

  // ✅ 6 plants, 3 categories
  const plants = [
    { name: "Snake Plant", price: "$15", category: "Indoor", image: "https://picsum.photos/100?1" },
    { name: "Peace Lily", price: "$20", category: "Indoor", image: "https://picsum.photos/100?2" },
    { name: "Aloe Vera", price: "$10", category: "Succulent", image: "https://picsum.photos/100?3" },
    { name: "Cactus", price: "$12", category: "Succulent", image: "https://picsum.photos/100?4" },
    { name: "Rose", price: "$18", category: "Flowering", image: "https://picsum.photos/100?5" },
    { name: "Orchid", price: "$25", category: "Flowering", image: "https://picsum.photos/100?6" },
  ];

  const handleAdd = (p) => {
    dispatch(addItem(p));
    setAdded(prev => ({ ...prev, [p.name]: true }));
  };

  return (
    <div>

      {/* ✅ HEADER (both pages) */}
      <div className="navbar">
        <span onClick={() => setShowCart(false)}>Paradise Nursery</span>
        <span onClick={goHome}>Home</span>
        <span>Plants</span>
        <span onClick={() => setShowCart(true)}>🛒 ({totalItems})</span>
      </div>

      {!showCart ? (
        ["Indoor", "Succulent", "Flowering"].map(cat => (
          <div key={cat}>
            <h2>{cat}</h2>

            <div className="product-grid">
              {plants.filter(p => p.category === cat).map((p, i) => (
                <div className="card" key={i}>
                  <img src={p.image} />
                  <h4>{p.name}</h4>
                  <p>{p.price}</p>

                  <button
                    className="btn"
                    onClick={() => handleAdd(p)}
                    disabled={added[p.name]}
                  >
                    {added[p.name] ? "Added to Cart" : "Add to Cart"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <CartItem onContinueShopping={() => setShowCart(false)} />
      )}
    </div>
  );
}

export default ProductList;