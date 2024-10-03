"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { projectApi } from "../api/data";
import { PinContainer } from "./3d-pin";

export const Timeline = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1); // Track current page for lazy loading
  const [isLoading, setIsLoading] = useState(false); // Loading state

  // Calculate height after data is loaded
  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  // Detect when the user reaches the bottom to load more data
  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 200
    ) {
      setPage((prevPage) => prevPage + 1); // Increment page number to fetch more data
    }
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="w-full bg-white font-sans dark:bg-neutral-950 md:px-10"
      ref={containerRef}
    >
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-8 lg:px-10">
        <h2 className="mb-4 max-w-4xl text-lg text-black dark:text-white md:text-4xl">
          Changelog from my journey
        </h2>
        <p className="max-w-sm text-sm text-neutral-700 dark:text-neutral-300 md:text-base">
          I&apos;ve been working on Aceternity for the past 2 years. Here&apos;s
          a timeline of my journey.
        </p>
      </div>
      <div ref={ref} className="relative mx-auto max-w-7xl pb-20">
        {projectApi.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:gap-10 md:pt-40"
          >
            <div className="sticky top-40 z-40 flex max-w-xs flex-col items-center self-start md:w-full md:flex-row lg:max-w-sm">
              <div className="absolute left-3 flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-black md:left-3">
                <div className="h-4 w-4 rounded-full border border-neutral-300 bg-neutral-200 p-2 dark:border-neutral-700 dark:bg-neutral-800" />
              </div>
              <div className="flex flex-col">
                <h3 className="hidden text-xl font-bold text-neutral-500 dark:text-neutral-500 md:block md:pl-20 md:text-5xl ">
                  {item.projectName}
                </h3>
                <h3 className="hidden text-xl font-bold text-neutral-500 dark:text-neutral-500 md:block md:pl-20 md:text-3xl ">
                  {item.projectLunchData}
                </h3>
              </div>
            </div>

            <div className="relative w-full pl-20 pr-4 md:pl-4">
              <h3 className="mb-4 block text-left text-2xl font-bold text-neutral-500 dark:text-neutral-500 md:hidden">
                {item.projectLunchData}
              </h3>
              <div>
                <PinContainer title="hello.com" href={item.projectUrl}>
                  <div className="flex h-[20rem] w-[20rem] basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 ">
                    <h3 className="!m-0 max-w-xs !pb-2 text-base  font-bold text-slate-100">
                      {item.projectName}
                    </h3>
                    <div className="!m-0 !p-0 text-base font-normal">
                      <span className="text-slate-500 ">
                        {item.projectDesc}
                      </span>
                    </div>
                    <div className="mt-4 flex w-full flex-1 rounded-lg bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                  </div>
                </PinContainer>
              </div>
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-8 top-0 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] dark:via-neutral-700  md:left-8 "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] rounded-full bg-gradient-to-t from-purple-500 from-[0%] via-blue-500 via-[10%] to-transparent"
          />
        </div>
      </div>

      {/* Loader */}
      {isLoading && (
        <div className="py-4 text-center">
          <p>Loading more...</p>
        </div>
      )}
    </div>
  );
};
