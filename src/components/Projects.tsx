import { motion } from "framer-motion";
import { Github, ExternalLink, CheckCircle } from "lucide-react";

const projects = [
  {
    title: "PR Power Infrastructure – Corporate Web Platform",
    description:
      "A production-ready corporate web platform designed and developed to strengthen digital presence with optimized performance, responsive architecture, and structured UI components.",
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
  },
  {
    title: "Church Management Portal – Full-Stack Application",
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
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full bg-slate-900 py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">

        {/* ===== HEADER ===== */}
        <div className="text-center mb-24">
          <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Selected Engineering Projects
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Production-oriented applications demonstrating full-stack development,
            system integration, and scalable UI architecture.
          </p>
        </div>

        {/* ===== PROJECTS LIST ===== */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2"
            >
              {/* ===== IMAGE ===== */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-slate-700 shadow-xl"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>

              {/* ===== CONTENT ===== */}
              <div className={index % 2 !== 0 ? "lg:order-first" : ""}>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Contributions */}
                <ul className="space-y-3 mb-6">
                  {project.highlights.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-3 mt-1" />
                      <span className="text-gray-300 text-sm leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-slate-800 text-blue-300 border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Deployment
                  </a>

                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-gray-300 transition hover:bg-slate-800"
                  >
                    <Github className="w-4 h-4" />
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
