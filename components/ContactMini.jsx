"use client";
import { Github, Instagram } from "lucide-react";
import Link from "next/link";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import TitleWithPath from "./TitleTitleWithPath";
const ContactMini = () => {
  return (
    <div id="contact" className="py-20">
      <TitleWithPath children="Contact" hashTagName="#contact" />
      <p className="py-5">
        I'm currently looking to join a cross-functional team that values
        improving people's lives through accessible design. or have a project in
        mind? Let's connect. <br /> <br /> yousuf.okay@gmail.com
      </p>
      <div className="flex items-center gap-2">
        <Link href="https://www.facebook.com/its.md.yousuf">
          <FaFacebookF className="text-xl" />
        </Link>
        <Link href="/">
          <FaXTwitter className="text-xl" />
        </Link>
        <Link href="/">
          <Instagram />
        </Link>
        <Link href="/">
          <FaGoogle className="text-xl" />
        </Link>
        <Link href="/">
          <Github />
        </Link>
      </div>
    </div>
  );
};

export default ContactMini;
