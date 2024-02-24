import Header from "@/components/Header";
import Image from 'next/image'
import BackgroundImg from "./background.png";
import Hero from "@/components/Hero";



export default function Home() {
  return (

    <main>
      <Header />

      <div className="">

        <div className="-z-50 ">

          <div className="flex justify-end w-full">
            <Image
              className="fixed"
              src={BackgroundImg}
              alt="Picture of the author"
              width={700}
              height={700}
            />
          </div>
          <div className="container px-20 mt-20 h-screen ">
            <Hero />

          </div>
        </div>

      </div>
    </main>
  );
}
