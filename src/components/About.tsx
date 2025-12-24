import { motion } from "framer-motion";
import {
  Code2,
  Layout,
  Server,
  Database,
  Wrench,
  Brain,
} from "lucide-react";

/* =======================
   SKILLS DATA
======================= */

const skills = [
  {
    title: "Languages",
    icon: <Code2 size={20} />,
    items: ["Java", "Python"],
  },
  {
    title: "Frontend",
    icon: <Layout size={20} />,
    items: ["HTML", "CSS", "JavaScript", "React","Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: <Server size={20} />,
    items: ["Java", "Node.js", "MongoDB"],
  },
  {
    title: "Database",
    icon: <Database size={20} />,
    items: ["MySQL"],
  },
  {
    title: "Tools & Platforms",
    icon: <Wrench size={20} />,
    items: ["Git", "GitHub", "Firebase", "Figma"],
  },
  {
    title: "Interests",
    icon: <Brain size={20} />,
    items: ["AI & Intelligent Systems", "Problem Solving"],
  },
];

/* =======================
   ANIMATION VARIANTS
======================= */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

/* =======================
   COMPONENT
======================= */

const About = () => {
  return (
    <section
      id="about"
      className="w-full bg-slate-900 py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto">

        {/* ================= ABOUT ================= */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            About Me
          </h2>

          <div className="bg-gray-800/60 border border-gray-700/50 backdrop-blur-md rounded-2xl p-8 shadow-lg max-w-3xl mx-auto">
            <p className="text-gray-300 text-lg leading-relaxed">
              I am an engineering student and a passionate{" "}
              <span className="text-blue-400 font-medium">
                Full-Stack Developer
              </span>{" "}
              with a strong interest in backend systems, scalable architectures,
              and AI-powered applications.
            </p>

            <p className="mt-4 text-gray-300 text-lg leading-relaxed">
              I focus on writing clean, maintainable code and building
              applications that are technically robust, scalable, and
              user-friendly.
            </p>
          </div>
        </motion.div>

        {/* ================= SKILLS ================= */}
        <motion.h3
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-semibold text-white text-center mb-12"
        >
          Technical Skills
        </motion.h3>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              custom={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-gray-800/50 border border-gray-700/40 rounded-xl p-6
                         shadow-md hover:shadow-xl hover:-translate-y-1
                         transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4 text-blue-400">
                {skill.icon}
                <h4 className="text-lg font-semibold">
                  {skill.title}
                </h4>
              </div>

              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li
                    key={item}
                    className="text-gray-400 text-sm leading-relaxed"
                  >
                    • {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
