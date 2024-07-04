import React from 'react'
import ConfusedBunda from '../assets/filler-image-1.jpg'
import '../styles/Mainpage.css'
import Working from './Working'
import { AiFillStar } from "react-icons/ai";
import ProfilePic from '../assets/john-doe-image.png'
import Feedback from './Feedback';

const Filler = () => {
  return (
    <div className='filler-container'>
        <div className="about-section-container">
        <div className='about-section-img'>
            <img src={ConfusedBunda} alt="" />
        </div>
            <div className="about-section-text-container">
                <p className="primary-subheading">Understanding Attrition</p>
                <h1 className="filler-heading-1">
                What is employee attrition?
                </h1>
                <p className="filler-primary-text-1">
                It is a method where employees are either sent bye bye or they resign. It is important to predict it as it can highly effect the companies health and human resounce.
                </p>
                <div className="about-buttons-container">
                <p>learn more</p>
                </div>
            </div>
        </div>
        <Working />
        <div className='ratings'>
        <div className="work-section-wrapper" >
      <div className="review-section-top">
        <h1 className="primary-heading-review">What They Are Saying</h1>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
          Amazing App! Really helped me to save a crap lot of time.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>John Doe</h2>
            </div>
        </div>
     </div>
     <Feedback />
    </div>
  )
}

export default Filler