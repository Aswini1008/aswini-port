import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Mail, MapPin, Clock } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

/* ─── info chips ─── */
const infoChips = [
  { icon: <Mail size={13} className="text-blue-400" />, text: "aswinism0110@gmail.com" },
  { icon: <MapPin size={13} className="text-blue-400" />, text: "Chennai, Tamil Nadu, India" },
  { icon: <Clock size={13} className="text-blue-400" />, text: "Available for internships & full-time roles" },
];

/* ─── component ─── */
const Contact = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("https://getform.io/f/allzgora", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        toast({ title: "Message sent successfully!" });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast({ title: "Failed to send message", variant: "destructive" });
      }
    } catch {
      toast({ title: "Something went wrong", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  /* shared input classes */
  const inputBase =
    "w-full rounded-xl border px-4 py-3 text-sm text-slate-200 placeholder-slate-700 outline-none transition-all duration-200 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/40";
  const inputStyle = { background: "rgba(2,6,23,.7)", borderColor: "rgba(59,130,246,.12)" };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 px-6 lg:px-20"
      style={{ background: "linear-gradient(135deg,#020617 0%,#0a0f1e 50%,#030b1a 100%)" }}
    >
      {/* Glows */}
      <div className="pointer-events-none absolute left-[5%] top-[10%] h-80 w-80 rounded-full"
        style={{ background: "radial-gradient(circle,rgba(59,130,246,.08) 0%,transparent 70%)", filter: "blur(55px)" }} />
      <div className="pointer-events-none absolute bottom-[10%] right-[5%] h-72 w-72 rounded-full"
        style={{ background: "radial-gradient(circle,rgba(139,92,246,.07) 0%,transparent 70%)", filter: "blur(55px)" }} />

      <div className="relative z-10 mx-auto max-w-5xl">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="mb-4 flex items-center justify-center gap-3"
        >
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-blue-500/40" />
          <span className="text-xs font-semibold uppercase tracking-[.2em] text-blue-400">Get in touch</span>
          <span className="h-px w-16 bg-gradient-to-l from-transparent to-blue-500/40" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.05 }}
          className="mb-14 text-center font-syne text-4xl font-extrabold text-slate-100 sm:text-5xl"
        >
          Let's{" "}
          <span style={{ background: "linear-gradient(90deg,#3b82f6,#93c5fd)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Connect
          </span>
        </motion.h2>

        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* ── LEFT ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
          >
            <p className="mb-3 text-[11px] font-bold uppercase tracking-[.2em] text-blue-400">Open to opportunities</p>
            <h3 className="mb-4 font-syne text-2xl font-extrabold leading-snug text-slate-100">
              Open to Full-Stack Engineering Opportunities
            </h3>
            <p className="mb-3 text-sm leading-relaxed text-slate-500">
              I am open to collaborating on scalable web applications, contributing to product-driven teams, and exploring
              full-stack engineering opportunities. If you have a project, role, or technical discussion in mind, feel free to reach out.
            </p>
            <p className="mb-6 text-xs leading-relaxed text-slate-600">
              Actively interested in roles involving React.js, Node.js, REST API integration, and backend system development.
            </p>

            {/* Info chips */}
            <div className="mb-7 flex flex-col gap-3">
              {infoChips.map(({ icon, text }, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-xl border px-4 py-3"
                  style={{ background: "rgba(59,130,246,.06)", borderColor: "rgba(59,130,246,.12)" }}
                >
                  <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-blue-500/10">
                    {icon}
                  </div>
                  <span className="text-xs font-medium text-slate-500">{text}</span>
                </div>
              ))}
            </div>

            {/* Social buttons */}
            <div className="flex flex-wrap gap-2.5">
              <a
                href="https://www.linkedin.com/in/aswini-sm-97292629a"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: "linear-gradient(135deg,#2563eb,#3b82f6)", boxShadow: "0 0 16px rgba(59,130,246,.3)" }}
              >
                <FaLinkedin size={13} /> LinkedIn
              </a>
              <a
                href="https://github.com/Aswini1008"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-xs font-semibold text-slate-400 transition-all duration-200 hover:border-blue-500/30 hover:bg-blue-500/8 hover:text-slate-200"
                style={{ background: "rgba(255,255,255,.03)", borderColor: "rgba(255,255,255,.1)" }}
              >
                <FaGithub size={13} /> GitHub
              </a>
              <a
                href="https://www.instagram.com/_.aswini._10"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold text-white transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: "linear-gradient(135deg,#be185d,#ec4899)", boxShadow: "0 0 16px rgba(236,72,153,.2)" }}
              >
                <FaInstagram size={13} /> Instagram
              </a>
            </div>
          </motion.div>

          {/* ── FORM ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}
            className="rounded-2xl p-8"
            style={{ background: "rgba(15,23,42,.8)", border: "1px solid rgba(59,130,246,.12)", backdropFilter: "blur(12px)" }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">

              <div>
                <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[.1em] text-slate-600">
                  Full Name
                </label>
                <input
                  name="name" type="text" required
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  className={inputBase}
                  style={inputStyle}
                />
              </div>

              <div>
                <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[.1em] text-slate-600">
                  Email Address
                </label>
                <input
                  name="email" type="email" required
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputBase}
                  style={inputStyle}
                />
              </div>

              <div>
                <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[.1em] text-slate-600">
                  Message
                </label>
                <textarea
                  name="message" rows={5} required
                  placeholder="Briefly describe your project, role, or message..."
                  value={formData.message}
                  onChange={handleChange}
                  className={`${inputBase} resize-none`}
                  style={inputStyle}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full py-3.5 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
                style={{
                  background: "linear-gradient(135deg,#2563eb,#3b82f6)",
                  boxShadow: "0 0 22px rgba(59,130,246,.35)",
                }}
              >
                {isSubmitting ? "Sending…" : "Send Message"}
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;