const Status = ({ text }) => {
  return (
    <div className="flex items-center justify-center gap-1">
      {text && <span className="mr-2 text-xs dark:text-white">Less</span>}
      <div className="size-[10px] rounded-sm bg-gray-300"></div>
      <div className="size-[10px] rounded-sm bg-[#9be9a8]"></div>
      <div className="size-[10px] rounded-sm bg-[#40c463]"></div>
      <div className="size-[10px] rounded-sm bg-[#30a14e]"></div>
      <div className="size-[10px] rounded-sm bg-[#216e39]"></div>
      {text && <span className="ml-2 text-xs">More</span>}
    </div>
  );
};

export default Status;
