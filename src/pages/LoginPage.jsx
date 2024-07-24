import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import { Toaster, toast } from 'sonner';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../styles/LoginSignup.css';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000/"
});

function LoginPage() {
  const [currentUser, setCurrentUser] = useState();
  const [registrationToggle, setRegistrationToggle] = useState(false);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    client.get("/api/user")
      .then(res => setCurrentUser(true))
      .catch(() => setCurrentUser(false));
  }, []);

  const update_form_btn = () => {
    setRegistrationToggle(prev => !prev);
    document.getElementById("form_btn").innerHTML = registrationToggle ? "Log in" : "Register";
  };

  const submitRegistration = (e) => {
    e.preventDefault();
    client.post("/api/register", { email, username, password })
      .then(() => {
        return client.post("/api/login", { email, password });
      })
      .then(() => {
        setCurrentUser(true);
        toast.success("Successfully signed up and logged in!");
        navigate("/");
      })
      .catch(error => {
        console.error("Registration/Login error:", error);
        toast.error("Registration or login failed. Please try again.");
      });
  };

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

  const submitLogout = (e) => {
    e.preventDefault();
    client.post("/api/logout", { withCredentials: true })
      .then(() => {
        setCurrentUser(false);
        toast.success("Successfully logged out!");
      })
      .catch(error => {
        console.error("Logout error:", error);
        toast.error("Logout failed. Please try again.");
      });
  };

  return (
    <div>
      <Toaster position="top-right" />
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Authentication App</Navbar.Brand>
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
                <Button id="form_btn" onClick={update_form_btn} variant="light">
                  {registrationToggle ? "Register" : "Log in"}
                </Button>
              </Navbar.Text>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="center">
        {currentUser ? (
          <h2>You're logged in!</h2>
        ) : registrationToggle ? (
          <Form onSubmit={submitRegistration}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={e => setUsername(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">Submit</Button>
          </Form>
        ) : (
          <Form onSubmit={submitLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">Submit</Button>
          </Form>
        )}
      </div>
    </div>
  );
}

export default LoginPage;