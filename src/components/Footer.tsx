import { Link } from "@tanstack/react-router";
import { Mail } from "lucide-react";

export function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/#${id}`;
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
                src="/vabsgen-logo-white.png"
                alt="Vabsgen"
                className="h-12 sm:h-16 w-auto object-contain transition-transform hover:scale-105"
              />
            </Link>
            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              Autonomous WhatsApp AI agents for hospitals and clinics: appointments, follow-ups,
              emergency escalation and prescriptions, with your team in control.
            </p>
            <div className="pt-1">
              <a
                href="mailto:official@vabsgen.com"
                className="inline-flex items-center gap-2 text-xs text-[#14B8A6] hover:text-[#2DD4BF] transition-colors font-medium"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>official@vabsgen.com</span>
              </a>
            </div>
          </div>

          {/* Product Column */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] mb-4">
              Product
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={() => scrollTo("simulator")}
                  className="text-left text-slate-300 hover:text-[#14B8A6] transition-colors cursor-pointer"
                >
                  Live Simulator
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("features")}
                  className="text-left text-slate-300 hover:text-[#14B8A6] transition-colors cursor-pointer"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("security")}
                  className="text-left text-slate-300 hover:text-[#14B8A6] transition-colors cursor-pointer"
                >
                  Security
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("faq")}
                  className="text-left text-slate-300 hover:text-[#14B8A6] transition-colors cursor-pointer"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] mb-4">
              Legal
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-left text-slate-300 hover:text-[#14B8A6] transition-colors inline-block"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-and-conditions"
                  className="text-left text-slate-300 hover:text-[#14B8A6] transition-colors inline-block"
                >
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <a
                  href="mailto:official@vabsgen.com?subject=Grievance%20Contact"
                  className="text-left text-slate-300 hover:text-[#14B8A6] transition-colors inline-block"
                >
                  Grievance Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer Line */}
        <div className="py-4 border-t border-white/5 text-center text-[#64748B] text-[11px]">
          <p>Vabsgen is a communication tool and does not provide medical advice.</p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <p>© {new Date().getFullYear()} Vabsgen. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <Link to="/privacy-policy" className="hover:text-[#14B8A6] transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link to="/terms-and-conditions" className="hover:text-[#14B8A6] transition-colors">
              Terms and Conditions
            </Link>
            <span>•</span>
            <a
              href="mailto:official@vabsgen.com"
              className="hover:text-[#14B8A6] transition-colors"
            >
              official@vabsgen.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
