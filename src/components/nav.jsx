import { useEffect, useState } from "react";

export default function Nav() {
  const [showNav, setShowNav] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowNav(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        showNav
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-10 pointer-events-none"
      }`}
    >
      {/* desktop */}
      <div className="hidden md:block border border-white/30 bg-purple-700/70 backdrop-blur px-6 py-6 shadow-xl shadow-purple-100">
        <ul className="flex justify-center gap-8 font-medium">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="inline-block text-white hover:text-purple-100 hover:scale-110 transition-all duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

{/* Mobile    */}
   <div className="md:hidden bg-purple-700/80 backdrop-blur border-b border-white/20">
        {/* Top Bar */}
        <div className="flex items-center justify-between px-5 py-4">
<h2></h2>
          <button
            onClick={toggleMenu}
            className="text-white text-3xl transition"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Links */}
        <div
          className={`overflow-hidden transition-all duration-500 ${
            menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col items-center gap-6 pb-8 text-white font-medium">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="text-lg hover:text-purple-200 transition-colors duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}