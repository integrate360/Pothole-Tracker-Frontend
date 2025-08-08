import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import ModuleSelection from './pages/ModuleSelection';
import Dashboard from './pages/Dashboard';
import InspectionReport from './pages/InspectionReport';
import MapView from './pages/MapView';
import DetailedReport from './pages/DetailedReport';
import BudgetCalculator from './pages/BudgetCalculator';
import UserManagement from './pages/UserManagement';
import TaskManagement from './pages/TaskManagement';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/modules" element={<ModuleSelection />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/report" element={<InspectionReport />} />
          <Route path="/map" element={<MapView />} />
          <Route path="/detailed-report" element={<DetailedReport />} />
          <Route path="/budget" element={<BudgetCalculator />} />
          <Route path="/users" element={<UserManagement />} />
          <Route path="/tasks" element={<TaskManagement />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;