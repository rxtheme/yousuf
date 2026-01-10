import Status from "./Status";
import TitleWithPath from "./TitleTitleWithPath";
import Skills from "./skills";
const Showcase = () => {
  return (
    <section>
      <div id="skills" className="flex justify-between pt-20">
        <TitleWithPath children="Skills:" hashTagName="#skills" />

        <div>
          <Status showText={true} level={5} />
        </div>
      </div>
      <div className="mb-10 flex flex-wrap  justify-items-center gap-5 ">
        <Skills languageName="JavaScript" level={4} />
        <Skills languageName="HTML" level={5} />
        <Skills languageName="CSS" level={5} />
        <Skills languageName="TypeScript" level={3} />
        <Skills languageName="Node.js" level={3} />
        <Skills languageName="Tailwind" level={5} />
        <Skills languageName="Express.js" level={3} />
        <Skills languageName="MongoDB" level={4} />
        <Skills languageName="React.js" level={5} />
        <Skills languageName="Next.js" level={5} />
        <Skills languageName="WordPress" level={4} />
        <Skills languageName="PHP" level={2} />
      </div>
    </section>
  );
};

export default Showcase;
