import React, { useState } from "react";
import ProductList from "./ProductList";

function App() {
  const [start, setStart] = useState(false);

  if (!start) {
    return (
      <div style={{
        height: "100vh",
        backgroundImage: "url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6')",
        backgroundSize: "cover",
        color: "white",
        textAlign: "center",
        paddingTop: "150px"
      }}>
        <h1>Paradise Nursery</h1>

        <p>
          At Paradise Nursery, we provide premium indoor plants to
          enhance your living space and promote a healthier lifestyle.
        </p>

        <button onClick={() => setStart(true)}>
          Get Started
        </button>
      </div>
    );
  }

  return <ProductList />;
}

export default App;