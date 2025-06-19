import { useState, useEffect } from 'react'
import Product from '../components/Product'
import products from '../utils/products'
import { Link } from 'react-router-dom'

function Home() {
  const [query, setQuery] = useState('')
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [loading, setLoading] = useState(false)

  const handleSearch = (e) => {
    e.preventDefault()
    const searchQuery = e.target.querySelector('input').value
    setQuery(searchQuery)
    setLoading(true)
    
    // Simulate loading delay
    setTimeout(() => {
      const filtered = products.filter(product => 
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.details.toLowerCase().includes(searchQuery.toLowerCase())
      )
      setFilteredProducts(filtered)
      setLoading(false)
    }, 300)
  }

  useEffect(() => {
    setFilteredProducts(products)
  }, [])

  const productList = filteredProducts?.map((product, index) => {
    return <Product 
      key={index}
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
