const APPLY_URL = "https://tally.so/r/9qWDl5";

export default function Home() {
  const videoFile = "/grounded-hero-video.mp4";
  const posterFile = "/grounded-hero-poster.jpg";

  return (
    <div className="bg-stone-50 text-stone-800">
      {/* ── HERO ── */}
      <section className="relative w-full h-dvh overflow-hidden bg-black flex flex-col justify-center items-center px-6 text-center text-white">
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
        <p className="relative z-10 font-light text-base md:text-xl opacity-70 max-w-2xl leading-relaxed mb-10">
          A 6 Week Mini Retreat Experience for Women Moving Through Motherhood
        </p>
        <a
          href={APPLY_URL}
          target="_blank"
          rel="noreferrer"
          className="relative z-10 border border-white/50 text-white uppercase tracking-widest text-xs px-10 py-4 hover:bg-white hover:text-stone-900 transition-colors duration-300 mb-4"
        >
          Apply for Founding Intake
        </a>
        <p className="relative z-10 text-xs text-white/50 tracking-wider uppercase">
          Limited founding places available
        </p>
        <p className="relative z-10 text-xs text-white/50 tracking-wider uppercase">
          1 session for $69 and 3 for $180
        </p>
      </section>

      {/* ── HERO INTRO ── */}
      <section className="bg-stone-100 py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-stone-500 font-light text-base md:text-lg leading-relaxed">
            Grounded is a guided experience designed for mothers in maternity
            leave who want to reconnect with themselves, rebuild confidence, and
            find real community with women in the same stage of life.
            <br />
            <br />
            Each week you step into a calm, thoughtfully curated space designed
            to support your whole self — mind, body and identity. Through
            expert-led guidance, meaningful conversations and wellness rituals
            while having your baby by your side.
          </p>
        </div>
      </section>

      {/* ── THE 6 WEEK JOURNEY ── */}
      <section className="py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <p className="uppercase tracking-[0.3em] text-xs text-stone-400 mb-6">
              The 6 Week Journey
            </p>
            <h2 className="font-light text-3xl md:text-4xl leading-snug">
              A Mini Retreat Experience. Spread Across Six Weeks.
            </h2>
            <p className="mt-6 text-stone-500 font-light">
              Each week builds on the last so you are not just supported. You
              are progressing.
            </p>
          </div>

          <div className="space-y-12">
            {weeks.map((week) => (
              <div
                key={week.number}
                className="grid md:grid-cols-[80px_1fr] gap-6 items-start border-t border-stone-200 pt-10"
              >
                <div className="text-stone-300 font-light text-sm uppercase tracking-widest">
                  Week {week.number}
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="font-light text-xl text-stone-800">
                      {week.title}
                    </h3>
                    {week.speaker && (
                      <span className="text-xs tracking-wider uppercase px-3 py-1 rounded-full bg-stone-200 text-stone-500 font-light whitespace-nowrap">
                        with {week.speaker}
                      </span>
                    )}
                  </div>
                  {week.speakerTitle && (
                    <p className="text-xs text-stone-400 font-light italic mb-3">
                      {week.speakerTitle}
                    </p>
                  )}
                  <p className="text-stone-500 font-light leading-relaxed">
                    {week.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div
        className="w-full h-64 md:h-96 relative"
        style={{ clipPath: "inset(0)" }}
      >
        <div
          className="fixed inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/mums-in-studio.png')",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* ── WHO THIS IS FOR ── */}
      <section className="bg-stone-100 py-28 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="uppercase tracking-[0.3em] text-xs text-stone-400 mb-6">
            Who This Is For
          </p>
          <h2 className="font-light text-3xl md:text-4xl leading-snug mb-12">
            This experience is for you if:
          </h2>
          <ul className="text-stone-500 font-light space-y-4 text-left max-w-lg mx-auto mb-16">
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

          <p className="uppercase tracking-[0.3em] text-xs text-stone-400 mb-8">
            Experience Highlights
          </p>
          <ul className="text-stone-500 font-light space-y-3 text-left max-w-lg mx-auto">
            {[
              "Designed for mothers navigating maternity leave",
              "Mini retreat style environment each session",
              "Guided identity and life transition journey across 6 weeks",
              "Expert led sessions across body, confidence, intimacy and future direction",
              "Baby friendly, judgement free space",
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
          <p className="uppercase tracking-[0.3em] text-xs text-stone-400 mb-6">
            Practical Details
          </p>
          <div className="text-stone-500 font-light leading-relaxed space-y-2">
            <p>Location: Body by Berner, North Bondi</p>
            <p>Duration: 6 (individual sessions available to purchase)</p>
            <p>Session Length: 2 hours</p>
            <p>Start date: April 22nd, 1:30pm</p>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="bg-stone-900 text-white py-28 px-6 text-center">
        <p className="uppercase tracking-[0.3em] text-xs text-stone-400 mb-8">
          Apply
        </p>
        <h2 className="font-light text-3xl md:text-5xl leading-snug max-w-2xl mx-auto mb-8">
          You Were Never Meant To Navigate This Alone
        </h2>
        <p className="text-stone-400 font-light mb-12 max-w-md mx-auto">
          Grounded is where motherhood and identity are allowed to exist
          together.
        </p>
        <a
          href={APPLY_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-block border border-white/40 text-white uppercase tracking-widest text-xs px-12 py-4 hover:bg-white hover:text-stone-900 transition-colors duration-300"
        >
          Apply for the Program
        </a>
        <p className="mt-4 text-xs text-stone-500 tracking-wider uppercase">
          Limited spaces available
        </p>
      </section>
    </div>
  );
}

const weeks: {
  number: number;
  title: string;
  description: string;
  speaker?: string;
  speakerTitle?: string;
}[] = [
  {
    number: 1,
    title: "Found Her: Finding Yourself After Becoming a Mother",
    speaker: "Leesh Brown & Sophie Dulac",
    speakerTitle: "Founder of Bondi Mums & Founder of Forme",
    description: `Becoming a mum can feel like being rebuilt from the inside in. In this session we will have expert facilitation with Leesh Brown from Bondi mums and learn lymphatic drainage massage techniques from Sophie Dulac. Together we will explore who you are now, beyond roles and expectations and begin reconnecting with your identity, values and goals. `,
  },
  {
    number: 2,
    title: "Intimate Relationships After Motherhood",
    speaker: "Vered Shomron",
    speakerTitle: "Holistic Psychotherapist",
    description:
      "Babies change everything, especially our closest relationships. In this session, we explore intimacy, communication and emotional connection after birth. A guided self massage ritual supports you to reconnect with your body as a place of comfort, safety and pleasure, not just function.",
  },
  {
    number: 3,
    title:
      "Nourishing Mind and Body: Rebuilding Confidence From the Inside Out",
    speaker: "Noella Green",
    speakerTitle: "Physiologist, Exercise Scientist & Nutritionist",
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
    title:
      "Ambition, Work and Guilt: Expanding Your Career and Identity After Motherhood",
    speaker: "Rachel Cohen",
    speakerTitle: "Clinical Psychologist & Co-founder of Catchy",
    description:
      "You are allowed to love your baby and your ambitions. In this session, we explore future identity, boundaries and what a sustainable version of success looks like for you now. You'll leave with practical tools to navigate guilt, ask for support and take your next step toward a life and career that feels aligned.",
  },
  {
    number: 6,
    title: "Integration and Community",
    speaker: "Brittany Bloomer",
    speakerTitle: "Founder of Villagehood",
    description:
      "Locking in change and building your next support layer. You leave with real friendships, ongoing connection and a clearer vision for what comes next.",
  },
];
