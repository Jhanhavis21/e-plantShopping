import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../CartSlice';
import CartItem from './CartItem';

function ProductList() {
  const [showCart, setShowCart] = useState(false);
  const [addedToCart, setAddedToCart] = useState({});
  const dispatch = useDispatch();

  const plantsArray = [
    {
      category: "Plants",
      plants: [
        {
          name: "Snake Plant",
          image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant.jpg",
          description: "Improves air quality",
          cost: "$15"
        },
        {
          name: "Aloe Vera",
          image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf.jpg",
          description: "Medicinal plant",
          cost: "$10"
        }
      ]
    }
  ];

  const handleAddToCart = (product) => {
    dispatch(addItem(product));

    setAddedToCart((prev) => ({
      ...prev,
      [product.name]: true,
    }));
  };

  return (
    <div>

      <button onClick={() => setShowCart(false)}>Plants</button>
      <button onClick={() => setShowCart(true)}>Cart</button>

      {!showCart ? (
        <div className="product-grid">
          {plantsArray.map((category, i) => (
            <div key={i}>
              <h2>{category.category}</h2>

              {category.plants.map((plant, j) => (
                <div key={j} className="product-card">

                  <img src={plant.image} width="150" />

                  <h3>{plant.name}</h3>
                  <p>{plant.description}</p>
                  <p>{plant.cost}</p>

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
        <CartItem />
      )}

    </div>
  );
}

export default ProductList;