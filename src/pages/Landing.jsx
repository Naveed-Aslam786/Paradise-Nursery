// src/pages/Landing.jsx
import { NavLink } from "react-router-dom";

export default function Landing() {
  return (
    <div className="landing">
      <h2>Welcome to Paradise Nursery 🌱</h2>
      <p>Your one-stop shop for beautiful and healthy plants.</p>
      <NavLink to="/products" className="btn">
        Shop Now
      </NavLink>
    </div>
  );
}
