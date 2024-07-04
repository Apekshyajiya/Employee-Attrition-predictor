import React from 'react'
import '../styles/Mainpage.css'
import AnimatedLogo from './AnimatedLogo'

const Navbar = () => {
  return (
    <nav>
        <AnimatedLogo />
        <div className="navbar-links-container">
            <a href="/" className="btn about-us-btn">About Us</a>
            <a href="/" className="btn login-btn">Login</a>
            <a href="/" className="btn signup-btn">Sign Up</a>
      </div>
    </nav>
  )
}

export default Navbar