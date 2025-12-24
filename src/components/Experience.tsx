import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const experienceData = [
  {
    title: "Meta Taaraka AI Pvt. Ltd.",
    subtitle: "AI & Web Development Intern",
    description:
      "Worked on AI-powered web applications, contributed to frontend development, and collaborated in real-world product development workflows.",
    date: "Jun 2024 – Aug 2024",
  },
  {
    title: "BSNL",
    subtitle: "Networking & Telecom Internship",
    description:
      "Gained hands-on exposure to telecom infrastructure, networking fundamentals, and operational workflows.",
    date: "Apr 2024 – May 2024",
  },
  {
    title: "Test Yatra",
    subtitle: "Software Testing Internship",
    description:
      "Learned software testing life cycle, manual testing techniques, and quality assurance fundamentals.",
    date: "Feb 2024 – Mar 2024",
  },
];

const educationData = [
  {
    title: "B.Tech – Electronics & Communication Engineering",
    subtitle: "Panimalar Engineering College",
    description:
      "Studying electronics, communication systems, and software engineering fundamentals.",
    date: "2023 – 2027",
  },
  {
    title: "Higher Secondary (HSC)",
    subtitle: "Holy Infant Jesus Matriculation Higher Secondary School",
    description:
      "Completed higher secondary education with a strong foundation in science and mathematics.",
    date: "2022 – 2023",
  },
];

const TimelineItem = ({ item, icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="relative pl-12 pb-10"
  >
    {/* Icon */}
    <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-slate-800 border border-blue-400 flex items-center justify-center">
      {icon}
    </div>

    {/* Line */}
    <div className="absolute left-[15px] top-10 h-full w-px bg-slate-700" />

    {/* Content */}
    <p className="text-xs text-slate-400 tracking-wide">{item.date}</p>
    <h3 className="text-lg font-semibold text-white mt-1">
      {item.title}
    </h3>
    <h4 className="text-sm font-medium text-blue-400">
      {item.subtitle}
    </h4>
    <p className="text-sm text-slate-400 mt-2 leading-relaxed">
      {item.description}
    </p>
  </motion.div>
);

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-slate-900 py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-3xl mx-auto">

        {/* Education FIRST */}
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
          <GraduationCap className="w-8 h-8 text-blue-400" />
          Education
        </h2>

        <div className="mb-20">
          {educationData.map((item, index) => (
            <TimelineItem
              key={index}
              item={item}
              icon={<GraduationCap className="w-4 h-4 text-blue-400" />}
            />
          ))}
        </div>

        {/* Experience BELOW */}
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
          <Briefcase className="w-8 h-8 text-blue-400" />
          Experience
        </h2>

        <div>
          {experienceData.map((item, index) => (
            <TimelineItem
              key={index}
              item={item}
              icon={<Briefcase className="w-4 h-4 text-blue-400" />}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
