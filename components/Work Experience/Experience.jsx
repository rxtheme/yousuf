"use client";
import { Eye, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Experience = ({
  ProjectName,
  descLeftOrRight,
  imgLeftOrRight,
  portfolioImg,
  ProjectLiveLink,
  githubLink,
}) => {
  return (
    <div>
      {/* contents */}
      <div>
        <p className="text-green-400">Featured Project</p>
        <h3 className="text-3xl font-bold text-slate-800">
          {ProjectName || "Example Website"}
        </h3>
      </div>

      {/* Description */}
      <div className="mb-5">
        <div className="z-20 mt-10 flex w-full flex-col-reverse justify-between lg:relative lg:h-60">
          <div className="flex flex-col justify-end  lg:h-[265px] lg:flex-col ">
            <p
              className={`lg:absolute ${descLeftOrRight}-0 top-10 z-10 mb-5  rounded-lg  bg-purple-700/30 p-5 text-white backdrop-blur-md lg:w-2/3`}
            >
              A web app for visualizing personalized Spotify data. View your top
              artists, top tracks, recently played tracks, and detailed audio
              information about each track. Create and save new playlists of
              recommended tracks based on your existing playlists and more.
            </p>
            {/* icons & links */}
            <div className="flex w-auto cursor-pointer gap-2">
              <Link formtarget="_blank" href={ProjectLiveLink || "/"}>
                <Eye />
              </Link>
              <Link formtarget="_blank" href={githubLink || "/"}>
                <Github />
              </Link>
            </div>
          </div>

          {/* Image */}
          <div
            className={`lg:absolute ${imgLeftOrRight}-0 top-0 -z-10  rounded-ss-xl bg-gray-200/60 pl-5 pt-5 lg:w-2/5`}
          >
            <Image
              layout="responsive"
              draggable="false"
              src={portfolioImg}
              height={300}
              width={400}
            />
          </div>
          <span className="hidden size-64 rounded-full bg-purple-500/50 blur-3xl drop-shadow-xl lg:block"></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Experience;
