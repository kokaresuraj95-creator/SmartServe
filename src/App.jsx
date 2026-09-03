import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import CreateRequest from './pages/CreateRequest';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        {/* Background Effects */}
        <div className="bg-orb orb-one" />
        <div className="bg-orb orb-two" />
        <div className="ambient-glow glow-purple" />
        <div className="ambient-glow glow-blue" />
        <div className="grid-bg" />
        
        {/* Rain */}
        <div className="rain" aria-hidden="true">
          {Array.from({ length: 90 }, (_, index) => (
            <span
              key={index}
              style={{
                left: `${(index * 17) % 100}%`,
                animationDelay: `${(index % 20) * 0.18}s`,
                animationDuration: `${1.8 + (index % 8) * 0.25}s`,
              }}
            />
          ))}
        </div>

        {/* Dust */}
        <div className="dust" aria-hidden="true">
          {Array.from({ length: 35 }, (_, index) => (
            <i
              key={index}
              style={{
                left: `${(index * 29) % 100}%`,
                top: `${(index * 43) % 100}%`,
                animationDelay: `${(index % 10) * 0.5}s`,
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