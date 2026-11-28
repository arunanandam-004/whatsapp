import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const sectionIds = ["how-it-works", "simulator", "features", "security", "faq"];

    const handleScroll = () => {
      // Only track on the main landing page
      if (window.location.pathname !== "/" && window.location.pathname !== "") {
        setActiveSection("");
        return;
      }

      const scrollY = window.scrollY;

      // If near the top (hero / storyboard), clear active section
      if (scrollY < 300) {
        setActiveSection("");
        return;
      }

      let current = "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Check if top of section is within the viewport threshold
          if (rect.top <= 200 && rect.bottom >= 120) {
            current = id;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/#${id}`;
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-3 transition-all duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="relative flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-2xl bg-[#0B2D5B]/85 backdrop-blur-xl border border-white/10 shadow-2xl shadow-[#040E1E]/40">
          {/* Brand Logo - Extra prominent size with crisp white VABS text */}
          <a
            href="/"
            className="flex items-center shrink-0 focus:outline-none group py-1"
            aria-label="Vabsgen Home"
          >
            <img
              src="/vabsgen-logo-white.png"
              alt="Vabsgen"
              className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Nav - Dynamic active highlighting */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            <button
              onClick={() => scrollTo("how-it-works")}
              className={`px-3.5 py-2 text-xs lg:text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                activeSection === "how-it-works"
                  ? "text-[#14B8A6] bg-[#14B8A6]/10 font-semibold"
                  : "text-slate-300 hover:text-white hover:bg-white/5"
              }`}
            >
              How It Works
            </button>
            <button
              onClick={() => scrollTo("simulator")}
              className={`px-3.5 py-2 text-xs lg:text-sm font-medium rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer ${
                activeSection === "simulator"
                  ? "text-[#14B8A6] bg-[#14B8A6]/10 font-semibold"
                  : "text-slate-300 hover:text-white hover:bg-white/5"
              }`}
            >
              <Sparkles
                className={`w-3.5 h-3.5 ${
                  activeSection === "simulator" ? "text-[#14B8A6]" : "text-slate-400"
                }`}
              />
              <span>Live Simulator</span>
            </button>
            <button
              onClick={() => scrollTo("features")}
              className={`px-3.5 py-2 text-xs lg:text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                activeSection === "features"
                  ? "text-[#14B8A6] bg-[#14B8A6]/10 font-semibold"
                  : "text-slate-300 hover:text-white hover:bg-white/5"
              }`}
            >
              Features
            </button>
            <button
              onClick={() => scrollTo("security")}
              className={`px-3.5 py-2 text-xs lg:text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                activeSection === "security"
                  ? "text-[#14B8A6] bg-[#14B8A6]/10 font-semibold"
                  : "text-slate-300 hover:text-white hover:bg-white/5"
              }`}
            >
              Security
            </button>
            <button
              onClick={() => scrollTo("faq")}
              className={`px-3.5 py-2 text-xs lg:text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                activeSection === "faq"
                  ? "text-[#14B8A6] bg-[#14B8A6]/10 font-semibold"
                  : "text-slate-300 hover:text-white hover:bg-white/5"
              }`}
            >
              FAQ
            </button>
          </nav>

          {/* CTA Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => scrollTo("simulator")}
              className="px-3.5 py-2 text-xs font-semibold text-slate-200 hover:text-white border border-white/15 rounded-xl hover:bg-white/5 transition-all cursor-pointer"
            >
              Try Simulator
            </button>
            <a
              href="mailto:official@vabsgen.com?subject=Demo%20Request"
              className="px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-[#2563EB] to-[#14B8A6] hover:from-[#1D4ED8] hover:to-[#0D9488] rounded-xl shadow-lg shadow-[#2563EB]/25 hover:shadow-[#2563EB]/45 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-1.5 cursor-pointer"
            >
              Book a Demo -&gt;
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white rounded-lg focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 p-4 rounded-2xl bg-[#0B2D5B]/95 backdrop-blur-2xl border border-white/10 shadow-2xl flex flex-col gap-2 animate-in fade-in slide-in-from-top-3 duration-200">
            <button
              onClick={() => scrollTo("how-it-works")}
              className={`text-left px-3 py-2 text-sm font-medium rounded-lg ${
                activeSection === "how-it-works"
                  ? "text-[#14B8A6] bg-[#14B8A6]/10 font-semibold"
                  : "text-slate-200 hover:text-[#14B8A6] hover:bg-white/5"
              }`}
            >
              How It Works
            </button>
            <button
              onClick={() => scrollTo("simulator")}
              className={`text-left px-3 py-2 text-sm font-medium rounded-lg flex items-center justify-between ${
                activeSection === "simulator"
                  ? "text-[#14B8A6] bg-[#14B8A6]/10 font-semibold"
                  : "text-slate-200 hover:text-[#14B8A6] hover:bg-white/5"
              }`}
            >
              <span>Live Simulator</span>
              <Sparkles className="w-4 h-4 text-[#14B8A6]" />
            </button>
            <button
              onClick={() => scrollTo("features")}
              className={`text-left px-3 py-2 text-sm font-medium rounded-lg ${
                activeSection === "features"
                  ? "text-[#14B8A6] bg-[#14B8A6]/10 font-semibold"
                  : "text-slate-200 hover:text-[#14B8A6] hover:bg-white/5"
              }`}
            >
              Features
            </button>
            <button
              onClick={() => scrollTo("security")}
              className={`text-left px-3 py-2 text-sm font-medium rounded-lg ${
                activeSection === "security"
                  ? "text-[#14B8A6] bg-[#14B8A6]/10 font-semibold"
                  : "text-slate-200 hover:text-[#14B8A6] hover:bg-white/5"
              }`}
            >
              Security
            </button>
            <button
              onClick={() => scrollTo("faq")}
              className={`text-left px-3 py-2 text-sm font-medium rounded-lg ${
                activeSection === "faq"
                  ? "text-[#14B8A6] bg-[#14B8A6]/10 font-semibold"
                  : "text-slate-200 hover:text-[#14B8A6] hover:bg-white/5"
              }`}
            >
              FAQ
            </button>
            <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
              <a
                href="mailto:official@vabsgen.com?subject=Demo%20Request"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 text-xs font-bold text-white bg-gradient-to-r from-[#2563EB] to-[#14B8A6] hover:from-[#1D4ED8] hover:to-[#0D9488] rounded-xl flex items-center justify-center gap-2"
              >
                Book a Demo -&gt;
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
