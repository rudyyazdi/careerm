export default function Home() {
  const videoFile = "/grounded-hero-video.mp4";
  const posterFile = "/grounded-hero-poster.jpg";

  return (
    <div className="bg-stone-50 text-stone-800">
      {/* ── HERO ── */}
      <section className="relative w-full h-screen overflow-hidden bg-black flex flex-col justify-center items-center px-6 text-center text-white">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={videoFile}
          poster={posterFile}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/50" />

        <h1 className="relative z-10 font-light text-3xl md:text-5xl lg:text-6xl leading-tight mb-5">
          Grounded Mama Program
        </h1>
        <p className="relative z-10 font-light text-sm md:text-base opacity-70 max-w-2xl leading-relaxed">
          A 6 Week Mini Retreat Experience for Women Moving Through Maternity Leave
        </p>
      </section>

      {/* ── HERO INTRO ── */}
      <section className="py-20 px-6 max-w-3xl mx-auto text-center">
        <p className="text-stone-500 font-light text-base md:text-lg leading-relaxed mb-12">
          Grounded is a guided transition experience designed for mothers in early maternity leave
          who want to reconnect with themselves, rebuild confidence, and find real community with
          women in the same stage of life.
          <br /><br />
          Each session is designed to feel like stepping out of noise and into calm, clarity and community.
        </p>

        <ul className="font-light text-sm md:text-base text-stone-500 space-y-3 mb-12 text-left max-w-lg mx-auto">
          {[
            "Designed for mothers navigating early maternity leave",
            "Mini retreat style environment each session",
            "Guided identity and life transition journey across 6 weeks",
            "Expert led sessions across body, confidence, intimacy and future direction",
            "Beautiful, baby friendly, judgement free space",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-2 w-1 h-1 rounded-full bg-stone-400 shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        <a
          href="#apply"
          className="inline-block border border-stone-400 text-stone-700 uppercase tracking-widest text-xs px-10 py-4 hover:bg-stone-800 hover:text-white hover:border-stone-800 transition-colors duration-300"
        >
          Apply for the Program
        </a>
        <p className="mt-4 text-xs text-stone-400 tracking-wider uppercase">Places released per intake.</p>
      </section>

      <div
        className="w-full h-64 md:h-96"
        style={{
          backgroundImage: "url('/mums-in-studio.png')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* ── THE GROUNDED EXPERIENCE ── */}
      <section className="py-28 px-6 max-w-3xl mx-auto text-center">
        <p className="uppercase tracking-[0.3em] text-xs text-stone-400 mb-6">The Grounded Experience</p>
        <h2 className="font-light text-3xl md:text-4xl leading-snug mb-8">
          This Is Not Just A Session. It Is A Reset.
        </h2>
        <p className="text-stone-500 font-light leading-relaxed mb-16">
          From the moment you arrive, you step into a space designed to help you slow down and feel grounded.
          You can expect a calm, beautifully prepared environment, grounding welcome moments and thoughtful details
          throughout the space that support you to feel relaxed, safe and cared for.
          <br /><br />
          This is a space created for you to slow down and be held in the experience.
        </p>

        <h3 className="font-light text-2xl md:text-3xl mb-6">Then The Real Value Begins</h3>
        <p className="text-stone-500 font-light leading-relaxed mb-8">
          Inside that environment, you will experience:
        </p>
        <ul className="text-stone-500 font-light space-y-3 text-left max-w-xl mx-auto mb-16">
          {[
            "Deeper connection with mothers in the same life stage",
            "Guided conversations that go beyond surface level motherhood chat",
            "Expert led practices and education you can apply in real life",
            "Practical tools you take home and use immediately",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-2 w-1 h-1 rounded-full bg-stone-400 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-stone-500 font-light leading-relaxed mb-2">
          Each session closes with reflection and integration so the change actually lands.
        </p>

        <div className="mt-12 border-t border-stone-200 pt-12">
          <h3 className="font-light text-xl mb-4 text-stone-700">The Takeaway</h3>
          <p className="text-stone-500 font-light leading-relaxed max-w-xl mx-auto">
            Every session includes a thoughtfully curated take home element, designed to support you
            practically, emotionally or reflectively, long after you leave the room.
          </p>
        </div>
      </section>

      {/* ── WHY GROUNDED EXISTS ── */}
      <section className="bg-stone-100 py-28 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="uppercase tracking-[0.3em] text-xs text-stone-400 mb-6">Why Grounded Exists</p>
          <h2 className="font-light text-3xl md:text-4xl leading-snug mb-8">
            Motherhood is one of life's biggest identity shifts.
          </h2>
          <p className="text-stone-500 font-light leading-relaxed">
            Alongside loving and caring for your baby, you may also find yourself navigating who you are
            becoming, what matters most to you now, and how you want life to look moving forward.
            <br /><br />
            Grounded exists to support you through this transition, with connection, guidance and space
            to reconnect with yourself.
          </p>
        </div>
      </section>

      {/* ── THE 6 WEEK JOURNEY ── */}
      <section className="py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <p className="uppercase tracking-[0.3em] text-xs text-stone-400 mb-6">The 6 Week Journey</p>
            <h2 className="font-light text-3xl md:text-4xl leading-snug">
              A Mini Retreat Experience. Spread Across Six Weeks.
            </h2>
            <p className="mt-6 text-stone-500 font-light">
              Each week builds on the last so you are not just supported. You are progressing.
            </p>
          </div>

          <div className="space-y-12">
            {weeks.map((week) => (
              <div key={week.number} className="grid md:grid-cols-[80px_1fr] gap-6 items-start border-t border-stone-200 pt-10">
                <div className="text-stone-300 font-light text-sm uppercase tracking-widest">
                  Week {week.number}
                </div>
                <div>
                  <h3 className="font-light text-xl text-stone-800 mb-3">{week.title}</h3>
                  <p className="text-stone-500 font-light leading-relaxed">{week.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO THIS IS FOR ── */}
      <section className="bg-stone-100 py-28 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="uppercase tracking-[0.3em] text-xs text-stone-400 mb-6">Who This Is For</p>
          <h2 className="font-light text-3xl md:text-4xl leading-snug mb-12">
            This experience is for you if:
          </h2>
          <ul className="text-stone-500 font-light space-y-4 text-left max-w-lg mx-auto">
            {[
              "You want more than a casual mothers group",
              "You want depth without heaviness",
              "You value beautiful environments and meaningful experiences",
              "You want to reconnect with who you are, not just who you care for",
              "You want to meet mothers who are navigating the same life stage",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 w-1 h-1 rounded-full bg-stone-400 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── PRACTICAL DETAILS ── */}
      <section className="py-28 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="uppercase tracking-[0.3em] text-xs text-stone-400 mb-6">Practical Details</p>
          <div className="text-stone-500 font-light leading-relaxed space-y-2 mb-10">
            <p>Location: Bondi area</p>
            <p>Duration: 6 weeks</p>
            <p>Session Length: 2 to 2.5 hours</p>
          </div>
          <p className="text-stone-700 font-light mb-4">Includes:</p>
          <ul className="text-stone-500 font-light space-y-3 text-left max-w-sm mx-auto">
            {[
              "All sessions",
              "Guest experts",
              "Curated experience environment each session",
              "Grounded Mama take home elements",
              "Community connection beyond the program",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 w-1 h-1 rounded-full bg-stone-400 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section id="apply" className="bg-stone-900 text-white py-28 px-6 text-center">
        <p className="uppercase tracking-[0.3em] text-xs text-stone-400 mb-8">Apply</p>
        <h2 className="font-light text-3xl md:text-5xl leading-snug max-w-2xl mx-auto mb-8">
          You Were Never Meant To Navigate This Alone
        </h2>
        <p className="text-stone-400 font-light mb-12 max-w-md mx-auto">
          Grounded is where motherhood and identity are allowed to exist together.
        </p>
        <a
          href="/contact"
          className="border border-white/40 text-white uppercase tracking-widest text-xs px-12 py-4 hover:bg-white hover:text-stone-900 transition-colors duration-300"
        >
          Apply for Your Place
        </a>
      </section>
    </div>
  );
}

const weeks = [
  {
    number: 1,
    title: "Found Her: Finding Yourself After Becoming a Mother",
    description:
      "Becoming a mother can feel like being rebuilt from the inside out. In this session, we gently explore who you are now, beyond roles and expectations, and begin reconnecting with your identity, values and desires. Bring a favourite photo of \u201cbefore\u201d and now. We\u2019ll use them as a doorway into reflection, grounding and self recognition.",
  },
  {
    number: 2,
    title: "Intimate Relationships After Motherhood",
    description:
      "Babies change everything, especially our closest relationships. In this session, we explore intimacy, communication and emotional connection after birth. A guided self massage ritual supports you to reconnect with your body as a place of comfort, safety and pleasure, not just function.",
  },
  {
    number: 3,
    title: "Nourishing Mind and Body: Rebuilding Confidence From the Inside Out",
    description:
      "Simple, realistic ways to support your energy, strength and confidence during motherhood. Expect nervous system supportive movement and practical nutrition guidance that works with broken sleep, busy days and real life. The focus is feeling strong, capable and more at home in your body.",
  },
  {
    number: 4,
    title: "Confidence, Sexuality and Reconnecting With Yourself",
    description:
      "Postpartum is often clinical and baby focused, leaving little space for conversations about confidence, desire and body image. This session creates a safe, open space to explore reconnecting with your sexual and personal self, supported by education and practical tools you can explore at your own pace.",
  },
  {
    number: 5,
    title: "Ambition, Work and Guilt: Expanding Your Career and Identity After Motherhood",
    description:
      "You are allowed to love your baby and your ambitions. In this session, we explore future identity, boundaries and what a sustainable version of success looks like for you now. You'll leave with practical tools to navigate guilt, ask for support and take your next step toward a life and career that feels aligned.",
  },
  {
    number: 6,
    title: "Integration and Community",
    description:
      "Locking in change and building your next support layer. You leave with real friendships, ongoing connection and a clearer vision for what comes next.",
  },
];
