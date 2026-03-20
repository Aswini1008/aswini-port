import { motion } from "framer-motion";
import { Code2, LayoutDashboard, Server, Wrench } from "lucide-react";
import { ReactNode } from "react";

/* ─── types ─── */
interface Skill { name: string; dot: string }
interface Category {
  title: string;
  icon: ReactNode;
  iconBg: string;
  iconColor: string;
  glowColor: string;
  skills: Skill[];
}

/* ─── data ─── */
const skillCategories: Category[] = [
  {
    title: "Programming",
    icon: <Code2 size={18} />,
    iconBg: "rgba(59,130,246,.15)",
    iconColor: "#60a5fa",
    glowColor: "rgba(59,130,246,.09)",
    skills: [
      { name: "Java",       dot: "#f89820" },
      { name: "C",          dot: "#5c6bc0" },
      { name: "Python",     dot: "#3572a5" },
      { name: "JavaScript", dot: "#f7df1e" },
    ],
  },
  {
    title: "Frontend",
    icon: <LayoutDashboard size={18} />,
    iconBg: "rgba(20,184,166,.15)",
    iconColor: "#2dd4bf",
    glowColor: "rgba(20,184,166,.08)",
    skills: [
      { name: "React.js", dot: "#61dafb" },
      { name: "HTML5",    dot: "#e34c26" },
      { name: "CSS3",     dot: "#264de4" },
      { name: "Tailwind", dot: "#38bdf8" },
    ],
  },
  {
    title: "Backend",
    icon: <Server size={18} />,
    iconBg: "rgba(139,92,246,.15)",
    iconColor: "#a78bfa",
    glowColor: "rgba(139,92,246,.08)",
    skills: [
      { name: "Node.js",    dot: "#68a063" },
      { name: "Express.js", dot: "#888"    },
      { name: "MongoDB",    dot: "#47a248" },
      { name: "MySQL",      dot: "#00758f" },
    ],
  },
  {
    title: "Tools",
    icon: <Wrench size={18} />,
    iconBg: "rgba(251,191,36,.12)",
    iconColor: "#fbbf24",
    glowColor: "rgba(251,191,36,.06)",
    skills: [
      { name: "Git",      dot: "#f05032" },
      { name: "GitHub",   dot: "#e2e8f0" },
      { name: "Netlify",  dot: "#00c7b7" },
      { name: "Firebase", dot: "#ffca28" },
      { name: "Figma",    dot: "#f24e1e" },
    ],
  },
];

/* ─── component ─── */
const Skills = () => (
  <section
    id="skills"
    className="relative overflow-hidden py-24 px-6 lg:px-20"
    style={{ background: "linear-gradient(135deg,#020617 0%,#0a0f1e 50%,#030b1a 100%)" }}
  >
    {/* Ambient glows */}
    <div className="pointer-events-none absolute left-[5%] top-[8%] h-80 w-80 rounded-full"
      style={{ background: "radial-gradient(circle,rgba(59,130,246,.09) 0%,transparent 70%)", filter: "blur(55px)" }} />
    <div className="pointer-events-none absolute bottom-[8%] right-[5%] h-72 w-72 rounded-full"
      style={{ background: "radial-gradient(circle,rgba(139,92,246,.07) 0%,transparent 70%)", filter: "blur(55px)" }} />

    <div className="relative z-10 mx-auto max-w-6xl">

      {/* Label */}
      <motion.div
        initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5 }}
        className="mb-4 flex items-center justify-center gap-3"
      >
        <span className="h-px w-16 bg-gradient-to-r from-transparent to-blue-500/40" />
        <span className="text-xs font-semibold uppercase tracking-[.2em] text-blue-400">What I work with</span>
        <span className="h-px w-16 bg-gradient-to-l from-transparent to-blue-500/40" />
      </motion.div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.05 }}
        className="mb-4 text-center font-syne text-4xl font-extrabold text-slate-100 sm:text-5xl"
      >
        Technical{" "}
        <span style={{ background: "linear-gradient(90deg,#3b82f6,#93c5fd)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          Skills
        </span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        viewport={{ once: true }} transition={{ delay: 0.15 }}
        className="mx-auto mb-16 max-w-xl text-center text-sm leading-relaxed text-slate-500"
      >
        A curated set of technologies I use to design, build, and deploy scalable full-stack applications.
      </motion.p>

      {/* Cards grid */}
      <div className="grid gap-5 sm:grid-cols-2">
        {skillCategories.map((cat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.12 }}
            whileHover={{ y: -4 }}
            className="group relative overflow-hidden rounded-2xl p-7 transition-colors duration-300"
            style={{
              background: "rgba(15,23,42,.75)",
              border: "1px solid rgba(59,130,246,.1)",
            }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(59,130,246,.28)")}
            onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(59,130,246,.1)")}
          >
            {/* Hover radial glow */}
            <div
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-400 group-hover:opacity-100"
              style={{ background: `radial-gradient(ellipse at 20% 30%,${cat.glowColor},transparent 65%)` }}
            />

            {/* Header */}
            <div className="mb-5 flex items-center gap-3">
              <div
                className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl"
                style={{ background: cat.iconBg, color: cat.iconColor }}
              >
                {cat.icon}
              </div>
              <h3 className="font-syne text-base font-bold text-slate-100">{cat.title}</h3>
            </div>

            {/* Thin divider */}
            <div className="mb-5 h-px w-full bg-white/[.05]" />

            {/* Skill chips */}
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, j) => (
                <motion.span
                  key={j}
                  whileHover={{ scale: 1.06 }}
                  className="flex cursor-default items-center gap-2 rounded-lg border px-3.5 py-1.5 text-xs font-medium text-slate-400 transition-all duration-200 hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-slate-200"
                  style={{ background: "rgba(255,255,255,.03)", borderColor: "rgba(255,255,255,.07)" }}
                >
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ background: skill.dot }} />
                  {skill.name}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>



    </div>
  </section>
);

export default Skills;