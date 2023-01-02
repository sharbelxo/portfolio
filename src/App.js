import React from 'react';
import Home from './Home';
import About from './About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route exact path='/portfolio' element={<Home />} />
                <Route exact path='/portfolio/about' element={<About />} />
            </Routes>
        </Router>
    )
}
