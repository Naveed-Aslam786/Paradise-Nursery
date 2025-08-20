import { createContext, useContext, useEffect, useMemo, useReducer } from 'react'

const CartContext = createContext()

function reducer(state, action){
  switch(action.type){
    case 'add': {
      const existing = state.items[action.item.id]
      const qty = (existing?.qty ?? 0) + 1
      return { ...state, items: { ...state.items, [action.item.id]: { ...action.item, qty } } }
    }
    case 'inc': {
      const item = state.items[action.id]
      if(!item) return state
      return { ...state, items: { ...state.items, [action.id]: { ...item, qty: item.qty + 1 } } }
    }
    case 'dec': {
      const item = state.items[action.id]
      if(!item) return state
      const nextQty = item.qty - 1
      const items = { ...state.items }
      if(nextQty <= 0) delete items[action.id]
      else items[action.id] = { ...item, qty: nextQty }
      return { ...state, items }
    }
    case 'remove': {
      const items = { ...state.items }
      delete items[action.id]
      return { ...state, items }
    }
    case 'clear': return { items: {} }
    case 'hydrate': return action.state
    default: return state
  }
}

const initial = { items: {} }

export function CartProvider({ children }){
  const [state, dispatch] = useReducer(reducer, initial)

  // hydrate from localStorage once
  useEffect(() => {
    const raw = localStorage.getItem('pn_cart')
    if(raw){
      try{ dispatch({ type:'hydrate', state: JSON.parse(raw) }) } catch{}
    }
  }, [])

  // persist
  useEffect(() => {
    localStorage.setItem('pn_cart', JSON.stringify(state))
  }, [state])

  const value = useMemo(() => {
    const itemsArr = Object.values(state.items)
    const totalQty = itemsArr.reduce((s,i)=>s+i.qty,0)
    const totalPrice = itemsArr.reduce((s,i)=>s+i.qty * i.price,0)
    return { state, dispatch, itemsArr, totalQty, totalPrice }
  }, [state])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => useContext(CartContext)