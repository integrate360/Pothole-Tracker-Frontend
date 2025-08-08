// src/pages/UserManagement.jsx
import Header from '../components/Header';
import { users } from '../data/mockData';
import { useState } from 'react';

const UserManagement = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <>
            <Header />
            <div className="page-container">
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem'}}>
                    <h2>Users Management</h2>
                    <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>Invite a New User</button>
                </div>
                <div className="table-wrapper">
                    <table>
                        <thead><tr><th>User Name</th><th>Email Address</th><th>Joined On</th><th>Role</th><th>User Type</th><th>Status</th></tr></thead>
                        <tbody>
                            {users.map(u => (
                                <tr key={u.id}>
                                    <td>{u.name}</td><td>{u.email}</td><td>{u.joined}</td><td>{u.role}</td><td>{u.type}</td><td>{u.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {isModalOpen && (
                <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <h3>Invite a New User</h3>
                        <p>The user will receive an invitation link in their email inbox which they can use to join the RoadVision platform.</p>
                        <div className="form-group">
                            <label>Enter the User's Email</label>
                            <input type="email" placeholder="user@example.com"/>
                        </div>
                        <button className="btn btn-primary" onClick={() => setIsModalOpen(false)}>Send Invitation</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default UserManagement;