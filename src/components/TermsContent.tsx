import { Shield, FileText, CheckCircle2, AlertTriangle, Building2 } from "lucide-react";

export function TermsContent() {
  const sections = [
    { id: "01", title: "Agreement to Terms" },
    { id: "02", title: "Definitions" },
    { id: "03", title: "Eligibility & Account Registration" },
    { id: "04", title: "Services & Features" },
    { id: "05", title: "Customer Responsibilities" },
    { id: "06", title: "Patient Communications & WhatsApp/Meta Policies" },
    { id: "07", title: "AI Services Disclaimer" },
    { id: "08", title: "Data Protection & Roles (DPDP)" },
    { id: "09", title: "Fees & Payment" },
    { id: "10", title: "Intellectual Property" },
    { id: "11", title: "Customer Data Ownership" },
    { id: "12", title: "Third-Party Services" },
    { id: "13", title: "Availability & Support" },
    { id: "14", title: "Suspension & Termination" },
    { id: "15", title: "Disclaimer of Warranties" },
    { id: "16", title: "Limitation of Liability" },
    { id: "17", title: "Indemnification" },
    { id: "18", title: "Changes to Terms" },
    { id: "19", title: "Governing Law & Jurisdiction" },
    { id: "20", title: "Contact" },
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(`terms-sec-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="text-slate-300 text-sm sm:text-base leading-relaxed space-y-12">
      {/* Legal Counsel Notice */}
      <div className="p-4 rounded-xl bg-[#F97316]/10 border border-[#F97316]/30 text-[#F97316] text-xs sm:text-sm flex items-center gap-2">
        <AlertTriangle className="w-4 h-4 text-[#F97316] shrink-0" />
        <span>
          <strong>Notice:</strong> This document should be reviewed by qualified legal counsel
          before publishing.
        </span>
      </div>

      {/* Document Header */}
      <div className="border-b border-white/10 pb-8 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2563EB]/15 border border-[#2563EB]/30 text-[#14B8A6] text-xs font-semibold uppercase tracking-wider">
          <Shield className="w-3.5 h-3.5" />
          <span>Terms and Conditions</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white tracking-tight">
          Terms and Conditions — Vabsgen
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
          <span className="font-semibold text-slate-300">Last Updated:</span>
          <span>28 November 2026</span>
          <span className="text-slate-600">•</span>
          <span>Applicable to healthcare organizations and clinic customers</span>
        </div>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed pt-2">
          These Terms and Conditions govern hospitals&apos; and clinics&apos; use of the Vabsgen
          WhatsApp healthcare AI platform.
        </p>
        <div className="p-4 rounded-xl bg-[#0B2D5B]/60 border border-[#2563EB]/30 text-slate-200 text-sm leading-relaxed">
          <p className="font-semibold text-[#14B8A6] mb-1 flex items-center gap-1.5">
            <Building2 className="w-4 h-4" /> About Vabsgen
          </p>
          Vabsgen provides a WhatsApp AI communication platform for hospitals and clinics. Vabsgen
          is a communication tool and does not provide medical advice.
        </div>
      </div>

      {/* Quick Table of Contents / Index Pills */}
      <div className="p-5 rounded-2xl bg-[#0B2D5B]/40 border border-white/10 space-y-3">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
          <FileText className="w-4 h-4 text-[#14B8A6]" />
          Table of Contents (Jump to Section)
        </h3>
        <div className="flex flex-wrap gap-2">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollToSection(s.id)}
              className="text-xs px-2.5 py-1 rounded-lg bg-white/5 hover:bg-[#2563EB]/25 hover:text-white text-slate-300 border border-white/5 hover:border-[#2563EB]/35 transition-all cursor-pointer"
            >
              <span className="text-[#14B8A6] font-bold mr-1.5">{s.id}.</span>
              {s.title}
            </button>
          ))}
        </div>
      </div>

      {/* Section 01 */}
      <section id="terms-sec-01" className="space-y-4 pt-4 border-t border-white/5">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-md bg-[#2563EB]/15 border border-[#2563EB]/30 text-[#14B8A6] font-mono text-xs font-bold">
            01
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">Agreement to Terms</h2>
        </div>
        <p>
          By executing an enterprise order form, activating a hospital WhatsApp number on the
          platform, or accessing Vabsgen services, the Customer agrees to these Terms and
          Conditions.
        </p>
      </section>

      {/* Section 02 */}
      <section id="terms-sec-02" className="space-y-4 pt-4 border-t border-white/5">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-md bg-[#2563EB]/15 border border-[#2563EB]/30 text-[#14B8A6] font-mono text-xs font-bold">
            02
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">Definitions</h2>
        </div>
        <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-300">
          <li>
            • <strong>Hospital / Customer:</strong> The healthcare provider, clinic, or enterprise
            hospital group deploying Vabsgen.
          </li>
          <li>
            • <strong>Patient:</strong> An individual interacting with the hospital&apos;s WhatsApp
            communication channel.
          </li>
          <li>
            • <strong>Services:</strong> Vabsgen&apos;s software, conversational AI agent, and
            connectivity connectors.
          </li>
          <li>
            • <strong>AI Agent:</strong> The software agent configured with the hospital&apos;s
            guidelines and schedules.
          </li>
        </ul>
      </section>

      {/* Section 03 */}
      <section id="terms-sec-03" className="space-y-4 pt-4 border-t border-white/5">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-md bg-[#2563EB]/15 border border-[#2563EB]/30 text-[#14B8A6] font-mono text-xs font-bold">
            03
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Eligibility & Account Registration
          </h2>
        </div>
        <p>
          The Customer represents that it is an established healthcare entity operated by licensed
          medical personnel, authorized to engage in patient communications in its jurisdiction.
        </p>
      </section>

      {/* Section 04 */}
      <section id="terms-sec-04" className="space-y-4 pt-4 border-t border-white/5">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-md bg-[#2563EB]/15 border border-[#2563EB]/30 text-[#14B8A6] font-mono text-xs font-bold">
            04
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">Services & Features</h2>
        </div>
        <p>
          Vabsgen provides automated appointment booking, query resolution, doctor-approved
          prescription delivery, emergency routing alerts, and post-visit follow-up check-ins via
          WhatsApp.
        </p>
      </section>

      {/* Section 05 */}
      <section id="terms-sec-05" className="space-y-4 pt-4 border-t border-white/5">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-md bg-[#2563EB]/15 border border-[#2563EB]/30 text-[#14B8A6] font-mono text-xs font-bold">
            05
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">Customer Responsibilities</h2>
        </div>
        <p>The Hospital/Customer agrees to:</p>
        <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-300">
          <li>
            • Ensure appropriate patient notices and consents are maintained under healthcare
            regulations.
          </li>
          <li>
            • Maintain the accuracy of doctor rosters, consulting timings, and clinic guidelines
            provided to the system.
          </li>
          <li>
            • Ensure all prescriptions are created and approved exclusively by licensed physicians
            before transmission.
          </li>
          <li>
            • Maintain active staff supervision to handle triage escalations and human takeovers.
          </li>
          <li>
            • Configure and maintain appropriate emergency escalation protocols and contact points.
          </li>
        </ul>
      </section>

      {/* Section 06 */}
      <section id="terms-sec-06" className="space-y-4 pt-4 border-t border-white/5">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-md bg-[#2563EB]/15 border border-[#2563EB]/30 text-[#14B8A6] font-mono text-xs font-bold">
            06
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Patient Communications & WhatsApp/Meta Policies
          </h2>
        </div>
        <p>
          Messaging is subject to Meta&apos;s WhatsApp Business Platform terms and messaging
          policies. Customer agrees not to use the service for spam or unsolicited broadcasting.
        </p>
      </section>

      {/* Section 07 */}
      <section id="terms-sec-07" className="space-y-4 pt-4 border-t border-white/5">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-md bg-[#2563EB]/15 border border-[#2563EB]/30 text-[#14B8A6] font-mono text-xs font-bold">
            07
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">AI Services Disclaimer</h2>
        </div>
        <div className="p-4 rounded-xl bg-[#F97316]/10 border border-[#F97316]/30 text-[#F97316] text-sm space-y-1.5">
          <p className="font-semibold text-[#F97316]">Essential Clinical Disclaimer</p>
          <p className="text-xs sm:text-sm leading-relaxed">
            Vabsgen AI is strictly an administrative communication tool. It does NOT provide medical
            advice, diagnosis, or clinical treatment plans. It is not a substitute for professional
            clinical judgment and must never be relied upon for acute emergency care.
          </p>
        </div>
      </section>

      {/* Section 08 */}
      <section id="terms-sec-08" className="space-y-4 pt-4 border-t border-white/5">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-md bg-[#2563EB]/15 border border-[#2563EB]/30 text-[#14B8A6] font-mono text-xs font-bold">
            08
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Data Protection & Roles (DPDP)
          </h2>
        </div>
        <p>
          Hospital acts as the Data Fiduciary and Vabsgen acts as Data Processor under India&apos;s
          Digital Personal Data Protection (DPDP) Act, 2023.
        </p>
      </section>

      {/* Section 09 */}
      <section id="terms-sec-09" className="space-y-4 pt-4 border-t border-white/5">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-md bg-[#2563EB]/15 border border-[#2563EB]/30 text-[#14B8A6] font-mono text-xs font-bold">
            09
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">Fees & Payment</h2>
        </div>
        <p>
          Platform fees, implementation costs, and payment schedules are governed solely by the
          customized service agreement and order form executed between Vabsgen and the Customer.
        </p>
      </section>

      {/* Section 10 */}
      <section id="terms-sec-10" className="space-y-4 pt-4 border-t border-white/5">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-md bg-[#2563EB]/15 border border-[#2563EB]/30 text-[#14B8A6] font-mono text-xs font-bold">
            10
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">Intellectual Property</h2>
        </div>
        <p>
          Vabsgen retains all intellectual property rights in its AI communication engine,
          algorithms, and software. Customer retains all rights to its hospital branding and medical
          records.
        </p>
      </section>

      {/* Section 11 */}
      <section id="terms-sec-11" className="space-y-4 pt-4 border-t border-white/5">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-md bg-[#2563EB]/15 border border-[#2563EB]/30 text-[#14B8A6] font-mono text-xs font-bold">
            11
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">Customer Data Ownership</h2>
        </div>
        <p>
          The Customer retains full, exclusive ownership of all patient communications and medical
          files processed through the platform.
        </p>
      </section>

      {/* Section 12 */}
      <section id="terms-sec-12" className="space-y-4 pt-4 border-t border-white/5">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-md bg-[#2563EB]/15 border border-[#2563EB]/30 text-[#14B8A6] font-mono text-xs font-bold">
            12
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">Third-Party Services</h2>
        </div>
        <p>
          The service operates in connection with Meta Platforms (WhatsApp Business Cloud API) and
          the hospital&apos;s chosen HMS/EMR or calendar infrastructure.
        </p>
      </section>

      {/* Section 13 */}
      <section id="terms-sec-13" className="space-y-4 pt-4 border-t border-white/5">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-md bg-[#2563EB]/15 border border-[#2563EB]/30 text-[#14B8A6] font-mono text-xs font-bold">
            13
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">Availability & Support</h2>
        </div>
        <p>
          Service availability commitments and enterprise support hours are set out in the
          Customer&apos;s individual Service Level Agreement (SLA).
        </p>
      </section>

      {/* Section 14 */}
      <section id="terms-sec-14" className="space-y-4 pt-4 border-t border-white/5">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-md bg-[#2563EB]/15 border border-[#2563EB]/30 text-[#14B8A6] font-mono text-xs font-bold">
            14
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">Suspension & Termination</h2>
        </div>
        <p>
          Either party may terminate services pursuant to the terms of the customer agreement.
          Services may be suspended immediately in case of illegal transmission or material security
          breach.
        </p>
      </section>

      {/* Section 15 */}
      <section id="terms-sec-15" className="space-y-4 pt-4 border-t border-white/5">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-md bg-[#2563EB]/15 border border-[#2563EB]/30 text-[#14B8A6] font-mono text-xs font-bold">
            15
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">Disclaimer of Warranties</h2>
        </div>
        <p>
          Services are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis for
          administrative communications without warranties of medical outcomes.
        </p>
      </section>

      {/* Section 16 */}
      <section id="terms-sec-16" className="space-y-4 pt-4 border-t border-white/5">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-md bg-[#2563EB]/15 border border-[#2563EB]/30 text-[#14B8A6] font-mono text-xs font-bold">
            16
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">Limitation of Liability</h2>
        </div>
        <p>
          To the maximum extent permitted by applicable law, neither party shall be liable for
          indirect or consequential damages, and Vabsgen bears no liability for clinical diagnoses
          made by medical staff.
        </p>
      </section>

      {/* Section 17 */}
      <section id="terms-sec-17" className="space-y-4 pt-4 border-t border-white/5">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-md bg-[#2563EB]/15 border border-[#2563EB]/30 text-[#14B8A6] font-mono text-xs font-bold">
            17
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">Indemnification</h2>
        </div>
        <p>
          Each party agrees to indemnify the other against third-party claims arising from material
          breach of data protection laws or willful misconduct.
        </p>
      </section>

      {/* Section 18 */}
      <section id="terms-sec-18" className="space-y-4 pt-4 border-t border-white/5">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-md bg-[#2563EB]/15 border border-[#2563EB]/30 text-[#14B8A6] font-mono text-xs font-bold">
            18
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">Changes to Terms</h2>
        </div>
        <p>
          Updated terms will be posted with revised effective dates and communicated to hospital
          administrators.
        </p>
      </section>

      {/* Section 19 */}
      <section id="terms-sec-19" className="space-y-4 pt-4 border-t border-white/5">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-md bg-[#2563EB]/15 border border-[#2563EB]/30 text-[#14B8A6] font-mono text-xs font-bold">
            19
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">Governing Law & Jurisdiction</h2>
        </div>
        <p>
          These Terms are governed by the laws of India [confirm: India, city], and courts located
          therein shall have exclusive jurisdiction.
        </p>
      </section>

      {/* Section 20 */}
      <section id="terms-sec-20" className="space-y-4 pt-4 border-t border-white/5">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-md bg-[#2563EB]/15 border border-[#2563EB]/30 text-[#14B8A6] font-mono text-xs font-bold">
            20
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">Contact</h2>
        </div>
        <div className="p-4 rounded-xl bg-zinc-900 border border-white/10 text-xs sm:text-sm space-y-1">
          <p className="font-bold text-white">Hospital Partnerships & Legal Team — Vabsgen</p>
          <p className="text-zinc-400">
            Email:{" "}
            <a href="mailto:official@vabsgen.com" className="text-[#14B8A6] hover:underline">
              official@vabsgen.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
