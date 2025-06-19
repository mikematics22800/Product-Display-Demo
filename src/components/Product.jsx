import { useContext, useState } from "react"
import { Context } from "../App"

const Product = ({title, price, image, details, inShoppingCart, index}) => {
  const {shoppingCart, setShoppingCart} = useContext(Context)
  const [showDetails, setShowDetails] = useState(false)

  const addToShoppingCart = () => {
    alert('Added to Shopping Cart!')
    setShoppingCart([...shoppingCart, {title, price: { currentPrice: price }, image, details}])
  }

  const removeFromShoppingCart = () => {
    const updatedCart = shoppingCart.filter((_, i) => i !== index)
    setShoppingCart(updatedCart)
  }

  const toggleDetails = () => {
    setShowDetails(!showDetails)
  }

  console.log(shoppingCart)

  return (
    <div className="product">
      <img src={image}/>
      <h1>{title}</h1>
      <h1>{price}</h1>
      <button onClick={toggleDetails}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
      {showDetails && details && (
        <h1 className="product-details">{details}</h1>
      )}
      {!inShoppingCart && <button onClick={addToShoppingCart}>Add to Shopping Cart</button>}
      {inShoppingCart && <button onClick={removeFromShoppingCart}>Remove from Shopping Cart</button>}
    </div>
  )
}

export default Product