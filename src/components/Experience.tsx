import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

/* ================= DATA ================= */

const experienceData = [
  {
    title: "Meta Taaraka AI Pvt. Ltd.",
    role: "AI & Web Development Intern",
    date: "Jun 2024 – Aug 2024",
    points: [
      "Developed responsive frontend modules using React.",
      "Integrated REST APIs with structured data handling.",
      "Worked on debugging and performance optimization.",
    ],
  },
  {
    title: "BSNL",
    role: "Networking & Telecom Intern",
    date: "Apr 2024 – May 2024",
    points: [
      "Worked with telecom infrastructure systems.",
      "Understood large-scale network operations.",
    ],
  },
  {
    title: "Test Yatra",
    role: "Software Testing Intern",
    date: "Feb 2024 – Mar 2024",
    points: [
      "Executed manual testing and defect identification.",
      "Validated workflows using QA practices.",
    ],
  },
];

const educationData = [
  {
    title: "B.E – Electronics & Communication Engineering",
    college: "Panimalar Engineering College",
    date: "2023 – 2027",
  },
  {
    title: "Higher Secondary Education",
    college: "Holy Infant Jesus School",
    date: "2022 – 2023",
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

          {/* ================= EXPERIENCE (TIMELINE) ================= */}
          <div>
            <h3 className="flex items-center gap-2 text-2xl text-white mb-10">
              <Briefcase className="text-blue-400" />
              Experience
            </h3>

            <div className="relative border-l border-slate-700 pl-8 space-y-12">
              {experienceData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="relative"
                >
                  {/* DOT */}
                  <span className="absolute -left-[38px] top-1 h-3 w-3 rounded-full bg-blue-400"></span>

                  <h4 className="text-lg font-semibold text-white">
                    {item.title}
                  </h4>

                  <p className="text-sm text-blue-400">
                    {item.role}
                  </p>

                  <span className="text-xs text-slate-400">
                    {item.date}
                  </span>

                  <ul className="mt-3 space-y-2">
                    {item.points.map((point, i) => (
                      <li key={i} className="text-sm text-slate-400">
                        • {point}
                      </li>
                    ))}
                  </ul>
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
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="p-6 rounded-xl bg-slate-800/40 backdrop-blur-md hover:bg-slate-800/60 transition"
                >
                  <h4 className="text-lg font-semibold text-white">
                    {item.title}
                  </h4>

                  <p className="text-blue-400 text-sm">
                    {item.college}
                  </p>

                  <span className="text-xs text-slate-400">
                    {item.date}
                  </span>
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