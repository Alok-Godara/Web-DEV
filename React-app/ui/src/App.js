import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import DoctorAuth from './pages/DoctorAuth';
import PatientAuth from './pages/PatientAuth';
import TermsAndConditions from './pages/TermsAndConditions';
import DoctorHome from './pages/DoctorHome';
import PatientHome from './pages/PatientHome';
import ThemeToggle from './components/ThemeToggle';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';

// Wrapper component that adds the ThemeToggle to each route
const AppContent = () => {
  const { darkMode, setDarkMode } = useTheme();
  
  return (
    <>
      <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className={`App ${darkMode ? 'dark-theme' : ''}`}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/doctor-auth" element={<DoctorAuth />} />
          <Route path="/patient-auth" element={<PatientAuth />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/doctor-home" element={<DoctorHome />} />
          <Route path="/patient-home" element={<PatientHome />} />
        </Routes>
      </div>
    </>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
