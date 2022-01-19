import React from 'react';
import "./Education-experience.css";
import Edu from "../../img/edu.png"

function EDUCATION_EXPERIENCE() {
  return (
    <div className="e">
    <div className="e-left">
      <div className='e-left-wrapper'>
        <h2 className='e-banner'>Education/Experience</h2>
        <h1 className='e-name'>Business and Technology University</h1>
        <p className="e-description">
        Up maids me an ample stood given. Certainty say suffering his him collected intention promotion. Hill sold ham men made lose case. Views abode law heard jokes too. Was are delightful solicitude discovered collecting man day. Resolving neglected sir tolerably but existence conveying for. Day his put off unaffected literature partiality inhabiting.
        </p>
      </div>
    </div>
    <div className="e-right">
      <div className="e-background"></div>
      <img className="e-img" src={Edu} alt="developer"/>
    </div>
  </div>
    );
}

export default EDUCATION_EXPERIENCE;
