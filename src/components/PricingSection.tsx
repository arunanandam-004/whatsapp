import { useState } from "react";
import { Check, Sparkles, ArrowRight } from "lucide-react";

export function PricingSection() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing-section" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-zinc-950/90 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Simple, Transparent Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            Invest in Revenue, Not Hourly Wages.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            Start free for 14 days. Scale as your WhatsApp conversations convert into paid business.
          </p>

          {/* Monthly / Annual Toggle */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <span
              className={`text-sm font-medium ${!annual ? "text-white" : "text-zinc-400"}`}
            >
              Monthly billing
            </span>
            <button
              onClick={() => setAnnual(!annual)}
              className="relative w-14 h-8 rounded-full bg-zinc-800 border border-white/10 p-1 cursor-pointer transition-colors focus:outline-none"
              aria-label="Toggle annual billing"
            >
              <div
                className={`w-6 h-6 rounded-full bg-emerald-400 transition-transform ${
                  annual ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
            <span
              className={`text-sm font-medium flex items-center gap-2 ${
                annual ? "text-white" : "text-zinc-400"
              }`}
            >
              Annual billing
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300">
                Save 20% + 2 Mo Free
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Starter */}
          <div className="p-8 rounded-3xl bg-zinc-900/40 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between">
            <div>
              <span className="text-sm font-bold text-zinc-400 uppercase tracking-wider">
                Starter
              </span>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl sm:text-5xl font-display font-black text-white">
                  ${annual ? "39" : "49"}
                </span>
                <span className="text-xs text-zinc-400">/ month</span>
              </div>
              <p className="mt-3 text-xs text-zinc-400">
                Ideal for solo operators and boutique businesses getting started with WhatsApp AI.
              </p>

              <div className="mt-8 space-y-3 pt-6 border-t border-white/5">
                {[
                  "1 Official WhatsApp Number",
                  "1,500 AI conversations / month",
                  "Knowledge base training (up to 20 docs)",
                  "Google Calendar integration",
                  "Standard support response (< 24h)",
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs text-zinc-300">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="#cta-section"
              className="mt-8 w-full py-3 rounded-xl border border-white/10 hover:bg-white/5 text-center text-xs font-bold text-white transition-all block"
            >
              Start 14-Day Free Trial
            </a>
          </div>

          {/* Growth / Popular */}
          <div className="relative p-8 rounded-3xl bg-gradient-to-b from-emerald-950/60 to-zinc-900/90 border-2 border-emerald-500/50 shadow-2xl shadow-emerald-950/40 flex flex-col justify-between scale-100 lg:-translate-y-2">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-emerald-400 text-zinc-950 text-[10px] font-black uppercase tracking-wider shadow">
              Most Popular • Best Value
            </div>

            <div>
              <span className="text-sm font-bold text-emerald-400 uppercase tracking-wider">
                Growth Autopilot
              </span>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl sm:text-5xl font-display font-black text-white">
                  ${annual ? "119" : "149"}
                </span>
                <span className="text-xs text-zinc-400">/ month</span>
              </div>
              <p className="mt-3 text-xs text-zinc-300">
                For scaling companies wanting 24/7 autonomous sales, CRM sync, and payment links.
              </p>

              <div className="mt-8 space-y-3 pt-6 border-t border-white/10">
                {[
                  "3 Official WhatsApp Numbers",
                  "10,000 AI conversations / month",
                  "Full website & PDF auto-indexing",
                  "HubSpot, Salesforce, & Zapier sync",
                  "Stripe & PayPal payment generation",
                  "Voice note audio transcription in 95+ langs",
                  "Human takeover with AI sentiment alerts",
                  "Priority support (< 2h SLA)",
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs text-zinc-200 font-medium">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="#cta-section"
              className="mt-8 w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-zinc-950 font-bold text-xs shadow-lg shadow-emerald-500/30 text-center transition-all flex items-center justify-center gap-2"
            >
              Deploy Growth Agent <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Enterprise */}
          <div className="p-8 rounded-3xl bg-zinc-900/40 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between">
            <div>
              <span className="text-sm font-bold text-zinc-400 uppercase tracking-wider">
                Enterprise
              </span>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl sm:text-5xl font-display font-black text-white">
                  Custom
                </span>
              </div>
              <p className="mt-3 text-xs text-zinc-400">
                For enterprise brands with high volume, custom LLMs, SOC2 requirements, and dedicated hosting.
              </p>

              <div className="mt-8 space-y-3 pt-6 border-t border-white/5">
                {[
                  "Unlimited WhatsApp numbers",
                  "Unlimited conversation volume",
                  "Custom fine-tuned LLM on your data",
                  "Dedicated private infrastructure & VPC",
                  "Custom CRM & ERP webhook logic",
                  "SOC2 Type II, HIPAA, & GDPR compliance",
                  "Dedicated 24/7 Slack channel & Account Exec",
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs text-zinc-300">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="#cta-section"
              className="mt-8 w-full py-3 rounded-xl border border-white/10 hover:bg-white/5 text-center text-xs font-bold text-white transition-all block"
            >
              Contact Enterprise Sales
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
