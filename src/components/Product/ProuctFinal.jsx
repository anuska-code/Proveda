import React, { useState } from 'react'
import './ProductFinal.css'

const ProuctFinal = () => {
  const [activeCategory, setActiveCategory] = useState('All Needs')

  const categories = [
    'All Needs', 'Serum', 'Shampoo', 'Oil', 'Lotion',
    'Cream', 'Toner', 'Fash Wash', 'Cleaner', 'Soap'
  ]

  const products = [
    {
      id: 1,
      image: '/images/product1.png',
      category: 'Shampoo'
    },
    {
      id: 2,
      image: '/images/product2.png',
      category: 'Serum'
    },
    {
      id: 3,
      image: '/images/product3.png',
      category: 'Oil'
    },
    {
      id: 4,
      image: '/images/product4.png',
      category: 'Toner'
    },
    {
      id: 5,
      image: '/images/product5.png',
      category: 'Cream'
    },
    {
      id: 6,
      image: '/images/product6.png',
      category: 'Lotion'
    },
    {
      id: 7,
      image: '/images/product7.png',
      category: 'Soap'
    },
    {
      id: 8,
      image: '/images/product8.png',
      category: 'Fash Wash'
    }
  ]

  const filteredProducts = activeCategory === 'All Needs'
    ? products
    : products.filter(product => product.category === activeCategory)

  return (
    <div className="product-page">
      <div className="product-header">
        <h1 className="product-title">OUR PRODUCTS</h1>
      </div>

      <div className="category-navigation">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {filteredProducts.length > 0 ? (
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={`Product ${product.id}`} />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-products">
          <p>No products found</p>
        </div>
      )}
    </div>
  )
}

export default ProuctFinal