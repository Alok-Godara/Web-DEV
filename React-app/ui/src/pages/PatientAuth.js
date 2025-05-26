import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import '../styles/Auth.css';

const PatientAuth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const { darkMode } = useTheme();

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isLogin) {
      // For login, go directly to the patient home page
      navigate('/patient-home');
    } else {
      // For signup, navigate to terms and conditions
      navigate('/terms', { state: { userType: 'patient' } });
    }
  };

  return (
    <div className={`auth-container ${darkMode ? 'dark-theme' : ''}`}>
      <div className="auth-card">
        <h2 className="auth-title">{isLogin ? 'Patient Login' : 'Patient Sign Up'}</h2>
        
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              placeholder="Enter your email"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              placeholder="Enter your password"
              required
            />
          </div>
          
          {!isLogin && (
            <>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input 
                  type="password" 
                  id="confirmPassword" 
                  placeholder="Confirm your password"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="age">Age</label>
                <input 
                  type="number" 
                  id="age" 
                  placeholder="Your age"
                  required
                  min="1"
                  max="120"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="bloodGroup">Blood Group</label>
                <select id="bloodGroup" required>
                  <option value="">Select blood group</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
              </div>
            </>
          )}
          
          <button type="submit" className="auth-button">
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>
        
        <p className="auth-toggle">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <span onClick={toggleAuthMode} className="toggle-link">
            {isLogin ? 'Sign Up' : 'Login'}
          </span>
        </p>
        
        <button 
          className="back-button"
          onClick={() => navigate('/')}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default PatientAuth; 