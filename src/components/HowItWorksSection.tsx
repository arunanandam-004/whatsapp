import { QrCode, FileText, Rocket, CheckCircle2 } from "lucide-react";

const STEPS = [
  {
    step: "01",
    icon: QrCode,
    title: "Connect WhatsApp in 60 Seconds",
    desc: "Scan a Meta QR code or link your official WhatsApp Cloud API number. No coding required, keep your existing business phone number intact.",
    details: ["Official Meta API verification", "Coexists with existing team apps", "Zero downtime setup"],
  },
  {
    step: "02",
    icon: FileText,
    title: "Teach Your Business Knowledge",
    desc: "Drop in your website URL, product catalogs, service pricing, and PDFs. Our system indexes your documents into vector memory instantly.",
    details: ["Auto-sync with website updates", "Custom tone & personality tuning", "Strict guardrails against hallucinations"],
  },
  {
    step: "03",
    icon: Rocket,
    title: "Turn On Autonomous Conversion",
    desc: "Activate 24/7 AI chat agents. Watch incoming chats turn into scheduled sales appointments, closed invoices, and happy recurring buyers.",
    details: ["Instant calendar booking", "CRM synchronization", "Real-time revenue attribution"],
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works-section" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-zinc-950/80 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Simple 3-Step Setup</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            Go Live In Under 15 Minutes.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            No engineering team required. Start converting inbound WhatsApp traffic from today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {STEPS.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="relative p-8 rounded-3xl bg-zinc-900/40 border border-white/10 hover:border-emerald-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display text-4xl font-black text-emerald-400/30">
                      {s.step}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-display font-bold text-white mb-3">
                    {s.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                    {s.desc}
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-white/5">
                  {s.details.map((d, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
