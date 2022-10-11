import React from 'react'
import { NavLink } from 'react-router-dom'
import "./featured.css"

const Featured = () => {
  return (
    <header className='featured'>
        <h2>our best products<span>for you</span></h2>

        <div className="featured-page">
            <div className="featured-page--">
                <img src="./images/h-2.jpg" alt="" className='featured-image' />
                <h3>Yoat Headphone</h3>
                <span>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                </span>
                <h5>386 Reviews</h5>
                <NavLink className="featured-btn" to ="/products">Shop Now</NavLink>
            </div>

            <div className="featured-page--">
                <img src="./images/h-3.jpg" alt="" className='featured-image' />
                <h3>Yoat Headphone</h3>
                <span>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                </span>
                <h5>223 Reviews</h5>
                <NavLink className="featured-btn" to ="/products">Shop Now</NavLink>
            </div>

            <div className="featured-page--">
                <img src="./images/h-9.jpg" alt="" className='featured-image' />
                <h3>Yoat Headphone</h3>
                <span>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                </span>
                <h5>495 Reviews</h5>
                <NavLink className="featured-btn" to ="/products">Shop Now</NavLink>
            </div>

        </div>
    </header>
  )
}

export default Featured