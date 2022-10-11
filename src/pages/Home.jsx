import React from 'react'
import "./home.css"
import About from "./About"
import Contact from "./Contact"
import { NavLink } from 'react-router-dom'
import Featured from './Featured'

const Home = () => {
  return (
    <header className='home'>
      <div className="main-home">
        <div className="home--">
        <h3>When words fail,<span>music speaks</span></h3>
        <p>Music is an art form that combines either vocal or instrumental sounds, sometimes both, using form, harmony, and expression of emotion to convey an idea.</p>

        <NavLink className="shop-btn" to = "/products">Shop Now</NavLink>
        </div>

        <div className="home--">
          <img src="./images/banner-2-.jpg" alt="" className='home-image' />
        </div>
      </div>
      <Featured />
      <About />
      <Contact />
    </header>
  )
}

export default Home