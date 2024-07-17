import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import '../styles/LoginSignup.css';
import AnimatedLogo from '../components/AnimatedLogo'

const SignupPage = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    yearsOfExperience: '',
    password: '',
    retypePassword: '',
    uploadImage: '',
    uploadData: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSignedIn(true);
  };

  const handleHomeClick = () => {
    console.log('Home button clicked');
  };

  return (
    <div className='sign-up-page'>
        <nav className='login-signup-nav'>
        <AnimatedLogo />
        <a href='/' className='btn-home-btn'>Home</a>
      </nav>
      <div className="signup-page">

      <div className="login-link">
        <p>Already a user? <Link to="/login">Login</Link></p>
      </div>
      
      <div className="signup-container">
      
        {isSignedIn ? (
          <p>You are already signed in.</p>
        ) : (
          <form onSubmit={handleSubmit} className="signup-form">
            <h1>Sign Up</h1>

            <div className="form-row">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-row">
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-row">
              <label>Retype Password:</label>
              <input
                type="password"
                name="retypePassword"
                value={formData.retypePassword}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-row">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-row">
              <label>Age:</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-row">
              <label>Years of Experience:</label>
              <input
                type="number"
                name="yearsOfExperience"
                value={formData.yearsOfExperience}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-row">
              <label>Upload Image:</label>
              <input
                type="file"
                name="uploadImage"
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-row">
              <label>Upload Data:</label>
              <input
                type="file"
                name="uploadData"
                accept=".csv"
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Create Account</button>
          </form>
        )}
      </div>
     
    </div>
    </div>
  );
};

export default SignupPage;