import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen bg-[#F5F0E8]">
      <nav className="fixed top-0 left-0 right-0 z-30 bg-[#F5F0E8]">
        <div className="h-20 flex items-center px-8 w-full justify-between">
          <Link
            to="/"
            className="text-2xl font-semibold text-[#2D4A3E] tracking-tight whitespace-nowrap"
            onClick={closeMenu}
          >
            Career Mamas Circle
          </Link>
          
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={`block h-0.5 w-6 bg-[#2D4A3E] transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-1" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-[#2D4A3E] transition-all duration-300 my-1 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-[#2D4A3E] transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>

          <div className="hidden md:flex gap-8">
            <Link
              to="/"
              className="text-[#2D4A3E]/80 hover:text-[#2D4A3E] transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              to="/events"
              className="text-[#2D4A3E]/80 hover:text-[#2D4A3E] transition-colors font-medium"
            >
              Events
            </Link>
            <Link
              to="/about"
              className="text-[#2D4A3E]/80 hover:text-[#2D4A3E] transition-colors font-medium"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-[#2D4A3E]/80 hover:text-[#2D4A3E] transition-colors font-medium"
            >
              Contact
            </Link>
          </div>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 bg-[#F5F0E8] ${
            menuOpen ? "max-h-60 pb-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col px-8 gap-4 items-end">
            <Link
              to="/"
              className={`text-[#2D4A3E]/80 hover:text-[#2D4A3E] transition-colors font-medium ${
                location.pathname === "/" ? "text-[#2D4A3E]" : ""
              }`}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              to="/events"
              className={`text-[#2D4A3E]/80 hover:text-[#2D4A3E] transition-colors font-medium ${
                location.pathname === "/events" ? "text-[#2D4A3E]" : ""
              }`}
              onClick={closeMenu}
            >
              Events
            </Link>
            <Link
              to="/about"
              className={`text-[#2D4A3E]/80 hover:text-[#2D4A3E] transition-colors font-medium ${
                location.pathname === "/about" ? "text-[#2D4A3E]" : ""
              }`}
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`text-[#2D4A3E]/80 hover:text-[#2D4A3E] transition-colors font-medium ${
                location.pathname === "/contact" ? "text-[#2D4A3E]" : ""
              }`}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
