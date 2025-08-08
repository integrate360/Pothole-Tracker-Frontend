// src/pages/ViewTaskPage.jsx

import React, { useState } from 'react';
import '../styles/ViewTaskPage.css';
import AssignTaskModal from '../pages/AssignTaskModal'; // This will be the new modal component
import { FiSearch, FiPlus, FiEye, FiEdit2 } from 'react-icons/fi';

const tasks = [
    { title: 'Please survey the road and upload the video', type: 'Survey', assignedTo: 'suri', createdOn: '2024-07-18', dueDate: 'Jul 24, 2024', status: 'Closed' },
    { title: 'please complete the survey', type: 'Survey', assignedTo: 'suri', createdOn: '2024-07-18', dueDate: 'Jul 31, 2024', status: 'Closed' },
    { title: 'Provide survey report', type: 'Survey', assignedTo: 'Vinit', createdOn: '2024-07-25', dueDate: 'Jul 26, 2024', status: 'Pending' },
    { title: 'do', type: 'Survey', assignedTo: 'Vinit', createdOn: '2024-07-31', dueDate: 'Aug 5, 2024', status: 'Pending' }
];

const ViewTaskPage = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <div className="task-management-page">
            <header className="task-page-header">
                <div>
                    <h1>Task Management</h1>
                    <p>Manage user maintenance and user survey request tasks</p>
                </div>
                <button className="add-task-btn" onClick={() => setModalOpen(true)}>
                    <FiPlus /> Add User Survey Task
                </button>
            </header>

            <div className="task-filter-controls">
                <div className="task-search-container">
                    <input type="text" placeholder="Search for a task" />
                    <button className="search-btn">Search</button>
                </div>
                <div className="task-filter-options">
                    <select><option>Sort by</option></select>
                    <select><option>Filter by task type</option></select>
                    <button className="clear-btn">Clear filter</button>
                    <label><input type="checkbox" defaultChecked /> All Task</label>
                    <label><input type="checkbox" /> Pending</label>
                    <label><input type="checkbox" /> In Progress</label>
                    <label><input type="checkbox" /> Completed</label>
                    <label><input type="checkbox" /> Overdue</label>
                    <label><input type="checkbox" /> Closed</label>
                </div>
            </div>

            <div className="task-table-container">
                <table className="task-table">
                    <thead>
                        <tr>
                            <th>Task Title</th><th>Task Type</th><th>Assigned To</th>
                            <th>Created On</th><th>Due Date</th><th>Status</th><th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map((task, index) => (
                            <tr key={index}>
                                <td>{task.title}</td>
                                <td>{task.type}</td>
                                <td>{task.assignedTo}</td>
                                <td>{task.createdOn}</td>
                                <td>{task.dueDate}</td>
                                <td><span className={`task-status-pill ${task.status.toLowerCase()}`}>{task.status}</span></td>
                                <td className="action-cell">
                                    <button className="action-icon-btn"><FiEye /></button>
                                    <button className="action-icon-btn"><FiEdit2 /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <AssignTaskModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
        </div>
    );
};

export default ViewTaskPage;