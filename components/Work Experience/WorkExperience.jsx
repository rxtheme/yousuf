import portfolio1 from "@/public/port1.png";
import portfolio2 from "@/public/port2.png";
import portfolio3 from "@/public/port3.png";
import portfolio4 from "@/public/port4.png";
import Experience from "./Experience";
const WorkExperience = () => {
  return (
    <div id="WorkExperience" className="mb-10">
      {/* title */}
      <div>
        <span className="absolute left-0 h-7 w-2 rounded-br-md rounded-tr-md bg-gray-400"></span>
        <h2 className="my-10 ">
          <a className="text-xl font-semibold" href="#WorkExperience">
            Work Experience:
          </a>
        </h2>
      </div>
      <div className="flex flex-col gap-5">
        <Experience
          ProjectName="Portfolio Website"
          portfolioImg={portfolio1}
          descLeftOrRight="left"
          imgLeftOrRight="right"
        />
        <Experience
          ProjectName="Modern Website"
          portfolioImg={portfolio2}
          descLeftOrRight="right"
          imgLeftOrRight="left"
        />
        <Experience
          ProjectName="Hospital Website"
          portfolioImg={portfolio3}
          descLeftOrRight="left"
          imgLeftOrRight="right"
        />
        <Experience
          ProjectName="Business Website"
          portfolioImg={portfolio4}
          imgLeftOrRight="left"
          descLeftOrRight="right"
        />
      </div>
    </div>
  );
};

export default WorkExperience;
