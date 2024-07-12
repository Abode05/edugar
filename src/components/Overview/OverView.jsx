import React from 'react'
import "./OverView.css"
import { overviewData } from '../../constant/data'
const OverView = () => {
  return (
      <div className='overview'>
          


          {overviewData.map((ele, index) => {
              return (
               <div key={index} className='stats-item'>
                      {ele.title ? (
                          <div className=''>
                           <h3>{ele.title}</h3>
                            <div className="rating-section">
                            <p>{ele.desc}</p>
                            <h4>{ele.rating}</h4>
                            </div>
                          </div>
                      ): (
                              <>
                            <h3>{ele.number}</h3>
                            <p>{ele.type}</p>
                              </>
                  )}
               </div>
              )
             
      })}
             
          
              
          
          
          
    </div>
  )
}

export default OverView