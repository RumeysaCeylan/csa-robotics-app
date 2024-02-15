import { useEffect} from 'react';
import ROSLIB from 'roslib';

export const RosComponent = (setMessage, setConnectionStatus) => {
  
  useEffect(() => {
    // ROS Bridge bağlantısı kurulur
    const ros = new ROSLIB.Ros({
      url: 'ws://localhost:9090' 
    });

    ros.on('connection', () => {
      console.log('connected');
      setConnectionStatus('connected');
     
    });

    ros.on('error', (error) => {
      console.log('connection error', error);
      setConnectionStatus('connection error');
      
    });

    ros.on('close', () => {
      console.log('Closed');
      setConnectionStatus('closed');
     
      
    });

  
    const listener = new ROSLIB.Topic({
      ros,
      name: '/listener', // ROS konu adı
      messageType: 'std_msgs/String' // Konu mesaj tipi
    });

    listener.subscribe((message) => {
      setMessage(message.data);
     
    });


    return () => {
      listener.unsubscribe();
    };
  }, [setMessage, setConnectionStatus]);



};

