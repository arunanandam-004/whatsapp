import { TrendingUp, Clock, CheckCircle, DollarSign } from "lucide-react";

const STATS = [
  {
    icon: TrendingUp,
    value: "4.8x",
    label: "Higher Conversion Rate",
    description: "Compared to static website lead capture forms and email inquiries.",
  },
  {
    icon: Clock,
    value: "< 850ms",
    label: "Average Response Time",
    description: "Instant engagement 24/7 before your competitors can even open their inbox.",
  },
  {
    icon: CheckCircle,
    value: "88.4%",
    label: "End-to-End Resolution",
    description: "Inquiries qualified, quoted, and booked without needing human team intervention.",
  },
  {
    icon: DollarSign,
    value: "$42,000",
    label: "Annual Support Savings",
    description: "Average cost reduction per 10,000 monthly customer inquiries handled by AI.",
  },
];

export function MetricsSection() {
  return (
    <section id="metrics-section" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-zinc-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-emerald-950/40 via-zinc-900/60 to-zinc-950 border border-emerald-500/20 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="text-center max-w-2xl mx-auto mb-12 relative z-10">
            <h2 className="text-2xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Measurable ROI From Day One.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-zinc-400">
              Businesses using Vabsgen WhatsApp Agent capture more revenue, reduce CAC, and deliver instant customer delight.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {STATS.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-zinc-900/80 border border-white/5 hover:border-emerald-500/30 transition-all flex flex-col items-center text-center group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-3xl sm:text-4xl font-display font-black text-white tracking-tight mb-1 group-hover:text-emerald-300 transition-colors">
                    {s.value}
                  </span>
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">
                    {s.label}
                  </span>
                  <span className="text-xs text-zinc-400 leading-relaxed">
                    {s.description}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
