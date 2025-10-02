'use client';

import { useEffect } from 'react';

export default function GetCoursePayForm() {
  useEffect(() => {
    // Подключаем скрипт GetCourse
    console.log('Loading GetCourse script...');
    const script = document.createElement('script');
    script.id = 'ebfd00e56b5d53e123c2e1baf410c8008ff7430e';
    script.src = 'https://school.ismablog.ru/pl/lite/widget/script?id=1491870';
    script.async = true;
    
    script.onload = () => {
      console.log('GetCourse script loaded successfully');
      console.log('window.GC:', (window as any).GC);
    };
    
    script.onerror = () => {
      console.error('Failed to load GetCourse script');
    };
    
    document.head.appendChild(script);
    
    return () => {
      // Cleanup при размонтировании
      const existingScript = document.getElementById('ebfd00e56b5d53e123c2e1baf410c8008ff7430e');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return null;
}