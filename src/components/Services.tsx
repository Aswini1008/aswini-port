import { motion } from "framer-motion";
import {
  FaCode,
  FaBolt,
  FaRobot,
  FaPaintBrush,
} from "react-icons/fa";

/* =======================
   SERVICES DATA
======================= */

const services = [
  {
    icon: FaCode,
    title: "Frontend Web Development",
    description:
      "I build responsive and interactive web interfaces using HTML, CSS, JavaScript, React, and Tailwind CSS with a strong focus on usability and clean design.",
  },
  {
    icon: FaBolt,
    title: "Website Hosting & Maintenance",
    description:
      "I deploy websites, manage hosting, handle updates, fix issues, and ensure websites remain stable, secure, and up to date.",
  },
  {
    icon: FaPaintBrush,
    title: "UI / UX Design Implementation",
    description:
      "I design clean, user-friendly interfaces using Figma and accurately convert designs into functional, pixel-perfect web layouts.",
  },
  {
    icon: FaRobot,
    title: "AI & Intelligent Systems (Learning)",
    description:
      "I explore AI concepts and experiment with basic intelligent features while continuously learning and improving my understanding of smart systems.",
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
          className="text-3xl sm:text-4xl font-bold text-white mb-3"
        >
          What I Offer
        </motion.h2>

        <p className="text-blue-300 text-sm tracking-widest mb-14">
          SERVICES
        </p>

        {/* ===== Service Cards ===== */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              className="group bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm
                         rounded-2xl p-7 shadow-lg flex flex-col items-center text-center
                         transition-all duration-300 hover:-translate-y-2
                         hover:shadow-blue-500/20"
            >
              <div className="mb-5 flex items-center justify-center rounded-full
                              bg-blue-500/10 p-4 text-blue-400
                              transition group-hover:bg-blue-500/20">
                <service.icon className="w-8 h-8" />
              </div>

              <h3 className="text-lg font-semibold text-white mb-3">
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
