import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} /> {/* Login shows first */}
        <Route path="/home" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <div className="flex">
              <Sidebar />
              <div className="flex-1 ml-64">
                <Navbar />
                <Dashboard />
              </div>
            </div>
          }
        />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/sidebar" element={<Sidebar />} />
      </Routes>
    </Router>
  );
}

export default App;
