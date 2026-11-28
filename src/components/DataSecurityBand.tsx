import { Lock, UserCheck, FileText, UserX, Shield } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function DataSecurityBand() {
  const points = [
    {
      icon: Lock,
      title: "Encrypted in transit and at rest",
      desc: "All patient messages and records are protected using standard encryption protocols across all channels.",
    },
    {
      icon: UserCheck,
      title: "Role-based access for staff",
      desc: "Your hospital decides exactly which doctors, nurses, and administrators can access specific patient conversations.",
    },
    {
      icon: FileText,
      title: "Audit trail of AI and staff actions",
      desc: "Every automated reply, slot reservation, and human staff intervention is comprehensively logged.",
    },
    {
      icon: UserX,
      title: "Human can pause or take over any conversation at any time",
      desc: "Your clinical or administrative staff retains complete control to pause the AI and step in instantly.",
    },
  ];

  return (
    <section
      id="security-section"
      className="relative py-16 px-4 sm:px-6 lg:px-8 bg-zinc-950 border-y border-white/5"
    >
      <span id="security" className="absolute -top-24" aria-hidden="true" />
      <div className="max-w-7xl mx-auto">
        <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-b from-[#0B2D5B]/90 to-[#071D3B]/90 border border-[#2563EB]/30 shadow-2xl shadow-[#0B2D5B]/40 backdrop-blur-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2563EB]/15 border border-[#2563EB]/30 text-[#14B8A6] text-xs font-semibold uppercase tracking-wider mb-3">
                <Shield className="w-3.5 h-3.5" />
                <span>Security & Control</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                Your Patient Data, Under Your Control.
              </h3>
              <p className="mt-2 text-sm text-slate-300 max-w-2xl leading-relaxed">
                Built to align with India&apos;s DPDP Act, 2023. We ensure hospital oversight,
                role-based controls, and patient confidentiality without compromise.
              </p>
            </div>

            <Link
              to="/privacy-policy"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#2563EB]/20 hover:bg-[#2563EB]/40 text-xs font-semibold text-white border border-[#2563EB]/40 transition-all self-start lg:self-center shrink-0"
            >
              <span>Read Healthcare Privacy Policy</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
            {points.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div key={idx} className="flex flex-col gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-[#14B8A6]/10 border border-[#14B8A6]/20 flex items-center justify-center text-[#14B8A6]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-white leading-snug">{p.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
