import { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const onHome = location.pathname === '/'

  return (
    <div className="min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <img
            src="/logo.svg"
            alt="Grounded"
            className={`h-8 w-auto transition-all ${onHome ? 'invert brightness-200' : 'invert brightness-200'}`}
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/" label="Home" onClick={() => setMenuOpen(false)} />
          <NavLink to="/about" label="About" onClick={() => setMenuOpen(false)} />
          <NavLink to="/contact" label="Contact" onClick={() => setMenuOpen(false)} />
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/90 flex flex-col items-center justify-center gap-10 md:hidden">
          <NavLink to="/" label="Home" large onClick={() => setMenuOpen(false)} />
          <NavLink to="/about" label="About" large onClick={() => setMenuOpen(false)} />
          <NavLink to="/contact" label="Contact" large onClick={() => setMenuOpen(false)} />
        </div>
      )}

      <Outlet />
    </div>
  )
}

function NavLink({
  to,
  label,
  large = false,
  onClick,
}: {
  to: string
  label: string
  large?: boolean
  onClick?: () => void
}) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`text-white tracking-widest uppercase font-light hover:opacity-70 transition-opacity ${large ? 'text-2xl' : 'text-sm'}`}
    >
      {label}
    </Link>
  )
}
