import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Download } from "lucide-react";

const navLinks = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];

const socials = [
  { href: "https://github.com/Aswini1008",             icon: <FaGithub size={16} />,   label: "GitHub"    },
  { href: "https://www.linkedin.com/in/aswini-sm",     icon: <FaLinkedin size={16} />, label: "LinkedIn"  },
  { href: "https://www.instagram.com/_.aswini._10",    icon: <FaInstagram size={16} />,label: "Instagram" },
];

const Footer = () => (
  <footer
    className="relative overflow-hidden px-6 pb-8 pt-20 lg:px-20"
    style={{ background: "linear-gradient(180deg,#020617 0%,#030b1a 100%)" }}
  >
    {/* Top gradient line */}
    <div className="absolute left-0 top-0 h-px w-full"
      style={{ background: "linear-gradient(90deg,transparent,rgba(59,130,246,.35),transparent)" }} />

    {/* Ambient glow */}
    <div className="pointer-events-none absolute bottom-0 left-[5%] h-56 w-80 rounded-full"
      style={{ background: "radial-gradient(circle,rgba(59,130,246,.06) 0%,transparent 70%)", filter: "blur(50px)" }} />

    <div className="relative z-10 mx-auto max-w-6xl">

      {/* ── Main grid ── */}
      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr] md:items-start">

        {/* BRAND */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <h2 className="font-syne text-xl font-extrabold text-slate-100">
            Aswini{" "}
            <span style={{ background: "linear-gradient(90deg,#3b82f6,#93c5fd)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              SM
            </span>
          </h2>
          <p className="mt-3 max-w-[240px] text-xs leading-relaxed text-slate-500">
            Full Stack Developer specializing in building scalable, production-ready web
            applications with clean architecture.
          </p>
          <p className="mt-4 text-[11px] text-slate-700">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </motion.div>

        {/* NAV */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[.18em] text-blue-400">
            Navigation
          </p>
          <nav className="flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm text-slate-500 transition-all duration-200 hover:pl-1 hover:text-blue-300"
              >
                {link}
              </a>
            ))}
          </nav>

          <a
            href="/Aswini_SM_Resume.pdf"
            download
            className="mt-5 inline-flex items-center gap-2 rounded-lg border px-3.5 py-2 text-xs font-semibold text-blue-400 transition-all duration-200 hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-blue-300"
            style={{ background: "rgba(59,130,246,.06)", borderColor: "rgba(59,130,246,.2)" }}
          >
            <Download size={13} />
            Download Resume
          </a>
        </motion.div>

        {/* SOCIAL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[.18em] text-blue-400">
            Connect
          </p>

          <div className="mb-5 flex gap-3">
            {socials.map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-xl border text-slate-500 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-300"
                style={{ background: "rgba(255,255,255,.03)", borderColor: "rgba(255,255,255,.07)" }}
              >
                {icon}
              </a>
            ))}
          </div>

          <p className="flex items-center gap-2 text-[11px] text-slate-600">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500" style={{ boxShadow: "0 0 6px #22c55e" }} />
            Open to internships & full-time roles
          </p>
        </motion.div>

      </div>

      {/* ── Bottom bar ── */}
      <div
        className="mt-14 flex flex-wrap items-center justify-between gap-3 border-t pt-5 text-[11px] text-slate-700"
        style={{ borderColor: "rgba(255,255,255,.05)" }}
      >
        <span>© {new Date().getFullYear()} Aswini SM</span>
        <span className="flex items-center gap-1">
          Designed & built with{" "}
          <span className="text-red-500">♥</span>{" "}
          by Aswini
        </span>
      </div>

    </div>
  </footer>
);

export default Footer;