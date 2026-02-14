import { motion } from "framer-motion";
import { Github, ExternalLink, CheckCircle } from "lucide-react";

const projects = [
  {
    title: "PR Power Infrastructure – Corporate Website",
    description:
      "A professional corporate website built using React with clean UI, smooth animations, and a responsive layout to strengthen brand presence.",
    highlights: [
      "Corporate-grade UI/UX",
      "Fully responsive design",
      "Smooth animations with Framer Motion",
      "SEO-friendly structure",
    ],
    tech: ["React.js", "Tailwind CSS", "Framer Motion", "Vite"],
    liveLink: "https://www.prpowerinfra.com/",
    githubLink: "https://github.com/Aswini1008/PR-Final",
    image: "/images/prpower.png",
  },
  {
    title: "Church Website – Events & Announcements Portal",
    description:
      "A responsive web platform developed to manage church announcements, events, and media content with a clean and accessible interface.",
    highlights: [
      "Event & announcement management",
      "Mobile-first responsive layout",
      "Clean and simple UI",
      "Community-focused design",
    ],
    tech: ["React.js", "Bootstrap", "Node.js", "MongoDB"],
    liveLink: "https://cosmic-squirrel-a9efa8.netlify.app/",
    githubLink: "https://github.com/aravinthbalu15/panchu",
    image: "/images/church-screenshot.jpg",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
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
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Things I’ve Built
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            A selection of real-world projects showcasing my development skills.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-20 sm:space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-10"
            >
              {/* Image */}
              <motion.div
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-[16/10] overflow-hidden rounded-xl border border-gray-700 shadow-2xl"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">
                    View Preview
                  </span>
                </div>
              </motion.div>

              {/* Content */}
              <div className={index % 2 !== 0 ? "lg:order-first" : ""}>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <ul className="space-y-3 mb-6">
                  {project.highlights.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-3 mt-1" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-gray-800 text-blue-300 border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 sm:w-auto"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>

                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-gray-700 px-6 py-3 text-sm font-semibold text-gray-300 transition hover:bg-gray-800 sm:w-auto"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
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
