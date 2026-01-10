const COLORS = [
  "bg-gray-300",
  "bg-[#9be9a8]",
  "bg-[#40c463]",
  "bg-[#30a14e]",
  "bg-[#216e39]",
];

const Status = ({ level = 0, showText = false }) => {
  return (
    <div className="flex items-center justify-center gap-1">
      {showText && <span className="mr-2 text-xs dark:text-white">Less</span>}

      {COLORS.map((color, index) => (
        <div
          key={index}
          className={`size-[10px] rounded-sm ${
            index < level ? color : "bg-gray-300"
          }`}
        />
      ))}

      {showText && <span className="ml-2 text-xs">More</span>}
    </div>
  );
};

export default Status;
