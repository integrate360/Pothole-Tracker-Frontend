import React, { useState } from "react";
import "../styles/AssignTaskModal.css";
import { FaUser, FaSearch, FaUserCircle, FaPaperPlane } from "react-icons/fa";

// --- DUMMY DATA ---
const users = [
  { id: 1, name: "Vinit", code: "RV_897992_SP" },
  { id: 2, name: "Saquib", code: "RV_698025_MA" },
  { id: 3, name: "Shubham kanojia", code: "RV_173009_CV" },
  { id: 4, name: "suri", code: "RV_608552_BU" },
  { id: 5, name: "suryanshu", code: "RV_152552_XR" },
  { id: 6, name: "suri", code: "RV_485175_GN" },
];

// The Modal Component
const AssignTaskModal = ({ isOpen, onClose }) => {
  const [selectedUser, setSelectedUser] = useState(null);

  // This prevents the modal from rendering if it's not open
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* --- MODAL HEADER --- */}
        <div className="modal-header">
          <h2>Assign User Survey Task</h2>
          <div className="assignee-info">
            <FaUserCircle />
            <span>Assigne by Nikhil Vyas</span>
          </div>
        </div>

        {/* --- MODAL BODY (2-column layout) --- */}
        <div className="modal-body">
          {/* --- LEFT COLUMN: USER SELECTION --- */}
          <div className="user-selection-column">
            <h4>Select a user for this task</h4>
            <div className="user-search-container">
              <FaSearch className="user-search-icon" />
              <input type="text" placeholder="Search for a users" />
            </div>
            <ul className="user-list">
              {users.map((user) => (
                <li
                  key={user.id}
                  className={selectedUser === user.id ? "selected" : ""}
                  onClick={() => setSelectedUser(user.id)}
                >
                  <FaUser className="user-list-icon" />
                  {user.name} ({user.code})
                </li>
              ))}
            </ul>
          </div>

          {/* --- RIGHT COLUMN: FORM & MAP --- */}
          <div className="task-details-column">
            <div className="form-and-map-layout">
              <div className="form-fields">
                <div className="form-group">
                  <label htmlFor="startPoint">Starting Point</label>
                  <input
                    type="text"
                    id="startPoint"
                    defaultValue="New Delhi, Delhi, India"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="endPoint">Ending Point</label>
                  <input
                    type="text"
                    id="endPoint"
                    defaultValue="Lado Sarai, New Delhi, Delhi, India"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lanes">Number of Lanes</label>
                  <input type="text" id="lanes" />
                </div>
                <div className="form-group">
                  <label htmlFor="taskTitle">Task Title</label>
                  <input type="text" id="taskTitle" />
                </div>
                <div className="form-group">
                  <label htmlFor="taskDesc">Task Description</label>
                  <textarea id="taskDesc" rows="3"></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="dueDate">Due Date</label>
                  <input type="date" id="dueDate" />
                </div>
              </div>
              <div className="map-placeholder-container">
                {/* This would be replaced with a real map component */}
                <img
                  src="https://i.imgur.com/GZ5vjJQ.png"
                  alt="Map of New Delhi"
                  className="map-image"
                />
              </div>
            </div>
          </div>
        </div>

        {/* --- MODAL FOOTER --- */}
        <div className="modal-footer">
          <button className="btn btn-cancel" onClick={onClose}>
            Cancel
          </button>
          <button className="btn btn-assign">
            <FaPaperPlane /> Assign
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssignTaskModal;
