import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'
import Login from './pages/Login.tsx';
import Register from './pages/Register.tsx';
import Home from './pages/Home.tsx';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.Fragment>
    <Router>
    <App />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<Home />} />

      </Routes>
    </Router>
  </React.Fragment>,
)
