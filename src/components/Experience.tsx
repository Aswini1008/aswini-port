import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

/* =======================
   DATA
======================= */

const educationData = [
  {
    title: "B.Tech – Electronics & Communication Engineering",
    subtitle: "Panimalar Engineering College",
    date: "2023 – 2027",
    points: [
      "Built a strong foundation in electronics, communication systems, and software engineering principles.",
      "Expanded into full-stack web development and backend system design.",
      "Applied engineering concepts to hardware–software integrated projects.",
      "Focused on structured problem-solving and scalable system thinking.",
    ],
  },
  {
    title: "Higher Secondary Education (HSC)",
    subtitle: "Holy Infant Jesus Matriculation Higher Secondary School",
    date: "2022 – 2023",
    points: [
      "Specialized in Mathematics and Physical Sciences.",
      "Developed analytical reasoning and quantitative problem-solving skills.",
      "Built foundational knowledge supporting engineering and software development.",
    ],
  },
];

const experienceData = [
  {
    title: "Meta Taaraka AI Pvt. Ltd.",
    subtitle: "AI & Web Development Intern",
    date: "Jun 2024 – Aug 2024",
    points: [
      "Developed responsive frontend modules using modern React-based architecture.",
      "Integrated REST APIs and ensured structured data handling.",
      "Participated in feature implementation, debugging, and performance refinement.",
      "Collaborated within structured product development workflows.",
    ],
  },
  {
    title: "BSNL",
    subtitle: "Networking & Telecom Internship",
    date: "Apr 2024 – May 2024",
    points: [
      "Worked with telecom infrastructure and large-scale communication systems.",
      "Observed operational workflows in reliability-focused environments.",
      "Understood foundational network architecture and system-level operations.",
    ],
  },
  {
    title: "Test Yatra",
    subtitle: "Software Testing Intern",
    date: "Feb 2024 – Mar 2024",
    points: [
      "Executed structured manual test cases and defect identification processes.",
      "Validated application workflows aligned with QA standards.",
      "Documented findings and ensured consistency in testing cycles.",
    ],
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
      <div className="rounded-2xl border border-slate-700 bg-slate-800/40 p-7 shadow-md backdrop-blur-sm hover:shadow-lg transition-all duration-300">

        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <h3 className="text-lg font-semibold text-white">
              {item.title}
            </h3>
            <h4 className="text-sm font-medium text-blue-400">
              {item.subtitle}
            </h4>
          </div>

          <span className="text-xs uppercase tracking-widest text-slate-400">
            {item.date}
          </span>
        </div>

        {/* Bullet Points */}
        <ul className="mt-6 space-y-3">
          {item.points.map((point: string, index: number) => (
            <li
              key={index}
              className="flex items-start gap-3 text-sm text-slate-400 leading-relaxed"
            >
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-400" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

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
          className="mb-28"
        >
          <h2 className="mb-16 flex items-center gap-3 text-3xl font-bold text-white">
            <GraduationCap className="h-8 w-8 text-blue-400" />
            Academic Foundation
          </h2>

          <div className="space-y-14">
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
          <h2 className="mb-16 flex items-center gap-3 text-3xl font-bold text-white">
            <Briefcase className="h-8 w-8 text-blue-400" />
            Professional Experience
          </h2>

          <div className="space-y-14">
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
