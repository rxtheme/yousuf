"use client"
import Link from "next/link";
import NameEffect from "./NameEffect";

const Header = () => {
   return (
      <header className="fixed w-full z-50">


     <div className=' bg-white/30  backdrop-blur-sm px-5 py-2 m-5 rounded-xl border-2  border-purple-500'>
               <div>
        <div className='flex justify-between items-center'>
                  <div>
                     <Link href="/"><NameEffect /></Link>
                  </div>
              <div className="flex gap-x-2">
                 <Link href="/">Projects</Link >
                     <Link
                        href={{
                              pathname: 'https://github.com/yousufislamme',
                        }}
                     >Github</Link >
                 <Link href="https://www.linkedin.com/in/md-yousuf-islam/">Linkdin</Link >
              </div>
         </div>
           
        </div>
    </div>
      </header>
  )
}

export default Header;