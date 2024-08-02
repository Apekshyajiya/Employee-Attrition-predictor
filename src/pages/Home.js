import React from 'react'
import BannerBackground from "../assets/working2.png"
import Filler from '../components/Filler'
import "../styles/Mainpage.css"
import Navbar from '../components/Navbar'


const Home = () => {
  return (
    <div className='home-container'>
        <div className='home-bg-container'>
        <Navbar />
          <div className="home-banner-container">
            <img className='image-bg-1' src={BannerBackground} alt="working-woman"/>
            <div className="home-text-section">
                <h1 className="primary-heading">
                  Your go-to assistant
                </h1>
                <p className="primary-text">
                Your trusted assistant, always here to keep you on track and
                moving forward!
                </p>
            </div>
          </div>
        </div>
        <Filler />
      </div>
  )
}

export default Home