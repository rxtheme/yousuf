import Status from "./Status";
import Skills from "./skills";
const Showcase = () => {
  return (
    <section>
      <div className="flex justify-between">
        <a href="#skills">
          <h4 id="skills" className="mb-2 pt-20 text-xl font-semibold">
            Skills:
          </h4>
        </a>
        <div className="pt-20">
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
