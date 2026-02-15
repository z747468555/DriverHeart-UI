import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Login from './pages/Login';
import ConnectDevice from './pages/ConnectDevice';
import Dashboard from './pages/Dashboard';
import Analysis from './pages/Analysis';
import Trends from './pages/Trends';
import Profile from './pages/Profile';

// Wrapper to help with page transitions or global layouts if needed
const AppContent: React.FC = () => {
  return (
    <div className="flex justify-center min-h-screen w-full bg-background-light dark:bg-background-dark">
      <div className="w-full max-w-md h-screen relative bg-background-light dark:bg-background-dark shadow-2xl overflow-hidden flex flex-col">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/connect" element={<ConnectDevice />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/trends" element={<Trends />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
}