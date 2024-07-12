import React from 'react'
import "./PopularCourse.css"
import PopularCard from './PopularCard'
import { PopularCardData } from '../../constant/data'
const PopularCourse = () => {
  return (
    <div className='popular-course'>
        <div className='header-popular'>
            <h1>Popular Courses</h1>
            <p>Let’s join our best classes with our famous  instructor and institutes</p>
              <div className="btn-popular">
                <img src="assets/left.svg" alt="" />
                <img src="assets/right.svg" alt="" /> 
                </div>
          </div>
      <div className="cards">
      
              {
              PopularCardData.map((card, index) => (
                      <div className="" key={index}>
                      <PopularCard runicon={card.runtime}
                          lesson={card.lesson}
                          title={card.title}
                          subtitle={card.subtitle}
                          btn1={card.btn2}
                      active={card.active}
                    bgcolor={card.bgcolor}
                    logo={card.logo}
                    
                      />
                      </div>
                      
                  ))
              }
            
            </div>
 <button className='explore'>Explore Courses</button>
        
    
   </div>
  )
}

export default PopularCourse