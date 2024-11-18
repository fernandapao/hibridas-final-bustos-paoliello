import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css'
import { Home, Dashboard, NotFound } from "./pages";
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Navbar from './components/Layout/Navbar';
import PrivateRoute from './components/PrivateRoute';



function App() {

  return (
    <>
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard/*" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
