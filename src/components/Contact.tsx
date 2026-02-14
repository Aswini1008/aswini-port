import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://getform.io/f/allzgora", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({ title: "Message sent successfully" });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast({
          title: "Failed to send message",
          variant: "destructive",
        });
      }
    } catch {
      toast({
        title: "Something went wrong",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="w-full bg-slate-900 py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2 lg:gap-16">

        {/* ===== LEFT CONTENT ===== */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="uppercase tracking-widest text-sm font-semibold text-blue-400">
            Get In Touch
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
            Open to Full-Stack Engineering Opportunities
          </h2>

          <p className="mt-6 text-base leading-relaxed text-gray-400 sm:text-lg">
            I am open to collaborating on scalable web applications,
            contributing to product-driven teams, and exploring
            full-stack engineering opportunities.  
            If you have a project, role, or technical discussion in mind,
            feel free to reach out.
          </p>

          <p className="mt-4 text-sm text-gray-500">
            Actively interested in roles involving React.js, Node.js,
            REST API integration, and backend system development.
          </p>

          {/* Social Buttons */}
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="https://www.linkedin.com/in/aswini-sm-97292629a"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-5 py-2.5
                         text-sm font-semibold text-white shadow-lg
                         transition hover:bg-blue-700"
            >
              <FaLinkedin />
              LinkedIn
            </a>

            <a
              href="https://github.com/Aswini1008"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-700
                         px-5 py-2.5 text-sm font-semibold text-gray-300
                         transition hover:bg-gray-800/60"
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href="https://www.instagram.com/_.aswini._10"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-pink-600 px-5 py-2.5
                         text-sm font-semibold text-white shadow-lg
                         transition hover:bg-pink-700"
            >
              <FaInstagram />
              Instagram
            </a>
          </div>
        </motion.div>

        {/* ===== FORM ===== */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="rounded-2xl border border-gray-700 bg-gray-800/50
                     p-6 shadow-lg backdrop-blur-sm sm:p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-gray-900/70 border-gray-700 text-white"
            />

            <Input
              name="email"
              type="email"
              placeholder="Professional Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-gray-900/70 border-gray-700 text-white"
            />

            <Textarea
              name="message"
              rows={5}
              placeholder="Briefly describe your project, role, or message..."
              value={formData.message}
              onChange={handleChange}
              required
              className="bg-gray-900/70 border-gray-700 text-white"
            />

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 text-base font-semibold rounded-lg
                         bg-blue-600 hover:bg-blue-700
                         transition-all duration-300 shadow-lg"
            >
              {isSubmitting ? "Sending Message..." : "Submit Inquiry"}
            </Button>
          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
