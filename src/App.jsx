import { createContext, useState, useEffect } from 'react'
import './index.css'
import Home from './pages/Home'
import ShoppingCart from './pages/ShoppingCart'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Product from './components/Product'

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
  ], 
  {
    basename: '/Product-Display-Demo/',
  }
);

const App = () => {
  const [shoppingCart, setShoppingCart] = useState([])
  const [shoppingCartList, setShoppingCartList] = useState([])
  const value = {shoppingCart, setShoppingCart, shoppingCartList}

  useEffect(() => {
    const shoppingCartList = shoppingCart.map((product) => {
      <Product title={product.title} image={product.image} price={product.price.currentPrice}/>
    })
    setShoppingCartList(shoppingCartList)
  }, [shoppingCart])
  
  return (
    <Context value={value}>
      <RouterProvider router={router}/>
    </Context>
  )
}

export default App

