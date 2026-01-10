const About = () => {
  const skills = [
    "React",
    "JavaScript",
    "Tailwind CSS",
    "Node.js",
    "UI/UX Design",
    "Git",
  ];

  return (
    <section className="bg-white px-6 py-16 text-gray-800 md:px-20 lg:px-40">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2">
        {/* Image / Visual Column */}
        <div className="relative">
          <div className="h-80 w-full overflow-hidden rounded-2xl bg-gray-200 shadow-xl md:h-[500px]">
            <img
              src="/your-photo.jpg"
              alt="Your Name"
              className="h-full w-full object-cover"
            />
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-6 -right-6 -z-10 hidden h-32 w-32 rounded-full bg-blue-500 md:block"></div>
        </div>

        {/* Text Content Column */}
        <div>
          <h2 className="mb-6 text-4xl font-bold">
            Hi, I'm <span className="text-blue-600">[Your Name]</span>.
          </h2>

          <p className="mb-6 text-lg leading-relaxed">
            I am a passionate developer focused on building clean, user-friendly
            digital experiences. With a background in [Your Field/Degree], I
            love bridging the gap between complex functionality and elegant
            design.
          </p>

          <p className="mb-8 text-lg leading-relaxed">
            When I'm not coding, you can find me [Hobby 1], exploring [Hobby 2],
            or experimenting with new technologies. I believe in continuous
            learning and always bringing a fresh perspective to every project.
          </p>

          {/* Skills / Tags */}
          <div className="mb-8">
            <h3 className="mb-4 text-xl font-semibold">Core Stack</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <button className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white shadow-md transition-all hover:bg-blue-700">
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
