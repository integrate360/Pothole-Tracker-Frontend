// src/pages/GISPage.jsx

import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  CircleMarker,
} from "react-leaflet";
import "leaflet/dist/leaflet.css"; // <-- Import Leaflet's CSS

import "../styles/MultiMap.css"; // Your custom styles
import {
  FiMap,
  FiFileText,
  FiVideo,
  FiCamera,
  FiX,
  FiChevronLeft,
  FiChevronRight,
  FiBell,
  FiCalendar,
  FiFilter,
  FiDownload,
  FiSettings,
  FiPlus,
  FiMinus,
} from "react-icons/fi";
import roadvisionLogo from "../assets/roadvisionlogo.svg";
import analyzedPhoto from "../assets/street.png";
import { FaCalculator } from "react-icons/fa";

// --- Leaflet Configuration ---
const center = [26.26, 73.0]; // Jodhpur coordinates [lat, lng]

// Sample data points for the map, matching the screenshot's concept
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

const GISPage = () => {
  const [isInfoPanelOpen, setInfoPanelOpen] = useState(true);

  return (
    <div className="gis-page">
      {/* --- Left Navigation Bar --- */}
      <nav className="left-nav-bar">
        <img src={roadvisionLogo} alt="Logo" className="nav-logo" />
        <a href="#" className="nav-icon active">
          <FiMap />
        </a>
        <a href="#" className="nav-icon">
          <FiFileText />
        </a>
        <a href="#" className="nav-icon">
          <FiVideo />
        </a>
        <a href="#" className="nav-icon">
          <FiBell />
        </a>
        <a href="#" className="nav-icon">
          <FiCalendar />
        </a>
        <a href="#" className="nav-icon">
          <FiFilter />
        </a>
        <Link to="/budgetCalculator" className="nav-icon">
          <FaCalculator />
        </Link>
        <a href="#" className="nav-icon">
          <FiDownload />
        </a>
        <a href="#" className="nav-icon">
          <FiSettings />
        </a>
      </nav>

      {/* --- Left Filter Panel --- */}
      <div className="filter-panel">
        <div className="filter-group">
          <label>
            <input type="checkbox" className="checkbox-red" /> Poor
          </label>
          <label>
            <input type="checkbox" className="checkbox-yellow" /> Fair
          </label>
          <label>
            <input type="checkbox" className="checkbox-green" defaultChecked />{" "}
            Good
          </label>
        </div>
        <h3 className="filter-title">FILTER BY DEFECT TYPE</h3>
        <div className="filter-group">
          {[
            "All Defect Types",
            "Cracks",
            "Patching",
            "Potholes",
            "Ravelling",
            "Rut",
            "Settlements",
            "Shoving",
          ].map((type) => (
            <label key={type}>
              <input type="checkbox" defaultChecked /> {type}
            </label>
          ))}
        </div>
        <h3 className="filter-title">DEFECT STATE</h3>
        <div className="filter-group">
          <label>
            <input type="checkbox" /> Select All
          </label>
          <label>
            <input type="checkbox" className="checkbox-yellow" /> Low
          </label>
          <label>
            <input type="checkbox" className="checkbox-orange" /> Medium
          </label>
          <label>
            <input type="checkbox" className="checkbox-red" /> High
          </label>
        </div>
      </div>

      {/* --- Map Area with Leaflet --- */}
      <div className="map-area-container">
        <MapContainer
          center={center}
          zoom={14}
          scrollWheelZoom={true}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/* Example defect points */}
          {defectPoints.map((point, idx) => (
            <CircleMarker
              key={idx}
              center={point.pos}
              pathOptions={{
                color: stateColor[point.state],
                fillColor: stateColor[point.state],
                fillOpacity: 1,
              }}
              radius={6}
              // When a marker is clicked, open the info panel
              eventHandlers={{ click: () => setInfoPanelOpen(true) }}
            >
              <Popup>Defect State: {point.state}</Popup>
            </CircleMarker>
          ))}
        </MapContainer>
        <div className="map-controls">
          <button>
            <FiPlus />
          </button>
          <button>
            <FiMinus />
          </button>
        </div>
      </div>

      {/* --- Right Information Panel --- */}
      {isInfoPanelOpen && (
        <div className="info-panel">
          <header className="info-panel-header">
            <h3>Point Information</h3>
            <button
              className="close-btn"
              onClick={() => setInfoPanelOpen(false)}
            >
              <FiX />
            </button>
          </header>
          <div className="info-panel-content">
            <div className="photo-container">
              <img src={analyzedPhoto} alt="Analyzed Defect" />
              <div className="photo-overlay">A</div>
            </div>
            <div className="photo-toggle">
              <label>
                <input type="radio" name="photo-type" /> Original Photo
              </label>
              <label>
                <input type="radio" name="photo-type" defaultChecked />{" "}
                AI-Analyzed Photo
              </label>
            </div>
            <div className="media-controls">
              <button>
                <FiChevronLeft />
              </button>
              <button>
                <FiChevronRight />
              </button>
              <div className="spacer"></div>
              <button>
                <FiVideo />
              </button>
              <button className="active">
                <FiCamera />
              </button>
            </div>
            <div className="info-details">
              <div className="info-item">
                <span>Defect Type</span>
                <strong>rut</strong>
              </div>
              <div className="info-item">
                <span>Last Updated</span>
                <strong>January 9th, 2025 5:29pm</strong>
              </div>
              <div className="info-item">
                <span>Location</span>
                <strong>
                  01 Kaberle Nagar Aiims Road, Jodhpur, Rajasthan 342008, India
                </strong>
              </div>
              <div className="info-item">
                <span>Latitude and Longitude</span>
                <strong>26.2614295, 72.9611001</strong>
              </div>
              <div className="info-item">
                <span>Feedback</span>
                <textarea rows="4"></textarea>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GISPage;
