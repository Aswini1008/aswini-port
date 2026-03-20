import { motion } from "framer-motion";
import { Github, ExternalLink, CheckCircle } from "lucide-react";
import { ReactNode } from "react";

/* ─── types ─── */
interface Project {
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  tech: string[];
  liveLink: string;
  githubLink: string;
  image: string;
  num: string;
  accent: { chip: string; chipBorder: string; chipText: string; check: string; badge: string; badgeBorder: string; badgeText: string; btn: string; btnShadow: string; label: string };
}

/* ─── data ─── */
const projects: Project[] = [
  {
    num: "Project 01",
    title: "PR Power Infrastructure",
    subtitle: "Corporate Web Platform",
    description:
      "A production-ready corporate web platform designed to strengthen digital presence with optimized performance, responsive architecture, and structured UI components.",
    highlights: [
      "Designed modular React component architecture",
      "Implemented responsive layouts using Tailwind CSS",
      "Optimized performance with lazy loading & structured asset management",
      "Integrated SEO-friendly markup and metadata structure",
    ],
    tech: ["React.js", "Tailwind CSS", "Framer Motion", "Vite"],
    liveLink: "https://www.prpowerinfra.com/",
    githubLink: "https://github.com/Aswini1008/PR-Final",
    image: "/images/prpower.png",
    accent: {
      chip: "rgba(59,130,246,.08)", chipBorder: "rgba(59,130,246,.18)", chipText: "#93c5fd",
      check: "#3b82f6",
      badge: "rgba(59,130,246,.12)", badgeBorder: "rgba(59,130,246,.3)", badgeText: "#93c5fd",
      btn: "linear-gradient(135deg,#2563eb,#3b82f6)", btnShadow: "rgba(59,130,246,.35)",
      label: "Live",
    },
  },
  {
    num: "Project 02",
    title: "Church Management Portal",
    subtitle: "Full-Stack Application",
    description:
      "A full-stack web application built to manage announcements, events, and media content with structured backend integration and scalable frontend architecture.",
    highlights: [
      "Built REST API integration using Node.js",
      "Designed MongoDB schema for structured data storage",
      "Implemented responsive UI with React and Bootstrap",
      "Enabled content management workflows for dynamic updates",
    ],
    tech: ["React.js", "Bootstrap", "Node.js", "MongoDB"],
    liveLink: "https://cosmic-squirrel-a9efa8.netlify.app/",
    githubLink: "https://github.com/aravinthbalu15/panchu",
    image: "/images/church-screenshot.jpg",
    accent: {
      chip: "rgba(139,92,246,.08)", chipBorder: "rgba(139,92,246,.22)", chipText: "#c4b5fd",
      check: "#a78bfa",
      badge: "rgba(139,92,246,.12)", badgeBorder: "rgba(139,92,246,.3)", badgeText: "#c4b5fd",
      btn: "linear-gradient(135deg,#7c3aed,#8b5cf6)", btnShadow: "rgba(139,92,246,.35)",
      label: "Full Stack",
    },
  },
];

/* ─── image placeholder ─── */
const ImgPlaceholder = ({ text, accentBorder }: { text: string; accentBorder: string }) => (
  <div
    className="flex aspect-[16/10] w-full flex-col items-center justify-center gap-3 rounded-2xl"
    style={{ background: "linear-gradient(135deg,#0f172a,#1e293b)", border: `1px solid ${accentBorder}` }}
  >
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1e3a5f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
    </svg>
    <span className="text-xs font-medium text-slate-700">{text}</span>
  </div>
);

/* ─── component ─── */
const Projects = () => (
  <section
    id="projects"
    className="relative overflow-hidden py-24 px-6 lg:px-20"
    style={{ background: "linear-gradient(135deg,#020617 0%,#0a0f1e 50%,#030b1a 100%)" }}
  >
    {/* Glows */}
    <div className="pointer-events-none absolute right-[5%] top-[8%] h-80 w-80 rounded-full"
      style={{ background: "radial-gradient(circle,rgba(59,130,246,.07) 0%,transparent 70%)", filter: "blur(55px)" }} />
    <div className="pointer-events-none absolute bottom-[10%] left-[5%] h-72 w-72 rounded-full"
      style={{ background: "radial-gradient(circle,rgba(139,92,246,.06) 0%,transparent 70%)", filter: "blur(55px)" }} />

    <div className="relative z-10 mx-auto max-w-6xl">

      {/* Label */}
      <motion.div
        initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5 }}
        className="mb-4 flex items-center justify-center gap-3"
      >
        <span className="h-px w-16 bg-gradient-to-r from-transparent to-blue-500/40" />
        <span className="text-xs font-semibold uppercase tracking-[.2em] text-blue-400">What I've built</span>
        <span className="h-px w-16 bg-gradient-to-l from-transparent to-blue-500/40" />
      </motion.div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.05 }}
        className="mb-4 text-center font-syne text-4xl font-extrabold text-slate-100 sm:text-5xl"
      >
        Featured{" "}
        <span style={{ background: "linear-gradient(90deg,#3b82f6,#93c5fd)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          Projects
        </span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        viewport={{ once: true }} transition={{ delay: 0.15 }}
        className="mx-auto mb-20 max-w-xl text-center text-sm leading-relaxed text-slate-500"
      >
        Production-oriented applications demonstrating full-stack development, system integration, and scalable UI architecture.
      </motion.p>

      {/* Projects */}
      <div className="flex flex-col gap-20">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            custom={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.15, duration: 0.65, ease: "easeOut" }}
          >
            <div className={`grid items-center gap-12 lg:grid-cols-2 ${index % 2 !== 0 ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""}`}>

              {/* Image */}
              <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.25 }} className="relative">
                {/* Badge */}
                <div
                  className="absolute left-3.5 top-3.5 z-10 rounded-lg px-3 py-1 text-[11px] font-semibold tracking-wider backdrop-blur-sm"
                  style={{ background: project.accent.badge, border: `1px solid ${project.accent.badgeBorder}`, color: project.accent.badgeText }}
                >
                  {project.accent.label}
                </div>

                {/* Try real image, fallback to placeholder via onError */}
                <div
                  className="relative overflow-hidden rounded-2xl transition-all duration-300"
                  style={{ border: `1px solid ${project.accent.chipBorder}` }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="aspect-[16/10] w-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      const parent = (e.target as HTMLImageElement).parentElement!;
                      (e.target as HTMLImageElement).style.display = "none";
                      parent.innerHTML += `<div style="aspect-ratio:16/10;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;background:linear-gradient(135deg,#0f172a,#1e293b);"><svg width='40' height='40' viewBox='0 0 24 24' fill='none' stroke='#1e3a5f' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'><rect x='3' y='3' width='18' height='18' rx='2'/><path d='M3 9h18M9 21V9'/></svg><span style='font-size:.75rem;color:#1e3a5f;font-weight:500;'>${project.title}</span></div>`;
                    }}
                  />
                  <div className="pointer-events-none absolute inset-0" style={{ background: "linear-gradient(180deg,transparent 50%,rgba(2,6,23,.7) 100%)" }} />
                </div>
              </motion.div>

              {/* Content */}
              <div>
                <p className="mb-2 text-[11px] font-bold uppercase tracking-[.15em]" style={{ color: project.accent.check }}>
                  {project.num}
                </p>
                <h3 className="mb-1 font-syne text-2xl font-extrabold leading-tight text-slate-100">
                  {project.title}
                </h3>
                <p className="mb-4 font-syne text-base font-semibold text-slate-500">{project.subtitle}</p>
                <p className="mb-5 text-sm leading-relaxed text-slate-500">{project.description}</p>

                {/* Highlights */}
                <ul className="mb-5 flex flex-col gap-2.5">
                  {project.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle size={15} className="mt-0.5 flex-shrink-0" style={{ color: project.accent.check }} />
                      <span className="text-xs leading-relaxed text-slate-500">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech chips */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="rounded-full px-3 py-1 text-[11px] font-semibold"
                      style={{ background: project.accent.chip, border: `1px solid ${project.accent.chipBorder}`, color: project.accent.chipText }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
                    style={{ background: project.accent.btn, boxShadow: `0 0 20px ${project.accent.btnShadow}` }}
                  >
                    <ExternalLink size={14} />
                    Live Deployment
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border px-6 py-2.5 text-sm font-semibold text-slate-400 transition-all duration-200 hover:border-blue-500/30 hover:bg-blue-500/8 hover:text-slate-200"
                    style={{ background: "rgba(255,255,255,.03)", borderColor: "rgba(255,255,255,.1)" }}
                  >
                    <Github size={14} />
                    Source Code
                  </a>
                </div>
              </div>

            </div>

            {/* Divider between projects */}
            {index < projects.length - 1 && (
              <div className="mt-20 h-px w-full" style={{ background: "linear-gradient(90deg,transparent,rgba(59,130,246,.12),transparent)" }} />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;