import React from 'react'
import "./Footer.css"
import { legalLink, navitem } from '../../constant/data'
const Footer = () => {
  return (
      <div className='footer'>
          
          <div className="about">
              <h1>Edu<span>jar</span></h1>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat...
              </p>
              <p>© 2024 <span>edujar</span> - All Rights Reserved</p>
          </div>
          <div className="quick-links">
               <h1>Quick links</h1>
              <ul>
              {navitem.map((elemant, index) => (
                  <li key={index}><a href={elemant.link}>{elemant.title  }</a></li>
              ))}
                  </ul>
        
          </div>
          <div className="legal">
               <h1>legal</h1>
              <ul>
              {legalLink.map((elemant, index) => (
                  <li key={index}><a href={elemant.link}>{elemant.title  }</a></li>
              ))}
                  </ul>
        
          </div>
          <div className="subscriber">
              <h1>Quick links</h1>
              <input type="email"  placeholder='Enter Email'/>
              <button >Subscribe</button>
          </div>
    </div>
  )
}

export default Footer