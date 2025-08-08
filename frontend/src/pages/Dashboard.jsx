// src/pages/Dashboard.jsx
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { roads } from '../data/mockData';

const Dashboard = () => {
    const navigate = useNavigate();
    return (
        <>
            <Header />
            <div className="page-container">
                <h2>Welcome to RoadVision AI</h2>
                <p>Select one or multiple locations to view on the map</p>
                
                <div className="dashboard-actions">
                    <button className="btn btn-primary" onClick={() => navigate('/report')}>View Report</button>
                    <button className="btn btn-secondary">Download Report</button>
                    <button className="btn btn-primary" onClick={() => navigate('/map')}>View On Map</button>
                </div>

                <div className="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>Road Name</th>
                                <th>Road Length</th>
                                <th>Surveyor Name</th>
                                <th>Survey Date</th>
                                <th>Road Rating</th>
                                <th>Road Condition</th>
                            </tr>
                        </thead>
                        <tbody>
                            {roads.map((road) => (
                                <tr key={road.id} onClick={() => navigate('/detailed-report')} style={{cursor: 'pointer'}}>
                                    <td>{road.name}</td>
                                    <td>{road.length} km</td>
                                    <td>{road.surveyor}</td>
                                    <td>{road.date}</td>
                                    <td>{road.rating}</td>
                                    <td><span className="status-fair">{road.condition}</span></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
