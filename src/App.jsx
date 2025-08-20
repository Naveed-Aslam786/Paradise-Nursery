import { Routes, Route } from 'react-router-dom'
import Landing from "./pages/Landing";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Header from './components/Header'
import { CartProvider } from './context/CartContext.jsx'

export default function App() {
  return (
    <CartProvider>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </CartProvider>
  )
}


