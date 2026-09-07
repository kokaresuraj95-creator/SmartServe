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
        {/* ===== OPTIMIZED BACKGROUND SYSTEM ===== */}
        
        {/* Animated Gradient Background */}
        <div className="bg-gradient-animated" />
        
        {/* Grid Background */}
        <div className="grid-bg" />
        
        {/* Advanced Orbs */}
        <div className="bg-orb orb-one" />
        <div className="bg-orb orb-two" />
        <div className="bg-orb orb-three" />
        <div className="bg-orb orb-four" />
        
        {/* Ambient Glows */}
        <div className="ambient-glow glow-purple" />
        <div className="ambient-glow glow-blue" />
        <div className="ambient-glow glow-pink" />
        
        {/* ===== LIVE RAIN EFFECT ===== */}
        <div className="rain" aria-hidden="true">
          {Array.from({ length: 200 }, (_, index) => {
            const left = Math.random() * 100;
            const delay = Math.random() * 3.5;
            const duration = 1.0 + Math.random() * 1.8;
            const height = 50 + Math.random() * 70;
            const opacity = 0.2 + Math.random() * 0.3;
            const width = 1 + Math.random() * 2.5;
            
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
        
        {/* ===== SHOOTING STARS ===== */}
        <div className="shooting-stars" aria-hidden="true">
          {Array.from({ length: 6 }, (_, index) => (
            <div
              key={index}
              className="shooting-star"
              style={{
                top: `${5 + Math.random() * 40}%`,
                left: `${60 + Math.random() * 35}%`,
                animationDelay: `${5 + Math.random() * 15}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
        
        {/* ===== FLOATING PARTICLES ===== */}
        <div className="floating-particles" aria-hidden="true">
          {Array.from({ length: 30 }, (_, index) => (
            <div
              key={index}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${15 + Math.random() * 20}s`,
                width: `${2 + Math.random() * 4}px`,
                height: `${2 + Math.random() * 4}px`,
              }}
            />
          ))}
        </div>
        
        {/* Dust Particles */}
        <div className="dust" aria-hidden="true">
          {Array.from({ length: 50 }, (_, index) => (
            <i
              key={index}
              style={{
                left: `${(index * 29) % 100}%`,
                top: `${(index * 43) % 100}%`,
                animationDelay: `${(index % 15) * 0.4}s`,
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