import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import FinalReportPage from "./pages/FinalReportPage";
import MultiMap from "./pages/MultiMap";
import Home from "./pages/Home";
import Budget from "./pages/Budget";
import AssignTaskModal from "./pages/AssignTaskModal";
import ManageUserPage from './pages/ManageUser';
import ViewTaskPage from './pages/ViewTaskPage';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/finalreport" element={<FinalReportPage />} />
        <Route path="/multimap" element={<MultiMap />} />
        <Route path="/budgetCalculator" element={<Budget />} />
        <Route path="/assigntask" element={<AssignTaskModal />} />
        <Route path="/manageuser" element={<ManageUserPage />} />
        <Route path="/viewtask" element={<ViewTaskPage />} />
      </Routes>
    </div>
  );
}

export default App;
