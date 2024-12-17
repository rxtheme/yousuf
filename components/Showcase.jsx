import Status from "./Status";
import Skills from "./skills";
const Showcase = () => {
  return (
    <section>
      <div className="flex justify-between">
        <a href="#skills">
          <span className="absolute left-0 h-7 w-2 rounded-br-md rounded-tr-md bg-gray-400"></span>
          <h4 id="skills" className=" mb-5 text-xl font-semibold">
            Skills:
          </h4>
        </a>
        <div className="">
          <Status text={true} />
        </div>
      </div>
      <div className="mb-10 flex flex-wrap  justify-items-center gap-5 ">
        <Skills languageName="JavaScript" />
        <Skills languageName="HTML" />
        <Skills languageName="CSS" />
        <Skills languageName="Node.js" />
        <Skills languageName="Tailwind" />
        <Skills languageName="Express.js" />
        <Skills languageName="MongoDB" />
        <Skills languageName="React.js" />
        <Skills languageName="Next.js" />
        <Skills languageName="WordPress" />
        <Skills languageName="PHP" />
      </div>
    </section>
  );
};

export default Showcase;
