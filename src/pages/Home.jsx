import { useState, useEffect } from 'react'
import Product from '../components/Product'
import getWalmart from '../utils/getWalmart'
import { Link } from 'react-router-dom'

function Home() {
  const [query, setQuery] = useState('iPhone')
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const handleSearch = (e) => {
    e.preventDefault()
    const searchQuery = e.target.querySelector('input').value
    setQuery(searchQuery)
    setLoading(true)
    getWalmart(searchQuery).then((products) => {
      setProducts(products)
      setLoading(false)
    }).catch((error) => {
      console.error('Error fetching products:', error)
      setLoading(false)
    })
  }

  useEffect(() => {
    getWalmart(query).then((products) => {
      setProducts(products)
      setLoading(false)
    })
  }, [])

  const productList = products?.map((product) => {
    return <Product 
      title={product.title} 
      image={product.image} 
      price={product.price.currentPrice}
      inShoppingCart={false}
    />
  })

  return (
    <div className='home'>
      <nav>
        <form onSubmit={handleSearch}>
          <input placeholder='Search for any product...' value={query} onChange={(e) => {setQuery(e.target.value)}}/>
        </form>
        <Link to={'/shopping-cart'}><button>Shopping Cart</button></Link>
      </nav>
      {loading ? <h1 className='loading'>Loading...</h1> : <div className='products'>{productList}</div>}
    </div>
  )
}

export default Home
