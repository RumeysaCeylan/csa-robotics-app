// src/components/SomeComponent.js
import React, { useState } from 'react';
import { RosComponent } from '../services/RosConnection';

const SomeComponent = () => {
  const [message, setMessage] = useState('');

  RosComponent(setMessage);

  return (
    <div>
      <h2>ROS Mesajı: {message}</h2>
    </div>
  );
};

export default SomeComponent;
