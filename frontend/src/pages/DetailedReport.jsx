// src/pages/DetailedReport.jsx
import Header from '../components/Header';
const DetailedReport = () => {
    return (
        <>
            <Header />
            <div className="page-container">
                <h2>Road Inspection Report: Chopasni Housing Board</h2>
                <div className="report-grid">
                    <div className="card">
                        <h3>Overview</h3>
                        <p style={{ fontSize: '1rem' }}>Road Name: Chopasni Housing Board<br />Start Point: Chopasni Housing Board<br />Road Length: 1.29 KM</p>
                    </div>
                    <div className="card">
                        <h3>Defect Breakdown</h3>
                        <p style={{ fontSize: '1rem' }}>Potholes: 13, Patching: 0, Cracking: 38, Ravelling: 162...</p>
                        <p style={{ fontSize: '1.2rem', marginTop: '1rem' }}>Total Defects: 218</p>
                    </div>
                    <div className="card">
                        <h3>IRC Rating</h3>
                        <p>43.92</p>
                        <p style={{ fontSize: '1rem' }}>Level 2</p>
                    </div>
                </div>
                <div className="card" style={{ marginTop: '1.5rem' }}>
                    <h3>Road Analysis (Chainage)</h3>
                    <div className="table-wrapper">
                        <table>
                            <thead><tr><th>Serial No.</th><th>Chainage(m)</th><th>Start Address</th><th>Road Rating</th><th>Defect Type</th><th>Severity</th></tr></thead>
                            <tbody>
                                <tr>
                                    <td>1</td><td>0-100</td><td>Old Jhanwar Rd...</td><td>Poor (39.0)</td><td>Cracking</td><td>High</td>
                                </tr>
                                <tr>
                                    <td>...</td><td>...</td><td>...</td><td>...</td><td>...</td><td>...</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};
export default DetailedReport;