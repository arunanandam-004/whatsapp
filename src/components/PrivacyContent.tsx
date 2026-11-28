import { Shield, Lock, FileText, CheckCircle2, AlertTriangle } from "lucide-react";

export function PrivacyContent() {
  const sections = [
    { id: "01", title: "Overview" },
    { id: "02", title: "Roles (Hospital vs Vabsgen)" },
    { id: "03", title: "Information We Collect" },
    { id: "04", title: "How We Use It" },
    { id: "05", title: "AI Processing & Automated Services" },
    { id: "06", title: "Consent & Patient Rights" },
    { id: "07", title: "Sharing & Sub-Processors" },
    { id: "08", title: "Data Storage & Security" },
    { id: "09", title: "Retention & Deletion" },
    { id: "10", title: "Breach Notification" },
    { id: "11", title: "Cookies" },
    { id: "12", title: "Cross-border Transfers" },
    { id: "13", title: "Children's Data" },
    { id: "14", title: "Applicable Law (DPDP Act 2023)" },
    { id: "15", title: "Grievance Officer Contact" },
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(`privacy-sec-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="text-zinc-300 text-sm sm:text-base leading-relaxed space-y-12">
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
          <Lock className="w-3.5 h-3.5" />
          <span>Healthcare Data Privacy</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white tracking-tight">
          Privacy Policy — Vabsgen
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
          <span className="font-semibold text-slate-300">Last Updated:</span>
          <span>28 November 2026</span>
          <span className="text-slate-600">•</span>
          <span>Compliant with the Digital Personal Data Protection (DPDP) Act, 2023 (India)</span>
        </div>
        <p className="text-slate-300 text-base sm:text-lg leading-relaxed pt-2">
          Vabsgen provides a WhatsApp-based AI communication platform for hospitals and clinics
          (appointments, follow-ups, reminders, query handling, prescription delivery, emergency
          escalation).
        </p>
        <div className="p-4 rounded-xl bg-[#0B2D5B]/60 border border-[#2563EB]/30 text-slate-200 text-sm leading-relaxed">
          <p className="font-semibold text-[#14B8A6] mb-1 flex items-center gap-1.5">
            <Shield className="w-4 h-4" /> Core Role & Medical Notice
          </p>
          Hospitals are the Data Fiduciary for patient data; Vabsgen acts as Data Processor on their
          instructions. Vabsgen is a communication tool and does not provide medical advice.
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
      <section id="privacy-sec-01" className="space-y-4 pt-4 border-t border-white/5">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-md bg-[#2563EB]/15 border border-[#2563EB]/30 text-[#14B8A6] font-mono text-xs font-bold">
            01
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">Overview</h2>
        </div>
        <p>
          This Privacy Policy describes how Vabsgen collects, uses, protects, and handles personal
          and health-related communication data when deployed on behalf of hospitals, clinics, and
          healthcare institutions.
        </p>
      </section>

      {/* Section 02 */}
      <section id="privacy-sec-02" className="space-y-4 pt-4 border-t border-white/5">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-md bg-[#2563EB]/15 border border-[#2563EB]/30 text-[#14B8A6] font-mono text-xs font-bold">
            02
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">Roles (Hospital vs Vabsgen)</h2>
        </div>
        <p>
          The hospital or healthcare provider is the <strong>Data Fiduciary</strong>, maintaining
          full legal ownership of patient relationships and medical records. Vabsgen functions
          exclusively as a <strong>Data Processor</strong>, carrying out automated message delivery
          and scheduling according to the hospital&apos;s explicit authorization and instructions.
        </p>
      </section>

      {/* Section 03 */}
      <section id="privacy-sec-03" className="space-y-4 pt-4 border-t border-white/5">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-md bg-[#2563EB]/15 border border-[#2563EB]/30 text-[#14B8A6] font-mono text-xs font-bold">
            03
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">Information We Collect</h2>
        </div>
        <p>We process only data strictly necessary for hospital communications:</p>
        <ul className="space-y-2 pl-2 text-xs sm:text-sm text-zinc-300">
          {[
            "WhatsApp phone number and patient name.",
            "Inbound and outbound WhatsApp message content.",
            "Appointment booking details (doctor, department, requested slot, OPD visit status).",
            "Uploaded diagnostic reports and files shared by the patient for doctor review.",
            "Doctor-approved prescription records and medication reminder preferences.",
            "Patient follow-up check-in responses post-consultation.",
            "Hospital staff account credentials and operational action logs.",
            "Technical usage and device metadata necessary for network reliability.",
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#14B8A6] shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Section 04 */}
      <section id="privacy-sec-04" className="space-y-4 pt-4 border-t border-white/5">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-md bg-[#2563EB]/15 border border-[#2563EB]/30 text-[#14B8A6] font-mono text-xs font-bold">
            04
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">How We Use It</h2>
        </div>
        <p>
          Data is used solely to facilitate hospital operations: scheduling OPD consultations,
          answering clinic inquiries, distributing doctor-approved prescriptions, sending medication
          reminders, and alerting on-duty medical staff when emergency keywords are identified.
        </p>
      </section>

      {/* Section 05 */}
      <section id="privacy-sec-05" className="space-y-4 pt-4 border-t border-white/5">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-md bg-[#2563EB]/15 border border-[#2563EB]/30 text-[#14B8A6] font-mono text-xs font-bold">
            05
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            AI Processing & Automated Services
          </h2>
        </div>
        <p>
          The AI agent is an administrative communication interface. It does NOT diagnose diseases,
          prescribe medication, or formulate medical treatment plans. Human staff oversight is
          maintained at all times.{" "}
          <strong>
            Patient communication data is never used to train public or foundational AI models.
          </strong>
        </p>
      </section>

      {/* Section 06 */}
      <section id="privacy-sec-06" className="space-y-4 pt-4 border-t border-white/5">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-md bg-[#2563EB]/15 border border-[#2563EB]/30 text-[#14B8A6] font-mono text-xs font-bold">
            06
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">Consent & Patient Rights</h2>
        </div>
        <p>
          Under the DPDP Act 2023, patients have the right to access a summary of their personal
          data, request correction of inaccurate records, request deletion of communication logs,
          and withdraw consent through the hospital.
        </p>
      </section>

      {/* Section 07 */}
      <section id="privacy-sec-07" className="space-y-4 pt-4 border-t border-white/5">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-md bg-[#2563EB]/15 border border-[#2563EB]/30 text-[#14B8A6] font-mono text-xs font-bold">
            07
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">Sharing & Sub-Processors</h2>
        </div>
        <p>
          We do not sell, rent, or monetize patient information under any circumstances. Information
          is shared only with: (1) the patient&apos;s healthcare provider, (2) official Meta Cloud
          API infrastructure to deliver WhatsApp messages, (3) secure cloud and AI hosting providers
          acting as authorized sub-processors, and (4) statutory authorities when strictly mandated
          by applicable law.
        </p>
      </section>

      {/* Section 08 */}
      <section id="privacy-sec-08" className="space-y-4 pt-4 border-t border-white/5">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-md bg-[#2563EB]/15 border border-[#2563EB]/30 text-[#14B8A6] font-mono text-xs font-bold">
            08
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">Data Storage & Security</h2>
        </div>
        <p>
          Patient data is encrypted in transit using TLS 1.3 and encrypted at rest using standard
          encryption algorithms. We implement role-based access controls and detailed audit logging.
          Data is stored in secure server clusters located in India [region, confirm].
        </p>
      </section>

      {/* Section 09 */}
      <section id="privacy-sec-09" className="space-y-4 pt-4 border-t border-white/5">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-md bg-[#2563EB]/15 border border-[#2563EB]/30 text-[#14B8A6] font-mono text-xs font-bold">
            09
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">Retention & Deletion</h2>
        </div>
        <p>
          Data retention timelines follow the hospital&apos;s governance policy and statutory
          healthcare record retention rules. Upon instructions from the hospital or upon termination
          of the agreement, patient communication logs are securely purged or returned.
        </p>
      </section>

      {/* Section 10 */}
      <section id="privacy-sec-10" className="space-y-4 pt-4 border-t border-white/5">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-md bg-[#2563EB]/15 border border-[#2563EB]/30 text-[#14B8A6] font-mono text-xs font-bold">
            10
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">Breach Notification</h2>
        </div>
        <p>
          In the event of a verified personal data breach, Vabsgen will notify the affected hospital
          Data Fiduciary and relevant statutory bodies without undue delay in compliance with
          India&apos;s DPDP Act, 2023.
        </p>
      </section>

      {/* Section 11 */}
      <section id="privacy-sec-11" className="space-y-4 pt-4 border-t border-white/5">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-md bg-[#2563EB]/15 border border-[#2563EB]/30 text-[#14B8A6] font-mono text-xs font-bold">
            11
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">Cookies</h2>
        </div>
        <p>
          Our informational website uses only essential session and security cookies necessary for
          website performance. We do not use third-party advertising or cross-site tracking cookies.
        </p>
      </section>

      {/* Section 12 */}
      <section id="privacy-sec-12" className="space-y-4 pt-4 border-t border-white/5">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-md bg-[#2563EB]/15 border border-[#2563EB]/30 text-[#14B8A6] font-mono text-xs font-bold">
            12
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">Cross-border Transfers</h2>
        </div>
        <p>
          Patient health data is processed in accordance with the cross-border transfer rules
          prescribed by the Government of India under the DPDP Act 2023.
        </p>
      </section>

      {/* Section 13 */}
      <section id="privacy-sec-13" className="space-y-4 pt-4 border-t border-white/5">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-md bg-[#2563EB]/15 border border-[#2563EB]/30 text-[#14B8A6] font-mono text-xs font-bold">
            13
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">Children&apos;s Data</h2>
        </div>
        <p>
          Where pediatric patients are scheduled or assisted via WhatsApp, communications must be
          conducted under the verifiable consent and supervision of a parent or lawful guardian.
        </p>
      </section>

      {/* Section 14 */}
      <section id="privacy-sec-14" className="space-y-4 pt-4 border-t border-white/5">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-md bg-[#2563EB]/15 border border-[#2563EB]/30 text-[#14B8A6] font-mono text-xs font-bold">
            14
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Applicable Law (DPDP Act 2023)
          </h2>
        </div>
        <p>
          This policy and all data handling activities are governed by the laws of India, including
          the Digital Personal Data Protection (DPDP) Act, 2023.
        </p>
      </section>

      {/* Section 15 */}
      <section id="privacy-sec-15" className="space-y-4 pt-4 border-t border-white/5">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-md bg-[#2563EB]/15 border border-[#2563EB]/30 text-[#14B8A6] font-mono text-xs font-bold">
            15
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">Grievance Officer Contact</h2>
        </div>
        <p>
          For data privacy inquiries, hospital compliance reviews, or grievance redressal, please
          contact:
        </p>
        <div className="p-4 rounded-xl bg-zinc-900 border border-white/10 text-xs sm:text-sm space-y-1">
          <p className="font-bold text-white">Grievance Officer — Vabsgen</p>
          <p className="text-zinc-400">
            Email:{" "}
            <a href="mailto:official@vabsgen.com" className="text-[#14B8A6] hover:underline">
              official@vabsgen.com
            </a>
          </p>
          <p className="text-zinc-400">
            Response timeframe: In accordance with statutory guidelines under the DPDP Act 2023.
          </p>
        </div>
      </section>
    </div>
  );
}
