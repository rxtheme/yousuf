import {
  AlignVerticalJustifyStart,
  ArrowRight,
  Code,
  Database,
  FlaskConical,
  Paintbrush,
  Waypoints,
} from "lucide-react";
import Card from "./Card";

const Features = () => {
  return (
    <div className="py-20">
      <span className="absolute left-0 h-7 w-2 rounded-br-md rounded-tr-md bg-gray-400"></span>
      <h3 className="mb-10 cursor-pointer text-xl font-semibold">What I Do</h3>
      {/* Responsive Grid */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <Card
          topIcon={<AlignVerticalJustifyStart />}
          title="Project Management"
          content="Want to gain real-life experience of managing a complete software project cycle."
          rightIcon={<ArrowRight />}
        />
        <Card
          topIcon={<Paintbrush />}
          title="UI/UX Design"
          content="I strive to design user-friendly interfaces that are aesthetically pleasing."
          rightIcon={<ArrowRight />}
        />
        <Card
          topIcon={<Database />}
          title="Backend Development"
          content="Building robust and scalable backend systems to support dynamic applications."
          rightIcon={<ArrowRight />}
        />
        <Card
          topIcon={<Code />}
          title="Frontend Development"
          content="Creating interactive and responsive user interfaces for web applications."
          rightIcon={<ArrowRight />}
        />
        <Card
          topIcon={<Waypoints />}
          title="DevOps"
          content="Streamlining the development process with efficient CI/CD pipelines."
          rightIcon={<ArrowRight />}
        />
        <Card
          topIcon={<FlaskConical />}
          title="Quality Assurance"
          content="Ensuring software quality through rigorous testing and debugging."
          rightIcon={<ArrowRight />}
        />
      </div>
    </div>
  );
};

export default Features;
