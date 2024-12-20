import {
  AlignVerticalJustifyStart,
  Code,
  Database,
  FlaskConical,
  Paintbrush,
  Waypoints,
} from "lucide-react";
import Card from "./Card";
import TitleWithPath from "./TitleTitleWithPath";

const Features = () => {
  return (
    <div id="what-i-do" className="pb-10 pt-20">
      <TitleWithPath children="What I Do:" hashTagName="#what-i-do" />

      {/* Responsive Grid */}
      <div className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <Card
          topIcon={<AlignVerticalJustifyStart size={32} />}
          title="Project Management"
          content="Want to gain real-life experience of managing a complete software project cycle."
        />
        <Card
          topIcon={<Paintbrush size={32} />}
          title="UI/UX Design"
          content="I strive to design user-friendly interfaces that are aesthetically pleasing."
        />
        <Card
          topIcon={<Database size={32} />}
          title="Backend Development"
          content="Building robust and scalable backend systems to support dynamic applications."
        />
        <Card
          topIcon={<Code size={32} />}
          title="Frontend Development"
          content="Creating interactive and responsive user interfaces for web applications."
        />
        <Card
          topIcon={<Waypoints size={32} />}
          title="DevOps"
          content="Streamlining the development process with efficient CI/CD pipelines."
        />
        <Card
          topIcon={<FlaskConical size={32} />}
          title="Quality Assurance"
          content="Ensuring software quality through rigorous testing and debugging."
        />
      </div>
    </div>
  );
};

export default Features;
