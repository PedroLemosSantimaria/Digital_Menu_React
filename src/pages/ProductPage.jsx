import React, { useState, useEffect } from 'react'
import Header from './../components/Header'
import './../App.css'
import ProductPhoto from './../components/ProductPhoto'
import { useLocation } from 'react-router-dom'

function ProductInfoPage() {
  const [count, setCount] = useState(0)
  const location = useLocation()
  const { productName, productValue, productImage } = location.state

  return (
    <>
      <div className="app">
        <Header productName={productName} />
        <ProductPhoto productValue={productValue} productImage={productImage} />
      </div>
    </>
  )
}

export default ProductInfoPage
