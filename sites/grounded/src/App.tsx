import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(0);

  const [vh, setVh] = useState(typeof window !== "undefined" ? window.innerHeight : 800);

  useEffect(() => {
    const onScroll = () => setScroll(window.scrollY);
    const onResize = () => setVh(window.innerHeight);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);
  // blur ramps 0→16px over the first half of the video
  const blurAmount = Math.min(scroll / (vh / 2), 1) * 16;
  // tint starts 200px before video ends, ramps over 200px
  const tintOpacity = Math.min(Math.max(scroll - (vh - 200), 0) / 200, 1) * 0.15;

  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-6 px-[clamp(24px,5vw,64px)] transition-all duration-100"
        style={{
          backdropFilter: `blur(${blurAmount}px)`,
          backgroundColor: `rgba(0,0,0,${tintOpacity})`,
        }}
      >
        {/* Logo */}
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <img
            src="/logo.svg"
            alt="Grounded"
            className="h-7 w-auto brightness-0 invert"
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-12">
          <NavLink to="/" label="Home" onClick={() => setMenuOpen(false)} />
          <NavLink
            to="/about"
            label="About"
            onClick={() => setMenuOpen(false)}
          />
          <NavLink
            to="/contact"
            label="Contact"
            onClick={() => setMenuOpen(false)}
          />
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/90 flex flex-col items-center justify-center gap-10 md:hidden">
          <NavLink
            to="/"
            label="Home"
            large
            onClick={() => setMenuOpen(false)}
          />
          <NavLink
            to="/about"
            label="About"
            large
            onClick={() => setMenuOpen(false)}
          />
          <NavLink
            to="/contact"
            label="Contact"
            large
            onClick={() => setMenuOpen(false)}
          />
        </div>
      )}

      <Outlet />
    </div>
  );
}

function NavLink({
  to,
  label,
  large = false,
  onClick,
}: {
  to: string;
  label: string;
  large?: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`text-white tracking-widest uppercase font-light hover:opacity-70 transition-opacity ${large ? "text-2xl" : "text-sm"}`}
    >
      {label}
    </Link>
  );
}
