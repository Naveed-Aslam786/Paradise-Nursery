// src/pages/Products.jsx
import products from "../data/products";
import { useCart } from "../context/CartContext";

export default function Products() {
  const { addToCart } = useCart();

  return (
    <div className="products">
      <h2>Our Plants</h2>
      <div className="grid">
        {products.map((p) => (
          <div key={p.id} className="card">
            <img src={p.image} alt={p.name} />
            <h3>{p.name}</h3>
            <p>Rs. {p.price}</p>
            <button onClick={() => addToCart(p)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

