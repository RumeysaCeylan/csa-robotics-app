import React from 'react';


const EmergencyStop = () => {
    // Acil durumda çalıştırılacak fonksiyon
    const handleEmergencyStop = () => {
    console.log('Acil Stop Aktif!');
    // Burada ROS ile iletişim kurma işlevselliğinizi ekleyebilirsiniz
    };
      
  return (
    <button onClick={handleEmergencyStop} className="emergency-stop">Acil Stop</button>
  );
};

export default EmergencyStop;
