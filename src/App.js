import React from 'react'
import Home from '../src/pages/Home'
import MainLayout from "../src/Layout/MainLayout"
import LoginPage from "../src/pages/LoginPage"
import SignupPage from "../src/pages/SignupPage"
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';




function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/sign-up" element={<SignupPage />} />

    </Route>
  ))
  return <RouterProvider router ={router} />

}

export default App;
