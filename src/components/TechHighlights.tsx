import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Rocket,
  Code2,
  ServerCog,
  Users,
} from "lucide-react";

const highlights = [
  {
    title: "Data Structures & Algorithm Proficiency",
    description:
      "Solved 300+ Java-based problems focusing on time complexity optimization, recursion, dynamic programming, and core data structures.",
    icon: <Code2 className="w-10 h-10 text-blue-400" />,
  },
  {
    title: "Full-Stack Application Development",
    description:
      "Developed production-ready applications using React.js, Node.js, MongoDB, and Tailwind CSS with structured API integration.",
    icon: <Rocket className="w-10 h-10 text-blue-400" />,
  },
  {
    title: "System-Oriented Architecture Thinking",
    description:
      "Applied modular design principles, RESTful API structuring, and scalable frontend architecture in real-world projects.",
    icon: <ServerCog className="w-10 h-10 text-blue-400" />,
  },
  {
    title: "Team Collaboration & Rapid Prototyping",
    description:
      "Collaborated in hackathon-style environments to deliver functional prototypes under strict timelines with structured task distribution.",
    icon: <Users className="w-10 h-10 text-blue-400" />,
  },
];

const TechHighlights = () => {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  return (
    <section
      id="tech-highlights"
      className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-24 px-6 text-white"
    >
      <div className="max-w-5xl mx-auto text-center mb-20">
        <h2 className="text-4xl font-bold mb-4">
          Engineering Achievements
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          Key technical milestones demonstrating structured problem-solving,
          full-stack development capability, and system-level thinking.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {highlights.map((item, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="bg-slate-800/50 border border-slate-700 rounded-2xl p-10 
                       flex flex-col items-center text-center shadow-lg
                       transition-all duration-300 hover:border-blue-500/40"
          >
            <div className="mb-6">{item.icon}</div>

            <h3 className="text-lg font-semibold text-blue-400 mb-4">
              {item.title}
            </h3>

            <p className="text-slate-300 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechHighlights;
