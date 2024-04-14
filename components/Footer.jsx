"use client";

const Footer = () => {
  const originalString = " Y-Network";

  return (
    <div className="container mx-auto flex items-center justify-center px-5">
      <p>Copyright &copy; {new Date().getFullYear()} yousuf.vercel.app | </p>
      <p className="overflow-hidden"> {originalString}</p>
    </div>
  );
};

export default Footer;
