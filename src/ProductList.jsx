import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";
import CartItem from "./CartItem";

function ProductList() {
  const dispatch = useDispatch();

  const totalItems = useSelector(state =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  const [showCart, setShowCart] = useState(false);
  const [addedToCart, setAddedToCart] = useState({});

  const plants = [
    // 🌿 Indoor Plants
    { name: "Snake Plant", price: "$15", category: "Indoor", image: "https://via.placeholder.com/100" },
    { name: "Peace Lily", price: "$20", category: "Indoor", image: "https://via.placeholder.com/100" },

    // 🌵 Succulents
    { name: "Aloe Vera", price: "$10", category: "Succulent", image: "https://via.placeholder.com/100" },
    { name: "Cactus", price: "$12", category: "Succulent", image: "https://via.placeholder.com/100" },

    // 🌸 Flowering
    { name: "Rose Plant", price: "$18", category: "Flowering", image: "https://via.placeholder.com/100" },
    { name: "Orchid", price: "$25", category: "Flowering", image: "https://via.placeholder.com/100" },
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));

    setAddedToCart(prev => ({
      ...prev,
      [plant.name]: true
    }));
  };

  return (
    <div>

      {/* HEADER */}
      <div style={{ background: "green", color: "white", padding: "10px", display: "flex", justifyContent: "space-between" }}>
        <span onClick={() => setShowCart(false)}>Paradise Nursery</span>
        <span>Plants</span>
        <span onClick={() => setShowCart(true)}>🛒 ({totalItems})</span>
      </div>

      {!showCart ? (
        <div>
          {["Indoor", "Succulent", "Flowering"].map(category => (
            <div key={category}>
              <h2>{category}</h2>

              {plants.filter(p => p.category === category).map((plant, i) => (
                <div key={i}>
                  <img src={plant.image} />
                  <h3>{plant.name}</h3>
                  <p>{plant.price}</p>

                  <button
                    onClick={() => handleAddToCart(plant)}
                    disabled={addedToCart[plant.name]}
                  >
                    {addedToCart[plant.name] ? "Added" : "Add to Cart"}
                  </button>
                </div>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={() => setShowCart(false)} />
      )}

    </div>
  );
}

export default ProductList;