import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center bg-gradient-to-b from-slate-900 to-gray-900 px-4 pb-16 pt-24 text-white sm:px-6"
    >
      {/* ===== Background Glow ===== */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl animate-pulse" />
      </div>

      <div className="mx-auto w-full max-w-6xl text-center lg:text-left">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-4 inline-block rounded-full bg-gray-800/60 px-4 py-1 text-[0.65rem] tracking-widest text-blue-300 sm:text-xs"
          >
            FRONTEND DEVELOPER • LEARNING BACKEND
          </motion.span>

          {/* Heading */}
          <h1 className="text-3xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Hi, I’m{" "}
            <span className="text-blue-400">S M Aswini</span>
          </h1>

          {/* Subheading */}
          <h2 className="mt-4 text-lg font-semibold text-gray-300 sm:text-2xl md:text-3xl">
            Frontend Developer & Aspiring Full-Stack Engineer
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-sm text-gray-400 sm:text-base md:text-lg lg:mx-0">
            I build clean, responsive, and user-friendly web applications using
            modern frontend technologies. I also deploy, host, and maintain
            websites while continuously learning backend and AI concepts.
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
              className="w-full cursor-pointer rounded-full bg-blue-600 px-8 py-3 text-center text-base font-medium text-white shadow-lg transition hover:bg-blue-700 hover:shadow-blue-500/40 sm:w-auto"
            >
              Contact Me
            </Link>

            <Link
              to="projects"
              smooth
              duration={500}
              className="w-full cursor-pointer rounded-full border border-gray-600 px-8 py-3 text-center text-base font-medium text-gray-300 transition hover:bg-gray-800/50 sm:w-auto"
            >
            
             Stalk My Work
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-10 flex justify-center gap-5 lg:justify-start"
          >
            <a
              href="https://github.com/Aswini1008"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              <FaGithub size={26} />
            </a>

            <a
              href="https://www.linkedin.com/in/aswini-sm-97292629a"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              <FaLinkedin size={26} />
            </a>

            <a
              href="https://www.instagram.com/_.aswini._10"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              <FaInstagram size={26} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
