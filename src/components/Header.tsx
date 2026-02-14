import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Capabilities", to: "services" },
  { name: "Projects", to: "projects" },
  { name: "Experience", to: "experience" },
  { name: "Contact", to: "contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const handleChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setIsOpen(false);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/85 backdrop-blur-md shadow-lg border-b border-slate-800"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-4 sm:px-6">

        {/* ===== BRAND ===== */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-80}
            onClick={() => setIsOpen(false)}
            className="cursor-pointer text-lg font-semibold tracking-wide text-white sm:text-xl"
          >
            <span className="text-blue-400">SM</span> Aswini
          </Link>
        </motion.div>

        {/* ===== DESKTOP NAV ===== */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                offset={-80}
                spy={true}
                activeClass="text-blue-400 font-semibold"
                className="relative cursor-pointer text-sm font-medium text-gray-300 transition-all duration-300 hover:text-blue-400"
              >
                {link.name}
              </Link>
            </li>
          ))}

          {/* CTA Button */}
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-80}
              className="ml-4 rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700 shadow-md"
            >
              Hire Me
            </Link>
          </li>
        </ul>

        {/* ===== MOBILE NAV TOGGLE ===== */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-md p-2 text-white transition hover:bg-slate-800/60"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* ===== MOBILE MENU ===== */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-slate-800 bg-slate-950/95 backdrop-blur-lg lg:hidden"
          >
            <ul className="mx-auto flex w-full max-w-6xl flex-col px-4 py-4 sm:px-6">
              {navLinks.map((link) => (
                <li
                  key={link.name}
                  className="border-b border-slate-800/70 last:border-b-0"
                >
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    onClick={() => setIsOpen(false)}
                    className="block py-4 text-base font-medium text-gray-200 transition-colors hover:text-blue-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}

              {/* Mobile CTA */}
              <li className="mt-4">
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => setIsOpen(false)}
                  className="block w-full rounded-lg bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  Hire Me
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
