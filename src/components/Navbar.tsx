import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { ModeToggle } from "./theme-toggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "home", label: "Home" },
    { to: "about", label: "About" },
    { to: "experience", label: "Experience" },
    { to: "skills", label: "Expertise" },
    { to: "projects", label: "Projects" },
    { to: "services", label: "Capabilities" },
    { to: "contact", label: "Contact" },
  ];

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
    <header className="fixed top-0 z-50 w-full border-b border-slate-200/60 bg-white/85 backdrop-blur-lg dark:border-slate-800/60 dark:bg-slate-950/85">
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-4 sm:px-6">

        {/* ===== BRAND ===== */}
        <Link
          to="home"
          smooth
          duration={500}
          offset={-80}
          onClick={() => setIsOpen(false)}
          className="cursor-pointer"
        >
          <h1 className="text-xl font-semibold tracking-wide text-slate-900 sm:text-2xl dark:text-white">
            <span className="text-blue-600 dark:text-blue-400">
              S M
            </span>{" "}
            Aswini
          </h1>
        </Link>

        {/* ===== DESKTOP NAV ===== */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth
              duration={500}
              offset={-80}
              className="relative cursor-pointer text-sm font-medium text-slate-600 transition-colors duration-300 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
            >
              {link.label}
            </Link>
          ))}

          {/* Resume CTA */}
          <a
            href="/Aswini_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-blue-700"
          >
            Resume
          </a>

          <ModeToggle />
        </nav>

        {/* ===== MOBILE MENU ===== */}
        <div className="flex items-center lg:hidden">
          <ModeToggle />

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="ml-3 rounded-md p-2 text-slate-700 transition hover:bg-slate-200/50 dark:text-slate-300 dark:hover:bg-slate-800/50"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navbar"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* ===== MOBILE DROPDOWN ===== */}
      {isOpen && (
        <div
          id="mobile-navbar"
          className="border-t border-slate-200/60 bg-white/95 backdrop-blur-lg dark:border-slate-800/60 dark:bg-slate-950/95 lg:hidden"
        >
          <nav className="mx-auto flex w-full max-w-6xl flex-col px-4 py-4 sm:px-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth
                duration={500}
                offset={-80}
                className="border-b border-slate-200/70 py-3 text-sm font-medium text-slate-600 transition-colors hover:text-blue-600 last:border-b-0 dark:border-slate-800/70 dark:text-slate-400 dark:hover:text-blue-400"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <a
              href="/Aswini_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 rounded-lg bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              View Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
