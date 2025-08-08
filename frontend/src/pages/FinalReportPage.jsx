import React, { useState } from 'react';
import '../styles/FinalReportPage.css';
import clsx from 'clsx';
import { FiMapPin, FiCalendar, FiChevronUp, FiChevronDown, FiMoreHorizontal } from 'react-icons/fi';
import { FaRoad } from 'react-icons/fa';
import { ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

// --- Data (as seen in screenshots) ---
const roadAnalysisData = [
    { id: 1, start: "Juna Khedapati Chirghar, 1st Pulia", end: "Indra Colony, Rajasthan 34003", length: "0.37 KM", rating: 63.67, defects: 50, details: { raveling: 44, rut: 0, crack: 0, pothole: 0, shoving: 0, settlement: 0, patching: 0 } },
    { id: 2, start: "Old Jhanwar Rd, Chopasni Housing Board", end: "Bhati ki bhawri, Chopasni Housing Board", length: "1.29 KM", rating: 43.92, defects: 218, details: { raveling: 150, rut: 20, crack: 15, pothole: 10, shoving: 8, settlement: 10, patching: 5 } },
];

const defectBreakdown = { Raveling: 1244, Rut: 7, Crack: 74, Pothole: 35, Shoving: 1, Settlement: 3, Patching: 21 };
const roadStatus = { Good: 0.00, Fair: 5.87, Poor: 1.88 };

const donutChartData1 = [{ name: 'Location 1', value: 1, color: '#28a745' }];
const donutChartData2 = [{ name: 'Defect A', value: 400, color: '#007bff' }, { name: 'Defect B', value: 300, color: '#ffc107' }];
const barChartData1 = [{ name: 'Settlements', value: 75 }];
const barChartData2 = [{ name: 'Cracks', value: 25 }, { name: 'Potholes', value: 18 }];

const RoadAnalysisRow = ({ row }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <>
            <tr className="main-row" onClick={() => setIsExpanded(!isExpanded)}>
                <td>{row.start}</td>
                <td>{row.end}</td>
                <td>{row.length}</td>
                <td><span className="rating-circle fair"></span>{row.rating}(Fair)</td>
                <td>{row.defects} {isExpanded ? <FiChevronUp /> : <FiChevronDown />}</td>
            </tr>
            <tr className={clsx("details-row", { "expanded": isExpanded })}>
                <td colSpan="5">
                    <div className="details-content">
                        {Object.entries(row.details).map(([key, value]) => (
                            <div key={key} className="detail-item"><strong>{key} ({value > 0 ? 'High' : 'Low'}):</strong> {value}</div>
                        ))}
                    </div>
                </td>
            </tr>
        </>
    );
};


const FinalReportPage = () => {
    return (
        <div className="report-page">
            <header className="report-header">
                <span className="logo-text">ROADVISION AI</span>
                <h1>RoadVision AI Road Inspection Report</h1>
                <div className="date-display"><FiCalendar className="icon" /> Wed, 26 Jun 2024 12:36:45 GMT</div>
            </header>

            <main className="report-content">
                {/* Summary Cards */}
                <section className="summary-cards">
                    <div className="card">
                        <FiMapPin className="card-icon purple" />
                        <div>
                            <span className="card-title">Area</span>
                            <span className="card-value">JODHPUR</span>
                        </div>
                        {/* Placeholder for map image */}
                        <div className="card-image-placeholder map"></div>
                    </div>
                    <div className="card">
                        <FaRoad className="card-icon green" />
                        <div>
                            <span className="card-title">Total Road Length</span>
                            <span className="card-value">7.75 KM (7750.00 m)</span>
                        </div>
                        <div className="card-image-placeholder road"></div>
                    </div>
                    <div className="card">
                        <FiMoreHorizontal className="card-icon orange" />
                        <div>
                            <span className="card-title">Total Defect Count</span>
                            <span className="card-value">1385</span>
                        </div>
                        <div className="card-image-placeholder defect"></div>
                    </div>
                </section>

                {/* Defects Breakdown */}
                <section className="card-layout breakdown-section">
                    <div className="breakdown-left">
                        <h2>Total Defects Breakdown and Roads Status (According to IRC Rating)</h2>
                        <div className="defects-list">
                            {Object.entries(defectBreakdown).map(([name, value]) => (
                                <div key={name} className="defect-item">
                                    <span>{name}</span>
                                    <strong>{value}</strong>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="breakdown-right">
                        {Object.entries(roadStatus).map(([status, value]) => (
                            <div key={status} className="status-item">
                                <span>{status}: <strong>{value} KM</strong></span>
                                <div className="progress-bar-container">
                                    <div className={`progress-bar ${status.toLowerCase()}`} style={{ width: `${(value / 7.75) * 100}%` }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Road Analysis Table */}
                <section className="card-layout">
                    <h2>Road Analysis</h2>
                    <table className="analysis-table">
                        <thead>
                            <tr>
                                <th>Start</th>
                                <th>End</th>
                                <th>Road Length</th>
                                <th>Road Rating</th>
                                <th>Defect</th>
                            </tr>
                        </thead>
                        <tbody>
                            {roadAnalysisData.map(row => <RoadAnalysisRow key={row.id} row={row} />)}
                        </tbody>
                    </table>
                </section>

                {/* Charts Section */}
                <section className="charts-section">
                    <div className="card-layout chart-card">
                        <ResponsiveContainer width="100%" height={200}>
                            <PieChart>
                                <Pie data={donutChartData1} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#8884d8" label>
                                    {donutChartData1.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                        <p className="chart-label">12th Rd Cir, Sardarpura, Jodhpur... <strong>1 defects</strong></p>
                    </div>
                     <div className="card-layout chart-card">
                        <ResponsiveContainer width="100%" height={200}>
                            <PieChart>
                                <Pie data={donutChartData2} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#8884d8">
                                    {donutChartData2.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                         <p className="chart-label">Defects by Type</p>
                    </div>
                </section>
                 <section className="charts-section">
                     <div className="card-layout chart-card">
                        <h3>Settlements, Raveling, and Shoving Comparison</h3>
                        <ResponsiveContainer width="100%" height={300}>
                             <BarChart data={barChartData1} layout="vertical">
                                 <XAxis type="number" />
                                 <YAxis type="category" dataKey="name" />
                                <Bar dataKey="value" fill="#8884d8" />
                             </BarChart>
                        </ResponsiveContainer>
                     </div>
                     <div className="card-layout chart-card">
                        <h3>Cracks, Potholes, and Rut Comparison</h3>
                        <ResponsiveContainer width="100%" height={300}>
                             <BarChart data={barChartData2} layout="vertical">
                                 <XAxis type="number" />
                                 <YAxis type="category" dataKey="name" />
                                <Bar dataKey="value" fill="#82ca9d" />
                             </BarChart>
                        </ResponsiveContainer>
                     </div>
                 </section>
            </main>
        </div>
    );
};

export default FinalReportPage;