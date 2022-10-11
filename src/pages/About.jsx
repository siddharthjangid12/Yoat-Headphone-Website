import React from 'react'
import "./about.css"

const About = () => {
  return (
    <header className='about'>
      <img src="./images/best.jpg" alt="" className='about-banner' />

      <h4>How We <span>Best ?</span></h4>
      <div className="about-list">

        <div className="about---">
        <img src="./images/work-3.jpg" alt="" className='about-image' />
        <h3>big discount</h3>
        </div>

        <div className="about---">
        <img src="./images/work-1.jpg" alt="" className='about-image' />
        <h3>export anywhere</h3>
        </div>

        <div className="about---">
        <img src="./images/work-2.jpg" alt="" className='about-image' />
        <h3>24/7 support</h3>
        </div>

        <div className="about---">
        <img src="./images/banner-1-.jpg" alt="" className='about-image' />
        <h3>better quality</h3>
        </div>

      </div>
    </header>
  )
}

export default About