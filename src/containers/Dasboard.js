import React from 'react';
import LineBox from '../components/LineBox';

const Dashboard = () => {
  // gerçek uygulamada bu veriler cihazdan alınacak
  const data = {
    temperature: 24, // Sıcaklık
    humidity: 50,    // Nem
    battery: 75,     // Batarya yüzdesi
  };

  return (
    <div style={{
      color: 'white',
      padding: '10px',
    
      display : 'flex',
      justifyContent: 'right',
      
     
  
    }}>
      
      <LineBox title="Temperature" value={data.temperature} unit="°C" />
      <LineBox title="Humidity" value={data.humidity} unit="%" />
      <LineBox title="Battery" value={data.battery} unit="%" />
      <LineBox title="Humidity" value={data.humidity} unit="%" />
      <LineBox title="Battery" value={data.battery} unit="%" />
      
    </div>
  );
};

export default Dashboard;
