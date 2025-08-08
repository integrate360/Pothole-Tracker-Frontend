import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";
import logo from "../assets/roadvisionlogo.svg";
// Importing icons from react-icons
import {
  FaChartBar,
  FaHardHat,
  FaTasks,
  FaShieldAlt,
  FaFileUpload,
  FaRobot,
} from "react-icons/fa";
const Home = () => {
  const [selectedModule, setSelectedModule] = useState(
    "Pavement Condition Audit"
  );
  const navigate = useNavigate();
  // Array of module data, including their names and icons
  const modules = [
    { name: "Pavement Condition Audit", icon: <FaChartBar /> },
    { name: "Construction Progress Monitoring", icon: <FaHardHat /> },
    { name: "Inventory Management", icon: <FaTasks /> },
    { name: "Safety Compliance", icon: <FaShieldAlt /> },
    { name: "Road Imagery Upload", icon: <FaFileUpload /> },
    { name: "RoadGPT", icon: <FaRobot /> },
  ];
  const handleContinue = () => {
    if (selectedModule) {
      // Example: navigate to a dashboard or another page
      // You can make this URL dynamic based on the selected module
      navigate("/mainpage");
    }
  };
  return (
    <div className="home-page-container">
      <div className="selection-card">
        <img src={logo} alt="RoadVision AI Logo" className="selection-logo" />

        <div className="welcome-text">
          <h2>Welcome to RoadVision AI</h2>
          <p>Select a module to continue</p>
        </div>

        <div className="module-list">
          {modules.map((module) => (
            <div
              key={module.name}
              className={`module-item ${
                selectedModule === module.name ? "selected" : ""
              }`}
              onClick={() => setSelectedModule(module.name)}
            >
              <span className="module-icon">{module.icon}</span>
              {module.name}
            </div>
          ))}
        </div>

        <button
          className={`continue-button ${!selectedModule ? "disabled" : ""}`}
          onClick={handleContinue}
          disabled={!selectedModule}
        >
          CONTINUE
        </button>
      </div>
    </div>
  );
};
export default Home;
