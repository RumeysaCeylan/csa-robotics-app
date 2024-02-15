import './App.css';
import Dashboard from './containers/Dasboard';
import React, { useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmergencyStop from './components/EmergencyStop';
import ToolBar from './components/ToolBar';
import Control from './containers/Control';
import Settings from './containers/Settings';
import Logs from './containers/Logs';
import Mapping from './containers/Mapping';
//import LogoBar from './components/LogoBar';
//import SomeComponent from './components/SomeComponents';




function App() {
  useEffect(() => {
    document.title = "CSA ROBOTICS"; 
  }, []); 
  return (
    <div className="App" >
     <Router>
      
      <Dashboard />
      <ToolBar />
      
        <main style={{ marginLeft: '150px', padding: '100px' }}>
        
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
/*
 <div >
          <SomeComponent/>

        </div>
*/