"use client";
import { useCaseConverter } from "texpanse";

const Footer = () => {
  const originalString = "Y-Network";
  const colors = ["text-pink-400", "text-blue-400"];
  const { convertedString, colorClasses } = useCaseConverter(
    originalString,
    colors,
  );

  const renderConvertedString = (convertedString, colorClasses) => {
    const colorClassesArray = colorClasses.trim().split(" ");
    return convertedString.split("").map((char, index) => (
      <span
        key={index}
        className={colorClassesArray[index % colorClassesArray.length]}
      >
        {char}
      </span>
    ));
  };
  return (
    <div className="flex items-center justify-center">
      <p>Copyright &copy; {new Date().getFullYear()} yousuf.vercel.app | </p>
      <p className="overflow-hidden">
        {renderConvertedString(convertedString, colorClasses)}
      </p>
    </div>
  );
};

export default Footer;
