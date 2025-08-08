import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import FinalReportPage from './pages/FinalReportPage';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/finalreport" element={<FinalReportPage />} />
      </Routes>
    </div>
  );
}

export default App;