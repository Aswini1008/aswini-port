import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="bg-slate-900 py-24 px-6" id="about">
      <div className="max-w-6xl mx-auto">

        {/* ===== TITLE ===== */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-white text-center mb-16"
        >
          About Me
        </motion.h2>

        {/* ===== MAIN CONTENT ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* LEFT */}
          <div>
            <h3 className="text-3xl font-semibold text-white leading-snug">
              I build real-world web applications,
              <span className="text-blue-400"> not just projects.</span>
            </h3>

            <p className="mt-6 text-gray-400 leading-relaxed">
              I'm Aswini, a Full Stack Developer focused on building scalable,
              production-ready applications using React, Node.js, and modern
              backend technologies.
            </p>

            <p className="mt-4 text-gray-400 leading-relaxed">
              I enjoy solving real-world problems, designing clean architectures,
              and transforming ideas into functional, user-friendly systems.
            </p>

            {/* IMPACT */}
            <div className="mt-6 space-y-2 text-sm text-gray-300">
              <p>✔ Built applications used by 250+ users</p>
              <p>✔ Strong in Data Structures & Algorithms (Java)</p>
              <p>✔ Experience in full-stack real-world projects</p>
            </div>

            {/* CTA */}
            <a
              href="/Aswini_SM_Resume.pdf"
              download
              className="inline-block mt-8 bg-blue-600 px-6 py-3 rounded-lg text-white font-semibold hover:bg-blue-700 transition"
            >
              Download Resume
            </a>
          </div>

          {/* RIGHT */}
          <div className="bg-slate-800/40 border border-slate-700 rounded-2xl p-8 backdrop-blur-md">
            <h3 className="text-xl text-white font-semibold mb-4">
              What I Focus On
            </h3>

            <ul className="space-y-3 text-gray-400 text-sm">
              <li>• Building scalable full-stack systems</li>
              <li>• Writing clean and maintainable code</li>
              <li>• Performance optimization</li>
              <li>• Solving real-world engineering problems</li>
              <li>• Delivering production-ready applications</li>
            </ul>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;