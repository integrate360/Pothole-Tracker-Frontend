import React, { useState, useEffect } from "react";
import "../styles/Budget.css";
import { FaSearch, FaDownload } from "react-icons/fa";

// --- DUMMY DATA (Replace with API data) ---
const roadsData = [
  "1st Pulia -> Pratap Nagar, Jodhpur",
  "Chopasni Housing Board -> Chopasni Housing Board, Jodhpur",
  "Jodhpur -> 24, Chopasni Road, Jodhpur",
  "Sardarpura -> Sardarpura, Jodhpur",
  "Bhadu Market -> Chopasni Housing Board, Jodhpur",
  "Chopasni Housing Board -> Jwala Vihar, Jodhpur",
  "Sardarpura -> Pratap Nagar, Jodhpur",
];

const initialDefectsData = [
  {
    id: 1,
    name: "Raveling",
    found: 162,
    estCost: 900,
    levels: ["Low", "Medium", "High"],
  },
  {
    id: 2,
    name: "Rut",
    found: 5,
    estCost: 1000,
    levels: ["Low", "Medium", "High"],
  },
  {
    id: 3,
    name: "Crack",
    found: 38,
    estCost: 1200,
    levels: ["Low", "Medium", "High"],
  },
  {
    id: 4,
    name: "Pothole",
    found: 13,
    estCost: 1500,
    levels: ["Low", "Medium", "High"],
  },
  {
    id: 5,
    name: "Shoving",
    found: 0,
    estCost: 2000,
    levels: ["Low", "Medium", "High"],
  },
  {
    id: 6,
    name: "Settlement",
    found: 0,
    estCost: 2500,
    levels: ["Low", "Medium", "High"],
  },
  {
    id: 7,
    name: "Patching",
    found: 0,
    estCost: 1300,
    levels: ["Low", "Medium", "High"],
  },
];

const Budget = () => {
  const [selectedRoads, setSelectedRoads] = useState([
    "Chopasni Housing Board -> Chopasni Housing Board, Jodhpur",
  ]);
  const [defects, setDefects] = useState(
    initialDefectsData.map((d) => ({ ...d, selected: true }))
  );
  const [finalCost, setFinalCost] = useState(0);

  // Handle road selection
  const handleRoadSelect = (roadName) => {
    setSelectedRoads((prev) =>
      prev.includes(roadName)
        ? prev.filter((r) => r !== roadName)
        : [...prev, roadName]
    );
  };

  // Handle defect row selection
  const handleDefectSelect = (id) => {
    setDefects((prev) =>
      prev.map((d) => (d.id === id ? { ...d, selected: !d.selected } : d))
    );
  };

  // Calculate final cost whenever defects selection changes
  useEffect(() => {
    const total = defects.reduce((acc, defect) => {
      if (defect.selected) {
        return acc + defect.found * defect.estCost;
      }
      return acc;
    }, 0);
    setFinalCost(total);
  }, [defects]);

  return (
    <div className="budget-page-container">
      <h1 className="page-title">Budget Calculator</h1>
      <div className="calculator-layout">
        {/* --- LEFT PANEL: ROAD SELECTION --- */}
        <div className="panel road-selection-panel">
          <h3>Select the roads you want to repair</h3>
          <div className="search-bar">
            <FaSearch className="search-icon" />
            <input type="text" placeholder="Search for a road" />
            <button className="select-all-btn">Select All</button>
          </div>
          <div className="road-list">
            <div className="road-list-header">
              <input type="checkbox" />
              <span>Road Name</span>
            </div>
            {roadsData.map((road, index) => (
              <div className="road-item" key={index}>
                <input
                  type="checkbox"
                  checked={selectedRoads.includes(road)}
                  onChange={() => handleRoadSelect(road)}
                />
                <span>{road}</span>
              </div>
            ))}
          </div>
          <div className="pagination">
            <span>&lt;</span>
            <span className="active">1</span>
            <span>&gt;</span>
          </div>
        </div>

        {/* --- RIGHT PANEL: DEFECTS CALCULATOR --- */}
        <div className="panel defect-calculator-panel">
          <h3>Which defects do you wish to repair</h3>
          <div className="defect-table-container">
            <table className="defect-table">
              <thead>
                <tr>
                  <th>
                    <input
                      type="checkbox"
                      checked={defects.every((d) => d.selected)}
                    />
                  </th>
                  <th>Defects</th>
                  <th>Level</th>
                  <th>Found</th>
                  <th>Est. Cost</th>
                  <th>Cost</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {defects.map((defect) => (
                  <tr key={defect.id}>
                    <td>
                      <input
                        type="checkbox"
                        checked={defect.selected}
                        onChange={() => handleDefectSelect(defect.id)}
                      />
                    </td>
                    <td>{defect.name}</td>
                    <td>
                      <div className="level-selector">
                        {defect.levels.map((level) => (
                          <label key={level}>
                            <input type="checkbox" defaultChecked /> {level}
                          </label>
                        ))}
                      </div>
                    </td>
                    <td>{defect.found}</td>
                    <td>{defect.estCost}</td>
                    <td></td>
                    <td></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="table-footer">
            <span>
              Total Road Length <strong>1.29 km</strong>
            </span>
            <div className="final-cost">
              Final Cost <strong>₹ {finalCost.toLocaleString("en-IN")}</strong>
            </div>
            <button className="download-btn">
              <FaDownload />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Budget;
