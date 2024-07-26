import React, { useState, useEffect } from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import '../styles/User-profile.css';
import AnimatedLogo from '../components/AnimatedLogo';
import np from '../assets/john-doe-image.png';
import { useNavigate } from 'react-router-dom'; 


axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000/"
});

const UserProfile = () => {

  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    client.post("/api/logout", { withCredentials: false })
      .then(() => {
        setCurrentUser(false);
        setIsLoggedIn(false);
        toast.success("Successfully logged out!");
        navigate("/");
      })
      .catch(error => {
        console.error("Logout error:", error);
        toast.error("Logout failed. Please try again.");
      });
  };
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
        <button type='sign-out' onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default UserProfile;