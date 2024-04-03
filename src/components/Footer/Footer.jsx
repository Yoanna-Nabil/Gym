import React from 'react'
import './Footer.css'
import github from '../../assets/github.png'
import instgram from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'
import logo from '../../assets/logo.png'

export default function Footer() {
  return (
    <div className='footer-container'>
      
      <hr/>

      <div className='footer'>
        <div className='social-links'>
        <img src={github} alt="" />
       <img src={instgram} alt="" />
       <img src={linkedin} alt="" />
        </div>

        <div className='logo-f'>
         <img src={logo}/>
       </div>

      </div>
      <div className='blur blur-f-1'></div>
      <div className='blur blur-f-2'></div>
    </div>
  )
}
