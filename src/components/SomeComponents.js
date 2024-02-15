import React, { useState } from 'react';
import { RosComponent } from '../services/RosConnection';

const SomeComponent = () => {
  const [message, setMessage] = useState('');
  const [connectionStatus, setConnectionStatus] = useState(''); // Bağlantı durumu

  RosComponent(setMessage,setConnectionStatus);

  return (
    <div style={ {backgroundColor: 'white'}}>
      <h2 >ROS Mesajı: {message}</h2>
      {connectionStatus ==='connected' ? 
      (<p>{message || 'Ros message has been waiting...'}</p>
         ) : (<p>ROS has not been connected</p>)}
    </div>
  );
};

export default SomeComponent;
