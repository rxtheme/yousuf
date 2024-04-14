import Status from "./Status";
import Skills from "./skills";

const Showcase = () => {
  return (
    <section>
      <div className="flex justify-between">
        <h2 className="text-2xl">Skills: </h2>
        <div className=" ">
          <Status text={true} />
        </div>
      </div>
      <div className="mb-10 grid grid-cols-2 justify-items-center gap-5 sm:grid-cols-3 md:grid-cols-4  lg:grid-cols-5">
        <Skills languageName="JavaScript" />
        <Skills languageName="HTML" />
        <Skills languageName="CSS" />
        <Skills languageName="Node.js" />
        <Skills languageName="Tailwind" />
        <Skills languageName="Express.js" />
        <Skills languageName="MongoDB" />
      </div>
    </section>
  );
};

export default Showcase;
