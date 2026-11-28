import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
  Lock,
} from "lucide-react";

export function CtaSection() {
  return (
    <section
      id="cta-section"
      className="relative py-28 px-4 sm:px-6 lg:px-8 bg-zinc-950 overflow-hidden border-t border-white/5"
    >
      {/* Background glow radial */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#2563EB]/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2563EB]/15 border border-[#2563EB]/30 text-[#14B8A6] text-xs font-semibold uppercase tracking-wider mb-6">
          <Stethoscope className="w-3.5 h-3.5" />
          <span>Built For Hospitals & Clinics</span>
        </div>

        <h2 className="text-4xl sm:text-6xl font-display font-black text-white tracking-tight leading-tight">
          Ready To Let Patients Reach You <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] via-[#14B8A6] to-teal-200">
            On WhatsApp, Any Hour?
          </span>
        </h2>

        <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          See how the agent can handle bookings, follow-ups and emergencies for your hospital, with
          your team in control.
        </p>

        {/* Action Form / Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <a
            href="mailto:official@vabsgen.com?subject=Demo%20request"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-[#2563EB] to-[#14B8A6] hover:from-[#1D4ED8] hover:to-[#0D9488] text-white font-bold text-sm shadow-xl shadow-[#2563EB]/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            <span>Book a Demo -&gt;</span>
          </a>

          <a
            href="#simulator"
            className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white/5 hover:bg-white/10 text-white font-semibold text-sm border border-white/10 transition-all flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-[#14B8A6]" />
            <span>Try Live Simulator</span>
          </a>
        </div>

        {/* Healthcare Trust Badges (4) */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#14B8A6]" />
            <span>Official Meta Cloud API</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#14B8A6]" />
            <span>Doctor-in-the-loop</span>
          </div>
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-[#14B8A6]" />
            <span>Patient data access controls</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-[#14B8A6]" />
            <span>Pilot by department</span>
          </div>
        </div>
      </div>
    </section>
  );
}
