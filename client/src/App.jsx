import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css'
import { Home, Dashboard, NotFound } from "./pages";
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Navbar from './components/Layout/Navbar';
import PrivateRoute from './components/PrivateRoute';
import Chat from './pages/Chat';
import ProtectedRoutes from './utils/ProtectedRoutes'
import { ChatContextProvider } from './Context/ChatContext'
import { AuthContext } from './Context/AuthContext'




function App() {
  const{user} = userContext(AuthContext)

  return (
    <>
      <Router>
      
      <Navbar />
      <ChatContextProvider user={user}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard/*" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </ChatContextProvider>
    </Router>
    </>
  )
}

export default App
