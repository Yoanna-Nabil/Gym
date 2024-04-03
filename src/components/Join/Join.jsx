import React, { useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'

export default function Join() {

  const form= useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_1wxg8i5', 'template_fs6nq4g', form.current, {
        publicKey: 'OWzGJzcXKQFNPRVPXU1c6',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  return (
    <div className='join' id='join-us'>


      <div className='left-j'>
         <hr/>
        <div>
            <span className='strock-text'>READY TO</span>
            <span> LEVEL UP</span>
        </div>
        <div>
            <span className='strock-text'>YOUR BODY</span>
            <span> WITH US?</span>
        </div>

      </div>



      <div className='right-j'></div>
        
        <form ref={form} className="email-container" onSubmit={sendEmail}>
          <input type='email' name='from_name' placeholder='Enter your email address'/>
          <button className='btn btn-j'>Join Now</button>
        </form>

    </div>
  )
}
