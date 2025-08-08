// src/pages/Login.jsx
import { useNavigate } from 'react-router-dom';
import logo from '../assets/roadvisionlogo.svg';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/modules');
  };

  return (
    <div className="login-page">
      <div className="login-banner">
        <h1>GIS Platform to visualize road infrastructure and for AI based data-driven insights</h1>
      </div>
      <div className="login-form-container">
        <form className="login-form" onSubmit={handleLogin}>
          <img src={logo} alt="Logo" />
          <h2>Login to RoadVision Web Portal</h2>
          <div className="form-group">
            <input type="email" id="email" defaultValue="shubham@roadvision.ai" required />
          </div>
          <div className="form-group">
            <input type="password" id="password" defaultValue="123" required />
          </div>
          <button type="submit" className="btn btn-primary">LOGIN</button>
          <button type="button" className="btn btn-secondary">REQUEST FOR NEW ACCOUNT</button>
        </form>
      </div>
    </div>
  );
};

export default Login;