import { QrCode, Stethoscope, Users, CheckCircle2 } from "lucide-react";

const STEPS = [
  {
    step: "01",
    icon: QrCode,
    title: "Connect Your WhatsApp Number",
    desc: "Link your hospital's official WhatsApp Business number through Meta Cloud API. Your existing number stays in use.",
    details: ["Official Meta API", "Works alongside your staff", "Guided setup"],
  },
  {
    step: "02",
    icon: Stethoscope,
    title: "Teach Your Hospital's Information",
    desc: "Add doctors, departments, timings, schedules and FAQs. Set your emergency rules and what the AI may and may not do.",
    details: ["Doctor schedule sync", "Your emergency rules", "Strict guardrails"],
  },
  {
    step: "03",
    icon: Users,
    title: "Launch With Human Oversight",
    desc: "Start with one department, review conversations, then expand. Staff can take over any chat at any time.",
    details: ["Pilot first", "Live monitoring", "Easy staff handoff"],
  },
];

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works-section"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-zinc-950/80 border-t border-white/5"
    >
      <span id="how-it-works" className="absolute -top-24" aria-hidden="true" />
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2563EB]/15 border border-[#2563EB]/30 text-[#14B8A6] text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Simple Onboarding</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            Go Live Department By Department.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            We work with your team to set up, test and launch safely, starting small and expanding
            when you are ready.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {STEPS.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="relative p-8 rounded-3xl bg-[#0B2D5B]/40 border border-white/10 hover:border-[#14B8A6]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display text-4xl font-black text-[#2563EB]/40">
                      {s.step}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-[#14B8A6]/10 border border-[#14B8A6]/20 flex items-center justify-center text-[#14B8A6]">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-display font-bold text-white mb-3">{s.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">{s.desc}</p>
                </div>

                <div className="space-y-2 pt-4 border-t border-white/5">
                  {s.details.map((d, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#14B8A6] flex-shrink-0" />
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
