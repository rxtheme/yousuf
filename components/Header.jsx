"use client";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { GoRepoForked } from "react-icons/go";
import { IoStarOutline } from "react-icons/io5";
import { useCaseConverter } from "texpanse";

const Header = () => {
  const [repoData, setRepoData] = useState(null);
  const originalString = "Md Yousuf";
  const colors = ["text-blue-500", "text-purple-500", "text-yellow-500"];

  const { convertedString, colorClasses } = useCaseConverter(
    originalString,
    colors,
  );
  const renderConvertedString = (convertedString, colorClasses) => {
    const colorClassesArray = colorClasses.trim().split(" ");
    return convertedString.split("").map((char, index) => (
      <span
        key={index}
        className={colorClassesArray[index % colorClassesArray.length]}
      >
        {char}
      </span>
    ));
  };
  useEffect(() => {
    const fetchRepoData = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/rxtheme/yousuf",
        );
        const data = await response.json();
        setRepoData(data);
      } catch (error) {
        console.error("Error fetching repository data:", error);
      }
    };

    fetchRepoData();
  }, []);

  return (
    <header className="fixed z-50 w-full">
      <div className=" m-5  rounded-xl border-2 border-purple-500 bg-white/30 px-2 py-1 backdrop-blur-sm sm:px-5 sm:py-2">
        <div>
          <div className="flex items-center justify-between md:justify-between">
            <div>
              <Link href="/">
                <h1 className="text-sm font-semibold lg:text-xl">
                  {renderConvertedString(convertedString, colorClasses)}{" "}
                </h1>
              </Link>
            </div>
            <div className=" flex items-center gap-x-2">
              <Link className="hidden sm:block" href="/projects">
                Projects
              </Link>
              <Link
                className="hidden sm:block"
                href="https://www.linkedin.com/in/its-md-yousuf"
              >
                Linkdin
              </Link>
              <Link
                target="_blank"
                className="flex"
                href={{
                  pathname: "https://github.com/rxtheme/yousuf",
                }}
              >
                <div className="hidden sm:block">
                  <div className=" flex items-center">
                    <div>
                      <FaGithub className="w-10 text-2xl" />
                    </div>
                    <div>
                      <div className="">
                        <p className="text-xs">yousufislamme/yousuf</p>
                      </div>
                      <div className="flex flex-row items-center gap-3 text-xs">
                        <p className="flex items-center justify-center gap-1 transition-all duration-150 ease-in-out hover:font-semibold">
                          <IoStarOutline />
                          {repoData && repoData.stargazers_count}
                        </p>
                        <p className="flex items-center justify-center gap-1 transition-all duration-150 ease-in-out hover:font-semibold">
                          <GoRepoForked />
                          {repoData && repoData.forks_count}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <div className="sm:hidden">
                <Dropdown>
                  <DropdownTrigger>
                    <Button variant="bordered">Open Menu</Button>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Static Actions">
                    <DropdownItem key="projects">
                      <Link
                        className="inline-block h-full w-full p-1"
                        href="/projects"
                      >
                        Projects
                      </Link>
                    </DropdownItem>
                    <DropdownItem key="linkdin">
                      <Link
                        className="inline-block h-full w-full p-1"
                        href="https://www.linkedin.com/in/md-yousuf-islam/"
                      >
                        Linkdin
                      </Link>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
