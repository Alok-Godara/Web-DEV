import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import '../styles/Dashboard.css';
import '../styles/DoctorDashboard.css';

const DoctorHome = () => {
  const navigate = useNavigate();
  const { darkMode } = useTheme();
  const [activeContent, setActiveContent] = useState('dashboard');
  const [selectedPatient, setSelectedPatient] = useState(null);
  
  // Mock data for patients
  const [patients, setPatients] = useState([
    { 
      id: 'PT10023', 
      name: 'Jane Smith', 
      age: 34, 
      gender: 'Female',
      bloodGroup: 'A+',
      lastVisit: '2023-12-15',
      documents: [
        { id: 1, name: 'Medical Report', date: '2023-11-15', type: 'PDF' },
        { id: 2, name: 'X-Ray Result', date: '2023-12-02', type: 'Image' },
      ]
    },
    { 
      id: 'PT10045', 
      name: 'John Doe', 
      age: 42, 
      gender: 'Male',
      bloodGroup: 'O+',
      lastVisit: '2023-12-10',
      documents: [
        { id: 1, name: 'Blood Test Report', date: '2023-12-10', type: 'PDF' },
        { id: 2, name: 'MRI Scan', date: '2023-11-05', type: 'Image' },
        { id: 3, name: 'Prescription', date: '2023-12-10', type: 'PDF' },
      ]
    },
    { 
      id: 'PT10078', 
      name: 'Emma Wilson', 
      age: 29, 
      gender: 'Female',
      bloodGroup: 'B-',
      lastVisit: '2023-12-05',
      documents: [
        { id: 1, name: 'Allergy Test', date: '2023-11-30', type: 'PDF' },
      ]
    },
    { 
      id: 'PT10096', 
      name: 'Robert Brown', 
      age: 56, 
      gender: 'Male',
      bloodGroup: 'AB+',
      lastVisit: '2023-11-22',
      documents: [
        { id: 1, name: 'Cardiology Report', date: '2023-11-22', type: 'PDF' },
        { id: 2, name: 'ECG Results', date: '2023-11-22', type: 'Image' },
        { id: 3, name: 'Medication History', date: '2023-10-15', type: 'PDF' },
      ]
    },
    { 
      id: 'PT10112', 
      name: 'Sarah Johnson', 
      age: 38, 
      gender: 'Female',
      bloodGroup: 'O-',
      lastVisit: '2023-12-08',
      documents: []
    }
  ]);

  const handleLogout = () => {
    // In a real app, you would clear authentication tokens/cookies here
    navigate('/');
  };
  
  const handlePatientClick = (patient) => {
    setSelectedPatient(patient);
    setActiveContent('patientDocuments');
  };

  const renderContent = () => {
    switch (activeContent) {
      case 'patientDocuments':
        if (!selectedPatient) {
          return <div>No patient selected</div>;
        }
        
        return (
          <div className="patient-documents">
            <div className="patient-info-card">
              <div className="patient-header">
                <h2>{selectedPatient.name}'s Medical Records</h2>
                <button 
                  className="secondary-button"
                  onClick={() => setActiveContent('dashboard')}
                >
                  Back to Patient List
                </button>
              </div>
              
              <div className="patient-details">
                <div className="detail-item">
                  <span className="detail-label">Patient ID:</span>
                  <span className="detail-value">{selectedPatient.id}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Age:</span>
                  <span className="detail-value">{selectedPatient.age}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Gender:</span>
                  <span className="detail-value">{selectedPatient.gender}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Blood Group:</span>
                  <span className="detail-value">{selectedPatient.bloodGroup}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Last Visit:</span>
                  <span className="detail-value">{selectedPatient.lastVisit}</span>
                </div>
              </div>
            </div>
            
            <div className="document-section">
              <h3>Scanned Documents</h3>
              
              {selectedPatient.documents.length === 0 ? (
                <div className="empty-state">
                  <p>No documents available for this patient.</p>
                </div>
              ) : (
                <>
                  <div className="document-list-header">
                    <span>Name</span>
                    <span>Date</span>
                    <span>Type</span>
                    <span>Actions</span>
                  </div>
                  
                  {selectedPatient.documents.map((doc) => (
                    <div className="document-item" key={doc.id}>
                      <span className="document-name">{doc.name}</span>
                      <span className="document-date">{doc.date}</span>
                      <span className={`document-type ${doc.type.toLowerCase()}`}>
                        {doc.type}
                      </span>
                      <div className="document-actions">
                        <button className="action-button">View</button>
                        <button className="action-button">Print</button>
                        <button className="action-button">Download</button>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
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
                  <input type="text" value="Dr. John Doe" readOnly />
                </div>
                <div className="profile-field">
                  <label>Email</label>
                  <input type="email" value="dr.john.doe@projecth.com" readOnly />
                </div>
                <div className="profile-field">
                  <label>Specialization</label>
                  <input type="text" value="Cardiology" readOnly />
                </div>
                <div className="profile-field">
                  <label>License Number</label>
                  <input type="text" value="MED56789" readOnly />
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
                  <input type="checkbox" defaultChecked />
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
                <span>Show Online Status</span>
                <label className="toggle">
                  <input type="checkbox" defaultChecked />
                  <span className="toggle-slider"></span>
                </label>
              </div>
              <div className="settings-option">
                <span>Automatic Document Analysis</span>
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
              <h2>Welcome to Project-H, Dr. John!</h2>
              <p>Your patient management dashboard. Click on a patient to view their documents and medical records.</p>
            </div>
            
            <div className="dashboard-stats">
              <div className="stat-card">
                <h3>Total Patients</h3>
                <p className="stat-number">{patients.length}</p>
              </div>
              <div className="stat-card">
                <h3>Today's Appointments</h3>
                <p className="stat-number">3</p>
              </div>
              <div className="stat-card">
                <h3>New Reports</h3>
                <p className="stat-number">7</p>
              </div>
            </div>

            <div className="patients-list-container">
              <h3>Your Patients</h3>
              <div className="search-bar">
                <input type="text" placeholder="Search patients by name or ID..." />
                <button className="search-button">Search</button>
              </div>
              
              <div className="patients-list">
                <div className="patients-list-header">
                  <span>Patient ID</span>
                  <span>Name</span>
                  <span>Age</span>
                  <span>Gender</span>
                  <span>Blood Group</span>
                  <span>Last Visit</span>
                  <span>Actions</span>
                </div>
                
                {patients.map((patient) => (
                  <div 
                    className="patient-item" 
                    key={patient.id}
                    onClick={() => handlePatientClick(patient)}
                  >
                    <span className="patient-id">{patient.id}</span>
                    <span className="patient-name">{patient.name}</span>
                    <span>{patient.age}</span>
                    <span>{patient.gender}</span>
                    <span>{patient.bloodGroup}</span>
                    <span>{patient.lastVisit}</span>
                    <div className="patient-actions">
                      <button className="action-button" onClick={(e) => {
                        e.stopPropagation();
                        handlePatientClick(patient);
                      }}>
                        View Documents
                      </button>
                    </div>
                  </div>
                ))}
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
            className={activeContent === 'dashboard' || activeContent === 'patientDocuments' ? 'active' : ''} 
            onClick={() => setActiveContent('dashboard')}
          >
            Patients
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
            {activeContent === 'dashboard' && 'Doctor Dashboard'}
            {activeContent === 'patientDocuments' && 'Patient Documents'}
            {activeContent === 'profile' && 'My Profile'}
            {activeContent === 'settings' && 'Settings'}
          </h1>
          <div className="user-info">
            <span>Dr. John Doe</span>
            <div className="avatar">
              <span>JD</span>
            </div>
          </div>
        </div>
        
        {renderContent()}
      </div>
    </div>
  );
};

export default DoctorHome; 