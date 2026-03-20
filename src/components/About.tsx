import { motion } from "framer-motion";
import {
  Users, Code2, Monitor, Zap, AlertCircle, CheckCircle, Download,
} from "lucide-react";

/* ─── data ─── */
const impacts = [
  { icon: <Users size={15} className="text-blue-400" />, bg: "bg-blue-500/10", text: "Built applications used by 250+ users" },
  { icon: <Code2 size={15} className="text-violet-400" />, bg: "bg-violet-500/10", text: "Strong in Data Structures & Algorithms (Java)" },
  { icon: <Monitor size={15} className="text-blue-400" />, bg: "bg-blue-500/10", text: "Experience in full-stack real-world projects" },
];

const focuses = [
  { icon: <Zap size={15} />, color: "text-blue-400", bg: "bg-blue-500/10", text: "Building scalable full-stack systems" },
  { icon: <Code2 size={15} />, color: "text-violet-400", bg: "bg-violet-500/10", text: "Writing clean and maintainable code" },
  { icon: <Zap size={15} />, color: "text-teal-400", bg: "bg-teal-500/10", text: "Performance optimization" },
  { icon: <AlertCircle size={15} />, color: "text-amber-400", bg: "bg-amber-500/10", text: "Solving real-world engineering problems" },
  { icon: <CheckCircle size={15} />, color: "text-green-400", bg: "bg-green-500/10", text: "Delivering production-ready applications" },
];

const stats = [
  { num: "250+", label: "Users Reached" },
  { num: "5+",  label: "Projects Built" },
 
];

/* ─── component ─── */
const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 px-6 lg:px-20"
      style={{ background: "linear-gradient(135deg,#020617 0%,#0a0f1e 50%,#030b1a 100%)" }}
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute right-[5%] top-[10%] h-[400px] w-[400px] rounded-full"
        style={{ background: "radial-gradient(circle,rgba(59,130,246,.07) 0%,transparent 70%)", filter: "blur(50px)" }} />
      <div className="pointer-events-none absolute bottom-[10%] left-[5%] h-[300px] w-[300px] rounded-full"
        style={{ background: "radial-gradient(circle,rgba(139,92,246,.06) 0%,transparent 70%)", filter: "blur(50px)" }} />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* ── Section label ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4 flex items-center justify-center gap-3"
        >
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-blue-500/40" />
          <span className="text-xs font-semibold uppercase tracking-[.2em] text-blue-400">Get to know me</span>
          <span className="h-px w-16 bg-gradient-to-l from-transparent to-blue-500/40" />
        </motion.div>

        {/* ── Heading ── */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="mb-16 text-center font-syne text-4xl font-extrabold text-slate-100 sm:text-5xl"
        >
          About{" "}
          <span style={{
            background: "linear-gradient(90deg,#3b82f6,#93c5fd)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>
            Me
          </span>
        </motion.h2>

        {/* ── Grid ── */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="mb-5 font-syne text-2xl font-bold leading-snug text-slate-100 sm:text-3xl">
              I build real-world web applications,{" "}
              <span className="text-blue-400">not just projects.</span>
            </h3>

            <p className="mb-4 text-sm leading-relaxed text-slate-500">
              I'm Aswini, a Full Stack Developer focused on building scalable,
              production-ready applications using React, Node.js, and modern backend
              technologies.
            </p>
            <p className="mb-6 text-sm leading-relaxed text-slate-500">
              I enjoy solving real-world problems, designing clean architectures, and
              transforming ideas into functional, user-friendly systems.
            </p>

            {/* Impact items */}
            <div className="mb-8 flex flex-col gap-3">
              {impacts.map(({ icon, bg, text }, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-3 rounded-r-xl border border-blue-500/10 border-l-blue-500 px-4 py-3 ${bg}`}
                  style={{ borderLeftWidth: 3 }}
                >
                  <div className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-500/15`}>
                    {icon}
                  </div>
                  <span className="text-sm font-medium text-slate-300">{text}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="/Aswini_SM_Resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-blue-500/30"
              style={{
                background: "linear-gradient(135deg,#2563eb,#3b82f6)",
                boxShadow: "0 0 20px rgba(59,130,246,.3)",
              }}
            >
              <Download size={15} />
              Download Resume
            </a>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-4"
          >
            {/* Focus card */}
            <div
              className="rounded-2xl border border-blue-500/10 p-7"
              style={{ background: "rgba(15,23,42,.7)", backdropFilter: "blur(12px)" }}
            >
              <h4 className="mb-5 flex items-center gap-2.5 font-syne text-base font-bold text-slate-100">
                <span className="h-2 w-2 rounded-full bg-blue-500" />
                What I focus on
              </h4>

              <div className="flex flex-col gap-2.5">
                {focuses.map(({ icon, color, bg, text }, i) => (
                  <div
                    key={i}
                    className="group flex cursor-default items-center gap-3 rounded-xl border border-white/[.03] px-3.5 py-2.5 transition-all duration-200 hover:border-blue-500/18 hover:bg-blue-500/7"
                  >
                    <div className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg ${bg} ${color}`}>
                      {icon}
                    </div>
                    <span className="text-sm font-medium text-slate-400">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stat strip */}
            <div className="grid grid-cols-3 gap-3">
              {stats.map(({ num, label }, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-blue-500/10 py-4 text-center"
                  style={{ background: "rgba(15,23,42,.7)" }}
                >
                  <p
                    className="font-syne text-xl font-extrabold"
                    style={{
                      background: "linear-gradient(90deg,#3b82f6,#93c5fd)",
                      WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                    }}
                  >
                    {num}
                  </p>
                  <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-slate-500">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;