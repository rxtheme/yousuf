"use client"
import Image from 'next/image';
import { useEffect, useState } from 'react';
import BackgroundImg from "../public/background.png";
import { TextGenerateEffect } from './ui/text-generate-effect';

const Hero = () => {
  const words = `As a front-end developer, I can create any type of website as per your requirements. I will grow your company or Business 3x with next-generation front-end design and SEO. I always love to learn new things. I always keep browser compatibility & analytics in mind.
`;
  const originalString = "MD. Yousuf";
  const [convertedString, setConvertedString] = useState(originalString);
  const githubProfile = 'https://avatars.githubusercontent.com/u/71249987?v=4';
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
    return  convertedString;
  };





  return (
    <>
              <div className=" ">

          <div className="flex justify-end w-full">
            <Image
              className="fixed -z-50"
              src={BackgroundImg}
              alt="Picture of the author"
              width={700}
            height={700}
            draggable={false}
          />
          <div className='container mx-auto px-5 xl:px-20'>

         

    <div className='mt-20 grid grid-cols-1 lg:grid-cols-4 gap-4'>
      <div className='col-span-1 md:h-screen'>

      <div className='sm:flex sm:justify-center sm:flex-col px-5'>
                                  <img className=' border-2 border-purple-500 rounded-full w-20 h-20 lg:w-32 lg:h-32 xl:w-40 xl:h-40' src={githubProfile} alt="Md Yousuf" />
        <div className='mt-2 leading-3'>
                    <h1 className='text-xl font-semibold '>Md Yousuf</h1>
                  </div>
          <span className='text-sm mb-2'>yousufislamme</span>
          <hr />
        <p className='mt-2'>
          Front-End Web Application Developer. I Love 💜 JavaScript🧠 | Next JS | PHP🐘 | 🪵Tailwind | Laravel🕸 | HTML🦴 | CSS 🎨 | WordPress
          </p>
</div>
      </div>
      <div className='col-span-3 border lg:h-screen'>
                        <div className="flex justify-center items-center">
          <div className='px-5 mt-10'>
            
        <TextGenerateEffect words={words}/>
            </div>

</div>
      </div>
          </div>
                    </div>

        </div>
 </div>
    </>
  );
}

export default Hero;


