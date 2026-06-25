import { useEffect, useState } from "react";

export default function Nav() {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`
        fixed
        
        left-0
        z-50
        w-full
        
        transition-all
        duration-500
        ${
          showNav
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-10 pointer-events-none"
        }
      `}
    >
      {/* desktop */}
      <div className="hidden md:block border border-white/30 bg-purple-700/70  backdrop-blur px-6 py-6 text-slate-700 shadow-xl shadow-purple-100">
        <ul className="flex justify-center gap-8 font-medium">
          <li>
            <a
              href="#hero"
              className="inline-block text-white hover:text-purple-100 hover:scale-110 transition-transform duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="inline-block text-white hover:text-purple-100 hover:scale-110 transition-transform duration-300"
            >
              About
            </a>
          </li>

         

          <li>
            <a
              href="#projects"
              className="inline-block text-white hover:text-purple-100 hover:scale-110 transition-transform duration-300"
            >
              {" "}
              Projects
            </a>
          </li>

          <li>
            <a
              href="#services"
              className="inline-block text-white hover:text-purple-100 hover:scale-110 transition-transform duration-300"
            >
              {" "}
              Services
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="inline-block text-white hover:text-purple-100 hover:scale-110 transition-transform duration-300"
            >
              {" "}
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
