import { useState } from 'react'
import './ProductQuantitySelector.css'

const PRODUCT = {
  name: 'Laptop',
  price: 50000,
}

const ProductQuantitySelector = () => {
  const [quantity, setQuantity] = useState(1)

  const handleDecrease = () => setQuantity((q) => Math.max(1, q - 1))
  const handleIncrease = () => setQuantity((q) => q + 1)

  const total = quantity * PRODUCT.price

  return (
    <div className="pq-component">
      <h2 className="pq-title">Assignment 2: Product Quantity Selector</h2>

      <p>Product: {PRODUCT.name}</p>
      <p>Price: &#x20B9;{PRODUCT.price.toLocaleString('en-IN')}</p>

      <div className="pq-controls">
        <button className="pq-btn" onClick={handleDecrease} disabled={quantity <= 1}>
          −
        </button>
        <span className="pq-qty">Quantity: {quantity}</span>
        <button className="pq-btn" onClick={handleIncrease}>
          +
        </button>
      </div>

      <p>Quantity: {quantity}</p>
      <p>Total Amount: &#x20B9;{total.toLocaleString('en-IN')}</p>
    </div>
  )
}

export default ProductQuantitySelector
