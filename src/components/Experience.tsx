import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

/* =======================
   DATA
======================= */

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

/* =======================
   TIMELINE ITEM
======================= */

const TimelineItem = ({
  item,
  icon,
  isLast,
}: {
  item: any;
  icon: React.ReactNode;
  isLast?: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative pl-14"
    >
      {/* Vertical Line */}
      {!isLast && (
        <span className="absolute left-5 top-10 h-full w-px bg-slate-700" />
      )}

      {/* Icon */}
      <span className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full border border-blue-400 bg-slate-800">
        {icon}
      </span>

      {/* Card */}
      <div className="rounded-xl border border-slate-700 bg-slate-800/40 p-6 shadow-md backdrop-blur-sm">
        <p className="text-xs uppercase tracking-widest text-slate-400">
          {item.date}
        </p>

        <h3 className="mt-2 text-lg font-semibold text-white">
          {item.title}
        </h3>

        <h4 className="text-sm font-medium text-blue-400">
          {item.subtitle}
        </h4>

        <p className="mt-3 text-sm leading-relaxed text-slate-400">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
};

/* =======================
   COMPONENT
======================= */

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-slate-900 py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl">

        {/* ===== EDUCATION ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="mb-12 flex items-center gap-3 text-3xl font-bold text-white">
            <GraduationCap className="h-8 w-8 text-blue-400" />
            Education
          </h2>

          <div className="space-y-10">
            {educationData.map((item, index) => (
              <TimelineItem
                key={index}
                item={item}
                icon={<GraduationCap className="h-4 w-4 text-blue-400" />}
                isLast={index === educationData.length - 1}
              />
            ))}
          </div>
        </motion.div>

        {/* ===== EXPERIENCE ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-12 flex items-center gap-3 text-3xl font-bold text-white">
            <Briefcase className="h-8 w-8 text-blue-400" />
            Experience
          </h2>

          <div className="space-y-10">
            {experienceData.map((item, index) => (
              <TimelineItem
                key={index}
                item={item}
                icon={<Briefcase className="h-4 w-4 text-blue-400" />}
                isLast={index === experienceData.length - 1}
              />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Experience;
