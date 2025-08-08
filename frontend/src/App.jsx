import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import FinalReportPage from './pages/FinalReportPage';
import MultiMap from './pages/MultiMap';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/finalreport" element={<FinalReportPage />} />
        <Route path="/multimap" element={<MultiMap />} />
      </Routes>
    </div>
  );
}

export default App;