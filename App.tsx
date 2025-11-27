import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import BottomNav from './components/BottomNav';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import More from './pages/More';
import Bible from './pages/Bible';
import Give from './pages/Give';
import Settings from './pages/Settings';
import Ministries from './pages/Ministries';
import Live from './pages/Live';
import Location from './pages/Location';
import PrayerRequest from './pages/PrayerRequest';
import { ThemeProvider } from './context/ThemeContext';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <HashRouter>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white font-sans selection:bg-indigo-100 selection:text-indigo-900 transition-colors duration-300">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/more" element={<More />} />
            <Route path="/bible" element={<Bible />} />
            <Route path="/give" element={<Give />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/ministries" element={<Ministries />} />
            <Route path="/live" element={<Live />} />
            <Route path="/location" element={<Location />} />
            <Route path="/prayer-request" element={<PrayerRequest />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          
          <BottomNav />
        </div>
      </HashRouter>
    </ThemeProvider>
  );
};

export default App;