// Header.js
import React from 'react'
import './Header.css'
import { Link, useLocation } from 'react-router-dom'

function Header({ productName }) {
  return (
    <>
      <header className="productHeader">
        <div className="headerContentt">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHhSRR4Z-Ij5I_B5vdTJcO1t05_-kkYM3MnFvq1LpfDFziVymQBZUplFhiBsRxg94-kmg&amp;usqp=CAU"
            alt="Logo"
            className="productLogo"
          />
          <h1 className="productName">{productName}</h1>
        </div>

        <Link to="/" className="back-button">
          Voltar
        </Link>
      </header>
      <hr />
    </>
  )
}

export default Header
