import React, { useState } from 'react';
import '../styles/ManageUser.css';
import InviteUserModal from '../pages/InviteUserModal';
import { FiSearch, FiPlus, FiMoreHorizontal } from 'react-icons/fi';

const users = [
    { name: 'Nikhil Vyas', email: 'shubham@roadvision.ai', joined: 'Jul 9, 2024', tasks: 0, status: 'Idle', role: 'Admin', type: 'Web User' },
    { name: 'tanmoyeesingharoy1999@gmail.com', email: 'tanmoyeesingharoy1999@gmail.com', joined: 'Aug 12, 2024', tasks: 0, status: 'Pending', role: 'User', type: 'Web User' },
    { name: 'Vinit', email: 'vjhak686@gmail.com', joined: 'Dec 14, 2023', tasks: 0, status: 'Pending', role: 'User', type: 'Mobile User' },
    { name: 'Saquib', email: 'saquib@indikaa.com', joined: 'Apr 22, 2024', tasks: 0, status: 'Pending', role: 'User', type: 'Mobile User' },
];

const ManageUserPage = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <div className="user-management-page">
            <header className="user-page-header">
                <div>
                    <h1>Users Management</h1>
                    <p>Manage users and invite new users</p>
                </div>
                <button className="invite-btn" onClick={() => setModalOpen(true)}>
                    <FiPlus /> Invite a New User
                </button>
            </header>

            <div className="filter-controls">
                <div className="user-search-container">
                    <input type="text" placeholder="Search for a user" />
                    <button className="search-btn">Search</button>
                </div>
                <div className="user-filter-options">
                    <select><option>Sort by</option></select>
                    <button className="clear-btn">Clear searching & sorting</button>
                    <label><input type="checkbox" defaultChecked /> All Users</label>
                    <label><input type="checkbox" /> Idle Users</label>
                    <label><input type="checkbox" /> Deactivated Users</label>
                </div>
            </div>

            <div className="user-table-container">
                <table className="user-table">
                    <thead>
                        <tr>
                            <th>User Name</th><th>Email Address</th><th>Joined On</th>
                            <th>Task Completed</th><th>Current Status</th><th>Role</th>
                            <th>User Type</th><th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.joined}</td>
                                <td>{user.tasks}</td>
                                <td><span className={`status-pill ${user.status.toLowerCase()}`}>{user.status}</span></td>
                                <td>{user.role}</td>
                                <td>{user.type}</td>
                                <td><button className="action-menu-btn"><FiMoreHorizontal /></button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="pagination-container bottom">
                {/* Pagination similar to MainPage */}
            </div>

            {/* Render the modal conditionally */}
            <InviteUserModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
        </div>
    );
};

export default ManageUserPage;