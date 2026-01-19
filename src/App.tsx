import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen bg-[#F5F0E8]">
      <nav className="fixed top-0 left-0 right-0 z-30 bg-[#F5F0E8] h-20 flex items-center">
        <div className="px-8 w-full flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-semibold text-[#2D4A3E] tracking-tight"
          >
            Career Mamas Circle
          </Link>
          <div className="flex gap-8">
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
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
