import { Shield, Mail, Lock, Eye, CheckCircle2, AlertCircle, FileText, Database, Server } from "lucide-react";

export function PrivacyContent() {
  const sections = [
    { id: "01", title: "Overview" },
    { id: "02", title: "Information We Collect" },
    { id: "03", title: "How We Use Information" },
    { id: "04", title: "AI Processing & Services" },
    { id: "05", title: "How We Share Information" },
    { id: "06", title: "Data Storage & Security" },
    { id: "07", title: "Retention & Deletion" },
    { id: "08", title: "Cookies & Tracking" },
    { id: "09", title: "Third-Party Services" },
    { id: "10", title: "International Transfers" },
    { id: "11", title: "Your Privacy Rights" },
    { id: "12", title: "Children's Privacy" },
    { id: "13", title: "Institutional Roles" },
    { id: "14", title: "Data Breach Protocols" },
    { id: "15", title: "Policy Updates" },
    { id: "16", title: "Applicable Law (DPDP)" },
    { id: "17", title: "Contact & Grievances" },
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(`privacy-sec-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="text-zinc-300 text-sm sm:text-base leading-relaxed space-y-12">
      {/* Document Header */}
      <div className="border-b border-white/10 pb-8 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
          <Lock className="w-3.5 h-3.5" />
          <span>Privacy & Data Protection</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white tracking-tight">
          Vabsgen – Privacy Policy
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400">
          <span className="font-semibold text-zinc-300">Last Updated:</span>
          <span>25 November 2026</span>
          <span className="text-zinc-600">•</span>
          <span>Compliant with DPDP Act 2023 (India)</span>
        </div>
        <p className="text-zinc-300 text-base sm:text-lg leading-relaxed pt-2">
          At Vabsgen, we value your privacy and are committed to protecting your personal information.
        </p>
        <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20 text-emerald-200/90 text-sm leading-relaxed">
          <p className="font-semibold text-emerald-400 mb-1">Scope of this Policy</p>
          Vabsgen is a career development and placement platform that helps students prepare for
          employment through AI-powered mock interviews, voice practice, career roadmaps, adaptive
          learning, aptitude assessments, resume building, and placement opportunities. This policy
          explains what information we collect, why we collect it, how we use it, when we share it,
          and your privacy rights.
        </div>
      </div>

      {/* Quick Table of Contents / Index Pills */}
      <div className="p-5 rounded-2xl bg-zinc-900/60 border border-white/10 space-y-3">
        <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-2">
          <FileText className="w-4 h-4 text-emerald-400" />
          Table of Contents (Jump to Section)
        </h3>
        <div className="flex flex-wrap gap-2">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollToSection(s.id)}
              className="text-xs px-2.5 py-1 rounded-lg bg-white/5 hover:bg-emerald-500/20 hover:text-emerald-300 text-zinc-300 border border-white/5 hover:border-emerald-500/30 transition-all cursor-pointer"
            >
              <span className="text-emerald-400 font-bold mr-1.5">{s.id}.</span>
              {s.title}
            </button>
          ))}
        </div>
      </div>

      {/* Section 01 */}
      <section id="privacy-sec-01" className="space-y-4 pt-4 border-t border-white/5">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold">
            01
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">Overview</h2>
        </div>
        <p className="font-medium text-zinc-200">
          This Privacy Policy applies to information collected when you:
        </p>
        <ul className="space-y-2 pl-2">
          {[
            "Visit the Vabsgen website.",
            "Register or create an account.",
            "Use AI-powered career development features.",
            "Participate in mock interviews or voice practice.",
            "Complete aptitude tests and assessments.",
            "Create or upload resumes.",
            "Apply for job and placement opportunities.",
            "Submit feedback, reviews or support requests.",
            "Communicate with Vabsgen through its platform or official channels.",
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-xs text-zinc-400 italic pt-1">
          Depending on the relationship, Vabsgen may process personal information as a data
          fiduciary/controller or as a data processor on behalf of an educational institution or
          other organisation.
        </p>
      </section>

      {/* Section 02 */}
      <section id="privacy-sec-02" className="space-y-5 pt-4 border-t border-white/5">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold">
            02
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">Information We Collect</h2>
        </div>
        <p>
          We collect information necessary to provide, maintain, and improve our Services across the
          following categories:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-zinc-900/40 border border-white/5 space-y-2">
            <h4 className="font-bold text-emerald-400 text-sm">2.1 Personal Information</h4>
            <ul className="space-y-1 text-xs text-zinc-300 list-disc pl-4">
              <li>Full name, email address, mobile phone number</li>
              <li>Username and account credentials</li>
              <li>Profile photograph, if provided</li>
              <li>Account role (student, administrator, employer)</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-zinc-900/40 border border-white/5 space-y-2">
            <h4 className="font-bold text-emerald-400 text-sm">2.2 Educational Information</h4>
            <ul className="space-y-1 text-xs text-zinc-300 list-disc pl-4">
              <li>College or university name, degree, and department</li>
              <li>Current academic year and graduation year</li>
              <li>Educational qualifications and academic CGPA (if provided)</li>
              <li>Skills, certifications, and learning interests</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-zinc-900/40 border border-white/5 space-y-2">
            <h4 className="font-bold text-emerald-400 text-sm">2.3 Resume & Career Information</h4>
            <ul className="space-y-1 text-xs text-zinc-300 list-disc pl-4">
              <li>Uploaded resumes, CVs, and achievements</li>
              <li>Technical and professional skills</li>
              <li>Internship and work experience history</li>
              <li>Preferred job roles and placement applications</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-zinc-900/40 border border-white/5 space-y-2">
            <h4 className="font-bold text-emerald-400 text-sm">2.4 AI Interview & Voice Data</h4>
            <ul className="space-y-1 text-xs text-zinc-300 list-disc pl-4">
              <li>Interview questions, text responses, and transcripts</li>
              <li>Audio recordings and voice responses (where enabled)</li>
              <li>Aptitude assessment results & AI-generated feedback</li>
              <li>Performance history and readiness scoring</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-zinc-900/40 border border-white/5 space-y-2">
            <h4 className="font-bold text-emerald-400 text-sm">2.5 Usage & Technical Details</h4>
            <ul className="space-y-1 text-xs text-zinc-300 list-disc pl-4">
              <li>IP address, browser type, and operating system</li>
              <li>Login timestamps and pages accessed</li>
              <li>Session diagnostics and error reports</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-zinc-900/40 border border-white/5 space-y-2">
            <h4 className="font-bold text-emerald-400 text-sm">2.6 Feedback & Communications</h4>
            <ul className="space-y-1 text-xs text-zinc-300 list-disc pl-4">
              <li>Submitted ratings, suggestions, and feature requests</li>
              <li>Support inquiries and customer communication history</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 03 */}
      <section id="privacy-sec-03" className="space-y-4 pt-4 border-t border-white/5">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold">
            03
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">How We Use Your Information</h2>
        </div>
        <p>We process personal information only for disclosed and legitimate purposes:</p>

        <div className="overflow-x-auto rounded-xl border border-white/10 bg-zinc-950/60">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-white/5 text-emerald-400 font-semibold">
                <th className="py-3 px-4">Purpose</th>
                <th className="py-3 px-4">Why We Use It</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-zinc-300">
              <tr>
                <td className="py-2.5 px-4 font-medium text-white">Account management</td>
                <td className="py-2.5 px-4">Create and manage user accounts securely</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-medium text-white">Student profiles</td>
                <td className="py-2.5 px-4">Maintain educational and career progress records</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-medium text-white">AI mock interviews</td>
                <td className="py-2.5 px-4">Provide contextual interview questions and guidance</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-medium text-white">Voice practice</td>
                <td className="py-2.5 px-4">Support verbal communication and speaking readiness</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-medium text-white">Career roadmaps</td>
                <td className="py-2.5 px-4">Generate personalised career and skill roadmaps</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-medium text-white">Adaptive learning</td>
                <td className="py-2.5 px-4">Recommend learning modules based on test scores</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-medium text-white">Aptitude assessments</td>
                <td className="py-2.5 px-4">Evaluate candidate problem-solving and readiness</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-medium text-white">Resume builder</td>
                <td className="py-2.5 px-4">Generate and refine ATS-friendly resumes</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-medium text-white">Placement services</td>
                <td className="py-2.5 px-4">Facilitate job applications and employer matching</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-medium text-white">College management</td>
                <td className="py-2.5 px-4">Allow institutions to support student cohort readiness</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-medium text-white">Platform security</td>
                <td className="py-2.5 px-4">Detect fraud, misuse, and unauthorised access</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-medium text-white">Customer support</td>
                <td className="py-2.5 px-4">Resolve technical inquiries and assist users</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 04 */}
      <section id="privacy-sec-04" className="space-y-4 pt-4 border-t border-white/5">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold">
            04
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            AI Processing and Automated Services
          </h2>
        </div>
        <p>
          Vabsgen uses artificial intelligence to generate interview questions, evaluate verbal
          practice, recommend learning activities, and identify skill development areas.
        </p>

        <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-200/90 text-xs sm:text-sm space-y-2">
          <div className="flex items-center gap-2 font-bold text-amber-400">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>Important Notice Regarding AI Outputs:</span>
          </div>
          <ul className="space-y-1.5 pl-6 list-disc">
            <li>AI-generated feedback may contain errors or inaccuracies.</li>
            <li>AI scores are indicative and not absolute measures of candidate capability.</li>
            <li>AI results do not guarantee job selection or employment offers.</li>
            <li>Important hiring decisions must always include human review.</li>
          </ul>
        </div>
        <p className="text-xs text-zinc-400 font-medium">
          Vabsgen will not use your personal information to train public general-purpose AI models
          without explicit consent or lawful authorization.
        </p>
      </section>

      {/* Section 05 */}
      <section id="privacy-sec-05" className="space-y-4 pt-4 border-t border-white/5">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold">
            05
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">How We Share Your Information</h2>
        </div>
        <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs sm:text-sm font-semibold">
          Vabsgen does not sell personal information to any third parties.
        </div>
        <p>We may share relevant data only under authorized circumstances:</p>

        <div className="space-y-3">
          <div className="p-3.5 rounded-xl bg-zinc-900/40 border border-white/5">
            <h4 className="font-bold text-white text-xs sm:text-sm text-emerald-300">
              5.1 Educational Institutions
            </h4>
            <p className="text-xs text-zinc-400 mt-1">
              If accessing via a college, academic reports, test scores, and interview progress may
              be visible to designated institutional placement coordinators.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-zinc-900/40 border border-white/5">
            <h4 className="font-bold text-white text-xs sm:text-sm text-emerald-300">
              5.2 Employers & Recruiters
            </h4>
            <p className="text-xs text-zinc-400 mt-1">
              When applying for positions, your resume, contact details, and verified assessment
              scores are delivered to prospective employers.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-zinc-900/40 border border-white/5">
            <h4 className="font-bold text-white text-xs sm:text-sm text-emerald-300">
              5.3 Third-Party Infrastructure Providers
            </h4>
            <p className="text-xs text-zinc-400 mt-1">
              Enterprise cloud databases, AI model providers, secure payment gateways, and
              authentication engines process information under strict data-protection agreements.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-zinc-900/40 border border-white/5">
            <h4 className="font-bold text-white text-xs sm:text-sm text-emerald-300">
              5.4 Legal Requirements
            </h4>
            <p className="text-xs text-zinc-400 mt-1">
              Disclosures made to comply with legal processes, lawful government requests, or to
              safeguard platform security.
            </p>
          </div>
        </div>
      </section>

      {/* Section 06 */}
      <section id="privacy-sec-06" className="space-y-4 pt-4 border-t border-white/5">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold">
            06
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">Data Storage and Security</h2>
        </div>
        <p>
          Vabsgen employs multi-layered technical and organizational safeguards to protect data
          integrity and confidentiality:
        </p>
        <ul className="space-y-2 pl-2">
          {[
            "Industry-standard encryption in transit (TLS 1.3) and at rest (AES-256).",
            "Role-based access controls (RBAC) and least-privilege infrastructure permissions.",
            "Continuous automated monitoring, audit trails, and anomaly detection.",
            "Regular vulnerability assessments and automated cloud backup protocols.",
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <Shield className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Section 07 */}
      <section id="privacy-sec-07" className="space-y-4 pt-4 border-t border-white/5">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold">
            07
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">Data Retention and Deletion</h2>
        </div>
        <p>
          Personal information is retained only as long as necessary to provide Services, maintain
          educational credentials, or comply with statutory retention mandates.
        </p>
        <div className="p-4 rounded-xl bg-zinc-900/60 border border-white/10 space-y-2">
          <h4 className="font-bold text-white text-sm">Account Deletion Rights</h4>
          <p className="text-xs text-zinc-300 leading-relaxed">
            You may request complete account deletion via in-app account settings or by emailing
            support. Upon verification, your personal profile and submitted responses will be
            erased or permanently anonymized in accordance with applicable laws.
          </p>
        </div>
      </section>

      {/* Section 08 & 09 */}
      <section id="privacy-sec-08" className="space-y-4 pt-4 border-t border-white/5">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold">
            08
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">Cookies & Tracking</h2>
        </div>
        <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
          We use strictly necessary and performance cookies to maintain secure sessions, remember
          preferences, and prevent fraud. You may configure or disable cookies via your browser
          settings at any time.
        </p>
      </section>

      {/* Section 10 */}
      <section id="privacy-sec-10" className="space-y-4 pt-4 border-t border-white/5">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold">
            10
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            International Data Transfers
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
          Where third-party cloud infrastructure processes information in locations outside India,
          Vabsgen ensures that all cross-border data transfers comply with Indian data protection
          statutes and appropriate contractual adequacy safeguards.
        </p>
      </section>

      {/* Section 11 */}
      <section id="privacy-sec-11" className="space-y-4 pt-4 border-t border-white/5">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold">
            11
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">Your Privacy Rights</h2>
        </div>
        <p>Under applicable Indian data protection laws, you possess the following rights:</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          {[
            {
              title: "Right to Access",
              desc: "Request a summary of personal data being processed about you.",
            },
            {
              title: "Right to Correction",
              desc: "Request immediate correction of inaccurate, incomplete, or outdated details.",
            },
            {
              title: "Right to Erasure",
              desc: "Request deletion of data no longer required for authorized purposes.",
            },
            {
              title: "Right to Withdraw Consent",
              desc: "Revoke consent for optional features at any time.",
            },
            {
              title: "Right to Grievance Redressal",
              desc: "Submit privacy complaints to our designated Grievance Officer.",
            },
            {
              title: "Right to Nominate",
              desc: "Nominate a representative to manage your data rights in the event of death or incapacity.",
            },
          ].map((r, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-zinc-900/50 border border-white/5 hover:border-emerald-500/20 transition-colors"
            >
              <h4 className="font-bold text-emerald-300 text-xs sm:text-sm mb-1">{r.title}</h4>
              <p className="text-xs text-zinc-400 leading-normal">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 12 to 16 */}
      <section id="privacy-sec-12" className="space-y-4 pt-4 border-t border-white/5">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold">
            12
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">Children&apos;s Privacy</h2>
        </div>
        <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
          Vabsgen is designed for career aspirants. We do not knowingly collect personal data from
          minors under 18 without verifiable parental or guardian authorization.
        </p>
      </section>

      <section id="privacy-sec-16" className="space-y-4 pt-4 border-t border-white/5">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold">
            16
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Applicable Law & DPDP Act Compliance
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
          This Privacy Policy is governed by the laws of India, including the Digital Personal Data
          Protection Act, 2023 (DPDP Act) and applicable regulatory frameworks.
        </p>
      </section>

      {/* Section 17 */}
      <section id="privacy-sec-17" className="space-y-4 pt-4 border-t border-white/5">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold">
            17
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Contact Us & Privacy Grievances
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-zinc-300">
          For questions, data access requests, or to contact our Privacy Grievance Officer:
        </p>
        <div className="p-5 rounded-2xl bg-zinc-900/80 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <p className="text-sm font-bold text-white">Vabsgen Grievance & Privacy Officer</p>
            <p className="text-xs text-zinc-400">Digital Personal Data Protection Desk</p>
          </div>
          <a
            href="mailto:official@vabsgen.com"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/25 hover:text-emerald-300 text-xs font-bold transition-all"
          >
            <Mail className="w-4 h-4" />
            <span>official@vabsgen.com</span>
          </a>
        </div>
      </section>

      {/* End Note */}
      <div className="pt-8 border-t border-white/10 text-center text-xs text-zinc-500">
        <p className="font-semibold text-zinc-400">End of Privacy Policy</p>
        <p className="mt-1">© {new Date().getFullYear()} Vabsgen. All rights reserved.</p>
      </div>
    </div>
  );
}
