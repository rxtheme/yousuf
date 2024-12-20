import portfolio1 from "@/public/port1.png";
import portfolio2 from "@/public/port2.png";
import portfolio3 from "@/public/port3.png";
import portfolio4 from "@/public/port4.png";
import TitleWithPath from "../TitleTitleWithPath";
import Experience from "./Experience";
const WorkExperience = () => {
  return (
    <div id="work-experience" className="pt-20">
      {/* title */}
      <div>
        <TitleWithPath
          hashTagName="#work-experience"
          children="Work Experience:"
        />
      </div>
      <div className="flex flex-col gap-5">
        <Experience
          githubLink="https://github.com/rxtheme/yousuf"
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
          githubLink="https://github.com/yousufislamme/DaanRakto"
          ProjectLiveLink="https://daan-rakto.vercel.app/"
          ProjectName="Blood Website"
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
