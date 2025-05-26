import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import '../styles/TermsAndConditions.css';

const TermsAndConditions = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { darkMode } = useTheme();
  const userType = location.state?.userType || 'user';
  
  const handleAgree = () => {
    // Navigate to the appropriate dashboard based on user type
    if (userType === 'doctor') {
      navigate('/doctor-home');
    } else {
      navigate('/patient-home');
    }
  };

  return (
    <div className={`terms-container ${darkMode ? 'dark-theme' : ''}`}>
      <div className="terms-card">
        <h2 className="terms-title">Terms and Conditions</h2>
        
        <div className="terms-content">
          <h3>Project-H Healthcare Platform Agreement</h3>
          
          <div className="terms-section">
            <h4>1. Acceptance of Terms</h4>
            <p>
              By accessing and using the Project-H platform, you agree to be bound by these Terms and 
              Conditions, our Privacy Policy, and any other terms or policies referenced herein.
            </p>
          </div>
          
          <div className="terms-section">
            <h4>2. User Accounts</h4>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials
              and for all activities that occur under your account. You agree to notify us immediately
              of any unauthorized use of your account.
            </p>
          </div>
          
          <div className="terms-section">
            <h4>3. Privacy and Data Protection</h4>
            <p>
              We collect and process personal information as described in our Privacy Policy. 
              By using Project-H, you consent to such processing and warrant that all data provided by you is accurate.
            </p>
          </div>
          
          <div className="terms-section">
            <h4>4. Healthcare Disclaimer</h4>
            <p>
              The information provided on Project-H is for general informational purposes only and is not
              intended as a substitute for professional medical advice, diagnosis, or treatment. Always seek
              the advice of your physician with any questions regarding a medical condition.
            </p>
          </div>
          
          <div className="terms-section">
            <h4>5. Limitation of Liability</h4>
            <p>
              Project-H and its affiliates shall not be liable for any indirect, incidental, special, 
              consequential, or punitive damages resulting from your access to or use of, or inability to 
              access or use, the platform or any content provided on or through the platform.
            </p>
          </div>
          
          <div className="terms-section">
            <h4>6. Termination</h4>
            <p>
              We reserve the right to terminate or suspend your account and access to Project-H at our sole 
              discretion, without notice, for conduct that we believe violates these Terms or is harmful to 
              other users, us, or third parties, or for any other reason.
            </p>
          </div>
        </div>
        
        <button 
          className="agree-button"
          onClick={handleAgree}
        >
          Agree and Continue
        </button>
      </div>
    </div>
  );
};

export default TermsAndConditions; 