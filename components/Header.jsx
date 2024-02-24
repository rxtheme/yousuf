import Link from "next/link";

const Header = () => {
   return (
      <header className="fixed w-full">


     <div className=' bg-white/30  backdrop-blur-sm px-5 py-2 m-5 rounded-xl border-2  border-purple-500'>
        <div className='flex justify-end'>
           <div>
              <ul className="flex gap-x-2">
                 <Link href="/">Projects</Link >
                 <Link href="/">Github</Link >
                 <Link href="/">Linkdin</Link >
              </ul>
         </div>
           
        </div>
    </div>
      </header>
  )
}

export default Header;