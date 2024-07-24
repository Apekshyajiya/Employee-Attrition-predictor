import React from 'react';
import '../styles/User-profile.css';
import AnimatedLogo from '../components/AnimatedLogo';
import np from '../assets/profile-picture.png';

const UserProfile = () => {
  return (
    <div>
      <nav className='user-profile-nav'>
        <AnimatedLogo />
        <a href='/' className='btn-home-btn'>Home</a>
      </nav>
      <div className="profile-container">
        <div className="profile-header">
         <h1>Hello! </h1>
        </div>
        <div className="profile-details">
        <h2 className="profile-name">Akashdeep Sharma</h2>
        <img src={np} alt="Profile" className="profile-picture" />

        
          <div className="detail-item">
            <span className="detail-label">Position:</span>
            <span className="detail-value">HR</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Department:</span>
            <span className="detail-value">IT</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Date of Join:</span>
            <span className="detail-value">10/6/24</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Years of experience:</span>
            <span className="detail-value">10</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">E-mail:</span>
            <span className="detail-value">akashdeepsharma@gmail.com</span>
          </div>
          
        </div>
        <button type="submit">View Dataset</button>
        <button type='view'>Update Dataset</button>
        <button type='sign-out'>Logout</button>
      </div>
    </div>
  );
};

export default UserProfile;