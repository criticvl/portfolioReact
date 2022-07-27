import React from 'react';
import "./Banner.css"
import Dev from "../../img/user.png"
import DownArrow from "../../img/arrow.png"

function BANNER() {
  return (
  <div className="b">
    <div className="b-left">
      <div className='b-left-wrapper'>
        <h1 className='b-name'>Hi, My name is Beso</h1>
        <h1 className='b-about'>I'm IT Specialist and Ready to help you with complex topics like:</h1>
        <div className="b-title">
          <div className="b-title-wrapper">
            <div className="b-title-item">Web Development</div>
            <div className="b-title-item">Data Science</div>
            <div className="b-title-item">DevOps</div>
            <div className="b-title-item">Game Development</div>
            <div className="b-title-item">Software Engineering</div>
          </div>
        </div>
        <p className="b-description">
        Placing assured be if removed it besides on. Far shed each high read are men over day. Afraid we praise lively he suffer family estate is. Ample order up in of in ready. Timed blind had now those ought set often which. Or snug dull he show more true wish. No at many deny away miss evil. On in so indeed spirit an mother. Amounted old strictly but marianne admitted. People former is remove remain as.
        </p>
      </div>
      <img src={DownArrow} alt="arrow" className='b-arrow'/>
    </div>
    <div className="b-right">
      <div className="b-background"></div>
      <img className="b-img" src={Dev} alt="developer"/>
    </div>
  </div>
  );
}

export default BANNER;
