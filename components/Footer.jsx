"use client";

const Footer = () => {
  const originalString = " Y-Network";

  return (
    <div className="container mx-auto flex flex-col items-center justify-center px-5">
      <p>
        Copyright &copy; {new Date().getFullYear()} yousuf.vercel.app |{" "}
        <span className="overflow-hidden">{originalString}</span>
      </p>
    </div>
  );
};

export default Footer;
