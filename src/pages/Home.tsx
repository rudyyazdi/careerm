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
            <h2 className="text-xl md:text-5xl font-bold text-[#F5F0E8] mb-6 leading-tight">
              Raising a family and a career shouldn't be a solo mission
            </h2>
            <p className="text-xl text-[#F5F0E8]/80 mb-8">
            Join a circle of women who understand the juggle. From maternity leave planning to boardroom leadership, we connect you with the knowledge and community to thrive as both a mother and a professional.
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
