import React from 'react'
import "./contact.css"

const Contact = () => {
  return (
    <header className='contact'>
      <img src="./images/banner-3.jpg" alt="" className='contact-image' />

      <div className="contact-list">

        <div className="contact-list--">
          <img src="./images/banner-4.jpg" alt="" className='contact-img'/>
        </div>

        <div className="contact-list---">
          <h3>Our Headoffice</h3>
          <p>35-B-Block,Near Of State Bank OF India,Delhi,U.P.</p>
          <h4>Telephone No.-09876-54321</h4>

          <h5>Follow Us</h5>
          <span>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-whatsapp"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-twitter"></i>
            </span>
        </div>
      </div>
    </header>
  )
}

export default Contact