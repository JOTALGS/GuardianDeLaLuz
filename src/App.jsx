import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Platform from './pages/Platform';
import './App.css';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/platform" element={<Platform />} />
            </Routes>
        </Router>
    );
};

export default App;
