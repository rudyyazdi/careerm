import { useState } from "react";
import { Link } from "react-router-dom";

const founders = [
  {
    name: "Naomi",
    image: "/Naomi.png",
    bio: "With a background in community building and a heart for supporting women, Naomi is dedicated to creating meaningful connections and resources for working mamas.",
  },
  {
    name: "Carly",
    image: "/Carly.jpg",
    bio: "A passionate advocate for working mothers, Carly brings her experience in corporate leadership and her journey as a mum to help women thrive in both worlds.",
  },
];

export default function About() {
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  const toggleFlip = (name: string) => {
    setFlippedCards((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <div className="relative z-20 pt-20 px-4 min-h-screen">
      <div className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-[#2D4A3E] mb-10 leading-tight text-center">
            About Us
          </h1>

          <div className="space-y-6 text-lg text-[#2D4A3E]/80 mb-12">
            <p>
              Career Mamas Circle (CMC) initiated out of a need to support working mothers. Both
              professionally and in their most important role - as a mother. Born out of necessity
              from our own personal experience - we saw a need to support women as they go through
              one of the biggest shifts of their life: becoming a mother whilst also upholding a
              career.
            </p>
            <p className="font-medium text-[#2D4A3E]">
              Becoming a mother doesn't just mean we leave our personal and professional ambitions
              at the door.
            </p>
            <p>
              Our purpose is to support women on this journey through community, events, workshops
              and workplace consultation to ensure women feel supported in their workplace and at
              home. Whether you're planning your first, on maternity leave thinking about the return
              to work or already juggling work and family, we're here to support you.
            </p>
          </div>

          <div className="bg-[#2D4A3E]/10 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-[#2D4A3E] mb-4">Our Mission</h2>
            <p className="text-lg text-[#2D4A3E]/80">
              To empower, support and connect working mamas to the right people, knowledge and
              resources to balance being a mother and professional powerhouse.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#2D4A3E] mb-12 text-center">Meet the Founders</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {founders.map((founder) => (
                <div
                  key={founder.name}
                  className="flip-card cursor-pointer"
                  onClick={() => toggleFlip(founder.name)}
                >
                  <div className={`flip-card-inner ${flippedCards[founder.name] ? "flipped" : ""}`}>
                    <div className="flip-card-front bg-white/60 rounded-2xl p-6 shadow-lg">
                      <div className="aspect-[3/4] overflow-hidden rounded-xl mb-6">
                        <img
                          src={founder.image}
                          alt={founder.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-2xl font-bold text-[#2D4A3E]">{founder.name}</h3>
                      <p className="text-sm font-semibold tracking-wider text-[#2D4A3E]/60 uppercase mt-1">
                        Founder
                      </p>
                    </div>
                    <div className="flip-card-back bg-[#2D4A3E] rounded-2xl p-8 shadow-lg flex flex-col justify-center items-center text-center">
                      <h3 className="text-2xl font-bold text-white mb-4">{founder.name}</h3>
                      <p className="text-sm font-semibold tracking-wider text-white/60 uppercase mb-6">
                        Founder
                      </p>
                      <p className="text-white/90 text-lg leading-relaxed">{founder.bio}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#2D4A3E] mb-6">Our Services</h2>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-lg text-[#2D4A3E]/80">
                <span className="text-[#2D4A3E] text-xl">›</span>
                <Link to="/events" className="hover:text-[#2D4A3E] hover:underline transition-colors">
                  Events
                </Link>
              </li>
              <li className="flex items-center gap-3 text-lg text-[#2D4A3E]/80">
                <span className="text-[#2D4A3E] text-xl">›</span>
                Corporate Programs
              </li>
              <li className="flex items-center gap-3 text-lg text-[#2D4A3E]/80">
                <span className="text-[#2D4A3E] text-xl">›</span>
                Individual Consultation Sessions
              </li>
              <li className="flex items-center gap-3 text-lg text-[#2D4A3E]/80">
                <span className="text-[#2D4A3E] text-xl">›</span>
                Community Marketplace
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
