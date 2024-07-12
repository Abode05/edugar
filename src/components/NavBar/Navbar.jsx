import React from 'react'
import { navitem } from '../../constant/data'
import "./Navbar.css"
const Navbar = () => {
      const showMenue = () => {
        const menue = document.querySelector(".navmenue")
        console.log(menue)
        menue.classList.toggle("active")
        const xicon = document.querySelector(".burger .fa-xmark")
        const ticon = document.querySelector(".burger .fa-bars")
        if (xicon.style.display=="none") {
            xicon.style.display = "block"
            ticon.style.display="none"
        }else{
               xicon.style.display = "none"
               ticon.style.display="block"
       }
    }
  return (
    <div className="section-nav">
      <nav>
          <h1>Edu<span>jar</span></h1>
          <div className='navitem'>
              <ul>
              {navitem.map((elemant, index) => (
                  <li key={index}><a href={elemant.link}>{elemant.title  }</a></li>
              ))}
                  </ul>
          </div>
        <button className='signin'>Signup</button>
                    <button className='burger ' onClick={showMenue}><i className='fas fa-bars '></i> <i style={{display:"none"}} className='fas fa-times'></i></button>

      </nav>
      <div className="navmenue">
            
                <ul>
                    {navitem.map((elemant, index) => (
                        <li key={index}>
                            <a href="#"><i className={elemant.icon}></i> {elemant.title }</a>
                        </li>
                    ))}
                 <button>Signup</button>
                </ul>
              
          
          </div>
    </div>
  )
}

export default Navbar