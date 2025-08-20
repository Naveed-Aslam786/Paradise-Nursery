import { useCart } from "../context/CartContext";
import { NavLink } from "react-router-dom";

export default function Cart() {
  const { cart, removeFromCart, increaseQty, decreaseQty, totalPrice, totalQty } =
    useCart();

  if (cart.length === 0) {
    return (
      <div className="cart">
        <h2>Your cart is empty 🛒</h2>
        <NavLink to="/products" className="btn">
          Continue Shopping
        </NavLink>
      </div>
    );
  }

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <p>Total Items: {totalQty}</p>
      <div className="cart-items">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            <div className="qty-controls">
              <button onClick={() => decreaseQty(item.id)}>-</button>
              <span>{item.qty}</span>
              <button onClick={() => increaseQty(item.id)}>+</button>
            </div>
            <p>Total: ${item.qty * item.price}</p>
            <button onClick={() => removeFromCart(item.id)}>Delete</button>
          </div>
        ))}
      </div>
      <h3>Grand Total: ${totalPrice}</h3>
      <div className="cart-actions">
        <NavLink to="/products" className="btn">
          Continue Shopping
        </NavLink>
        <button className="btn checkout">Checkout</button>
      </div>
    </div>
  );
}
