function App() {
  return (
    <div className="min-h-screen bg-[#F5F0E8]">
      {/* Navigation - sits on cream background */}
      <nav className="fixed top-0 left-0 right-0 z-10 bg-[#F5F0E8] h-20 flex items-center">
        <div className="max-w-6xl mx-auto px-6 w-full flex items-center justify-between">
          <a
            href="/"
            className="text-2xl font-semibold text-[#2D4A3E] tracking-tight"
          >
            Career Mamas
          </a>
          <div className="flex gap-8">
            <a
              href="#home"
              className="text-[#2D4A3E]/80 hover:text-[#2D4A3E] transition-colors font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-[#2D4A3E]/80 hover:text-[#2D4A3E] transition-colors font-medium"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-[#2D4A3E]/80 hover:text-[#2D4A3E] transition-colors font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Background image container - in front with border radius */}
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
              <a
                href="#about"
                className="inline-block bg-[#F5F0E8] text-[#2D4A3E] px-8 py-3 rounded-full font-semibold hover:bg-[#EDE6DB] transition-colors"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
