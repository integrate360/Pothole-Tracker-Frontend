// src/pages/InspectionReport.jsx
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

const InspectionReport = () => {
    const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="page-container">
        <h2>RoadVision AI Road Inspection Report</h2>
        <div className="report-grid">
          <div className="card">
            <h3>Area</h3>
            <p>JODHPUR</p>
          </div>
          <div className="card">
            <h3>Total Road Length</h3>
            <p>7.75 KM</p>
          </div>
          <div className="card">
            <h3>Total Defect Count</h3>
            <p>1385</p>
          </div>
        </div>
        <div className="card" style={{ marginTop: '1.5rem' }}>
            <h3>Total Defects Breakdown and Roads Status (According to IRC Rating)</h3>
            <p style={{fontSize: '1rem'}}>Raveling: 1244, Rut: 7, Crack: 74, Pothole: 35...</p>
            <p style={{fontSize: '1rem', marginTop: '1rem'}}>Good: 0.00 KM, Fair: 5.87 KM, Poor: 1.88 KM</p>
        </div>
        <div className="card" style={{ marginTop: '1.5rem' }}>
            <h3>Road Analysis</h3>
             <div className="table-wrapper">
                 <table>
                     <thead><tr><th>Start</th><th>End</th><th>Road Length</th><th>Road Rating</th><th>Defect</th></tr></thead>
                     <tbody>
                         <tr onClick={() => navigate('/detailed-report')} style={{cursor: 'pointer'}}>
                             <td>Juna Khedapati...</td><td>Indra Colony...</td><td>0.37 KM</td><td>63.67 (Fair)</td><td>50</td>
                         </tr>
                         <tr>
                             <td>Old Jhanwar Rd...</td><td>Bhati ki bhawri...</td><td>1.29 KM</td><td>43.92 (Fair)</td><td>218</td>
                         </tr>
                     </tbody>
                 </table>
             </div>
        </div>
         <button className="btn btn-primary" style={{marginTop: '2rem', width:'200px'}} onClick={() => navigate('/budget')}>Go to Budget Calculator</button>
      </div>
    </>
  );
};

export default InspectionReport;