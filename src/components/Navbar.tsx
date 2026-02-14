import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { ModeToggle } from "./theme-toggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "home", label: "Home" },
    { to: "about", label: "About" },
    { to: "experience", label: "Experience" },
    { to: "skills", label: "Skills" },
    { to: "projects", label: "Projects" },
    { to: "services", label: "Services" },
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
    <header className="fixed top-0 z-50 w-full border-b border-gray-200/50 bg-white/80 backdrop-blur-lg dark:border-gray-800/50 dark:bg-gray-900/80">
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          to="home"
          smooth={true}
          duration={500}
          offset={-80}
          onClick={() => setIsOpen(false)}
          className="cursor-pointer"
        >
          <h1 className="text-xl font-bold text-gray-900 sm:text-2xl dark:text-white">
            Aswini
          </h1>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-80}
              className="relative cursor-pointer text-base font-medium text-gray-500 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-pink-600 after:transition-all after:duration-300 hover:text-pink-600 after:hover:w-full dark:text-gray-400 dark:hover:text-pink-500"
            >
              {link.label}
            </Link>
          ))}
          <ModeToggle />
        </nav>

        <div className="flex items-center lg:hidden">
          <ModeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="ml-3 rounded-md p-2 text-gray-700 transition hover:bg-gray-200/50 dark:text-gray-300 dark:hover:bg-gray-800/50"
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

      {isOpen && (
        <div
          id="mobile-navbar"
          className="border-t border-gray-200/60 bg-white/95 backdrop-blur-lg dark:border-gray-800/60 dark:bg-gray-900/95 lg:hidden"
        >
          <nav className="mx-auto flex w-full max-w-6xl flex-col px-4 py-4 sm:px-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth={true}
                duration={500}
                offset={-80}
                className="border-b border-gray-200/70 py-3 text-base font-medium text-gray-500 transition-colors hover:text-pink-600 last:border-b-0 dark:border-gray-800/70 dark:text-gray-400 dark:hover:text-pink-500"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
