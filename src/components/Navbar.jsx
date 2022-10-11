import React from 'react'
import "./navbar.css"
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='navbar'>
        <div className="navbar-list">
            <ul className="nav-list">
                <li>
                    <NavLink className="nav-icon--" to ="/">Home</NavLink>
                </li>
                <li>
                    <NavLink className="nav-icon--" to ="/products">Products</NavLink>
                </li>
                <li>
                    <NavLink className="nav-icon--" to ="/about">About</NavLink>
                </li>
                <li>
                    <NavLink className="nav-icon--" to ="/contact">Contact</NavLink>
                </li>
                <i class="fa-solid fa-cart-shopping"></i>
            </ul>

        </div>
    </header>
  )
}

export default Navbar