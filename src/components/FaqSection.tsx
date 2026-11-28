import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const FAQS = [
  {
    q: "Is our patients' data safe?",
    a: "Patient data is encrypted, access is role-based and every action is logged. Your hospital controls who can see what. We align with India's DPDP Act, 2023.",
  },
  {
    q: "Does the AI give medical advice or diagnose?",
    a: "No. The AI handles administrative and communication tasks: booking, reminders, information, follow-ups. Clinical decisions stay with your doctors, and symptom-related messages are escalated to your team.",
  },
  {
    q: "What happens in an emergency?",
    a: "If a message shows emergency signals, the AI immediately alerts your on-duty team with a summary and tells the patient to call emergency services or come to the hospital. You define the rules.",
  },
  {
    q: "Can our staff take over a conversation?",
    a: "Yes. Staff can step into any chat at any time, which pauses the AI for that patient. The AI can also hand over with a short summary.",
  },
  {
    q: "How are prescriptions sent?",
    a: "Only after the doctor approves. The prescription is sent as a signed PDF on WhatsApp. The AI never creates or changes a prescription and refill requests always go to the doctor.",
  },
  {
    q: "Does it work with our hospital software and other languages?",
    a: "We connect to your doctor schedules and hospital system (HMS/EMR) during onboarding [confirm which systems are supported]. Language support: [confirm languages, e.g., English, Hindi and regional languages].",
  },
  {
    q: "How long does setup take?",
    a: "It depends on your size and systems. We start with a pilot department and expand once your team is comfortable.",
  },
];

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section
      id="faq-section"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-zinc-950 border-t border-white/5"
    >
      <span id="faq" className="absolute -top-24" aria-hidden="true" />
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2563EB]/15 border border-[#2563EB]/30 text-[#14B8A6] text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            Frequently Asked Questions.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300">
            Clear answers about healthcare WhatsApp AI, data privacy, and hospital system workflows.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#0B2D5B]/40 border border-white/10 hover:border-[#14B8A6]/30 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-semibold text-white">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#14B8A6] transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-4 animate-in fade-in duration-200">
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
