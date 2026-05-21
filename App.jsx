import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './features/cart/Cart';
import AboutUs from './components/AboutUs';

function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="landing-container">
      <h1 className="landing-title">🌿 Paradise Nursery</h1>
      <p className="landing-subtitle">Bring Nature Home</p>
      <button className="get-started-btn" onClick={() => navigate('/plants')}>
        Get Started
      </button>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/plants" element={
            <>
              <Navbar />
              <ProductList />
            </>
          } />
          <Route path="/cart" element={
            <>
              <Navbar />
              <Cart />
            </>
          } />
          <Route path="/about" element={
            <>
              <Navbar />
              <AboutUs />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;