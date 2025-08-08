// src/components/AssignTaskModal.jsx
import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../styles/AssignTaskModal.css';
import { FiX, FiPlus, FiSearch } from 'react-icons/fi';

const users = [
    { name: 'Vinit', id: 'RV_897992_SP' },
    { name: 'Saquib', id: 'RV_698025_MA' },
    { name: 'Shubham kanojia', id: 'RV_173009_CV' },
    { name: 'suri', id: 'RV_608552_BU' },
    { name: 'suryanshu', id: 'RV_152552_XR' },
    { name: 'suri', id: 'RV_485175_GN' },
];

const AssignTaskModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const newDelhiPosition = [28.6139, 77.2090];

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="assign-task-modal-content" onClick={e => e.stopPropagation()}>
                <header className="assign-task-modal-header">
                    <h2>Assign User Survey Task</h2>
                    <div className="assign-by">
                        Assign by Nikhil Vyas
                        <div className="profile-avatar-small">A</div>
                    </div>
                </header>
                <div className="assign-task-modal-body">
                    <div className="form-column user-column">
                        <div className="user-selection-section">
                            <label>Select a user for this task</label>
                            <div className="user-search-box">
                                <FiSearch />
                                <input type="text" placeholder="Search for a users" />
                            </div>
                            <div className="user-list">
                                {users.map(user => (
                                    <label key={user.id} className="user-list-item">
                                        <input type="checkbox" /> {user.name} ({user.id})
                                    </label>
                                ))}
                            </div>
                        </div>
                        <button className="cancel-btn" onClick={onClose}>Cancel</button>
                    </div>
                    <div className="form-column fields-column">
                        <div className="form-fields">
                            <label>Starting Point</label>
                            <input type="text" defaultValue="New Delhi, Delhi, India" />

                            <label>Ending Point</label>
                            <input type="text" defaultValue="Lado Sarai, New Delhi, Delhi, India" />
                            
                            <label>Number of Lanes</label>
                            <input type="text" />

                            <label>Task Title</label>
                            <input type="text" />

                            <label>Task Description</label>
                            <textarea rows="3"></textarea>
                            
                            <label>Due Date</label>
                            <input type="date" placeholder="Select date"/>
                        </div>
                    </div>
                    <div className="map-column">
                         <MapContainer center={newDelhiPosition} zoom={11} style={{ height: '100%', width: '100%', borderRadius: '8px' }}>
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            />
                        </MapContainer>
                    </div>
                </div>
                 <footer className="assign-task-modal-footer">
                    <button className="assign-btn"><FiPlus /> Assign</button>
                </footer>
            </div>
        </div>
    );
};

export default AssignTaskModal;