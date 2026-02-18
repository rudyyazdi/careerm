export default function About() {
  return (
    <div className="bg-stone-50 text-stone-800">
      {/* ── INTRO ── */}
      <section className="min-h-[60vh] bg-stone-900 text-white flex items-center justify-center px-6 py-32">
        <div className="max-w-2xl text-center">
          <h1 className="text-3xl md:text-5xl font-light tracking-widest uppercase mb-8">About</h1>
          <p className="text-stone-400 leading-relaxed text-lg font-light">
            Grounded is a space for mothers to come back to themselves — to explore identity
            beyond the role of mum, and to find genuine connection with women who understand.
          </p>
        </div>
      </section>

      {/* ── WHY GROUNDED EXISTS ── */}
      <section className="py-28 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="uppercase tracking-[0.3em] text-xs text-stone-400 mb-6">Why Grounded Exists</p>
          <h2 className="font-light text-3xl md:text-4xl leading-snug mb-8">
            Motherhood is one of life's biggest identity shifts.
          </h2>
          <p className="text-stone-500 font-light leading-relaxed">
            Alongside loving and caring for your baby, you may also find yourself navigating who
            you are becoming, what matters most to you now, and how you want life to look moving
            forward.
            <br /><br />
            Grounded exists to support you through this transition, with connection, guidance and
            space to reconnect with yourself.
          </p>
        </div>
      </section>

      {/* ── THE GROUNDED EXPERIENCE ── */}
      <section className="bg-stone-100 py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="uppercase tracking-[0.3em] text-xs text-stone-400 mb-6">The Grounded Experience</p>
          <h2 className="font-light text-3xl md:text-4xl leading-snug mb-8">
            This Is Not Just A Session. It Is A Reset.
          </h2>
          <p className="text-stone-500 font-light leading-relaxed mb-16">
            From the moment you arrive, you step into a space designed to help you slow down and
            feel grounded. You can expect a calm, beautifully prepared environment, grounding
            welcome moments and thoughtful details throughout the space that support you to feel
            relaxed, safe and cared for.
          </p>

          <p className="text-stone-500 font-light leading-relaxed mb-8">
            Inside that environment, you will experience:
          </p>
          <ul className="text-stone-500 font-light space-y-3 text-left max-w-xl mx-auto mb-12">
            {[
              "Deeper connection with mothers in the same life stage",
              "Guided conversations that go beyond surface level motherhood chat",
              "Expert led practices and education you can apply in real life",
              "Practical tools you take home and use immediately",
              "Opportunity for you to be in a supported environment for your bubs",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 w-1 h-1 rounded-full bg-stone-400 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-stone-500 font-light leading-relaxed">
            Each session closes with reflection and integration so the change actually lands.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 px-6 text-center">
        <a
          href="/contact"
          className="inline-block border border-stone-400 text-stone-700 uppercase tracking-widest text-xs px-10 py-4 hover:bg-stone-800 hover:text-white hover:border-stone-800 transition-colors duration-300"
        >
          Apply for the Program
        </a>
      </section>
    </div>
  );
}
