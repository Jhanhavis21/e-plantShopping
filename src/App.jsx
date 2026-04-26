import { useState } from "react";
import ProductList from "./ProductList";
import AboutUs from "./AboutUs";
import "./App.css";

function App() {
  const [page, setPage] = useState("landing");

  if (page === "landing") {
    return (
      <div className="landing">
        <h1>Paradise Nursery</h1>
        <p>
          Welcome to Paradise Nursery, where green meets serenity.
          Explore our collection of beautiful indoor plants.
        </p>

        <button className="btn" onClick={() => setPage("products")}>
          Get Started
        </button>
      </div>
    );
  }

  if (page === "about") {
    return <AboutUs />;
  }

  return <ProductList goHome={() => setPage("landing")} />;
}

export default App;