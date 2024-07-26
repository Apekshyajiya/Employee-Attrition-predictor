import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import { Toaster, toast } from 'sonner';
import AnimatedLogo from '../components/AnimatedLogo'
import { Link } from 'react-router-dom'; 
import Button from 'react-bootstrap/Button';
import '../styles/LoginSignup.css';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000/"
});

function LoginPage() {
  const [currentUser, setCurrentUser] = useState();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    client.get("/api/user")
      .then(res => setCurrentUser(true))
      .catch(() => setCurrentUser(false));
  }, []);


  const submitLogin = (e) => {
    e.preventDefault();
    client.post("/api/login", { email, password })
      .then(() => {
        setCurrentUser(true);
        toast.success("Successfully logged in!");
        navigate("/");
      })
      .catch(error => {
        console.error("Login error:", error);
        toast.error("Login failed. Please check your credentials.");
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
        <p>Not a user? <Link to="/sign-up">Sign Up</Link></p>
    </div>
    <div className="signup-container">
    <form onSubmit={submitLogin }>
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

export default LoginPage;