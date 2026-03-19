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
      title: "Programming",
      icon: <Code2 className="w-5 h-5" />,
      skills: ["Java", "C", "Python", "JavaScript"],
    },
    {
      title: "Frontend",
      icon: <LayoutDashboard className="w-5 h-5" />,
      skills: ["React.js", "HTML5", "CSS3", "Tailwind"],
    },
    {
      title: "Backend",
      icon: <Server className="w-5 h-5" />,
      skills: ["Node.js", "Express.js", "MongoDB", "MySQL"],
    },
    {
      title: "Tools",
      icon: <Wrench className="w-5 h-5" />,
      skills: ["Git", "GitHub", "Netlify", "Firebase", "Figma"],
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-28 bg-slate-950 text-white overflow-hidden"
    >
      {/* ===== BACKGROUND GLOW ===== */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute w-72 h-72 bg-blue-500/20 blur-3xl top-10 left-10" />
        <div className="absolute w-72 h-72 bg-purple-500/20 blur-3xl bottom-10 right-10" />
      </div>

      <div className="max-w-6xl mx-auto px-6">

        {/* ===== TITLE ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold">
            Technical Skills
          </h2>

          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            A curated set of technologies I use to design, build, and deploy
            scalable full-stack applications.
          </p>
        </motion.div>

        {/* ===== GRID ===== */}
        <div className="grid gap-8 sm:grid-cols-2">

          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ scale: 1.03 }}
              className="relative group rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl p-8 overflow-hidden"
            >
              {/* HOVER GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-transparent" />
              </div>

              {/* HEADER */}
              <div className="flex items-center gap-3 mb-6 text-blue-400">
                {category.icon}
                <h3 className="text-lg font-semibold">
                  {category.title}
                </h3>
              </div>

              {/* SKILLS */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.08 }}
                    className="px-4 py-2 text-sm rounded-lg bg-slate-800 border border-slate-700 text-gray-300 transition hover:border-blue-500 hover:text-white"
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