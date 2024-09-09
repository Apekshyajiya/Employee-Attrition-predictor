import React from 'react'
import '../styles/Mainpage.css'
import LoginAcc from "../assets/login.png";
import ClickBtn from "../assets/click.png";
import ResultsOut from "../assets/approved.png";


const Working = () => {
  return (
    <div className='how-it-works'>
        <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Working</p>
        <h1 className="work-primary-heading">How It Works</h1>
        <p className="work-primary-text">
          Let us guide you through 3 easy steps to find the position of an employee in your company!
        </p>
      </div>
      <div className="work-section-bottom">
          <div className="work-section-info">
            <span className='sp-1'>Login</span>
            <p className='p-1'>Login to your account to see your profile</p>
            <div className="info-boxes-img-container"> 
            </div>
            <span className='sp-2'>Predict Now</span>
            <p className='p-2'>click on predict now to go to the predictor</p>
            <div className="info-boxes-img-container">
            </div>
            <span className='sp-3'>Fill out and Results</span>
            <p className='p-3'>Finally, fill out the details and check the results of your employees. In addition, you can warn them via mail!</p>
            </div>
          </div>
          <div className="info-boxes-img-container">
              <img className='im-1' src={LoginAcc} alt="" />
              <img id='im-2' src={ClickBtn} alt="" />
              <img id='im-3' src={ResultsOut} alt="" />
      </div>
    </div>
    </div>
  )
}

export default Working