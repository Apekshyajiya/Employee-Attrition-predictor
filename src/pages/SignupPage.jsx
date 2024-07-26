import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'; 
import Button from 'react-bootstrap/Button';
import '../styles/LoginSignup.css';
import AnimatedLogo from '../components/AnimatedLogo'

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000/"
});

function SignupPage() {
  const [currentUser, setCurrentUser] = useState(null);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const submitRegistration = (e) => {
    e.preventDefault();
    client.post("/api/register", { email, username, password })
      .then(res => {
        console.log('Registration response:', res);
        return client.post("/api/login", { email, password });
      })
      .then(res => {
        console.log('Login response after registration:', res);
        setCurrentUser(true);
        navigate("/");
        toast.success("Successfully signed up and logged in!");
        <ToastContainer />
        
      })
      .catch(error => {
        console.error('Registration/Login error:', error);
        toast.error("Registration/Login failed. Please try again.");
      });
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
      <form onSubmit={submitRegistration}>
        <div className="form-row">
          <label>Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
            />
        </div>
        <div className="form-row">
              <label>username:</label>
              <input
                type="username"
                name="username"
                value={username}
                onChange={e => setUsername(e.target.value)}
                required
              />
          </div>
        <div className="form-row">
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
        </div>
            <Button variant="primary" type="submit">Submit</Button>
          </form>
      </div>
    </div>
  </div>
  );
}

export default SignupPage;

