import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const FAQS = [
  {
    q: "Is there any risk of our WhatsApp number getting banned?",
    a: "None whatsoever. Unlike unofficial scraping bots or modified apps, Vabsgen operates exclusively on Meta's official WhatsApp Business Cloud API. We follow Meta's strict rate limits and compliance policies, and your account is 100% safeguarded.",
  },
  {
    q: "Can our human sales reps still take over conversations?",
    a: "Yes! At any time, you or your team can view the live chat in your existing WhatsApp Business app or CRM. Typing a message instantly pauses the AI for that contact, or you can let the AI auto-summarize and alert you when high-ticket leads ask to speak with a human.",
  },
  {
    q: "How does the AI learn about our company and prevent wrong answers?",
    a: "You provide your website URL, product catalogs, service menus, and FAQ documents. Our AI uses advanced Retrieval-Augmented Generation (RAG) with strict enterprise guardrails. If a customer asks a question outside your company's scope, the agent politely clarifies or escalates instead of hallucinating.",
  },
  {
    q: "Does it support voice notes and languages other than English?",
    a: "Yes! The AI listens to voice notes using Whisper speech-to-text, comprehends context, and replies back via text or realistic voice notes in 95+ languages including Spanish, Portuguese, Hindi, French, German, and Arabic.",
  },
  {
    q: "How fast can we launch our WhatsApp AI agent?",
    a: "Most businesses go live in under 15 minutes. Connect your WhatsApp number via QR code or Meta Cloud API, drop in your website URL or PDF docs, test in the preview simulator, and click Deploy.",
  },
  {
    q: "Can the AI book appointments in our calendar and collect payments?",
    a: "Yes. Vabsgen natively integrates with Google Calendar, Calendly, Acuity, Stripe, PayPal, and Razorpay. The agent checks real-time slot availability, books the appointment, and sends direct payment checkout links.",
  },
];

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq-section" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-zinc-950 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            Frequently Asked Questions.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-zinc-400">
            Everything you need to know about autonomous WhatsApp AI agents.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-zinc-900/40 border border-white/10 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-semibold text-white">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-emerald-400 transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-zinc-400 leading-relaxed border-t border-white/5 pt-4 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
