"use client";
import { LinkPreview } from "@/components/ui/link-preview";
import BackgroundImg from "@/public/background.png";
import confetti from "canvas-confetti";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SiUpwork } from "react-icons/si";
import { TbBrandFiverr } from "react-icons/tb";
import ContactMini from "./ContactMini";
import Features from "./Features";
import GithubCalanderCompo from "./GithubCalanderCompo";
import Showcase from "./Showcase";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import WorkExperience from "./Work Experience/WorkExperience";

const Hero = () => {
  const [isOpenMarketplace, setIsOpenMarketplace] = useState(false);
  const handleConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  const words = `As a front-end developer, I can create any type of website as per your requirements. I will grow your company or Business 3x with next-generation front-end design and SEO. I always love to learn new things. I always keep browser compatibility & analytics in mind.`;

  const originalString = "MD. Yousuf";
  const [convertedString, setConvertedString] = useState(originalString);
  const githubProfile = "https://avatars.githubusercontent.com/u/71249987?v=4";

  useEffect(() => {
    const intervalId = setInterval(() => {
      setConvertedString(convertCase(originalString));
    }, 3000);

    return () => clearInterval(intervalId);
  }, [originalString]);

  const convertCase = (str) => {
    let convertedString = "";
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      const convertToUpperCase = Math.random() < 0.5;
      convertedString += convertToUpperCase
        ? char.toUpperCase()
        : char.toLowerCase();
    }
    return convertedString;
  };

  const handleShowMarketplace = () => {
    setIsOpenMarketplace(!isOpenMarketplace);
  };

  return (
    <div className="relative w-full">
      {/* Background Image */}
      <Image
        className="fixed -z-50 object-cover"
        src={BackgroundImg}
        alt="Background"
        fill
        draggable={false}
      />

      {/* Content */}
      <div className=" container mx-auto  px-5 pt-20 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 gap-10  lg:grid-cols-4">
          {/* Left Profile Section */}
          <div className="col-span-1 flex flex-col items-center sm:items-start">
            <img
              className="h-20 w-20 rounded-full border-2 border-purple-500 sm:h-28 sm:w-28 lg:h-32 lg:w-32 xl:h-40 xl:w-40"
              src={githubProfile}
              alt="Md Yousuf"
            />
            <div className="mt-3 text-center sm:text-left">
              <h1 className="text-lg font-semibold sm:text-xl lg:text-2xl">
                <span className="text-gray-400">Its</span> Md Yousuf
              </h1>
            </div>
            <button
              className="mb-2 text-sm duration-150 ease-in hover:underline"
              target="_blank"
            >
              <LinkPreview url="https://github.com/ItsMdYousuf">
                @ItsMdYousuf
              </LinkPreview>
            </button>
            <hr className="w-full" />
            <p className="mt-3 text-sm sm:text-base">
              Front-End Web Application Developer. I Love 💜 JavaScript🧠 | Next
              JS | PHP🐘 | 🪵Tailwind | Laravel🕸 | HTML🦴 | CSS 🎨 | WordPress
            </p>
          </div>

          {/* Right Main Section */}
          <div className="relative col-span-3 rounded-xl border bg-white/70 p-5 dark:bg-black/30 md:p-8 lg:p-10">
            <div className="flex flex-col items-center lg:items-start">
              <TextGenerateEffect className="dark:text-white" words={words} />

              {/* Hire Me Button */}
              <div className="mt-10 flex flex-col items-center gap-4">
                <button
                  className="relative overflow-visible rounded-full bg-green-500/30 px-8 py-2 shadow-xl after:absolute after:inset-0 after:z-[-1] after:rounded-full after:bg-green-500/40 after:transition after:!duration-500 after:content-[''] hover:-translate-y-1 hover:after:scale-150 hover:after:opacity-0 sm:px-12"
                  onClick={() => {
                    handleConfetti();
                    handleShowMarketplace();
                  }}
                >
                  Hire me
                </button>

                {isOpenMarketplace && (
                  <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
                    <a
                      href="https://www.upwork.com/freelancers/yousufislam9?mp_source=share"
                      className="flex w-full items-center justify-center gap-2 rounded-full bg-green-600 px-6 py-2 text-white shadow-inner sm:w-auto"
                    >
                      <SiUpwork className="text-lg" /> UpWork
                    </a>
                    <button className="flex w-full items-center justify-center gap-2 rounded-full bg-green-600 px-6 py-2 text-white sm:w-auto">
                      <TbBrandFiverr className="text-lg" /> Fiverr
                    </button>
                  </div>
                )}
              </div>

              {/* Sections */}
              <div className="mt-16 w-full space-y-10">
                <Showcase />
                <Features />
                <WorkExperience />
                <ContactMini />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12  pt-10">
          <div className="col-span-3"></div>
          <div className="col-span-9 mx-auto w-full overflow-x-auto">
            <GithubCalanderCompo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
