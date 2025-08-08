// src/pages/ModuleSelection.jsx
import { useNavigate } from 'react-router-dom';
import logo from '../assets/roadvisionlogo.svg';

const ModuleSelection = () => {
    const navigate = useNavigate();
    const modules = [
        "Pavement Condition Audit",
        "Construction Progress Monitoring",
        "Inventory Management",
        "Safety Compliance",
        "Road Imagery Upload",
        "RoadGPT"
    ];

    const selectModule = () => {
        // In the video, only Pavement Condition Audit is clickable
        navigate('/dashboard');
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#f0f2f5' }}>
            <div className="login-form" style={{textAlign: 'center'}}>
                <img src={logo} alt="Logo"/>
                <h3>Welcome to RoadVision Ai</h3>
                <p>Select a module to continue</p>
                <div style={{margin: '2rem 0'}}>
                    {modules.map((module, index) => (
                        <button key={index} onClick={selectModule} className="btn btn-secondary" style={{width: '100%', marginBottom: '1rem', textAlign: 'left'}}>
                            {module}
                        </button>
                    ))}
                </div>
                 <button onClick={selectModule} className="btn btn-primary">CONTINUE</button>
            </div>
        </div>
    );
};

export default ModuleSelection;