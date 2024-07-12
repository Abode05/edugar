import React from 'react'
import "./AskedUs.css"
import { questions } from '../../constant/data'
import Questions from './Questions'
const AskedUs = () => {
  return (
    <div className='asked-us'>
      <div className="header-asked">
        <div className="contact-us">
                   <h6>Frequently Asked Questions</h6>
               <h1>Any Questions? Find here.</h1>
               <button>Send Message</button>
                    
        
        </div>
        <img src="assets/human1.svg" alt="Human illustration" className="human-image" />
      </div>
         
          <div className="questions-section">
              <h6>Can Conversix sync my data to my CRM?</h6>
              <p>Every data request starts with a target foundation, you will be asked to complete a search request and provide information such as lookalike companies,
              industries, companies size, revenue, job titles etc.</p>
        
          {
          questions.map((item, index) => (
            <div className="" key={index}>
             <div className='hr'></div>
              <Questions question={item.question } answer={item.answer}  />
            </div>
          ))
        }
       
       
             
          </div>
    </div>
  )
}

export default AskedUs