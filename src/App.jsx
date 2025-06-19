import { createContext, useState } from 'react'
import './index.css'
import Home from './pages/Home'
import ShoppingCart from './pages/ShoppingCart'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

export const Context = createContext()

const router = createBrowserRouter(
  [
    {
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/shopping-cart",
          element: <ShoppingCart/>
      },
      ]
    }
  ]
);

const App = () => {
  const [shoppingCart, setShoppingCart] = useState([])
  const value = {shoppingCart, setShoppingCart}
  
  return (
    <Context value={value}>
      <RouterProvider router={router}/>
    </Context>
  )
}

export default App

