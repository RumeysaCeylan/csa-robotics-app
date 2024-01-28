import './App.css';
import Dashboard from './containers/Dasboard';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmergencyStop from './components/EmergencyStop';
import ToolBar from './components/ToolBar';
import Control from './containers/Control';
import Settings from './containers/Settings';
import Logs from './containers/Logs';
import Mapping from './containers/Mapping';
import LogoBar from './components/LogoBar';




function App() {

  return (
    <div className="App" >
     <Router>
      
      <Dashboard />
      <ToolBar />
        <main style={{ marginLeft: '150px', padding: '10px' }}>
        
          <Routes>
            <Route path="/" element={<Control />} />
            <Route path="/logs" element={<Logs />} />
            <Route path="/mapping" element={<Mapping />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
        <EmergencyStop />
      </Router>
    </div>
  );
}

export default App;
