const Card = ({ className, title, content, topIcon, rightIcon }) => {
  return (
    <div className={`${className} rounded-lg bg-white/30 px-5 py-3 shadow-lg`}>
      {/* icon */}
      <div className="text-xl text-[#277f3e]">{topIcon}</div>
      {/* title & content */}
      <div>
        <h2 className="py-5 text-2xl">{title}</h2>
        <p>{content}</p>
        <p className="mt-2 text-[#28703b]">{rightIcon}</p>
      </div>
    </div>
  );
};

export default Card;
