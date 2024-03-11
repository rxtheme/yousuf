"use client"
import { useCaseConverter } from 'texpanse';
const Dev = () => {
   const originalString = "Bangladesh";
   const colors = ['text-blue-500', 'text-purple-500', 'text-yellow-500'];
   
   
   const { convertedString, colorClasses } = useCaseConverter(originalString, colors);
   const renderConvertedString = (convertedString, colorClasses) => {
   const colorClassesArray = colorClasses.trim().split(' ');
      return convertedString.split('').map((char, index) => (
         <span key={index} className={colorClassesArray[index % colorClassesArray.length]}>{char}</span>
      ));
   };
  return (
     <div className='flex justify-center items-center h-screen '>
        <h1 className='text-[4rem] border-2 border-sky-500 rounded-xl px-5 py-2'> {renderConvertedString(convertedString, colorClasses)} </h1>
    </div>
  )
}

export default Dev;