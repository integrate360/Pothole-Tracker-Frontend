// src/pages/TaskManagement.jsx
import Header from '../components/Header';
import { tasks } from '../data/mockData';

const TaskManagement = () => {
    return (
        <>
            <Header />
            <div className="page-container">
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem'}}>
                    <h2>Task Management</h2>
                    <button className="btn btn-primary">Add User Survey Task</button>
                </div>
                 <div className="table-wrapper">
                    <table>
                        <thead><tr><th>Task Title</th><th>Task Type</th><th>Assigned To</th><th>Due Date</th><th>Status</th></tr></thead>
                        <tbody>
                            {tasks.map(t => (
                                <tr key={t.id}>
                                    <td>{t.title}</td><td>{t.type}</td><td>{t.assignedTo}</td><td>{t.dueDate}</td><td>{t.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default TaskManagement;