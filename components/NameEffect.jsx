"use client";
import { useEffect, useState } from 'react';

const NameEffect = () => {
  const originalString = "MD. Yousuf";
  const [convertedString, setConvertedString] = useState(originalString);
  const githubProfile = 'https://avatars.githubusercontent.com/u/71249987?v=4';
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setConvertedString(convertCase(originalString));
    }, 3000); // Change every second (3000 milliseconds)

    return () => clearInterval(intervalId); // Cleanup function
  }, [originalString]); // Run effect whenever originalString changes

  const convertCase = (str) => {
    let convertedString = '';
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      // Randomly decide whether to convert to uppercase or lowercase
      const convertToUpperCase = Math.random() < 0.5;
      if (convertToUpperCase) {
        convertedString += char.toUpperCase();
      } else {
        convertedString += char.toLowerCase();
      }
    }
    return  convertedString;
  };

  const getColorClass = () => {
    const colors = ['text-red-500', 'text-blue-500', 'text-green-500', 'text-yellow-500', 'text-purple-500'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <h1 className='text-xl font-extrabold'>
      {convertedString.split('').map((char, index) => (
        <span key={index} className={getColorClass()}>{char}</span>
      ))}
    </h1>
  );
}

export default NameEffect;
