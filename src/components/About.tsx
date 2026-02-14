import { motion } from "framer-motion";
import {
  Code2,
  Layout,
  Server,
  Database,
  Wrench,
  Rocket,
} from "lucide-react";

/* =======================
   SKILLS DATA
======================= */

const skills = [
  {
    title: "Frontend Engineering",
    icon: <Layout size={20} />,
    items: [
      "React.js",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Backend Development",
    icon: <Server size={20} />,
    items: [
      "Node.js",
      "Express.js",
      "Java",
      "REST API Integration",
    ],
  },
  {
    title: "Database Systems",
    icon: <Database size={20} />,
    items: [
      "MongoDB",
      "MySQL",
      "Schema Design",
      "CRUD Operations",
    ],
  },
  {
    title: "Programming Languages",
    icon: <Code2 size={20} />,
    items: [
      "Java",
      "JavaScript",
      "Python",
    ],
  },
  {
    title: "Tools & Deployment",
    icon: <Wrench size={20} />,
    items: [
      "Git",
      "GitHub",
      "Firebase",
      "Vercel",
      "Figma",
    ],
  },
  {
    title: "Production Readiness",
    icon: <Rocket size={20} />,
    items: [
      "Responsive Architecture",
      "Performance Optimization",
      "Clean Folder Structure",
      "Environment Configuration",
    ],
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
              I am a{" "}
              <span className="text-blue-400 font-medium">
                Full-Stack Web Engineer
              </span>{" "}
              specializing in building scalable, responsive, and production-ready
              web applications using modern frontend and backend technologies.
            </p>

            <p className="mt-4 text-gray-300 text-lg leading-relaxed">
              My work involves designing clean component architectures,
              integrating RESTful APIs, implementing authentication systems,
              managing databases, and deploying applications with performance
              optimization and maintainability in mind.
            </p>

            <p className="mt-4 text-gray-400 text-base leading-relaxed">
              I focus on writing structured, reusable code and building systems
              that are robust, efficient, and aligned with real-world
              engineering standards.
            </p>

            {/* ===== Resume Button ===== */}
            <div className="mt-8 flex justify-center">
              <a
                href="/Aswini_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-3
                           text-sm font-medium text-white shadow-lg
                           transition hover:bg-blue-700 hover:shadow-blue-500/40"
              >
                View Resume
              </a>
            </div>
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
          Core Technical Expertise
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
