// src/components/InviteUserModal.jsx

import React, { useState } from 'react';
import '../styles/InviteUserModal.css';
import { FiX, FiInfo, FiBriefcase, FiHash, FiMapPin, FiMail } from 'react-icons/fi';

const InviteUserModal = ({ isOpen, onClose }) => {
    const [userType, setUserType] = useState('Webuser');

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <header className="modal-header">
                    <h2>Invite a New User</h2>
                    <button className="modal-close-btn" onClick={onClose}><FiX /></button>
                </header>
                <div className="modal-body">
                    <div className="info-alert">
                        <FiInfo className="info-icon" />
                        The user will receive an invitation link in their email inbox which they can use to join the RoadVision platform.
                    </div>
                    <form className="invite-form">
                        <div className="form-input-group">
                            <FiBriefcase /> <input type="text" value="RoadVision" disabled />
                        </div>
                        <div className="form-input-group">
                            <FiHash /> <input type="text" value="ORG_290587_AS" disabled />
                        </div>
                        <div className="form-input-group">
                            <FiMapPin /> <input type="text" value="JODHPUR" disabled />
                        </div>
                        <div className="form-input-group">
                            <FiMail /> <input type="email" placeholder="Enter the User's email" />
                        </div>
                        <div className="user-type-tabs">
                            <button type="button" className={userType === 'Webuser' ? 'active' : ''} onClick={() => setUserType('Webuser')}>Webuser</button>
                            <button type="button" className={userType === 'Mobileuser' ? 'active' : ''} onClick={() => setUserType('Mobileuser')}>Mobileuser</button>
                        </div>
                        <button type="submit" className="send-invitation-btn">Send Invitation</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default InviteUserModal;