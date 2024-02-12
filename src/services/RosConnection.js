import { useEffect } from 'react';
import ROSLIB from 'roslib';

export const RosComponent = (setMessage) => {
  useEffect(() => {
    // ROS Bridge bağlantısı kur
    const ros = new ROSLIB.Ros({
      url: 'ws://localhost:9090' // ROS Bridge sunucu URL'si
    });

    ros.on('connection', () => {
      console.log('Bağlantı kuruldu.');
    });

    ros.on('error', (error) => {
      console.log('Bağlantı hatası:', error);
    });

    ros.on('close', () => {
      console.log('Bağlantı kapatıldı.');
    });

    // Bir ROS konusuna abone ol
    const listener = new ROSLIB.Topic({
      ros,
      name: '/listener', // ROS konu adı
      messageType: 'std_msgs/String' // Konu mesaj tipi
    });

    listener.subscribe((message) => {
      setMessage(message.data);
      // Burada mesajı işleyebilirsiniz
    });

    // Bağlantıyı temizle
    return () => {
      listener.unsubscribe();
    };
  }, [setMessage]);

};

