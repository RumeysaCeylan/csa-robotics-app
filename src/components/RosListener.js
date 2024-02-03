import React, { useEffect, useState } from 'react';
import connectToRos from './services/rosConnection';

const RosListenerComponent = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const unsubscribe = connectToRos((rosMessage) => {
      setMessage(rosMessage.data);
    });

    return unsubscribe;
  }, []);

  return (
    <div>
      <h3>ROS Mesajı:</h3>
      <p>{message}</p>
    </div>
  );
};

export default RosListenerComponent;
