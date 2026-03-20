import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

/* ─── data ─── */
const experienceData = [
  {
    company: "Meta Taaraka AI Pvt. Ltd.",
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
    company: "BSNL",
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
    company: "Test Yatra",
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
    level: "Undergraduate",
    title: "B.E – Electronics & Communication Engineering",
    college: "Panimalar Engineering College",
    date: "2023 – 2027",
    stat: "CGPA: 8.1",
    extra: "Focus: DSA · Web Development · DBMS",
  },
  {
    level: "Higher Secondary",
    title: "Higher Secondary Education (12th)",
    college: "Holy Infant Jesus School",
    date: "2022 – 2023",
    stat: "71%",
    extra: "",
  },
];

const focusAreas = ["Data Structures & Algorithms", "Full Stack Development", "System Design", "DBMS"];

/* ─── component ─── */
const Experience = () => (
  <section
    id="experience"
    className="relative overflow-hidden py-24 px-6 lg:px-20"
    style={{ background: "linear-gradient(135deg,#020617 0%,#0a0f1e 50%,#030b1a 100%)" }}
  >
    {/* Glows */}
    <div className="pointer-events-none absolute left-[5%] top-[5%] h-80 w-80 rounded-full"
      style={{ background: "radial-gradient(circle,rgba(59,130,246,.07) 0%,transparent 70%)", filter: "blur(55px)" }} />
    <div className="pointer-events-none absolute bottom-[5%] right-[5%] h-72 w-72 rounded-full"
      style={{ background: "radial-gradient(circle,rgba(139,92,246,.06) 0%,transparent 70%)", filter: "blur(55px)" }} />

    <div className="relative z-10 mx-auto max-w-6xl">

      {/* Label */}
      <motion.div
        initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5 }}
        className="mb-4 flex items-center justify-center gap-3"
      >
        <span className="h-px w-16 bg-gradient-to-r from-transparent to-blue-500/40" />
        <span className="text-xs font-semibold uppercase tracking-[.2em] text-blue-400">My journey</span>
        <span className="h-px w-16 bg-gradient-to-l from-transparent to-blue-500/40" />
      </motion.div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.05 }}
        className="mb-16 text-center font-syne text-4xl font-extrabold text-slate-100 sm:text-5xl"
      >
        Experience &{" "}
        <span style={{ background: "linear-gradient(90deg,#3b82f6,#93c5fd)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          Education
        </span>
      </motion.h2>

      <div className="grid gap-14 lg:grid-cols-2 lg:items-start">

        {/* ── EXPERIENCE ── */}
        <div>
          {/* Col header */}
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10">
              <Briefcase size={17} className="text-blue-400" />
            </div>
            <h3 className="font-syne text-lg font-bold text-slate-100">Experience</h3>
          </div>

          {/* Timeline */}
          <div className="relative border-l pl-7" style={{ borderColor: "rgba(59,130,246,.15)" }}>
            {experienceData.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="relative mb-9 last:mb-0"
              >
                {/* Timeline dot */}
                <span
                  className="absolute -left-[34px] top-1.5 h-3 w-3 rounded-full border-2"
                  style={{ background: "#3b82f6", borderColor: "#020617", boxShadow: "0 0 8px rgba(59,130,246,.55)" }}
                />

                {/* Card */}
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-2xl p-5 transition-colors duration-250"
                  style={{ background: "rgba(15,23,42,.7)", border: "1px solid rgba(59,130,246,.1)" }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(59,130,246,.28)")}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(59,130,246,.1)")}
                >
                  <p className="font-syne text-sm font-bold text-slate-100">{item.company}</p>
                  <p className="mt-0.5 text-xs font-semibold text-blue-400">{item.role}</p>
                  <span
                    className="mt-2 mb-3 inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold text-slate-600"
                    style={{ background: "rgba(59,130,246,.07)", border: "1px solid rgba(59,130,246,.1)" }}
                  >
                    {item.date}
                  </span>

                  <div className="mb-3 h-px w-full" style={{ background: "rgba(255,255,255,.05)" }} />

                  <ul className="mb-3 flex flex-col gap-1.5">
                    {item.points.map((pt, j) => (
                      <li key={j} className="flex gap-2 text-xs leading-relaxed text-slate-500">
                        <span className="mt-0.5 flex-shrink-0 text-[10px] text-blue-500">▸</span>
                        {pt}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {item.tech.map((t, j) => (
                      <span
                        key={j}
                        className="rounded-full px-2.5 py-0.5 text-[11px] font-semibold text-blue-300"
                        style={{ background: "rgba(59,130,246,.08)", border: "1px solid rgba(59,130,246,.15)" }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── EDUCATION ── */}
        <div>
          {/* Col header */}
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl" style={{ background: "rgba(99,102,241,.12)" }}>
              <GraduationCap size={17} className="text-indigo-400" />
            </div>
            <h3 className="font-syne text-lg font-bold text-slate-100">Education</h3>
          </div>

          <div className="flex flex-col gap-4">
            {educationData.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.55 }}
                whileHover={{ y: -3 }}
                className="relative overflow-hidden rounded-2xl p-5 transition-colors duration-250"
                style={{ background: "rgba(15,23,42,.7)", border: "1px solid rgba(59,130,246,.1)" }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(59,130,246,.28)")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(59,130,246,.1)")}
              >
                {/* Left accent bar */}
                <div className="absolute left-0 top-0 h-full w-[3px] rounded-l-2xl"
                  style={{ background: "linear-gradient(180deg,#3b82f6,#6366f1)" }} />

                <p className="mb-1.5 text-[11px] font-bold uppercase tracking-[.15em] text-blue-400">{item.level}</p>
                <p className="font-syne text-sm font-bold leading-snug text-slate-100">{item.title}</p>
                <p className="mt-1 text-xs font-medium text-blue-400">{item.college}</p>
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  <span
                    className="rounded-full px-2.5 py-1 text-[11px] font-semibold text-slate-600"
                    style={{ background: "rgba(59,130,246,.07)", border: "1px solid rgba(59,130,246,.1)" }}
                  >
                    {item.date}
                  </span>
                  <span className="text-xs text-slate-500">{item.stat}</span>
                </div>
                {item.extra && (
                  <p className="mt-2 text-xs text-slate-600">{item.extra}</p>
                )}
              </motion.div>
            ))}

            {/* Focus areas card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.55 }}
              className="relative overflow-hidden rounded-2xl p-5"
              style={{ background: "rgba(15,23,42,.7)", border: "1px solid rgba(99,102,241,.12)" }}
            >
              <div className="absolute left-0 top-0 h-full w-[3px] rounded-l-2xl"
                style={{ background: "linear-gradient(180deg,#6366f1,#8b5cf6)" }} />
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[.15em] text-indigo-400">Ongoing focus areas</p>
              <div className="flex flex-wrap gap-2">
                {focusAreas.map((f, i) => (
                  <span
                    key={i}
                    className="rounded-full px-3 py-1 text-[11px] font-semibold text-indigo-300"
                    style={{ background: "rgba(99,102,241,.08)", border: "1px solid rgba(99,102,241,.18)" }}
                  >
                    {f}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default Experience;