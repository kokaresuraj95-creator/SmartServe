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
        
        {/* Rain Effect */}
        <div className="rain" aria-hidden="true">
          {Array.from({ length: 150 }, (_, i) => (
            <span
              key={i}
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${1 + Math.random() * 1.5}s`,
                height: `${40 + Math.random() * 60}px`,
                opacity: 0.15 + Math.random() * 0.25,
                width: `${1 + Math.random() * 2}px`,
              }}
            />
          ))}
        </div>
        
        {/* Dust Particles */}
        <div className="dust" aria-hidden="true">
          {Array.from({ length: 40 }, (_, i) => (
            <i
              key={i}
              style={{
                left: `${(i * 29) % 100}%`,
                top: `${(i * 43) % 100}%`,
                animationDelay: `${(i % 12) * 0.4}s`,
                width: `${2 + (i % 4)}px`,
                height: `${2 + (i % 4)}px`,
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