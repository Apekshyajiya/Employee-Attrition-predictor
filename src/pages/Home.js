import React from 'react'
import Navbar from '../components/Navbar'
import BannerBackground from "../assets/working2.png"
import Footer from '../components/Footer'
import Filler from '../components/Filler'


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
                  For keeping you in track!
                </p>
            </div>
          </div>
        </div>
        <Filler />
        <Footer />
      </div>
  )
}

export default Home