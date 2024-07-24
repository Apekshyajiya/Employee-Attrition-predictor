import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'; 
import Navbar from 'react-bootstrap/Navbar';
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
  const [registrationToggle, setRegistrationToggle] = useState(false);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    client.get("/api/user")
      .then(res => {
        console.log('User status:', res.data);
        setCurrentUser(true);
      })
      .catch(error => {
        console.error('User status error:', error);
        setCurrentUser(false);
      });
  }, []);

  const updateFormBtn = () => {
    setRegistrationToggle(!registrationToggle);
  };

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

  const submitLogin = (e) => {
    e.preventDefault();
    client.post("/api/login", { email, password })
      .then(res => {
        console.log('Login response:', res);
        setCurrentUser(true);
        toast.success("logged in succesfully! !", {
          position: "top-center"
        });
        navigate("/");
      })
      .catch(error => {
        toast.warn("Login failed. Please check your credentials. !", {
          position: "top-right"
        });
        console.error('Login error:', error);
      });
  };

  const submitLogout = (e) => {
    e.preventDefault();
    client.post("/api/logout")
      .then(res => {
        console.log('Logout response:', res);
        setCurrentUser(false);
        toast.success("Successfully logged out!");
      })
      .catch(error => {
        console.error('Logout error:', error);
        toast.error("Logout failed. Please try again.");
      });
  };

  return (
    <div className='sign-up-page'>
      <nav className='login-signup-nav'>
        <AnimatedLogo />
        <a href='/' className='btn-home-btn'>Home</a>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
            {currentUser ? (
              <Navbar.Text>
                <form onSubmit={submitLogout}>
                  <Button type="submit" variant="light">Log out</Button>
                </form>
              </Navbar.Text>
            ) : (
              <Navbar.Text>
                <Button id="form_btn" onClick={updateFormBtn} variant="light">
                  {registrationToggle ? "Log in" : "Register"}
                </Button>
              </Navbar.Text>
            )}
          </Navbar.Collapse>
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

