import React, { useState, useEffect } from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import '../styles/User-profile.css';
import AnimatedLogo from '../components/AnimatedLogo';
import np from '../assets/john-doe-image.png';
import { useNavigate } from 'react-router-dom'; 

const UserProfile = () => {
  const [currentUser, setCurrentUser] = useState(null); // Changed initial state to null
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/user")
      .then(res => {
        console.log(res.data);
        setCurrentUser(res.data);
      })
      .catch(err => {
        console.log(err.message);
      });
  }, []);

  const handleLogout = (e) => {
    e.preventDefault();
    axios.post("http://127.0.0.1:8000/api/logout", {}, { withCredentials: false })
      .then(() => {
        setCurrentUser(null); // Set currentUser to null on logout
        setIsLoggedIn(false);
        toast.success("Successfully logged out!");
        navigate("/");
      })
      .catch(error => {
        console.error("Logout error:", error);
        toast.error("Logout failed. Please try again.");
      });
  };

  if (!currentUser) {
    return <div>Loading...</div>; // Handle loading state
  }

  return (
    <div>
      <nav className='user-profile-nav'>
        <AnimatedLogo />
        <a href='/' className='btn-home-btn'>Home</a>
      </nav>
      <div className="profile-container">
        <div className="profile-header">
          <h1>Hello!</h1>
        </div>
        <div className="profile-details">
          {currentUser.user && ( // Ensure currentUser.user exists before accessing its properties
            <>
              <h2 className="profile-name">{currentUser.user.username}</h2>
              <img src={np} alt="Profile" className="profile-picture" />
              <div className="detail-item">
                <span className="detail-label">Position:</span>
                <span className="detail-value">&nbsp;&nbsp;HR</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Department:</span>
                <span className="detail-value">&nbsp;&nbsp;IT</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Date of Join:</span>
                <span className="detail-value">&nbsp;&nbsp;10/6/24</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Years of experience:</span>
                <span className="detail-value">&nbsp;&nbsp;10</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">E-mail:</span>
                <span className="detail-value">&nbsp;&nbsp;{currentUser.user.email}</span>
              </div>
            </>
          )}
        </div>
        <a href='/predictor' className='predict-button'>&nbsp;Predict Now</a>
        <button type='sign-out' className='predict-button' onClick={handleLogout}>&nbsp;Logout</button>
      </div>
    </div>
  );
};

export default UserProfile;
