import { useEffect} from 'react';
import ROSLIB from 'roslib';

export const RosComponent = (setMessage, setConnectionStatus) => {
  
  //const [rosConnected, setRosConnected] = useState(false);
  
  useEffect(() => {
    // ROS Bridge bağlantısı kur
    const ros = new ROSLIB.Ros({
      url: 'ws://localhost:9090' // ROS Bridge sunucu URL'si
    });

    ros.on('connection', () => {
      console.log('connected');
      setConnectionStatus('connected');
      //setRosConnected(true);
    });

    ros.on('error', (error) => {
      console.log('connection error', error);
      setConnectionStatus('connection error');
      //setRosConnected(false);
    });

    ros.on('close', () => {
      console.log('Closed');
      setConnectionStatus('closed');
      //setRosConnected(false);
      
    });

    // Bir ROS konusuna abone ol
    const listener = new ROSLIB.Topic({
      ros,
      name: '/listener', // ROS konu adı
      messageType: 'std_msgs/String' // Konu mesaj tipi
    });

    listener.subscribe((message) => {
      setMessage(message.data);
      //setRosConnected(false);
    });

    // Bağlantıyı temizle
    return () => {
      listener.unsubscribe();
    };
  }, [setMessage, setConnectionStatus]);

  //return {rosConnected};

};

