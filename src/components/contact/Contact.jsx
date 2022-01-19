import React, { useRef,useState } from 'react';
import "./Contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/location.png";
import emailjs from 'emailjs-com';

function CONTACT() {
  const formRef = useRef()
  const [done, setDone] = useState(false)
  const submitHandler = (e)=>{
    e.preventDefault();
    emailjs.sendForm('service_ltocnpt', 'template_1quwjv8', formRef.current, 'user_oOzuBnhA90j0Lw5LwN2YO')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  }
  return (
  <div className="c">
    <div className='c-background'></div>
    <div className='c-wrapper'>
      <div className='c-left'>
        <h1 className='c-title'>Contact Info:</h1>
        <div className='c-info'>
          <div className='c-info-item'>
            <img className='c-icon' src={Phone} alt="Phone" />
            +995  593 59 67 99
          </div>
          <div className='c-info-item'>
            <img className='c-icon' src={Email} alt="Email" />
            beso.urekadze.1@btu.edu.ge
          </div>
          <div className='c-info-item'>
            <img className='c-icon' src={Address} alt="Address" />
            Main Office: 127.0.0.1
          </div>
        </div>
        
      </div>
      <div className='c-right'>
        <div className="c-right">
          <p className="c-description">
            <b className='c-description-title'>Have any questions?</b>
            Contact Me Here.
            Had denoting properly jointure you occasion directly raillery. In said to of poor full be post face snug. Introduced imprudence see say unpleasing devonshire acceptance son. Exeter longer wisdom gay nor design age.
          </p>
          <form className='c-form' ref={formRef} onSubmit={submitHandler}>
            <input className='c-form-input' type="text" placeholder='Name' name='user_name' />
            <input className='c-form-input' type="text" placeholder='Subject' name='user_subject' />
            <input className='c-form-input' type="text" placeholder='Email' name='user_email' />
            <textarea className='c-form-textarea' rows="5" placeholder='Message' name='message'></textarea>
            <button className='c-form-submit'>Submit</button>
            {done && "Thank You..."}
          </form>
        </div>

      </div>
    </div>
  </div>
    );
}

export default CONTACT;
