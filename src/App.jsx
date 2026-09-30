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
  const rainDrops = Array.from({ length: 150 }, (_, i) => ({
    left: `${(i * 37) % 100}%`,
    animationDelay: `${(i * 17) % 30 / 10}s`,
    animationDuration: `${1 + (i * 13) % 15 / 10}s`,
    height: `${40 + (i * 19) % 60}px`,
    opacity: 0.15 + (i % 5) * 0.05,
    width: `${1 + i % 2}px`,
  }));

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
          {rainDrops.map((style, i) => (
            <span key={i} style={style} />
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