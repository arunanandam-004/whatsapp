import { useState } from "react";
import { MessageCircle, Menu, X, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-3 transition-all duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="relative flex items-center justify-between px-4 sm:px-6 py-3 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl shadow-emerald-950/20">
          {/* Brand */}
          <a
            href="/"
            className="flex items-center shrink-0 focus:outline-none group py-0.5"
            aria-label="Vabsgen Home"
          >
            <img
              src="/vabsgen-logo.png"
              alt="Vabsgen"
              className="h-9 sm:h-11 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            <button
              onClick={() => scrollTo("story-section")}
              className="px-3.5 py-2 text-xs lg:text-sm font-medium text-zinc-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollTo("simulator-section")}
              className="px-3.5 py-2 text-xs lg:text-sm font-medium text-emerald-300 hover:text-emerald-200 rounded-lg hover:bg-emerald-500/10 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" /> Live Simulator
            </button>
            <button
              onClick={() => scrollTo("features-section")}
              className="px-3.5 py-2 text-xs lg:text-sm font-medium text-zinc-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
            >
              Features
            </button>
            <button
              onClick={() => scrollTo("metrics-section")}
              className="px-3.5 py-2 text-xs lg:text-sm font-medium text-zinc-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
            >
              ROI & Impact
            </button>
            <button
              onClick={() => scrollTo("pricing-section")}
              className="px-3.5 py-2 text-xs lg:text-sm font-medium text-zinc-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollTo("faq-section")}
              className="px-3.5 py-2 text-xs lg:text-sm font-medium text-zinc-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
            >
              FAQ
            </button>
          </nav>

          {/* CTA Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => scrollTo("simulator-section")}
              className="px-3.5 py-2 text-xs font-semibold text-zinc-300 hover:text-white border border-white/10 rounded-xl hover:bg-white/5 transition-all cursor-pointer"
            >
              Test Live Demo
            </button>
            <button
              onClick={() => scrollTo("cta-section")}
              className="px-4 py-2 text-xs font-bold text-zinc-950 bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-300 hover:from-emerald-300 hover:to-teal-200 rounded-xl shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-1.5 cursor-pointer"
            >
              Deploy Agent <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white rounded-lg focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 p-4 rounded-2xl bg-zinc-950/95 backdrop-blur-2xl border border-white/10 shadow-2xl flex flex-col gap-2 animate-in fade-in slide-in-from-top-3 duration-200">
            <button
              onClick={() => scrollTo("story-section")}
              className="text-left px-3 py-2 text-sm font-medium text-zinc-200 hover:text-emerald-400 rounded-lg hover:bg-white/5"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollTo("simulator-section")}
              className="text-left px-3 py-2 text-sm font-medium text-emerald-400 rounded-lg hover:bg-emerald-500/10 flex items-center justify-between"
            >
              <span>Live Simulator</span>
              <Sparkles className="w-4 h-4 text-emerald-400" />
            </button>
            <button
              onClick={() => scrollTo("features-section")}
              className="text-left px-3 py-2 text-sm font-medium text-zinc-200 hover:text-emerald-400 rounded-lg hover:bg-white/5"
            >
              Features & Integrations
            </button>
            <button
              onClick={() => scrollTo("metrics-section")}
              className="text-left px-3 py-2 text-sm font-medium text-zinc-200 hover:text-emerald-400 rounded-lg hover:bg-white/5"
            >
              ROI & Metrics
            </button>
            <button
              onClick={() => scrollTo("pricing-section")}
              className="text-left px-3 py-2 text-sm font-medium text-zinc-200 hover:text-emerald-400 rounded-lg hover:bg-white/5"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollTo("faq-section")}
              className="text-left px-3 py-2 text-sm font-medium text-zinc-200 hover:text-emerald-400 rounded-lg hover:bg-white/5"
            >
              FAQ
            </button>
            <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
              <button
                onClick={() => scrollTo("cta-section")}
                className="w-full py-2.5 text-xs font-bold text-zinc-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl flex items-center justify-center gap-2"
              >
                Deploy WhatsApp Agent <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
