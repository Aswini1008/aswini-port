import React from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Engineering – Electronics & Communication",
      institution: "Panimalar Engineering College, Chennai",
      duration: "2023 – 2027",
      score: "CGPA: 8.6 / 10",
      description:
        "Built a strong engineering foundation in electronics and computing systems while expanding into software engineering and full-stack development. Gained exposure to system design principles, hardware-software integration, and scalable application development.",
      highlights: [
        "Embedded Systems & Microcontroller Programming",
        "VLSI & Digital System Design",
        "Digital Signal Processing",
        "IoT System Architecture",
        "Data Structures & Algorithms (Java)",
        "Cloud Computing Fundamentals",
      ],
    },
    {
      degree: "Higher Secondary Education – Science Stream",
      institution: "Holy Infant Matriculation Higher Secondary School",
      duration: "2022 – 2023",
      score: "88%",
      description:
        "Developed analytical and quantitative problem-solving capabilities through intensive study of mathematics and physical sciences, forming the foundation for engineering and software development disciplines.",
      highlights: [
        "Advanced Mathematics",
        "Physics",
        "Chemistry",
        "Computer Science Fundamentals",
      ],
    },
  ];

  return (
    <section
      id="education"
      className="py-24 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-900 text-white"
    >
      <div className="px-4 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-20"
        >
          Academic & Technical Foundation
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 
                         rounded-2xl p-8 shadow-lg hover:shadow-xl 
                         transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-semibold text-white">
                  {edu.degree}
                </h3>
              </div>

              {/* Institution */}
              <p className="text-blue-300 font-medium">
                {edu.institution}
              </p>

              <div className="mt-2 text-sm text-slate-400">
                {edu.duration}
              </div>

              <div className="mt-2 text-sm text-slate-300">
                <span className="font-semibold text-slate-200">
                  Academic Performance:
                </span>{" "}
                {edu.score}
              </div>

              {/* Description */}
              <p className="mt-6 text-slate-300 text-sm leading-relaxed">
                {edu.description}
              </p>

              {/* Highlights */}
              <div className="mt-6 flex flex-wrap gap-2">
                {edu.highlights.map((item, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-slate-900 text-blue-300 px-3 py-1.5 
                               rounded-full border border-slate-700
                               hover:bg-blue-900/20 transition"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
