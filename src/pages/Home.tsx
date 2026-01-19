import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="relative z-20 pt-20 px-4 min-h-screen">
      <div
        className="min-h-[calc(100vh-6rem)] bg-cover bg-center bg-no-repeat rounded-3xl overflow-hidden"
        style={{ backgroundImage: "url('/Background.png')" }}
      >
        <div className="min-h-[calc(100vh-6rem)] bg-black/40 flex items-center justify-center px-6">
          <div className="text-center max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-[#F5F0E8] mb-6 leading-tight">
              Your Career Comeback Starts Here
            </h1>
            <p className="text-xl text-[#F5F0E8]/80 mb-8">
              Empowering professional mums to navigate their return to the
              workforce with confidence.
            </p>
            <Link
              to="/events"
              className="inline-block bg-[#F5F0E8] text-[#2D4A3E] px-8 py-3 rounded-full font-semibold hover:bg-[#EDE6DB] transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
