import { Link } from "@tanstack/react-router";
import { Mail } from "lucide-react";

export function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-black border-t border-white/10 text-zinc-400 text-xs py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="inline-block focus:outline-none">
              <img
                src="/vabsgen-logo.png"
                alt="Vabsgen"
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              Autonomous WhatsApp AI Agents that converse, qualify leads, schedule calendar
              appointments, and close revenue 24/7.
            </p>
            <div className="pt-1">
              <a
                href="mailto:official@vabsgen.com"
                className="inline-flex items-center gap-2 text-xs text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>official@vabsgen.com</span>
              </a>
            </div>
          </div>

          {/* Product & Navigation */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] mb-4">
              Product & Features
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={() => scrollTo("simulator-section")}
                  className="text-left text-zinc-400 hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  Interactive Live Simulator
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("features-section")}
                  className="text-left text-zinc-400 hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  AI Lead Qualification & Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("metrics-section")}
                  className="text-left text-zinc-400 hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  ROI & Impact Metrics
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("pricing-section")}
                  className="text-left text-zinc-400 hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  Pricing & Plans
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("faq-section")}
                  className="text-left text-zinc-400 hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  Frequently Asked Questions
                </button>
              </li>
            </ul>
          </div>

          {/* Legal & Policies */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] mb-4">
              Legal & Policies
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  to="/privacy"
                  className="text-left text-zinc-400 hover:text-emerald-400 transition-colors inline-block"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-left text-zinc-400 hover:text-emerald-400 transition-colors inline-block"
                >
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <a
                  href="mailto:official@vabsgen.com?subject=Legal%20Inquiry"
                  className="text-left text-zinc-400 hover:text-emerald-400 transition-colors inline-block"
                >
                  Legal & Grievance Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <p>© {new Date().getFullYear()} Vabsgen. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <Link
              to="/privacy"
              className="hover:text-emerald-400 transition-colors"
            >
              Privacy Policy
            </Link>
            <span>•</span>
            <Link
              to="/terms"
              className="hover:text-emerald-400 transition-colors"
            >
              Terms and Conditions
            </Link>
            <span>•</span>
            <a
              href="mailto:official@vabsgen.com"
              className="hover:text-emerald-400 transition-colors"
            >
              official@vabsgen.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
