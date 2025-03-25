import React from 'react';

import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import Login from './src/Login';
import Dashboard from './src/Dashboard';
import MapView from './src/MapView';

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/map/:id" element={<MapView />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </Router>
);

export default App;



