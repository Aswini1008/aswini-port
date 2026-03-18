import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFilePdf,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-slate-950 text-gray-400 px-6 py-16">

      {/* ===== TOP BORDER ===== */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto">

        {/* ===== MAIN GRID ===== */}
        <div className="grid gap-12 md:grid-cols-3 items-start">

          {/* ================= LEFT: BRAND ================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl font-semibold text-white">
              Aswini <span className="text-blue-400">SM</span>
            </h2>

            <p className="mt-3 text-sm text-gray-400 leading-relaxed max-w-xs">
              Full Stack Developer specializing in building scalable,
              production-ready web applications with clean architecture.
            </p>

            <p className="mt-4 text-xs text-gray-500">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </motion.div>

          {/* ================= CENTER: NAV + RESUME ================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Navigation
            </h3>

            <div className="flex flex-wrap gap-4 text-sm">
              <a href="#home" className="hover:text-blue-400 transition">
                Home
              </a>
              <a href="#about" className="hover:text-blue-400 transition">
                About
              </a>
              <a href="#projects" className="hover:text-blue-400 transition">
                Projects
              </a>
              <a href="#experience" className="hover:text-blue-400 transition">
                Experience
              </a>
              <a href="#contact" className="hover:text-blue-400 transition">
                Contact
              </a>
            </div>

            {/* 🔥 RESUME CTA */}
            <a
              href="/Aswini_SM_Resume.pdf"
              download
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition"
            >
              <FaFilePdf />
              Download Resume
            </a>
          </motion.div>

          {/* ================= RIGHT: SOCIAL ================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Connect
            </h3>

            <div className="flex gap-5">
              <a
                href="https://github.com/Aswini1008"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <FaGithub
                  size={20}
                  className="text-gray-400 transition group-hover:text-blue-400 group-hover:-translate-y-1"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/aswini-sm"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <FaLinkedin
                  size={20}
                  className="text-gray-400 transition group-hover:text-blue-400 group-hover:-translate-y-1"
                />
              </a>

              <a
                href="https://www.instagram.com/_.aswini._10"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <FaInstagram
                  size={20}
                  className="text-gray-400 transition group-hover:text-blue-400 group-hover:-translate-y-1"
                />
              </a>
            </div>

            <p className="text-xs text-gray-500">
              Open to internships & full-time opportunities
            </p>
          </motion.div>

        </div>

        {/* ===== BOTTOM LINE ===== */}
        <div className="mt-12 border-t border-slate-800 pt-6 text-center text-xs text-gray-600">
          Designed & built by Aswini
        </div>

      </div>
    </footer>
  );
};

export default Footer;