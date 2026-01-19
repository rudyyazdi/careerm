export default function Events() {
  return (
    <div className="relative z-20 pt-20 px-4 min-h-screen">
      <div className="max-w-4xl mx-auto py-12">
        <h1 className="text-5xl md:text-6xl font-bold text-[#2D4A3E] mb-12 text-center">
          Events
        </h1>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 mb-8 shadow-lg">
          <h2 className="text-3xl font-bold text-[#2D4A3E] mb-2">Launch Event</h2>
          <p className="text-lg text-[#2D4A3E]/70 mb-4">
            Bondi Pavilion · March 12th · 7pm-8:30pm
          </p>
          <p className="text-lg text-[#2D4A3E]/80 mb-4">
            Join for our launch event empowering the working mother. Hear from powerhouse women, connect and share a cocktail with like minded working mamas.
          </p>
          <a href="#signup" className="inline-block bg-[#2D4A3E] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#3d5f50] transition-colors">
            Sign Up
          </a>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 mb-12 shadow-lg">
          <h2 className="text-3xl font-bold text-[#2D4A3E] mb-2">CMC Wine and Cheese Night</h2>
          <p className="text-lg text-[#2D4A3E]/70 mb-4">
            Coogee Wine Bar · January 31st · 7:30pm
          </p>
          <p className="text-lg text-[#2D4A3E]/80 mb-4">
            Join us for some time without the bubs to have a wine and chat. Join like minded mamas and have a space to chat about some of the challenges for working mums, spend time networking (without the forced small talk!) and most importantly - have some time for yourself to unwind.
          </p>
          <a href="#signup" className="inline-block bg-[#2D4A3E] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#3d5f50] transition-colors">
            Sign Up
          </a>
        </div>

        <div id="signup" className="flex justify-center scroll-mt-24">
          <iframe
            src="https://forms.monday.com/forms/embed/9d2a6cfb9b53b6506b705997097915fc?r=apse2"
            width="650"
            height="1200"
            style={{ border: 0, boxShadow: "5px 5px 56px 0px rgba(0,0,0,0.25)" }}
            title="Event Registration Form"
          />
        </div>
      </div>
    </div>
  );
}
