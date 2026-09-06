import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import CreateRequest from './pages/CreateRequest';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        {/* Background Effects */}
        <div className="bg-orb orb-one" />
        <div className="bg-orb orb-two" />
        <div className="bg-orb orb-three" />
        <div className="ambient-glow glow-purple" />
        <div className="ambient-glow glow-blue" />
        <div className="grid-bg" />
        
        {/* ===== RAIN EFFECT ===== */}
        <div className="rain" aria-hidden="true">
          {Array.from({ length: 120 }, (_, index) => (
            <span
              key={index}
              style={{
                left: `${(index * 17) % 100}%`,
                animationDelay: `${(index % 25) * 0.15}s`,
                animationDuration: `${1.6 + (index % 10) * 0.2}s`,
                height: `${50 + (index % 40)}px`,
                opacity: `${0.2 + (index % 5) * 0.1}`,
              }}
            />
          ))}
        </div>
        
        {/* Dust Particles */}
        <div className="dust" aria-hidden="true">
          {Array.from({ length: 40 }, (_, index) => (
            <i
              key={index}
              style={{
                left: `${(index * 29) % 100}%`,
                top: `${(index * 43) % 100}%`,
                animationDelay: `${(index % 12) * 0.4}s`,
                width: `${2 + (index % 3)}px`,
                height: `${2 + (index % 3)}px`,
              }}
            />
          ))}
        </div>
        
        <div className="cinematic-vignette" />

        {/* Content */}
        <div className="content-layer">
          <Navbar />
          
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/requests/new" element={<CreateRequest />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;