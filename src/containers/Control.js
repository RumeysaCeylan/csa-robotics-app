import React, { useState } from 'react';
import '../ControlPanel.css';

const Control = () => {
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

  return (
    <div className="control-panel">
    <label className="speed-input">
      Başlangıç Hızı:
      <input type="number" value={speed} onChange={handleSpeedChange} />
    </label>
    <button className='button-control' onClick={startAutonomousDriving} disabled={isAutonomousDriving} 
        style={{ backgroundColor: isAutonomousDriving ? 'red' : 'orange' }}
      >Start Autonomous Driving</button>
    <button className='button-control' onClick={stopAutonomousDriving} disabled={!isAutonomousDriving}>Stop Autonomous Driving</button>
  </div>
);
};

export default Control;
