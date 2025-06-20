import { useContext } from "react"
import { Context } from "../App"
import Product from "../components/Product"
import { Link } from "react-router-dom"

const ShoppingCart = () => {
  const {shoppingCart} = useContext(Context)

  console.log('Shopping cart data:', shoppingCart)

  const shoppingCartList = shoppingCart.map((product, index) => {
    return <Product 
      key={index}
      title={product.title} 
      image={product.image} 
      price={product.price.currentPrice}
      details={product.details}
      inShoppingCart={true}
      index={index}
    />
  })

  return (
    <div className="shopping-cart">
      <nav>
        <Link to={'/'}><button>Home</button></Link>
      </nav>
      <div className='shopping-cart-list'>
        {shoppingCartList}
      </div>
    </div>
  )
}

export default ShoppingCart