import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  LayoutDashboard,
  Server,
  Wrench,
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Core Languages",
      icon: <Code2 className="w-5 h-5 text-blue-400" />,
      skills: ["Java", "C", "Python", "JavaScript (ES6+)"],
    },
    {
      title: "Frontend Engineering",
      icon: <LayoutDashboard className="w-5 h-5 text-blue-400" />,
      skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS"],
    },
    {
      title: "Backend & Database Systems",
      icon: <Server className="w-5 h-5 text-blue-400" />,
      skills: ["Node.js", "Express.js", "MySQL", "MongoDB"],
    },
    {
      title: "Tools, Deployment & Workflow",
      icon: <Wrench className="w-5 h-5 text-blue-400" />,
      skills: [
        "Git",
        "GitHub",
        "Netlify",
        "Firebase",
        "Cloudinary",
        "VS Code",
        "Figma",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 text-white"
    >
      <div className="max-w-6xl mx-auto px-4">

        {/* ===== Title ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold mb-4">
            Technical Expertise
          </h2>

          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            A structured technology stack supporting full-stack application
            development, backend integration, and production deployment workflows.
          </p>
        </motion.div>

        {/* ===== Skill Cards ===== */}
        <div className="grid gap-10 sm:grid-cols-2">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                damping: 20,
                stiffness: 100,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="rounded-2xl bg-slate-800/50 border border-slate-700 p-8 shadow-lg transition-all duration-300 hover:border-blue-500/40"
            >
              <div className="flex items-center gap-3 mb-6">
                {category.icon}
                <h3 className="text-lg font-semibold text-blue-400">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 rounded-lg bg-slate-900 text-slate-200 text-sm font-medium border border-slate-700 hover:border-blue-500 hover:bg-blue-900/20 transition-all duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
