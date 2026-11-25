import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Zap } from "lucide-react";

export function CtaSection() {
  return (
    <section id="cta-section" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-zinc-950 overflow-hidden border-t border-white/5">
      {/* Background glow radial */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-emerald-500/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6">
          <Zap className="w-3.5 h-3.5 fill-emerald-400" />
          <span>Instant Setup • No Credit Card Required</span>
        </div>

        <h2 className="text-4xl sm:text-6xl font-display font-black text-white tracking-tight leading-tight">
          Ready To Put Your WhatsApp <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-green-300">
            Sales On Autopilot?
          </span>
        </h2>

        <p className="mt-6 text-base sm:text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed">
          Join hundreds of forward-thinking brands turning late-night WhatsApp leads into high-paying clients while they sleep.
        </p>

        {/* Action Form / Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <a
            href="https://web.whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-300 hover:from-emerald-300 hover:to-teal-200 text-zinc-950 font-bold text-sm shadow-xl shadow-emerald-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            <span>Start Free 14-Day Trial</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#simulator-section"
            className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-white/5 hover:bg-white/10 text-white font-semibold text-sm border border-white/10 transition-all flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>Try Live Simulator</span>
          </a>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>14-day free trial</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Cancel anytime</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Official Meta Cloud API</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Setup in under 15 minutes</span>
          </div>
        </div>
      </div>
    </section>
  );
}
