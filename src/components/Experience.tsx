import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

/* ================= DATA ================= */

const experienceData = [
  {
    title: "Meta Taaraka AI Pvt. Ltd.",
    role: "AI & Web Development Intern",
    date: "Jun 2024 – Aug 2024",
    points: [
      "Built responsive UI components using React.js improving user interaction and accessibility.",
      "Integrated RESTful APIs and handled dynamic data rendering efficiently.",
      "Optimized frontend performance reducing load time by ~20%.",
      "Collaborated with backend team for seamless data flow and debugging.",
    ],
    tech: ["React", "JavaScript", "API", "Git"],
  },
  {
    title: "BSNL",
    role: "Networking & Telecom Intern",
    date: "Apr 2024 – May 2024",
    points: [
      "Analyzed telecom network infrastructure and routing systems.",
      "Studied real-time signal transmission and switching mechanisms.",
      "Gained exposure to large-scale network operations and maintenance.",
    ],
    tech: ["Networking", "Telecom Systems"],
  },
  {
    title: "Test Yatra",
    role: "Software Testing Intern",
    date: "Feb 2024 – Mar 2024",
    points: [
      "Performed manual testing and identified critical bugs in application workflows.",
      "Validated UI/UX functionality ensuring smooth user experience.",
      "Documented defects and collaborated with developers for fixes.",
    ],
    tech: ["Manual Testing", "QA", "Bug Tracking"],
  },
];

const educationData = [
  {
    title: "B.E – Electronics & Communication Engineering",
    college: "Panimalar Engineering College",
    date: "2023 – 2027",
    extra: "CGPA: 8.1 | Focus: DSA, Web Development, DBMS",
  },
  {
    title: "Higher Secondary Education",
    college: "Holy Infant Jesus School",
    date: "2022 – 2023",
    extra: "Percentage: 71%",
  },
];

/* ================= COMPONENT ================= */

const Experience = () => {
  return (
    <section className="bg-slate-900 py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <h2 className="text-4xl font-bold text-white text-center mb-20">
          Experience & Education
        </h2>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* ================= EXPERIENCE ================= */}
          <div>
            <h3 className="flex items-center gap-2 text-2xl text-white mb-10">
              <Briefcase className="text-blue-400" />
              Experience
            </h3>

            <div className="relative border-l border-slate-700 pl-8 space-y-12">
              {experienceData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="relative group hover:translate-x-2 transition duration-300"
                >
                  {/* DOT */}
                  <span className="absolute -left-[38px] top-1 h-3 w-3 rounded-full bg-blue-400"></span>

                  {/* TITLE */}
                  <h4 className="text-lg font-semibold text-white">
                    {item.title}
                  </h4>

                  {/* ROLE */}
                  <p className="text-sm text-blue-400">
                    {item.role}
                  </p>

                  {/* DATE */}
                  <span className="text-xs text-slate-400">
                    {item.date}
                  </span>

                  {/* POINTS */}
                  <ul className="mt-3 space-y-2">
                    {item.points.map((point, i) => (
                      <li key={i} className="text-sm text-slate-400 leading-relaxed">
                        • {point}
                      </li>
                    ))}
                  </ul>

                  {/* TECH STACK */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {item.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 bg-blue-500/10 text-blue-400 rounded-md border border-blue-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ================= EDUCATION ================= */}
          <div>
            <h3 className="flex items-center gap-2 text-2xl text-white mb-10">
              <GraduationCap className="text-blue-400" />
              Education
            </h3>

            <div className="space-y-6">
              {educationData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="p-6 rounded-xl bg-slate-800/40 backdrop-blur-md hover:bg-slate-800/60 hover:scale-[1.02] transition duration-300 border border-slate-700"
                >
                  <h4 className="text-lg font-semibold text-white">
                    {item.title}
                  </h4>

                  <p className="text-blue-400 text-sm">
                    {item.college}
                  </p>

                  <span className="text-xs text-slate-400 block mt-1">
                    {item.date}
                  </span>

                  <p className="text-xs text-slate-400 mt-2">
                    {item.extra}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;