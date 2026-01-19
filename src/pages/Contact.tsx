export default function Contact() {
  return (
    <div className="relative z-20 pt-20 px-4 min-h-screen">
      <div className="min-h-[calc(100vh-6rem)] flex items-center justify-center px-6">
        <div className="text-center max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-[#2D4A3E] mb-6 leading-tight">
            Contact Us
          </h1>
          <p className="text-xl text-[#2D4A3E]/80 mb-4">
            Have questions, want to get involved, or just want to get in touch?
          </p>
          <p className="text-xl text-[#2D4A3E]/80 mb-8">
            We'd love to hear from you.
          </p>
          <a
            href="mailto:info@careermamascircle.com"
            className="text-2xl text-[#2D4A3E] font-semibold hover:underline"
          >
            info@careermamascircle.com
          </a>
        </div>
      </div>
    </div>
  );
}
