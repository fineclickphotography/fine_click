import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-black/80 backdrop-blur-lg border-b border-yellow-700/30 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-yellow-400">
            FINE<span className="text-yellow-600"> CLICK</span>
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden text-yellow-400 hover:text-yellow-500 transition-colors select-none"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {["home", "about", "projects", "contact"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="relative text-yellow-300 hover:text-yellow-500 font-medium uppercase tracking-wide transition-colors"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                {/* White underline on hover */}
                <span
                  className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
