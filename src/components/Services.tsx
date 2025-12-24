import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaBolt, FaRobot, FaPaintBrush } from "react-icons/fa";

/* =======================
   SERVICES DATA
======================= */
const services = [
  {
    icon: FaCode,
    title: "Web Development",
    description:
      "I build responsive and interactive websites using HTML, CSS, JavaScript, and React, focusing on clean design and user experience.",
  },
  {
    icon: FaBolt,
    title: "Website Hosting & Maintenance",
    description:
      "I deploy websites and manage hosting, handle updates, fix issues, and ensure the website runs smoothly and remains up to date.",
  },
  {
    icon: FaPaintBrush,
    title: "UI / UX Design Support",
    description:
      "I create clean and user-friendly UI designs using tools like Figma and implement them accurately in web applications.",
  },
  {
    icon: FaRobot,
    title: "AI & Intelligent Systems (Basics)",
    description:
      "I explore basic AI concepts and experiment with intelligent features to enhance applications while continuously learning and improving.",
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

        {/* ================= HEADING ================= */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-3"
        >
          What I Offer
        </motion.h2>

        <p className="text-blue-300 text-sm mb-14 tracking-widest">
          SERVICES
        </p>

        {/* ================= CARDS ================= */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              className="bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm
                         rounded-2xl p-6 shadow-lg flex flex-col items-center text-center
                         transition-all duration-300 hover:-translate-y-2
                         hover:shadow-blue-500/20"
            >
              <div className="text-blue-400 mb-5">
                <service.icon className="w-10 h-10" />
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
