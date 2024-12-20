const TitleWithPath = ({ children, hashTagName }) => {
  return (
    <div className="group">
      {/* path */}
      <span className="absolute left-0 h-7 w-[7px] rounded-br-md rounded-tr-md bg-gray-300  group-hover:bg-gray-400"></span>
      {/* title */}
      <h2 className="mb-10 inline-block text-xl font-semibold">
        <a href={hashTagName}>{children}</a>
      </h2>
    </div>
  );
};

export default TitleWithPath;
