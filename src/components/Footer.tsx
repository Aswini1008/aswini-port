import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaFilePdf } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gray-950 text-gray-400 px-4 sm:px-6 lg:px-8">
      {/* Top Divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-gray-800" />

      <div className="mx-auto flex max-w-6xl flex-col gap-10 py-14 sm:flex-row sm:items-center sm:justify-between">

        {/* ===== LEFT: BRANDING ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center sm:text-left"
        >
          <p className="text-sm tracking-wide">
            © {new Date().getFullYear()}{" "}
            <span className="text-white font-semibold">S M Aswini</span>
          </p>

          <p className="mt-2 text-xs text-gray-500">
            Full-Stack Web Engineer | React.js • Node.js • Java
          </p>

          <p className="mt-2 text-xs text-gray-600 max-w-xs">
            Building scalable, maintainable, and production-ready web systems.
          </p>
        </motion.div>

        {/* ===== CENTER: QUICK NAVIGATION ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-6 text-sm"
        >
          <a
            href="/Aswini_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-300"
          >
            <FaFilePdf />
            Resume
          </a>

          <a
            href="#home"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            Home
          </a>

          <a
            href="#about"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            About
          </a>

          <a
            href="#projects"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            Contact
          </a>
        </motion.div>

        {/* ===== RIGHT: SOCIAL LINKS ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-6"
        >
          <a
            href="https://github.com/Aswini1008"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-400 hover:text-blue-400 transition-transform duration-300 hover:-translate-y-1"
          >
            <FaGithub size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/aswini-sm-97292629a"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-blue-400 transition-transform duration-300 hover:-translate-y-1"
          >
            <FaLinkedin size={20} />
          </a>

          <a
            href="https://www.instagram.com/_.aswini._10"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-gray-400 hover:text-blue-400 transition-transform duration-300 hover:-translate-y-1"
          >
            <FaInstagram size={20} />
          </a>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;
