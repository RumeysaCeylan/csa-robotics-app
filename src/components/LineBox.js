import React from 'react';
// Font Awesome ikonları için importlar
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThermometerHalf, faTint, faBatteryHalf } from '@fortawesome/free-solid-svg-icons';

const LineBox = ({ icon, value, unit, title }) => {
  // İkonu seçmek için bir fonksiyon
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Temperature':
        return faThermometerHalf;
      case 'Humidity':
        return faTint;
      case 'Battery':
        return faBatteryHalf;
      default:
        return null; 
    }
  };

  return (
    <div style={{
      backgroundColor: 'orange',
      color: 'white',
      padding: '10px',
      margin: '10px',
      borderRadius: '5px',
      display: 'flex',
      alignItems: 'center', // İkon ve metni dikey olarak hizala
      justifyContent: 'space-evenly', // İkon ve metni eşit aralıklarla hizala
      width: '200px',
      height: '30px',
    }}>
      <FontAwesomeIcon icon={getIcon(title)} size="md" /> {icon === 'temperature' ? <>&#8451;</> : icon === 'humidity' ? <>&#37;</> : icon === 'battery' ? <>&#37;</> : null}
      <span>{value} {unit}</span> {}
    </div>
  );
};

export default LineBox;
