import React from 'react'
import "./Hero.css"
const Hero = () => {
  return (
      <div className='hero'>
          <img src="assets/Group.png" alt="" className='hero-img'/>
          <div className="hero-content">
        <h1>Learn with us anywhere with the best <span> <img src="assets/Vector.png" alt="" />experts</span> </h1>
         
              <p>We collaborate with 275+ leading universities and companies</p>
              <div className='search'>
                  <input type="text" placeholder='Want do you want to learn?' />
                  <button>Explore</button>
              </div>
          </div>
            <img src="assets/group2.png" alt="" />
    </div>
  )
}

export default Hero