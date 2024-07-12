import React from 'react';
import './PopularCard.css'; // Ensure you import the CSS file

const PopularCard = ({runicon,lesson,btn1,title,subtitle,logo,active,bgcolor}) => {
  return (
    <div className={`card ${active}`}>
      <div className="header-card">
        <div>
          <div className="run-icon"  style={{backgroundColor:bgcolor}}>
            <img src={runicon} alt="Run Icon" className={`lesson `} />

          </div>
          
          <p>{lesson}</p>
        </div>
        <button className="design-btn">{btn1}</button>
      </div>
      <h4>{title}</h4>
      <p className="text">{subtitle}</p>
      <hr />
      <div className="footer-card">
        <button className="join-btn">Join</button>
        <img src={logo} alt="Logo" />
      </div>
    </div>
  );
}

export default PopularCard;
