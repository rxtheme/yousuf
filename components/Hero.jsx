"use client"
import { useEffect, useState } from 'react';

export default function Hero() {
  const originalString = "Y-Network";
  const [convertedString, setConvertedString] = useState(originalString);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setConvertedString(convertCase(originalString));
    }, 3000); // Change every second (1000 milliseconds)

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
    return convertedString;
  };

  return (
    <div>
        <div className="flex justify-center items-center">
          <h1 className='text-2xl font-bold'>{convertedString}</h1>           
         </div>
    </div>
  );
}

