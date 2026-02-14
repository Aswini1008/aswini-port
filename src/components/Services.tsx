import { motion } from "framer-motion";
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaRocket,
} from "react-icons/fa";

/* =======================
   CAPABILITIES DATA
======================= */

const services = [
  {
    icon: FaCode,
    title: "Frontend Architecture",
    description:
      "Designing modular, scalable, and responsive user interfaces using React.js and Tailwind CSS with a focus on reusable components and clean UI structure.",
  },
  {
    icon: FaServer,
    title: "Backend Development & API Integration",
    description:
      "Building and integrating RESTful APIs using Node.js and Java, implementing structured data flow, authentication logic, and maintainable backend architecture.",
  },
  {
    icon: FaDatabase,
    title: "Database Design & Data Management",
    description:
      "Designing structured schemas using MongoDB and MySQL, implementing CRUD operations, and ensuring reliable data handling within full-stack applications.",
  },
  {
    icon: FaRocket,
    title: "Deployment & Production Optimization",
    description:
      "Deploying applications to production environments, optimizing performance, managing environment configurations, and ensuring responsive, SEO-aware builds.",
  },
];

/* =======================
   ANIMATION VARIANTS
======================= */

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

/* =======================
   COMPONENT
======================= */

const Services = () => {
  return (
    <section
      id="services"
      className="w-full bg-slate-900 py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto text-center">

        {/* ===== Heading ===== */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-4"
        >
          Core Engineering Capabilities
        </motion.h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-16">
          Technical competencies focused on building scalable full-stack
          applications aligned with modern development standards.
        </p>

        {/* ===== Capability Cards ===== */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              className="group bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm
                         rounded-2xl p-8 shadow-lg flex flex-col items-center text-center
                         transition-all duration-300 hover:-translate-y-2
                         hover:shadow-blue-500/10"
            >
              <div className="mb-6 flex items-center justify-center rounded-full
                              bg-blue-500/10 p-4 text-blue-400
                              transition group-hover:bg-blue-500/20">
                <service.icon className="w-7 h-7" />
              </div>

              <h3 className="text-lg font-semibold text-white mb-4">
                {service.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
