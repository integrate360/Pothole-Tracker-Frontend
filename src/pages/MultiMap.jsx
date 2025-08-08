// src/pages/MultiMap.jsx

import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

import "../styles/MultiMap.css";
import {
  FiMap, FiFileText, FiVideo, FiCamera, FiX, FiChevronLeft, FiChevronRight,
  FiBell, FiCalendar, FiFilter, FiDownload, FiSettings, FiPlus, FiMinus,
} from "react-icons/fi";
import roadvisionLogo from "../assets/roadvisionlogo.svg";
import analyzedPhoto from "../assets/street.png";
import { FaCalculator } from "react-icons/fa";

// --- Configuration & Data ---
const center = [26.26, 73.0]; // Jodhpur coordinates [lat, lng]

const defectPoints = [
  { pos: [26.265, 73.01], state: "High" },
  { pos: [26.264, 73.012], state: "Medium" },
  { pos: [26.263, 73.014], state: "Low" },
  { pos: [26.262, 73.016], state: "Low" },
  { pos: [26.261, 73.018], state: "Medium" },
  { pos: [26.26, 73.02], state: "Low" },
];

const stateColor = {
  Low: "#ffc107", // Yellow
  Medium: "#fd7e14", // Orange
  High: "#dc3545", // Red
};

const defectTypes = ["All Defect Types", "Cracks", "Patching", "Potholes", "Ravelling", "Rut", "Settlements", "Shoving"];
const roadFeatures = ['All Asset Types', 'Advertisement board', 'Bollards', 'Drainage', 'Fencing', 'Garbage', 'Gaurd post', 'Information board', 'Road markings', 'Road signboard', 'Street lights', 'Street vendors', 'Traffic lights'];


const GISPage = () => {
  const [isInfoPanelOpen, setInfoPanelOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('Conditions'); // State for the new tabs

  return (
    <div className="gis-page">
      {/* --- Left Navigation Bar --- */}
      <nav className="left-nav-bar">
        <img src={roadvisionLogo} alt="Logo" className="nav-logo" />
        <a href="#" className="nav-icon active"><FiMap /></a>
        <a href="#" className="nav-icon"><FiFileText /></a>
        <a href="#" className="nav-icon"><FiVideo /></a>
        <a href="#" className="nav-icon"><FiBell /></a>
        <a href="#" className="nav-icon"><FiCalendar /></a>
        <a href="#" className="nav-icon"><FiFilter /></a>
        <a href="/calculator" className="nav-icon"><FaCalculator /></a>
        <a href="#" className="nav-icon"><FiDownload /></a>
        <a href="#" className="nav-icon"><FiSettings /></a>
      </nav>

      {/* --- Left Filter Panel with Tabs --- */}
      <div className="filter-panel">
        <div className="filter-tabs">
            <button className={`tab-btn ${activeTab === 'Conditions' ? 'active' : ''}`} onClick={() => setActiveTab('Conditions')}>
                Conditions
            </button>
            <button className={`tab-btn ${activeTab === 'Features' ? 'active' : ''}`} onClick={() => setActiveTab('Features')}>
                Features
            </button>
        </div>

        {/* Conditionally render content based on activeTab */}
        {activeTab === 'Conditions' && (
            <div className="tab-content">
                <h3 className="filter-title">FILTER BY SEGMENTS</h3>
                <div className="filter-group">
                    <label><input type="checkbox"/> All</label>
                    <label><input type="checkbox" className="checkbox-red" /> Poor</label>
                    <label><input type="checkbox" className="checkbox-yellow" /> Fair</label>
                    <label><input type="checkbox" className="checkbox-green" defaultChecked /> Good</label>
                </div>
                <h3 className="filter-title">FILTER BY DEFECT TYPE</h3>
                <div className="filter-group">
                    {defectTypes.map((type) => (
                        <label key={type}><input type="checkbox" defaultChecked /> {type}</label>
                    ))}
                </div>
                <h3 className="filter-title">DEFECT STATE</h3>
                <div className="filter-group">
                    <label><input type="checkbox" /> Select All</label>
                    <label><input type="checkbox" className="checkbox-yellow" /> Low</label>
                    <label><input type="checkbox" className="checkbox-orange" /> Medium</label>
                    <label><input type="checkbox" className="checkbox-red" /> High</label>
                </div>
            </div>
        )}

        {activeTab === 'Features' && (
            <div className="tab-content">
                <h3 className="filter-title">Road Features</h3>
                <div className="filter-group">
                    {roadFeatures.map((feature) => (
                        <label key={feature}><input type="checkbox" /> {feature}</label>
                    ))}
                </div>
            </div>
        )}

      </div>

      {/* --- Map Area with Leaflet --- */}
      <div className="map-area-container">
        <MapContainer center={center} zoom={14} scrollWheelZoom={true} style={{ height: "100%", width: "100%" }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {defectPoints.map((point, idx) => (
            <CircleMarker
              key={idx} center={point.pos}
              pathOptions={{ color: stateColor[point.state], fillColor: stateColor[point.state], fillOpacity: 1 }}
              radius={6}
              eventHandlers={{ click: () => setInfoPanelOpen(true) }}
            >
              <Popup>Defect State: {point.state}</Popup>
            </CircleMarker>
          ))}
        </MapContainer>
        <div className="map-controls">
          <button><FiPlus /></button>
          <button><FiMinus /></button>
        </div>
      </div>

      {/* --- Right Information Panel --- */}
      {isInfoPanelOpen && (
        <div className="info-panel">
            {/* ... (The info panel JSX remains unchanged) ... */}
            <header className="info-panel-header">
                <h3>Point Information</h3>
                <button className="close-btn" onClick={() => setInfoPanelOpen(false)}><FiX /></button>
            </header>
            <div className="info-panel-content">
                <div className="photo-container">
                    <img src={analyzedPhoto} alt="Analyzed Defect" />
                    <div className="photo-overlay">A</div>
                </div>
                <div className="photo-toggle">
                    <label><input type="radio" name="photo-type" /> Original Photo</label>
                    <label><input type="radio" name="photo-type" defaultChecked /> AI-Analyzed Photo</label>
                </div>
                <div className="media-controls">
                    <button><FiChevronLeft /></button>
                    <button><FiChevronRight /></button>
                    <div className="spacer"></div>
                    <button><FiVideo /></button>
                    <button className="active"><FiCamera /></button>
                </div>
                <div className="info-details">
                    <div className="info-item"><span>Defect Type</span><strong>rut</strong></div>
                    <div className="info-item"><span>Last Updated</span><strong>January 9th, 2025 5:29pm</strong></div>
                    <div className="info-item"><span>Location</span><strong>01 Kaberle Nagar Aiims Road, Jodhpur, Rajasthan 342008, India</strong></div>
                    <div className="info-item"><span>Latitude and Longitude</span><strong>26.2614295, 72.9611001</strong></div>
                    <div className="info-item"><span>Feedback</span><textarea rows="4"></textarea></div>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default GISPage;