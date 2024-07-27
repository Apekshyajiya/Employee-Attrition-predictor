import React, { useState, useEffect } from 'react';
import Home from '../src/pages/Home'
import MainLayout from "../src/Layout/MainLayout"
import LoginPage from "../src/pages/LoginPage"
import SignupPage from "../src/pages/SignupPage"
import UserProfile from "../src/pages/UserProfile"
import AboutUs from "../src/pages/AboutUs"
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';


function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/sign-up" element={<SignupPage />} />
      <Route path="/user" element={<UserProfile />} />
      <Route path="/logout" element={<LoginPage />} />

    </Route>
  ))
  return <RouterProvider router ={router} />

}

export default App;
