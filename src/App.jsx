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
        {/* Background Orbs */}
        <div className="bg-orb orb-one" />
        <div className="bg-orb orb-two" />
        <div className="bg-orb orb-three" />
        
        {/* Ambient Glows */}
        <div className="ambient-glow glow-purple" />
        <div className="ambient-glow glow-blue" />
        
        {/* Grid */}
        <div className="grid-bg" />
        
        {/* ===== LIVE RAIN — UPER SE NICHE ===== */}
        <div className="rain" aria-hidden="true">
          {Array.from({ length: 180 }, (_, index) => {
            const left = Math.random() * 100;
            const delay = Math.random() * 3;
            const duration = 1.2 + Math.random() * 1.5;
            const height = 40 + Math.random() * 60;
            const opacity = 0.2 + Math.random() * 0.3;
            const width = 1 + Math.random() * 2;
            
            return (
              <span
                key={index}
                style={{
                  left: `${left}%`,
                  animationDelay: `${delay}s`,
                  animationDuration: `${duration}s`,
                  height: `${height}px`,
                  opacity: opacity,
                  width: `${width}px`,
                }}
              />
            );
          })}
        </div>
        
        {/* ===== LIVE DUST — MOVEMENT ===== */}
        <div className="dust" aria-hidden="true">
          {Array.from({ length: 50 }, (_, index) => (
            <i
              key={index}
              style={{
                left: `${(index * 29) % 100}%`,
                top: `${(index * 43) % 100}%`,
                animationDelay: `${(index % 12) * 0.4}s`,
                width: `${2 + (index % 4)}px`,
                height: `${2 + (index % 4)}px`,
              }}
            />
          ))}
        </div>
        
        {/* Cinematic Vignette */}
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