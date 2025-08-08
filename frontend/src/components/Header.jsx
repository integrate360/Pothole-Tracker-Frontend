// src/components/Header.jsx
import { useNavigate } from 'react-router-dom';
import logo from '../assets/roadvisionlogo.svg'; // Make sure you have a logo image

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header-logo" onClick={() => navigate('/dashboard')} style={{ cursor: 'pointer' }}>
        <img src={logo} alt="RoadVision AI Logo" style={{width: '40px', verticalAlign: 'middle', marginRight: '10px'}}/>
        <span style={{verticalAlign: 'middle'}}>ROADVISION AI</span>
      </div>
      <div className="header-actions">
        <button className="btn btn-secondary" onClick={() => navigate('/users')}>Users</button>
        <button className="btn btn-secondary" onClick={() => navigate('/tasks')}>Tasks</button>
        <button className="btn btn-primary" onClick={() => navigate('/')}>Logout</button>
      </div>
    </header>
  );
};

export default Header;