import React from 'react';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route exact path='https://sharbelxo.github.io/portfolio' element={<Home />} />
            </Routes>
        </Router>
    )
}
