import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 
import '../styles/LoginSignup.css';
import AnimatedLogo from '../components/AnimatedLogo'

const LoginPage = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/users/login/', {
          email,
          password,
      });
      setToken(response.data.access); // Store the token in state or localStorage
      console.log('Logged in successfully:', response.data);
  } catch (error) {
      console.error('Error logging in:', error);
  }
};
const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({
    ...formData,
    [name]: value
  });
};

  return (
    <div className='sign-up-page'>
    <nav className='login-signup-nav'>
      <AnimatedLogo />
      <a href='/' className='btn-home-btn'>Home</a>
    </nav>
    <div className="signup-page">
      <div className="signup-link">
        <p>Not a user? <Link to="/sign-up">Sign Up</Link></p>
      </div>
      <div className="login-container">
        {isSignedIn ? (
          <p>You are already signed in.</p>
        ) : (
          <form onSubmit={handleSubmit} className="signup-form">
            <h1>Login</h1>
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
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
             
            <button type="submit">Sign In</button>
          </form>
        )}
      </div>

    </div>
    </div>
  );
};

export default LoginPage;