import React from 'react'
import { NavLink } from 'react-router-dom'
import "./footer.css"
import Footernew from './Footernew'

const Footer = () => {
  return (
   <header className='footer'>
    <div className="footer-list">
     <div className="footer-list--">
       <ul>
        <li>
          <NavLink className="footer-icon" to ="/">Home</NavLink>
          </li>

          <li>
          <NavLink className="footer-icon" to ="/products">Products</NavLink>
          </li>

          <li>
          <NavLink className="footer-icon" to ="/about">About</NavLink>
          </li>

          <li>
          <NavLink className="footer-icon" to ="/contact">Contact</NavLink>
          </li>
       </ul>
     </div>

     <div className="footer-list--">
      <ul>
      <li>Privacy policy</li>
      <li>Terms and Condition</li>
      <li>Customer Support</li>
      <li>Ask a Question</li>
      </ul>
     </div>

      <div className="footer-list--">
        <form action="" className='footer-input'>
          <input type="email" name="email" id="email" placeholder='Enter Your E-Mail' className='input-footer' />
        </form>
        <NavLink className="footer-btn" to ="/">Subscribe</NavLink>
      </div>
    </div>
   <Footernew />
   </header>
  )
}

export default Footer