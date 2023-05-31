import React from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import './NavBar.css'

function NavBar() {
  return (
    <nav>
        <div className="banner">My Flipkart</div>
        <div className="right-layout"></div>
        <div className="cart-layout">
        <AiOutlineShoppingCart/>
        </div>
    </nav>
  )
}

export default NavBar