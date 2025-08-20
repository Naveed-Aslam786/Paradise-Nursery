import { NavLink, useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Header(){
  const { totalQty } = useCart()
  const { pathname } = useLocation()
  return (
    <header className="header">
      <div className="header-inner">
        <NavLink to="/" className="brand">
          <div className="brand-logo" aria-hidden>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C12 2 7 7 7 11c0 3 2.5 5 5 5s5-2 5-5C17 7 12 2 12 2Z" fill="#0b1b16"/>
              <circle cx="12" cy="20" r="2" fill="#0b1b16"/>
            </svg>
          </div>
          <h1>Paradise Nursery</h1>
        </NavLink>
        <nav className="nav">
          {pathname !== '/products' && (
            <NavLink to="/products" className={({isActive})=> isActive? 'active' : undefined}>Products</NavLink>
          )}
          {pathname !== '/cart' && (
            <NavLink to="/cart" className={({isActive})=> isActive? 'active' : undefined}>
              <CartIcon count={totalQty} />
            </NavLink>
          )}
        </nav>
      </div>
    </header>
  )
}

function CartIcon({ count }){
  return (
    <span style={{ position:'relative', display:'inline-flex', alignItems:'center', gap:8 }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 
                 22s2-.9 2-2-.9-2-2-2zm10 
                 0c-1.1 0-1.99.9-1.99 2S15.9 22 17 
                 22s2-.9 2-2-.9-2-2-2zM7.16 
                 14l.84-2h8.99c.75 0 1.41-.41 
                 1.75-1.03l3.58-6.49A.996.996 
                 0 0021.42 3H5.21l-.94-2H1v2h2l3.6 
                 7.59-1.35 2.44C4.52 13.37 
                 5.48 15 7 15h12v-2H7.16z" />
      </svg>

      {/* Badge */}
      {count > 0 && (
        <span
          style={{
            position: 'absolute',
            top: '-6px',
            right: '-6px',
            background: 'red',
            color: 'white',
            borderRadius: '50%',
            padding: '2px 6px',
            fontSize: '12px',
            fontWeight: 'bold',
            lineHeight: 1,
          }}
        >
          {count}
        </span>
      )}
    </span>
  )
}

