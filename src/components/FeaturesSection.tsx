import {
  Brain,
  Zap,
  CalendarCheck,
  Languages,
  ShieldCheck,
  UserCheck,
  BarChart3,
  Layers,
  ArrowUpRight,
} from "lucide-react";

const FEATURES = [
  {
    icon: Brain,
    title: "Deep Business Reasoning",
    description:
      "Trained on your PDFs, website, CRM records, and product docs. Understands context, nuance, and intent rather than just matching rigid keywords.",
    tag: "Autonomous AI",
    color: "from-emerald-500/20 to-teal-500/10",
  },
  {
    icon: Zap,
    title: "Sub-Second First Response (<800ms)",
    description:
      "Replies at lighting speed 24/7/365. Eliminates lead drop-off and catches high-intent prospects when their purchase impulse is at its peak.",
    tag: "Lightning Speed",
    color: "from-amber-500/20 to-emerald-500/10",
  },
  {
    icon: CalendarCheck,
    title: "Calendar Booking & Payments",
    description:
      "Offers available meeting slots in real-time, syncs directly with Google Calendar & Calendly, and generates secure Stripe/PayPal payment links.",
    tag: "Conversion Engine",
    color: "from-sky-500/20 to-emerald-500/10",
  },
  {
    icon: Languages,
    title: "Multi-Lingual in 95+ Languages",
    description:
      "Detects customer dialect automatically and responds with native colloquial fluency, including Spanish, Arabic, Hindi, Portuguese, and Mandarin.",
    tag: "Global Reach",
    color: "from-purple-500/20 to-emerald-500/10",
  },
  {
    icon: ShieldCheck,
    title: "Meta Cloud API Compliant",
    description:
      "Runs on official Meta WhatsApp Business Platform infrastructure. Zero risk of phone number bans, verified green checkmark eligible.",
    tag: "Enterprise Safe",
    color: "from-emerald-500/20 to-green-500/10",
  },
  {
    icon: UserCheck,
    title: "Smart Human-in-the-Loop Handoff",
    description:
      "Detects frustrated sentiments or high-value VIP negotiations and smoothly alerts human sales agents with an AI-generated briefing summary.",
    tag: "Hybrid Workflow",
    color: "from-rose-500/20 to-emerald-500/10",
  },
];

export function FeaturesSection() {
  return (
    <section id="features-section" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Built For Maximum Revenue</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            Engineered To Outperform Traditional Chatbots.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            Unlike scripted keyword bots that frustrate users, our agent uses frontier LLMs to listen, reason, and take action like your top-performing sales consultant.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {FEATURES.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="group relative p-7 rounded-3xl bg-zinc-900/60 border border-white/10 hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-950/40 flex flex-col justify-between"
              >
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-400 group-hover:text-zinc-950 transition-colors duration-300 shadow-lg">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white/5 text-zinc-300 border border-white/5">
                      {feature.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-white mb-2.5 flex items-center gap-1.5 group-hover:text-emerald-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="relative z-10 mt-6 pt-4 border-t border-white/5 flex items-center text-xs font-semibold text-emerald-400 opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                  <span>Learn more</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
