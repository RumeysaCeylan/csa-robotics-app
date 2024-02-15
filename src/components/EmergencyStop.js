import React from 'react';


const EmergencyStop = () => {
   
    const handleEmergencyStop = () => {
    console.log('Acil Stop Aktif!');
    // ros ile iletişim burada kurulacak
    };
      
  return (
    <button onClick={handleEmergencyStop} className="emergency-stop">Acil Stop</button>
  );
};

export default EmergencyStop;
