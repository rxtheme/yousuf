"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { GoRepoForked } from "react-icons/go";
import { IoStarOutline } from "react-icons/io5";
import NameEffect from "./NameEffect";

const Header = () => {
    const [repoData, setRepoData] = useState(null);

  useEffect(() => {
    const fetchRepoData = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/rxtheme/yousuf');
        const data = await response.json();
        setRepoData(data);
      } catch (error) {
        console.error('Error fetching repository data:', error);
      }
    };

    fetchRepoData();
  }, []);
   
   return (
      <header className="fixed w-full z-50">


     <div className=' bg-white/30  backdrop-blur-sm px-5 py-2 m-5 rounded-xl border-2  border-purple-500'>
               <div>
        <div className='flex justify-between items-center'>
                  <div>
                     <Link href="/"><NameEffect /></Link>
                  </div>
              <div className="md:flex hidden items-center gap-x-2">
                 <Link href="/">Projects</Link >
                 <Link href="https://www.linkedin.com/in/md-yousuf-islam/">Linkdin</Link >
                     <Link
                        target="_blank"
                        className="flex"
                        href={{
                              pathname: 'https://github.com/rxtheme/yousuf',
                        }}
                     >
                        <div className=" flex items-center">
                           <div>
                               <FaGithub className="text-2xl w-10" />
                           </div>
                           <div>
                                                     <div className="">
                              <p className="text-xs">yousufislamme/yousuf</p>
                           </div>
                           <div className="flex flex-row gap-3 items-center text-xs">
                                 <p className="flex gap-1 justify-center items-center hover:font-semibold transition-all duration-150 ease-in-out"><IoStarOutline />{repoData && (repoData.stargazers_count)}</p>
                                 <p className="flex gap-1 justify-center items-center hover:font-semibold transition-all duration-150 ease-in-out"><GoRepoForked />{repoData && (repoData.forks_count)}</p>
                           </div>
     </div>
                        </div>

                        

                        
                     </Link >
              </div>
         </div>
           
        </div>
    </div>

      </header>
  )
}

export default Header;