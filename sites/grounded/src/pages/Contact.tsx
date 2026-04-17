export default function Contact() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white flex items-center justify-center px-6 py-24">
      <div className="max-w-2xl text-center">
        <h1 className="text-3xl md:text-5xl font-light tracking-widest uppercase mb-16">
          Contact
        </h1>

        <div className="flex flex-col items-center gap-10">
          <a
            href="mailto:naomiandcarly@gmail.com"
            className="group flex flex-col items-center gap-1 text-neutral-400 hover:text-white transition-colors"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-neutral-600 group-hover:text-neutral-400 transition-colors">Email</span>
            <span className="text-lg font-light tracking-wide">naomiandcarly@gmail.com</span>
          </a>

          <a
            href="tel:+61475413016"
            className="group flex flex-col items-center gap-1 text-neutral-400 hover:text-white transition-colors"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-neutral-600 group-hover:text-neutral-400 transition-colors">Phone</span>
            <span className="text-lg font-light tracking-wide">0475 413 016</span>
          </a>

          <a
            href="https://www.instagram.com/grounded.mamas.au/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-1 text-neutral-400 hover:text-white transition-colors"
          >
            <span className="text-xs tracking-[0.3em] uppercase text-neutral-600 group-hover:text-neutral-400 transition-colors">Instagram</span>
            <span className="text-lg font-light tracking-wide">@grounded.mamas.au</span>
          </a>
        </div>
      </div>
    </div>
  );
}
