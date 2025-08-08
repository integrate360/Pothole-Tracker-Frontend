import React from "react";
import "../styles/MainPage.css";
import {
  FiUsers,
  FiCheckSquare,
  FiFileText,
  FiDownload,
  FiMap,
  FiSearch,
  FiFilter,
  FiEdit2,
  FiChevronDown,
  FiBell,
  FiMenu,
} from "react-icons/fi";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const roadData = [
  {
    id: 1,
    name: "Chopasni Housing Board -> Chopasni Housing Board, Jodhpur",
    length: 1.29,
    surveyor: "Nikhil",
    date: "Wed, 26 Jun 2024 12:53:34 GMT",
    rating: 43.92,
    condition: "Fair",
  },
  {
    id: 2,
    name: "Jodhpur -> 24, Chopasni Road, Jodhpur",
    length: 1.5,
    surveyor: "Nikhil",
    date: "Wed, 26 Jun 2024 12:58:16 GMT",
    rating: 50.92,
    condition: "Fair",
  },
  {
    id: 3,
    name: "Chopasni Housing Board -> Jwala Vihar, Jodhpur",
    length: 1.65,
    surveyor: "Nikhil",
    date: "Tue, 02 Jul 2024 09:27:29 GMT",
    rating: 50.18,
    condition: "Fair",
  },
  {
    id: 4,
    name: "Sardarpura -> Pratap Nagar, Jodhpur",
    length: 0.61,
    surveyor: "Nikhil",
    date: "Tue, 02 Jul 2024 09:30:40 GMT",
    rating: 57.33,
    condition: "Fair",
  },
];

const MainPage = () => {
  const navigate = useNavigate();
  const handleContinue = () => {
    navigate("/finalreport");
  };
  const handleContinueMap = () => {
    navigate("/multimap");
  };
  const handleManageUser = () => navigate("/manageuser");
  const handleViewTask = () => navigate("/viewtask");

  return (
    <div className="main-page-container">
      <header className="main-header">
        <div className="logo-container">
          <span className="logo-text">ROADVISION AI</span>
        </div>
        <div className="header-actions">
          <button className="header-icon-btn">
            <FiBell />
          </button>
          <div className="profile-container">
            <button className="header-icon-btn">
              <FiMenu />
            </button>
            <div className="profile-avatar">A</div>
          </div>
        </div>
      </header>

      <main className="content-area">
        <div className="page-header">
          <div>
            <h1>Welcome to RoadVision AI</h1>
            <p>Select one or multiple locations to view on the map</p>
          </div>
          <div className="action-buttons">
            <button className="action-btn" onClick={handleManageUser}>
              <FiUsers className="btn-icon" /> User
            </button>
            <button className="action-btn" onClick={handleViewTask}>
              <FiCheckSquare className="btn-icon" /> Task
            </button>
            <button className="action-btn" onClick={handleContinue}>
              <FiFileText className="btn-icon" /> View Report
            </button>
            <button className="action-btn">
              <FiDownload className="btn-icon" /> Download Report
            </button>
            <button className="action-btn primary" onClick={handleContinueMap}>
              <FiMap className="btn-icon" /> View On Map
            </button>
          </div>
        </div>

        <div className="road-list-container">
          <div className="road-list-header">
            <h2>ROAD LIST</h2>
            <div className="search-container">
              <input type="text" placeholder="Keyword Search" />
              <FiSearch className="search-icon" />
            </div>
          </div>

          <table className="road-table">
            <thead>
              <tr>
                <th>
                  <input type="checkbox" />
                </th>
                <th>
                  ROAD NAME <FaSort className="sort-icon" />
                </th>
                <th>
                  <FiFilter className="filter-icon" />
                </th>
                <th>ROAD LENGTH</th>
                <th>SURVEYOR NAME</th>
                <th>
                  SURVEY DATE <FaSort className="sort-icon" />
                </th>
                <th>ROAD RATING</th>
                <th>ROAD CONDITION</th>
                <th>STATUS</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {roadData.map((road) => (
                <tr key={road.id}>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td className="road-name-cell">
                    <FiMap className="map-icon-cell" /> {road.name}
                  </td>
                  <td></td>
                  <td>{road.length}</td>
                  <td>{road.surveyor}</td>
                  <td>{road.date}</td>
                  <td>{road.rating}</td>
                  <td>
                    <span className="condition-pill">{road.condition}</span>
                  </td>
                  <td></td>
                  <td>
                    <button className="edit-btn">
                      <FiEdit2 />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="pagination-container">
            <button className="pagination-arrow">{"<<"}</button>
            <button className="pagination-arrow">{"<"}</button>
            <span className="pagination-page active">1</span>
            <button className="pagination-arrow">{">"}</button>
            <button className="pagination-arrow">{">>"}</button>
            <span className="pagination-info">1 to 4 of 4</span>
            <select className="pagination-select">
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
            </select>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainPage;
