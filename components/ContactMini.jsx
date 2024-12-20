import { FaFacebookF, FaGoogle, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const ContactMini = () => {
  return (
    <div className="py-10">
      <span className="absolute left-0 h-7 w-2 rounded-br-md rounded-tr-md bg-gray-400"></span>
      <h2 className="text-xl font-semibold">Contact</h2>
      <p className="py-5">
        I'm currently looking to join a cross-functional team that values
        improving people's lives through accessible design. or have a project in
        mind? Let's connect. <br /> <br /> yousuf.okay@gmail.com
      </p>
      <div className="flex gap-2">
        <FaFacebookF />
        <FaXTwitter />
        <FaInstagram />
        <FaGoogle />
      </div>
    </div>
  );
};

export default ContactMini;
