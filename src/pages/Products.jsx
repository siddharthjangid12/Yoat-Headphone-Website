import React from 'react'
import "./products.css"
import { NavLink } from 'react-router-dom'

const Products = () => {
  return (
    <header className='product'>
      <img src="./images/banner-2.jpg" alt="" className='product-banner' />
       <h2>Our products</h2>
       
      <div className="products-list">
        <div className="product-name">
          <img src="./images/h-1.jpg" alt="" className='product-image'/>
          <h4>Yoat Headphone</h4>
          <span>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                </span>
                <h5>116 Reviews</h5>
                <NavLink className="products-btn" to ="/products">Shop Now</NavLink>
        </div>

        <div className="product-name">
          <img src="./images/h-2.jpg" alt="" className='product-image'/>
          <h4>Yoat Headphone</h4>
          <span>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                </span>
                <h5>136 Reviews</h5>
                <NavLink className="products-btn" to ="/products">Shop Now</NavLink>
        </div>

        <div className="product-name">
          <img src="./images/h-3.jpg" alt="" className='product-image'/>
          <h4>Yoat Headphone</h4>
          <span>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                </span>
                <h5>176 Reviews</h5>
                <NavLink className="products-btn" to ="/products">Shop Now</NavLink>
        </div>

        <div className="product-name">
          <img src="./images/h-10.jpg" alt="" className='product-image'/>
          <h4>Yoat Headphone</h4>
          <span>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                </span>
                <h5>216 Reviews</h5>
                <NavLink className="products-btn" to ="/products">Shop Now</NavLink>
        </div>

        <div className="product-name">
          <img src="./images/h-5.jpg" alt="" className='product-image'/>
          <h4>Yoat Headphone</h4>
          <span>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                </span>
                <h5>300 Reviews</h5>
                <NavLink className="products-btn" to ="/products">Shop Now</NavLink>
        </div>

        <div className="product-name">
          <img src="./images/h-6.jpg" alt="" className='product-image'/>
          <h4>Yoat Headphone</h4>
          <span>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                </span>
                <h5>437 Reviews</h5>
                <NavLink className="products-btn" to ="/products">Shop Now</NavLink>
        </div>

        <div className="product-name">
          <img src="./images/h-7.jpg" alt="" className='product-image'/>
          <h4>Yoat Headphone</h4>
          <span>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                </span>
                <h5>105 Reviews</h5>
                <NavLink className="products-btn" to ="/products">Shop Now</NavLink>
        </div>

        <div className="product-name">
          <img src="./images/h-8.jpg" alt="" className='product-image'/>
          <h4>Yoat Headphone</h4>
          <span>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                </span>
                <h5>654 Reviews</h5>
                <NavLink className="products-btn" to ="/products">Shop Now</NavLink>
        </div>

        <div className="product-name">
          <img src="./images/h-9.jpg" alt="" className='product-image'/>
          <h4>Yoat Headphone</h4>
          <span>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                </span>
                <h5>789 Reviews</h5>
                <NavLink className="products-btn" to ="/products">Shop Now</NavLink>
        </div>

        <div className="product-name">
          <img src="./images/h-4.jpg" alt="" className='product-image'/>
          <h4>Yoat Headphone</h4>
          <span>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                </span>
                <h5>123 Reviews</h5>
                <NavLink className="products-btn" to ="/products">Shop Now</NavLink>
        </div>
      </div>
    </header>
  )
}

export default Products