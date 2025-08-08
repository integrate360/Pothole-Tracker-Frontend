// src/pages/BudgetCalculator.jsx
import Header from '../components/Header';
import { useState } from 'react';

const BudgetCalculator = () => {
    const [finalCost, setFinalCost] = useState(0);

    const defects = [
        { name: 'Raveling', found: 162, estCost: 900 },
        { name: 'Rut', found: 5, estCost: 1000 },
        { name: 'Crack', found: 38, estCost: 1200 },
        { name: 'Pothole', found: 13, estCost: 1500 },
        { name: 'Shoving', found: 0, estCost: 2000 },
    ];

    const handleCheckboxChange = (e) => {
        const cost = parseInt(e.target.value);
        if (e.target.checked) {
            setFinalCost(prev => prev + cost);
        } else {
            setFinalCost(prev => prev - cost);
        }
    };

    return (
        <>
            <Header />
            <div className="page-container">
                <h2>Budget Calculator</h2>
                <div style={{display: 'flex', gap: '2rem'}}>
                    <div style={{flex: 1}}>
                        <h4>Select the roads you want to repair</h4>
                        {/* Road selection list */}
                    </div>
                    <div style={{flex: 2}}>
                        <h4>Which defects do you wish to repair?</h4>
                        <div className="table-wrapper">
                            <table>
                                <thead><tr><th></th><th>Defects</th><th>Found</th><th>Est. Cost</th><th>Cost</th></tr></thead>
                                <tbody>
                                    {defects.map(d => (
                                        <tr key={d.name}>
                                            <td><input type="checkbox" value={d.found * d.estCost} onChange={handleCheckboxChange} /></td>
                                            <td>{d.name}</td>
                                            <td>{d.found}</td>
                                            <td>₹{d.estCost}</td>
                                            <td>₹{(d.found * d.estCost).toLocaleString()}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <h3 style={{textAlign: 'right', marginTop: '1rem'}}>Total Road Length: 1.29 km | Final Cost: ₹{finalCost.toLocaleString()}</h3>
                    </div>
                </div>
            </div>
        </>
    );
};
export default BudgetCalculator;