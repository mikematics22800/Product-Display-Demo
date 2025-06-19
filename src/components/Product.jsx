import { useContext } from "react"
import { Context } from "../App"

const Product = ({title, price, image, inShoppingCart}) => {
  const {shoppingCart, setShoppingCart} = useContext(Context)

  const addToShoppingCart = () => {
    alert('Added to Shopping Cart!')
    setShoppingCart([...shoppingCart, {title, price: { currentPrice: price }, image}])
  }

  console.log(shoppingCart)

  return (
    <div className="product">
      <img src={image}/>
      <h1>{title}</h1>
      <h1>{price}</h1>
      {!inShoppingCart && <button onClick={addToShoppingCart}>Add to Shopping Cart</button>}
    </div>
  )
}

export default Product