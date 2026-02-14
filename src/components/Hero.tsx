import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center bg-gradient-to-b from-slate-950 to-slate-900 px-4 pb-16 pt-24 text-white sm:px-6"
    >
      {/* ===== Background Glow ===== */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-6xl text-center lg:text-left">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Professional Badge */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-4 inline-block rounded-full bg-slate-800/60 px-4 py-1 text-[0.65rem] tracking-widest text-blue-300 sm:text-xs"
          >
            FULL-STACK WEB ENGINEER • REACT • NODE • JAVA
          </motion.span>

          {/* Heading */}
          <h1 className="text-3xl font-bold leading-tight sm:text-5xl md:text-6xl">
            SM <span className="text-blue-400">Aswini</span>
          </h1>

          {/* Subheading */}
          <h2 className="mt-6 text-lg font-medium text-gray-300 sm:text-2xl md:text-3xl">
            Building Scalable, Responsive & Production-Ready Web Applications
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-sm text-gray-400 sm:text-base md:text-lg lg:mx-0">
            I specialize in designing and developing full-stack web applications
            using React.js, Node.js, and Java. My focus lies in clean architecture,
            REST API integration, performance optimization, and building systems
            aligned with real-world engineering standards.
          </p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-8 flex flex-col justify-center gap-4 sm:mt-10 sm:flex-row lg:justify-start"
          >
            <Link
              to="contact"
              smooth
              duration={500}
              className="w-full cursor-pointer rounded-full bg-blue-600 px-8 py-3 text-center text-base font-semibold text-white shadow-lg transition hover:bg-blue-700 hover:shadow-blue-500/40 sm:w-auto"
            >
              Contact
            </Link>

            <Link
              to="projects"
              smooth
              duration={500}
              className="w-full cursor-pointer rounded-full border border-slate-600 px-8 py-3 text-center text-base font-semibold text-gray-300 transition hover:bg-slate-800/60 sm:w-auto"
            >
              View Projects
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-10 flex justify-center gap-6 lg:justify-start"
          >
            <a
              href="https://github.com/Aswini1008"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-transform duration-300 hover:-translate-y-1 hover:text-blue-400"
            >
              <FaGithub size={24} />
            </a>

            <a
              href="https://www.linkedin.com/in/aswini-sm-97292629a"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-transform duration-300 hover:-translate-y-1 hover:text-blue-400"
            >
              <FaLinkedin size={24} />
            </a>

            <a
              href="https://www.instagram.com/_.aswini._10"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-transform duration-300 hover:-translate-y-1 hover:text-blue-400"
            >
              <FaInstagram size={24} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
