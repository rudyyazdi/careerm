export default function Contact() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white flex items-center justify-center px-6 py-24">
      <div className="max-w-2xl text-center">
        <h1 className="text-3xl md:text-5xl font-light tracking-widest uppercase mb-8">Contact</h1>
        <a
          href="mailto:hello@grounded.com"
          className="text-neutral-400 hover:text-white transition-colors text-lg font-light tracking-wide"
        >
          hello@grounded.com
        </a>
      </div>
    </div>
  )
}
