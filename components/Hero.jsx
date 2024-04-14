"use client";
import { Button } from "@nextui-org/react";
import confetti from "canvas-confetti";
import Image from "next/image";
import { useEffect, useState } from "react";
import BackgroundImg from "../public/background.png";
import Showcase from "./Showcase";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const Hero = () => {
  const handleConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };
  const words = `As a front-end developer, I can create any type of website as per your requirements. I will grow your company or Business 3x with next-generation front-end design and SEO. I always love to learn new things. I always keep browser compatibility & analytics in mind.
`;
  const originalString = "MD. Yousuf";
  const [convertedString, setConvertedString] = useState(originalString);
  const githubProfile = "https://avatars.githubusercontent.com/u/71249987?v=4";
  useEffect(() => {
    const intervalId = setInterval(() => {
      setConvertedString(convertCase(originalString));
    }, 3000); // Change every second (1000 milliseconds)

    return () => clearInterval(intervalId); // Cleanup function
  }, [originalString]); // Run effect whenever originalString changes

  const convertCase = (str) => {
    let convertedString = "";
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
    <>
      <div className=" ">
        <div className=" flex w-full justify-end">
          <Image
            className="fixed -z-50"
            src={BackgroundImg}
            alt="Picture of the author"
            width={700}
            height={700}
            draggable={false}
          />
          <div className="container mx-auto px-5 xl:px-20">
            <div className="mt-20 grid grid-cols-1 gap-4 lg:grid-cols-4">
              <div className="col-span-1">
                <div className="px-5 sm:flex sm:flex-col sm:justify-center">
                  <img
                    className=" h-20 w-20 rounded-full border-2 border-purple-500 lg:h-32 lg:w-32 xl:h-40 xl:w-40"
                    src={githubProfile}
                    alt="Md Yousuf"
                  />
                  <div className="mt-2 leading-3">
                    <h1 className="text-xl font-semibold ">Md Yousuf</h1>
                  </div>
                  <span className="mb-2 text-sm">yousufislamme</span>
                  <hr />
                  <p className="mt-2">
                    Front-End Web Application Developer. I Love 💜 JavaScript🧠
                    | Next JS | PHP🐘 | 🪵Tailwind | Laravel🕸 | HTML🦴 | CSS 🎨
                    | WordPress
                  </p>
                </div>
              </div>
              <div className="col-span-3 border  ">
                <div className="flex items-start justify-center lg:items-center">
                  <div className="mt-10 px-5 text-black dark:text-white">
                    <TextGenerateEffect words={words} />
                    <div className="mt-10 flex items-center justify-center">
                      <Button
                        disableRipple
                        className="relative overflow-visible rounded-full bg-green-500/30 px-12 shadow-xl after:absolute after:inset-0 after:z-[-1] after:rounded-full after:bg-green-500/40 after:transition after:!duration-500 after:content-[''] hover:-translate-y-1 hover:after:scale-150 hover:after:opacity-0"
                        size="md"
                        onPress={handleConfetti}
                      >
                        Hire me
                      </Button>
                    </div>
                    <div className="mt-20">
                      <Showcase />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
