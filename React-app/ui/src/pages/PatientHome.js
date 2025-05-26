import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import '../styles/Dashboard.css';
import '../styles/PatientDashboard.css';

const PatientHome = () => {
  const navigate = useNavigate();
  const { darkMode } = useTheme();
  const [activeContent, setActiveContent] = useState('dashboard');
  const [uploadType, setUploadType] = useState(null);
  
  // Mock data for scanned documents
  const [scannedDocuments, setScannedDocuments] = useState([
    { id: 1, name: 'Medical Report', date: '2023-05-15', type: 'PDF' },
    { id: 2, name: 'X-Ray Result', date: '2023-06-02', type: 'Image' },
    { id: 3, name: 'Lab Test', date: '2023-07-10', type: 'PDF' },
    { id: 4, name: 'Prescription', date: '2023-08-22', type: 'Image' },
  ]);

  const handleLogout = () => {
    // In a real app, you would clear authentication tokens/cookies here
    navigate('/');
  };
  
  const handleFileUpload = (e) => {
    // Handle file upload logic
    console.log('File uploaded:', e.target.files[0]);
    
    if (e.target.files[0]) {
      const newDocument = {
        id: scannedDocuments.length + 1,
        name: e.target.files[0].name,
        date: new Date().toISOString().split('T')[0],
        type: e.target.files[0].type.includes('pdf') ? 'PDF' : 'Image'
      };
      
      setScannedDocuments([...scannedDocuments, newDocument]);
      setUploadType(null);
      setActiveContent('view');
    }
  };
  
  const captureImage = () => {
    // This would typically access the device camera
    alert('Camera access would be implemented here in a real app');
    
    // Mock document creation after "capture"
    const newDocument = {
      id: scannedDocuments.length + 1,
      name: `Captured Image ${new Date().toLocaleTimeString()}`,
      date: new Date().toISOString().split('T')[0],
      type: 'Image'
    };
    
    setScannedDocuments([...scannedDocuments, newDocument]);
    setUploadType(null);
    setActiveContent('view');
  };

  const renderContent = () => {
    switch (activeContent) {
      case 'view':
        return (
          <div className="document-list">
            <h2>Your Scanned Documents</h2>
            
            {scannedDocuments.length === 0 ? (
              <div className="empty-state">
                <p>You haven't scanned any documents yet.</p>
                <button className="primary-button" onClick={() => setActiveContent('scan')}>
                  Scan Your First Document
                </button>
              </div>
            ) : (
              <>
                <div className="document-list-header">
                  <span>Name</span>
                  <span>Date</span>
                  <span>Type</span>
                  <span>Actions</span>
                </div>
                
                {scannedDocuments.map((doc) => (
                  <div className="document-item" key={doc.id}>
                    <span className="document-name">{doc.name}</span>
                    <span className="document-date">{doc.date}</span>
                    <span className={`document-type ${doc.type.toLowerCase()}`}>
                      {doc.type}
                    </span>
                    <div className="document-actions">
                      <button className="action-button">View</button>
                      <button className="action-button">Share</button>
                      <button className="action-button delete">Delete</button>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        );
      
      case 'scan':
        return (
          <div className="scan-options">
            <h2>Scan a Document</h2>
            
            {uploadType ? (
              <div className="upload-area">
                {uploadType === 'file' ? (
                  <>
                    <h3>Upload a Document</h3>
                    <div className="file-drop-area">
                      <p>Drag and drop files here or click to browse</p>
                      <input 
                        type="file" 
                        accept="image/*,application/pdf" 
                        onChange={handleFileUpload} 
                      />
                    </div>
                    <button 
                      className="secondary-button" 
                      onClick={() => setUploadType(null)}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <h3>Capture Image</h3>
                    <div className="camera-area">
                      <div className="camera-placeholder">
                        <p>Camera preview would appear here</p>
                      </div>
                      <button 
                        className="primary-button"
                        onClick={captureImage}
                      >
                        Take Photo
                      </button>
                      <button 
                        className="secondary-button" 
                        onClick={() => setUploadType(null)}
                      >
                        Cancel
                      </button>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <div className="scan-methods">
                <div className="scan-method-card" onClick={() => setUploadType('file')}>
                  <div className="icon">📄</div>
                  <h3>Upload File</h3>
                  <p>Upload a PDF or an image from your device</p>
                </div>
                
                <div className="scan-method-card" onClick={() => setUploadType('camera')}>
                  <div className="icon">📸</div>
                  <h3>Capture Image</h3>
                  <p>Use your camera to take a photo</p>
                </div>
              </div>
            )}
          </div>
        );
      
      case 'profile':
        return (
          <div className="profile-content">
            <h2>Your Profile</h2>
            <div className="profile-info">
              <div className="profile-details">
                <div className="profile-field">
                  <label>Name</label>
                  <input type="text" value="Jane Smith" readOnly />
                </div>
                <div className="profile-field">
                  <label>Email</label>
                  <input type="email" value="jane.smith@example.com" readOnly />
                </div>
                <div className="profile-field">
                  <label>Age</label>
                  <input type="number" value="32" readOnly />
                </div>
                <div className="profile-field">
                  <label>Blood Group</label>
                  <input type="text" value="A+" readOnly />
                </div>
                <button className="primary-button">Edit Profile</button>
              </div>
            </div>
          </div>
        );
      
      case 'settings':
        return (
          <div className="settings-content">
            <h2>Settings</h2>
            <div className="settings-section">
              <h3>Account Settings</h3>
              <div className="settings-option">
                <span>Email Notifications</span>
                <label className="toggle">
                  <input type="checkbox" />
                  <span className="toggle-slider"></span>
                </label>
              </div>
              <div className="settings-option">
                <span>Two-Factor Authentication</span>
                <label className="toggle">
                  <input type="checkbox" />
                  <span className="toggle-slider"></span>
                </label>
              </div>
            </div>
            
            <div className="settings-section">
              <h3>Privacy Settings</h3>
              <div className="settings-option">
                <span>Share Medical Data with Doctors</span>
                <label className="toggle">
                  <input type="checkbox" defaultChecked />
                  <span className="toggle-slider"></span>
                </label>
              </div>
              <div className="settings-option">
                <span>Allow Appointment Reminders</span>
                <label className="toggle">
                  <input type="checkbox" defaultChecked />
                  <span className="toggle-slider"></span>
                </label>
              </div>
            </div>
          </div>
        );
      
      default:
        return (
          <div className="dashboard-content">
            <div className="welcome-card">
              <h2>Welcome to Project-H!</h2>
              <p>This is your patient dashboard. You can view your scanned documents or scan new ones.</p>
            </div>
            
            <div className="action-cards">
              <div className="action-card" onClick={() => setActiveContent('view')}>
                <div className="action-icon">📋</div>
                <h3>View Documents</h3>
                <p>Access your previously scanned documents</p>
              </div>
              
              <div className="action-card" onClick={() => setActiveContent('scan')}>
                <div className="action-icon">🔍</div>
                <h3>Scan Document</h3>
                <p>Upload a new document or capture an image</p>
              </div>
            </div>
            
            <div className="dashboard-stats">
              <div className="stat-card">
                <h3>Document Count</h3>
                <p className="stat-number">{scannedDocuments.length}</p>
              </div>
              <div className="stat-card">
                <h3>Upcoming Appointments</h3>
                <p className="stat-number">2</p>
              </div>
              <div className="stat-card">
                <h3>New Messages</h3>
                <p className="stat-number">1</p>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className={`dashboard-container ${darkMode ? 'dark-theme' : ''}`}>
      <div className="dashboard-sidebar">
        <div className="sidebar-header">
          <h2>Project-H</h2>
        </div>
        <ul className="sidebar-menu">
          <li 
            className={activeContent === 'dashboard' ? 'active' : ''} 
            onClick={() => setActiveContent('dashboard')}
          >
            Dashboard
          </li>
          <li 
            className={activeContent === 'view' ? 'active' : ''} 
            onClick={() => setActiveContent('view')}
          >
            View Documents
          </li>
          <li 
            className={activeContent === 'scan' ? 'active' : ''} 
            onClick={() => setActiveContent('scan')}
          >
            Scan Document
          </li>
          <li 
            className={activeContent === 'profile' ? 'active' : ''} 
            onClick={() => setActiveContent('profile')}
          >
            Profile
          </li>
          <li 
            className={activeContent === 'settings' ? 'active' : ''} 
            onClick={() => setActiveContent('settings')}
          >
            Settings
          </li>
          <li className="logout" onClick={handleLogout}>Logout</li>
        </ul>
      </div>
      
      <div className="dashboard-main">
        <div className="dashboard-header">
          <h1>
            {activeContent === 'dashboard' && 'Patient Dashboard'}
            {activeContent === 'view' && 'Document Viewer'}
            {activeContent === 'scan' && 'Scan Documents'}
            {activeContent === 'profile' && 'My Profile'}
            {activeContent === 'settings' && 'Settings'}
          </h1>
          <div className="user-info">
            <span>Jane Smith</span>
            <div className="avatar">
              <span>JS</span>
            </div>
          </div>
        </div>
        
        {renderContent()}
      </div>
    </div>
  );
};

export default PatientHome; 