import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './LandingPage';
import HomePage from './HomePage';
import PartsPage from './PartsPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/parts" element={<PartsPage />} />
      </Routes>
    </Router>
  );
}

export default App;