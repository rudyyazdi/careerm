import { useState } from "react";

const faqs = [
  {
    q: "Can I bring my baby?",
    a: "Yes. This is a baby-friendly space. We understand this stage of life. Feeding, settling and tending to your baby is completely welcome. The environment is intentionally designed to feel supportive rather than stressful. There is no judgement here.",
  },
  {
    q: "What age are the babies?",
    a: "The program is best suited for mothers on maternity leave with non-mobile or early mobile babies (typically 0–12 months). If you're unsure whether it's the right fit for your stage, you can include that in your application and we'll guide you.",
  },
  {
    q: "Is there a nanny option available during sessions?",
    a: "We are exploring the option of having a shared nanny available during each session for mothers who would prefer a little hand. This would be optional and offered as additional support, while still keeping the program baby-friendly. Details will be confirmed closer to the intake.",
  },
  {
    q: "What if my baby cries during a session?",
    a: "Babies cry. Mothers tend. That is normal here. This space is designed for real motherhood, not perfection. You will never be made to feel uncomfortable for responding to your baby.",
  },
  {
    q: "I'm feeling emotional or overwhelmed. Is this too much for me?",
    a: "Grounded is created to feel safe, calm and contained. The conversations go deeper than surface motherhood chat, but they are gently facilitated and always choice-led. You are never required to share more than you want to.",
  },
  {
    q: "What makes this different from therapy or coaching?",
    a: "Grounded is not therapy. It is a curated group experience that blends reflection, education, embodiment and community. You receive expert input across body, confidence, intimacy and future direction within a beautiful, held environment.",
  },
  {
    q: "What if I'm no longer on maternity leave, or my baby is over 12 months? Can I still join?",
    a: "Yes. Grounded isn't about a technical timeline, it's about the season of life you're in. Whether you've returned to work, are not currently working, or your baby is beyond the first year, you are warmly welcome. This space offers both guided support and meaningful community — women walking a similar path, sharing honestly and supporting one another as they navigate what comes next.",
  },
  {
    q: "What if I miss a session?",
    a: "We understand that life with a baby isn't always predictable. Because Grounded is designed as a progressive journey, we encourage attending all sessions where possible. However, if something unexpected arises, we'll gently support you to stay connected with reflection notes and key integration points so you don't feel left behind. You'll still be held within the experience and the community.",
  },
  {
    q: "Is the environment really \"mini retreat style\"?",
    a: "Each session is thoughtfully prepared from sensory details to curated take-home elements. The intention is that when you walk in, you feel like you've stepped out of noise and into calm — and come up feeling more grounded.",
  },
  {
    q: "How do I know if I'm the right fit?",
    a: "If you are craving depth, connection and a space that honours both motherhood and your evolving identity, you are likely in the right place. Applications help us ensure the group feels aligned and supportive for everyone.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t border-stone-200">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-start justify-between gap-6 py-7 text-left"
      >
        <span className="font-light text-stone-800 text-base md:text-lg leading-snug">{q}</span>
        <span className="shrink-0 mt-1 text-stone-400 text-lg leading-none">
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <p className="pb-7 text-stone-500 font-light leading-relaxed text-sm md:text-base max-w-2xl">
          {a}
        </p>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <div className="bg-stone-50 text-stone-800">
      <section className="min-h-[40vh] bg-stone-900 text-white flex items-center justify-center px-6 py-32">
        <div className="max-w-2xl text-center">
          <h1 className="text-3xl md:text-5xl font-light tracking-widest uppercase mb-8">FAQ</h1>
          <p className="text-stone-400 leading-relaxed text-lg font-light">
            Everything you need to know before applying.
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          {faqs.map((item) => (
            <FAQItem key={item.q} q={item.q} a={item.a} />
          ))}
          <div className="border-t border-stone-200" />
        </div>
      </section>

      <section className="py-20 px-6 text-center">
        <p className="text-stone-500 font-light mb-8">Still have questions?</p>
        <a
          href="/contact"
          className="inline-block border border-stone-400 text-stone-700 uppercase tracking-widest text-xs px-10 py-4 hover:bg-stone-800 hover:text-white hover:border-stone-800 transition-colors duration-300"
        >
          Get in Touch
        </a>
      </section>
    </div>
  );
}
