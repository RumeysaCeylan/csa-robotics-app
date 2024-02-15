import React, { useState } from 'react';
import '../ControlPanel.css';
import { RosComponent } from '../services/RosConnection';

const Control = () => {

  const [message, setMessage] = useState('');
  const [connectionStatus, setConnectionStatus] = useState(''); // Bağlantı durumu

  RosComponent(setMessage,setConnectionStatus);

  const [drivingMode, setDrivingMode] = useState(null);


  // Manuel ve Otonom sürüş modlarını ayarlayan fonksiyonlar
  const handleManualDriving = () => {
    setDrivingMode('manual');
  };

  const handleAutonomousDriving = () => {
    setDrivingMode('autonomous');
  };

  // Başlangıç hızını tutacak state
  const [speed, setSpeed] = useState(0);
  const [isAutonomousDriving, setIsAutonomousDriving] = useState(false);
  // Otonom sürüşü başlat ve durdur için fonksiyonlar
  const startAutonomousDriving = () => {
    console.log("Otonom sürüş başlatıldı, hız:", speed);
    setIsAutonomousDriving(true);
    // Burada ROS'a başlangıç hızı ile birlikte otonom sürüşü başlatma komutu gönderilebilir
  };

  const stopAutonomousDriving = () => {
    console.log("Otonom sürüş durduruldu");
    setIsAutonomousDriving(false);
    // Burada ROS'a otonom sürüşü durdurma komutu gönderilebilir
  };

  // Başlangıç hızını güncelleyecek olay işleyicisi
  const handleSpeedChange = (event) => {
    if (event.target.value>=0 && event.target.value<=5)
    {
      setSpeed(event.target.value);
    }
    else
    {
      alert("Geçerli bir hız değeri girin!");
    }
  };

  if (connectionStatus !== 'connected')
  {
    return <div className='connection-page'>ROS has not been connected.</div>;
  }

  return (
  <div className="control-panel">
      <button className='button-choose' style={{ backgroundColor: drivingMode === 'manual' ? '	#0277BD' : 'orange' }} onClick={handleManualDriving}>Manuel Driving</button>
      <button className='button-choose' style={{ backgroundColor: drivingMode === 'autonomous' ? '	#F4511E' : 'orange' }} onClick={handleAutonomousDriving}>Autonomous Driving</button>
      
      {drivingMode === 'manual' && (
        <div className="control-panel-buttons">
         
          <button className='button-ileri'>↑</button>
          <button className='button-sol'>←</button>
          <button className='button-sağ'>→</button>
          <button className='button-geri'>↓</button>
          <button className='button-dur'>Stop</button>
        </div>
      )}



      {drivingMode === 'autonomous' && (
      <div className='autonomus'>
        <label className="speed-input">
          Başlangıç Hızı:
        <input type="number" value={speed} onChange={handleSpeedChange} />
        </label>
        <button className='button-control' onClick={startAutonomousDriving} disabled={isAutonomousDriving} 
            style={{ backgroundColor: isAutonomousDriving ? 'red' : 'orange' }}>Start Autonomous Driving</button>
        <button className='button-control' onClick={stopAutonomousDriving} disabled={!isAutonomousDriving}>Stop Autonomous Driving</button>
        <p> {message}</p>

      </div>
       )}
  </div>
);
};

export default Control;
