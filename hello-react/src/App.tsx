function App() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/Background.png')" }}
    >
      <div className="min-h-screen bg-black/40">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <a
              href="/"
              className="text-2xl font-semibold text-white tracking-tight"
            >
              Career Mamas
            </a>
            <div className="flex gap-8">
              <a
                href="#home"
                className="text-white/90 hover:text-white transition-colors font-medium"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-white/90 hover:text-white transition-colors font-medium"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-white/90 hover:text-white transition-colors font-medium"
              >
                Contact
              </a>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="flex items-center justify-center min-h-screen px-6">
          <div className="text-center max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Your Career Comeback Starts Here
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Empowering professional mums to navigate their return to the
              workforce with confidence.
            </p>
            <a
              href="#about"
              className="inline-block bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-white/90 transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
