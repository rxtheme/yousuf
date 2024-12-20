const Card = ({ className, title, content, topIcon, rightIcon }) => {
  return (
    <div
      className={`${className} overflow-hidden rounded-lg bg-white/30 px-5 py-3 shadow-lg hover:bg-white/45 hover:shadow-xl `}
    >
      <div className="flex  h-full flex-col justify-between  ">
        {/* icon */}
        <div className="text-[#39ad58]">{topIcon}</div>
        {/* title & content */}
        <h2 className="py-5 text-2xl font-semibold">{title}</h2>
        <p>{content}</p>
        <p className="mt-2 text-[#39ad58]">{rightIcon}</p>
      </div>
    </div>
  );
};

export default Card;
