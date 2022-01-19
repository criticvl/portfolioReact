import React from 'react';
import "./About-me.css"
import Certificate from "../../img/fakeCertificate.jpg"
import Placeholder from "../../img/placeholder.jpg"

function ABOUT_ME() {
  return (
  <div className="a">
      <div className='a-left'>
          <div className="a-card background"></div>
          <div className="a-card">
              <img className='a-img' src={Placeholder} alt="" />
          </div>
      </div>
      <div className="a-right">
      <div className='a-right-wrapper'>
        <h1 className='a-title'>About Me</h1>
        <p className="a-description">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
        </p>
        <div className='a-certificate'>
          <img className="a-certificate-img" src={Certificate} alt="" />
          <div className='a-certificate-text'>
          <h1 className='a-certificate-title'>Certificate</h1>
        <div className="a-certificate-title">
        </div>
        <p className="a-certificate-description">
        Two assure edward whence the was. Who worthy yet ten boy denote wonder. Weeks views her sight old tears sorry. Additions can suspected its concealed put furnished. Met the why particular devonshire decisively considered partiality. Certain it waiting no entered is. Passed her indeed uneasy shy appear denied.
        </p>
          </div>
        </div>
      </div>
    </div>
  </div>
    );
}

export default ABOUT_ME;
