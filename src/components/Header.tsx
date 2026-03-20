import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { Menu, X, Download } from "lucide-react";

const navLinks = [
  { name: "Home",       to: "home"       },
  { name: "About",      to: "about"      },
  { name: "Skills",     to: "skills"     },
  { name: "Projects",   to: "projects"   },
  { name: "Experience", to: "experience" },
  { name: "Contact",    to: "contact"    },
];

const Header = () => {
  const [isOpen,     setIsOpen]     = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  /* ── scroll detection ── */
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);

      /* find which section is currently in view */
      const offsets = navLinks.map(({ to }) => {
        const el = document.getElementById(to);
        if (!el) return { to, top: Infinity };
        return { to, top: Math.abs(el.getBoundingClientRect().top - 90) };
      });
      const closest = offsets.reduce((a, b) => (a.top < b.top ? a : b));
      setActiveSection(closest.to);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // run once on mount
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── lock body scroll when mobile menu open ── */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  /* ── close mobile menu on desktop resize ── */
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const handle = (e: MediaQueryListEvent) => { if (e.matches) setIsOpen(false); };
    mq.addEventListener("change", handle);
    return () => mq.removeEventListener("change", handle);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "border-b shadow-lg backdrop-blur-md"
          : "bg-transparent"
      }`}
      style={isScrolled ? {
        background: "rgba(2,6,23,.88)",
        borderColor: "rgba(59,130,246,.12)",
        boxShadow: "0 4px 30px rgba(0,0,0,.4)",
      } : {}}
    >
      <nav className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-6 lg:px-8">

        {/* ── Brand ── */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <Link
            to="home" smooth duration={500} offset={-80}
            onClick={() => setIsOpen(false)}
            className="cursor-pointer font-syne text-lg font-extrabold tracking-wide text-slate-100"
          >
            Aswini{" "}
            <span style={{
              background: "linear-gradient(90deg,#3b82f6,#93c5fd)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}>
              SM
            </span>
          </Link>
        </motion.div>

        {/* ── Desktop nav ── */}
        <motion.ul
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden items-center gap-1 lg:flex"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.to;
            return (
              <li key={link.name}>
                <Link
                  to={link.to} smooth duration={500} offset={-80}
                  className={`relative cursor-pointer rounded-lg px-3.5 py-2 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "text-blue-400"
                      : "text-slate-400 hover:text-slate-100"
                  }`}
                >
                  {/* active underline pill */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-lg"
                      style={{ background: "rgba(59,130,246,.1)", border: "1px solid rgba(59,130,246,.2)" }}
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              </li>
            );
          })}

          {/* Download Resume */}
          <li className="ml-3">
            <a
              href="/Aswini_SM_Resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-blue-500/40"
              style={{
                background: "linear-gradient(135deg,#2563eb,#3b82f6)",
                boxShadow: "0 0 18px rgba(59,130,246,.3)",
              }}
            >
              <Download size={13} />
              Download Resume
            </a>
          </li>
        </motion.ul>

        {/* ── Mobile toggle ── */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-xl border text-slate-300 transition-all duration-200 hover:bg-blue-500/10 hover:text-blue-400"
            style={{ background: "rgba(255,255,255,.03)", borderColor: "rgba(255,255,255,.08)" }}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden lg:hidden"
            style={{
              background: "rgba(2,6,23,.96)",
              borderTop: "1px solid rgba(59,130,246,.1)",
              backdropFilter: "blur(16px)",
            }}
          >
            <ul className="mx-auto flex w-full max-w-6xl flex-col px-6 py-4">
              {navLinks.map((link) => {
                const isActive = activeSection === link.to;
                return (
                  <li
                    key={link.name}
                    style={{ borderBottom: "1px solid rgba(255,255,255,.05)" }}
                    className="last:border-b-0"
                  >
                    <Link
                      to={link.to} smooth duration={500} offset={-80}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between py-4 text-sm font-medium transition-colors duration-200 ${
                        isActive ? "text-blue-400" : "text-slate-400 hover:text-slate-100"
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive && (
                        <span
                          className="h-1.5 w-1.5 rounded-full"
                          style={{ background: "#3b82f6", boxShadow: "0 0 6px rgba(59,130,246,.8)" }}
                        />
                      )}
                    </Link>
                  </li>
                );
              })}

              <li className="mt-4">
                <a
                  href="/Aswini_SM_Resume.pdf"
                  download
                  className="flex w-full items-center justify-center gap-2 rounded-full py-3 text-sm font-semibold text-white"
                  style={{
                    background: "linear-gradient(135deg,#2563eb,#3b82f6)",
                    boxShadow: "0 0 18px rgba(59,130,246,.3)",
                  }}
                >
                  <Download size={13} />
                  Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;