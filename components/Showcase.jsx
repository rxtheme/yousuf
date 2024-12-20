import Status from "./Status";
import TitleWithPath from "./TitleTitleWithPath";
import Skills from "./skills";
const Showcase = () => {
  return (
    <section>
      <div id="skills" className="flex justify-between pt-20">
        <TitleWithPath children="Skills:" hashTagName="#skills" />

        <div>
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
