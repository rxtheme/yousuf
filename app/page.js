import React from "react";
import Hero from "../components/Home";
import Contact from "@/components/ContactMe";
export const metadata = {
  title: "Its Md Yousuf",
  description: "FrontEnd developer",
};
export default function Home() {
  return (
    <main>
      <Hero />
      <Contact />
    </main>
  );
}
