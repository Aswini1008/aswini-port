import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaFilePdf } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gray-900 text-gray-400 px-4 sm:px-6 lg:px-8">
      {/* Top Divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-gray-800" />

      <div className="max-w-6xl mx-auto py-12 flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center sm:text-left"
        >
          <p className="text-sm">
            © {new Date().getFullYear()}{" "}
            <span className="text-white font-medium">S M Aswini</span>
          </p>
          <p className="mt-1 text-xs text-gray-500">
            Frontend Developer • Learning Backend
          </p>
        </motion.div>

        {/* Center Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center gap-6 text-sm"
        >
          <a
            href="/Aswini_Resume.pdf" // 🔁 replace if your resume path differs
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-400 transition"
          >
            <FaFilePdf />
            Resume
          </a>

          <a
            href="#home"
            className="hover:text-blue-400 transition"
          >
            Home
          </a>

          <a
            href="#projects"
            className="hover:text-blue-400 transition"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="hover:text-blue-400 transition"
          >
            Contact
          </a>
        </motion.div>

        {/* Right Socials */}
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
            className="text-gray-400 hover:text-blue-400 transition"
          >
            <FaGithub size={22} />
          </a>

          <a
            href="https://www.linkedin.com/in/aswini-sm-97292629a"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-blue-400 transition"
          >
            <FaLinkedin size={22} />
          </a>

          <a
            href="https://www.instagram.com/_.aswini._10"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-gray-400 hover:text-blue-400 transition"
          >
            <FaInstagram size={22} />
          </a>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;
