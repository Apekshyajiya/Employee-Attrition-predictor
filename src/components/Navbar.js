import React , { useState, useEffect } from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import '../styles/Mainpage.css'
import AnimatedLogo from './AnimatedLogo'

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000/"
});



const Navbar = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    client.get("/api/user")
      .then(res => {
        console.log('User status:', res.data);
        setCurrentUser(true);
        setIsLoggedIn(true);
      })
      .catch(error => {
        console.error('User status error:', error);
        setCurrentUser(false);
        setIsLoggedIn(true);
      });
  }, []);

  const handleLogout = (e) => {
    e.preventDefault();
    client.post("/api/logout", { withCredentials: true })
      .then(() => {
        setCurrentUser(false);
        setIsLoggedIn(false);
        toast.success("Successfully logged out!");
      })
      .catch(error => {
        console.error("Logout error:", error);
        toast.error("Logout failed. Please try again.");
      });
  };
  return (
    <nav>
        <AnimatedLogo />
        <div className="navbar-links-container">
                <a
                  href={`${process.env.PUBLIC_URL}/assets/about-us.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn login-btn"
                >
                  About Us
                </a>
                {isLoggedIn && (
                <>
                  <a href="/user" className="btn login-btn">My Profile</a>
                  <a href="/" className="btn login-btn" onClick={handleLogout}>Logout</a>
                </>
          )}
            {!isLoggedIn && (
            <>
              <a href="/login" className="btn login-btn">Login</a>
              <a href="/sign-up" className="btn login-btn">sign up</a>
            </>
          )}

      </div>
    </nav>
  )
}

export default Navbar