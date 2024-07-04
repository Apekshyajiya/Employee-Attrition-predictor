import React from 'react'
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer-class'>
      <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <p><h1>LOGO</h1></p>
        </div>
        <div className="footer-icons">
          <a href='/'><BsTwitter /></a>
          <a href='/'><SiLinkedin /></a>
          <a href='/'><BsYoutube /></a>
          <a href='/'><FaFacebookF /></a>
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span><a href='/'>Feedback</a></span>
          <span><a href='/'>Help</a></span>
          <span><a href='/'>Share</a></span>
          <span><a href='/'>About Us</a></span>
        </div>
        <div className="footer-section-columns">
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;999-888-777</span>
          <span><a>apekshyajiya.25@gmail.com</a></span>
          <span><a>nitishaabaruah@gmail.com</a></span>
        </div>
      </div>
      </div>
      <div className='created-with'>
         <p>Created with ❤️</p>
         <p>&nbsp;&nbsp;&nbsp;&copy;logo2024</p>
      </div> 
    </div>

  )
}

export default Footer