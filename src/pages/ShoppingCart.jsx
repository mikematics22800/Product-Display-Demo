import { useContext } from "react"
import { Context } from "../App"
import Product from "../components/Product"
import { Link } from "react-router-dom"

const ShoppingCart = () => {
  const {shoppingCart} = useContext(Context)

  console.log('Shopping cart data:', shoppingCart)

  const shoppingCartList = shoppingCart.map((product) => {
    return <Product 
      title={product.title} 
      image={product.image} 
      price={product.price.currentPrice}
      inShoppingCart={true}
    />
  })
  return (
    <div>
      <nav>
        <Link to={'/'}><button>Home</button></Link>
      </nav>
      <div className='shopping-cart'>
        {shoppingCartList}
      </div>
    </div>
  )
}

export default ShoppingCart