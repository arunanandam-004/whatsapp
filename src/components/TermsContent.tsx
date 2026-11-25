import { Shield, Mail, Scale, CheckCircle2, AlertCircle, FileText } from "lucide-react";

export function TermsContent() {
  const sections = [
    { id: "01", title: "Agreement to Terms" },
    { id: "02", title: "Definitions" },
    { id: "03", title: "Eligibility & Registration" },
    { id: "04", title: "Platform Services & Features" },
    { id: "05", title: "User Responsibilities & Acceptable Use" },
    { id: "06", title: "AI Services & Automated Evaluations" },
    { id: "07", title: "Educational Institutions & Employers" },
    { id: "08", title: "Subscriptions, Payments & Refunds" },
    { id: "09", title: "Intellectual Property Rights" },
    { id: "10", title: "User Content & Data Ownership" },
    { id: "11", title: "Third-Party Services" },
    { id: "12", title: "Service Availability & Support" },
    { id: "13", title: "Suspension & Termination" },
    { id: "14", title: "Disclaimer of Warranties" },
    { id: "15", title: "Limitation of Liability" },
    { id: "16", title: "Indemnification" },
    { id: "17", title: "Changes to These Terms" },
    { id: "18", title: "Governing Law & Jurisdiction" },
    { id: "19", title: "Contact & Support" },
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(`terms-sec-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="text-zinc-300 text-sm sm:text-base leading-relaxed space-y-12">
      {/* Document Header */}
      <div className="border-b border-white/10 pb-8 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
          <Shield className="w-3.5 h-3.5" />
          <span>Official Legal Document</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white tracking-tight">
          Vabsgen – Terms and Conditions
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400">
          <span className="font-semibold text-zinc-300">Last Updated:</span>
          <span>25 November 2026</span>
          <span className="text-zinc-600">•</span>
          <span>Effective immediately for all users</span>
        </div>
        <p className="text-zinc-300 text-base sm:text-lg leading-relaxed pt-2">
          Welcome to Vabsgen. These Terms and Conditions govern your access to and use of the Vabsgen
          website, platform, applications, and related services (collectively, the &ldquo;Services&rdquo;).
        </p>
        <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20 text-emerald-200/90 text-sm leading-relaxed">
          <p className="font-semibold text-emerald-400 mb-1">About Vabsgen Platform</p>
          Vabsgen is a career development and placement platform designed to help students improve
          their skills, prepare for interviews, explore career opportunities, and become job-ready
          through AI-powered learning and assessment tools.
        </div>
        <p className="text-xs text-zinc-400">
          Please read these Terms carefully before using our Services. By registering an account,
          accessing the platform or using any of its features, you agree to comply with these Terms.
        </p>
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
      <section id="terms-sec-01" className="space-y-4 pt-4 border-t border-white/5">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold">
            01
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">Agreement to Terms</h2>
        </div>
        <p>
          These Terms and Conditions (&ldquo;Terms&rdquo;) constitute an agreement between Vabsgen
          (&ldquo;Vabsgen&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo; or &ldquo;us&rdquo;) and the
          individual or organisation accessing or using our Services (&ldquo;User&rdquo;,
          &ldquo;you&rdquo; or &ldquo;your&rdquo;).
        </p>
        <p className="font-medium text-zinc-200">
          By creating an account or using the platform, you confirm that:
        </p>
        <ul className="space-y-2 pl-2">
          {[
            "You have read and understood these Terms.",
            "You agree to follow all applicable rules and regulations.",
            "You will provide accurate and up-to-date information.",
            "You will use the platform only for lawful and authorised purposes.",
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-zinc-400 text-sm italic">
          If you are using Vabsgen on behalf of a college, educational institution, employer or
          organisation, you confirm that you have the authority to accept these Terms on its behalf.
        </p>
      </section>

      {/* Section 02 */}
      <section id="terms-sec-02" className="space-y-4 pt-4 border-t border-white/5">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold">
            02
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">Definitions</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          {[
            {
              term: "Platform",
              desc: "The Vabsgen website, applications, dashboards, and associated services.",
            },
            {
              term: "User",
              desc: "Any individual or organisation accessing the Vabsgen platform.",
            },
            {
              term: "Student",
              desc: "An individual using Vabsgen for career development, learning, assessments, or placement opportunities.",
            },
            {
              term: "College",
              desc: "An educational institution using Vabsgen to support student development and placement activities.",
            },
            {
              term: "Employer",
              desc: "A company or recruiter using Vabsgen to identify and evaluate potential candidates.",
            },
            {
              term: "Administrator",
              desc: "An authorised individual responsible for managing platform users and activities.",
            },
            {
              term: "AI Services",
              desc: "Artificial intelligence-powered features, including mock interviews, voice practice, career recommendations, and learning assistance.",
            },
            {
              term: "Student Data",
              desc: "Information provided by students, including personal details, educational information, resumes, assessment results, and interview responses.",
            },
            {
              term: "Content",
              desc: "Text, documents, images, resumes, responses, feedback, and other materials submitted through the platform.",
            },
          ].map((d, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-zinc-900/50 border border-white/5 hover:border-emerald-500/20 transition-colors"
            >
              <h4 className="font-bold text-white text-sm mb-1 text-emerald-300">{d.term}</h4>
              <p className="text-xs text-zinc-400 leading-normal">{d.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 03 */}
      <section id="terms-sec-03" className="space-y-4 pt-4 border-t border-white/5">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold">
            03
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Eligibility and Account Registration
          </h2>
        </div>
        <p>
          You must be at least 18 years old or have the legally required permission from a parent or
          legal guardian to use the Services.
        </p>
        <p className="font-medium text-zinc-200">When registering an account, you agree to:</p>
        <ul className="space-y-2 pl-2">
          {[
            "Provide accurate personal and educational information.",
            "Maintain the confidentiality of your login credentials.",
            "Avoid sharing your account with unauthorised individuals.",
            "Update your account information whenever necessary.",
            "Notify Vabsgen if you suspect unauthorised access to your account.",
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p>You are responsible for all activities performed through your account.</p>
        <p className="text-xs text-zinc-400 bg-white/5 p-3 rounded-lg border border-white/10">
          Vabsgen reserves the right to suspend or restrict accounts containing inaccurate
          information, suspicious activity, or violations of these Terms.
        </p>
      </section>

      {/* Section 04 */}
      <section id="terms-sec-04" className="space-y-5 pt-4 border-t border-white/5">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold">
            04
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Platform Services and Features
          </h2>
        </div>
        <p>
          Vabsgen provides various career development and placement-related services, including:
        </p>

        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-zinc-900/40 border border-white/5 space-y-1.5">
            <h4 className="font-bold text-emerald-400 text-sm">4.1 AI Mock Interviews</h4>
            <p className="text-xs sm:text-sm text-zinc-300">
              Students can participate in AI-powered mock interviews to practise answering interview
              questions and improve their interview readiness. AI-generated feedback and
              evaluations are intended for educational and preparation purposes only.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-zinc-900/40 border border-white/5 space-y-1.5">
            <h4 className="font-bold text-emerald-400 text-sm">4.2 AI Voice Practice</h4>
            <p className="text-xs sm:text-sm text-zinc-300">
              Users can practise communication and verbal responses through AI-powered voice-based
              activities.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-zinc-900/40 border border-white/5 space-y-1.5">
            <h4 className="font-bold text-emerald-400 text-sm">4.3 AI Career Roadmap</h4>
            <p className="text-xs sm:text-sm text-zinc-300">
              The platform may generate personalised career roadmaps based on a student&apos;s
              educational background, skills, interests, and assessment performance. These
              recommendations are intended to support career planning and do not guarantee
              employment or placement.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-zinc-900/40 border border-white/5 space-y-1.5">
            <h4 className="font-bold text-emerald-400 text-sm">4.4 Adaptive Learning</h4>
            <p className="text-xs sm:text-sm text-zinc-300">
              Students may receive learning recommendations and educational activities based on
              their progress, performance, and learning requirements.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-zinc-900/40 border border-white/5 space-y-1.5">
            <h4 className="font-bold text-emerald-400 text-sm">
              4.5 Aptitude and Job Readiness Tests
            </h4>
            <p className="text-xs sm:text-sm text-zinc-300">
              Vabsgen may provide aptitude tests, technical assessments, logical reasoning exercises,
              and other job-readiness evaluations. Users agree to complete assessments honestly and
              without unauthorised assistance.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-zinc-900/40 border border-white/5 space-y-1.5">
            <h4 className="font-bold text-emerald-400 text-sm">4.6 ATS Resume Builder</h4>
            <p className="text-xs sm:text-sm text-zinc-300">
              Users may create, edit, and manage resumes through the platform. Students are
              responsible for ensuring that the information included in their resumes is accurate
              and truthful.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-zinc-900/40 border border-white/5 space-y-1.5">
            <h4 className="font-bold text-emerald-400 text-sm">
              4.7 Training and Learning Resources
            </h4>
            <p className="text-xs sm:text-sm text-zinc-300">
              The platform may provide technical training, communication practice, coding
              exercises, problem-solving activities, interview preparation, and other
              career-related learning materials.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-zinc-900/40 border border-white/5 space-y-1.5">
            <h4 className="font-bold text-emerald-400 text-sm">
              4.8 Job Opportunities and Placement Applications
            </h4>
            <p className="text-xs sm:text-sm text-zinc-300">
              Vabsgen may provide access to job opportunities, placement applications, employer
              referrals, and recruitment-related activities. Final recruitment decisions are made by
              the respective employers or recruiting organisations. Vabsgen does not guarantee
              interviews, referrals, job offers, or employment.
            </p>
          </div>
        </div>
      </section>

      {/* Section 05 */}
      <section id="terms-sec-05" className="space-y-4 pt-4 border-t border-white/5">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold">
            05
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            User Responsibilities and Acceptable Use
          </h2>
        </div>
        <p className="font-medium text-zinc-200">You agree not to:</p>
        <ul className="space-y-2 pl-2">
          {[
            "Provide false, misleading or fraudulent personal, educational or professional information.",
            "Create multiple accounts to manipulate assessments or platform activities.",
            "Cheat, impersonate another candidate or manipulate interview results.",
            "Upload malicious software, harmful files or unauthorised content.",
            "Attempt to access another user's account or confidential information.",
            "Reverse-engineer, decompile or copy the platform's source code.",
            "Interfere with the platform's security, availability or functionality.",
            "Use automated tools to extract platform data without written permission.",
            "Harass, threaten or misuse other users' information.",
            "Use Vabsgen to conduct unlawful activities.",
            "Copy, distribute or commercially exploit platform content without permission.",
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-zinc-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-xs text-zinc-400 pt-2">
          Vabsgen reserves the right to investigate suspected violations and suspend or terminate
          accounts when necessary.
        </p>
      </section>

      {/* Section 06 */}
      <section id="terms-sec-06" className="space-y-4 pt-4 border-t border-white/5">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold">
            06
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            AI Services and Automated Evaluations
          </h2>
        </div>
        <p>
          Vabsgen uses artificial intelligence to support learning, interview preparation,
          assessments, and career guidance.
        </p>
        <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-200/90 text-xs sm:text-sm space-y-2">
          <div className="flex items-center gap-2 font-bold text-amber-400">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>Important Notice Concerning AI Outputs:</span>
          </div>
          <ul className="space-y-1.5 pl-6 list-disc">
            <li>AI-generated responses and recommendations may not always be accurate.</li>
            <li>Interview feedback and assessment results are intended as guidance only.</li>
            <li>AI evaluations may contain errors or limitations.</li>
            <li>
              AI-generated career recommendations should not be treated as professional employment
              guarantees.
            </li>
            <li>
              Users should independently verify important information before making career decisions.
            </li>
          </ul>
        </div>
        <p className="text-xs text-zinc-400 leading-relaxed">
          AI-generated evaluations must not be treated as the sole basis for important recruitment or
          employment decisions without appropriate human review. Vabsgen does not guarantee that
          AI-generated scores or recommendations will result in selection by an employer.
        </p>
      </section>

      {/* Section 07 */}
      <section id="terms-sec-07" className="space-y-4 pt-4 border-t border-white/5">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold">
            07
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Educational Institutions and Employers
          </h2>
        </div>
        <p className="font-medium text-zinc-200">
          Colleges, institutions, and employers using Vabsgen agree to:
        </p>
        <ul className="space-y-2 pl-2">
          {[
            "Use student information only for authorised educational, training and recruitment purposes.",
            "Maintain the confidentiality of student information.",
            "Access only the information they are authorised to view.",
            "Avoid sharing student information with unauthorised third parties.",
            "Ensure that recruitment and selection activities comply with applicable laws.",
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-zinc-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-xs text-zinc-400">
          Employers are independently responsible for their recruitment criteria, interview
          processes, and final hiring decisions. Colleges and institutions are responsible for
          ensuring they have appropriate authority and permissions to share student information
          with Vabsgen.
        </p>
      </section>

      {/* Section 08 */}
      <section id="terms-sec-08" className="space-y-4 pt-4 border-t border-white/5">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold">
            08
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Subscriptions, Payments and Refunds
          </h2>
        </div>
        <p>
          Certain Vabsgen features may be offered free of charge, while other features may require a
          paid subscription, institutional agreement, or additional payment.
        </p>
        <p className="font-medium text-zinc-200">Where applicable:</p>
        <ul className="space-y-1.5 pl-5 list-disc text-zinc-300 text-xs sm:text-sm">
          <li>Subscription prices and payment conditions will be displayed before purchase.</li>
          <li>Payments must be completed using the available payment methods.</li>
          <li>
            Subscription periods, renewal conditions, and applicable charges will be communicated
            during purchase.
          </li>
          <li>Paid features may be restricted if payment is unsuccessful.</li>
          <li>Any applicable taxes or additional charges will be disclosed during checkout.</li>
        </ul>

        <div className="p-4 rounded-xl bg-zinc-900/60 border border-white/10 space-y-2">
          <h4 className="font-bold text-white text-sm">Refund Policy</h4>
          <p className="text-xs text-zinc-300 leading-relaxed">
            Payments and subscription fees are subject to the refund conditions displayed at the
            time of purchase and applicable law. Unless otherwise stated or required by law,
            subscription payments are non-refundable once the subscription has been activated.
          </p>
          <p className="text-xs text-zinc-400">
            If a refund is applicable, users may contact Vabsgen support for assistance.
          </p>
        </div>
      </section>

      {/* Section 09 */}
      <section id="terms-sec-09" className="space-y-4 pt-4 border-t border-white/5">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold">
            09
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Intellectual Property Rights
          </h2>
        </div>
        <p>
          All intellectual property associated with Vabsgen, including website design, user
          interfaces, software, source code, platform architecture, logos, branding, trademarks, AI
          workflows, platform functionality, educational materials, proprietary content, and
          platform documentation, is owned by or licensed to Vabsgen, except for User Content.
        </p>
        <p>
          Users retain ownership of their original resumes, personal information, and other content
          they submit, subject to the rights necessary for Vabsgen to provide the Services.
        </p>
        <p className="text-xs text-zinc-400">
          Users must not reproduce, distribute, modify, or commercially exploit Vabsgen&apos;s
          intellectual property without prior written permission.
        </p>
      </section>

      {/* Section 10 */}
      <section id="terms-sec-10" className="space-y-4 pt-4 border-t border-white/5">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold">
            10
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            User Content and Data Ownership
          </h2>
        </div>
        <p>
          Users retain ownership of the personal content they submit to the platform. By submitting
          content, you grant Vabsgen a limited, non-exclusive right to host, process, display, and
          use that content solely as necessary to operate, maintain, and provide the Services.
        </p>
        <p className="font-medium text-zinc-200">
          You are responsible for ensuring that the content you upload:
        </p>
        <ul className="space-y-1.5 pl-5 list-disc text-xs sm:text-sm text-zinc-300">
          <li>Belongs to you or is authorised for use.</li>
          <li>Does not violate another person&apos;s intellectual property rights.</li>
          <li>Does not contain unlawful or harmful material.</li>
          <li>Does not misrepresent your qualifications or experience.</li>
        </ul>
        <p className="text-xs text-zinc-400">
          Additional information about data processing is explained in our Privacy Policy.
        </p>
      </section>

      {/* Section 11 */}
      <section id="terms-sec-11" className="space-y-4 pt-4 border-t border-white/5">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold">
            11
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">Third-Party Services</h2>
        </div>
        <p>
          Vabsgen may integrate with or rely on third-party services, including AI and language model
          providers, cloud hosting and database providers, payment gateways, authentication and
          communication services, and educational and recruitment-related platforms.
        </p>
        <p className="text-xs text-zinc-400">
          Your use of third-party services may be subject to their respective terms and privacy
          policies. Vabsgen is not responsible for third-party service interruptions, changes,
          failures, or independent actions outside our reasonable control.
        </p>
      </section>

      {/* Section 12 */}
      <section id="terms-sec-12" className="space-y-4 pt-4 border-t border-white/5">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold">
            12
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Service Availability and Support
          </h2>
        </div>
        <p>
          Vabsgen aims to provide reliable and accessible Services. However, we do not guarantee
          uninterrupted availability or error-free operation. Services may occasionally be
          unavailable due to scheduled maintenance, technical issues, infrastructure failures,
          security updates, or third-party service interruptions.
        </p>
        <p className="text-xs text-zinc-400">
          Vabsgen may update, modify, or discontinue certain features when necessary. Users may
          contact the Vabsgen support team through official channels provided on the platform.
        </p>
      </section>

      {/* Section 13 */}
      <section id="terms-sec-13" className="space-y-4 pt-4 border-t border-white/5">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold">
            13
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">Suspension and Termination</h2>
        </div>
        <p>
          You may stop using Vabsgen and request account deletion through the available account
          settings or by contacting support.
        </p>
        <p className="font-medium text-zinc-200">
          Vabsgen may suspend, restrict, or terminate an account if:
        </p>
        <ul className="space-y-1.5 pl-5 list-disc text-xs sm:text-sm text-zinc-300">
          <li>These Terms are violated.</li>
          <li>False or fraudulent information is submitted.</li>
          <li>Unauthorised access or misuse is detected.</li>
          <li>Platform security or other users are put at risk.</li>
          <li>Applicable legal requirements are violated.</li>
        </ul>
        <p className="text-xs text-zinc-400">
          Upon account termination, access to certain platform features may be discontinued.
          Personal data will be handled according to our Privacy Policy and applicable legal
          requirements.
        </p>
      </section>

      {/* Section 14 */}
      <section id="terms-sec-14" className="space-y-4 pt-4 border-t border-white/5">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold">
            14
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">Disclaimer of Warranties</h2>
        </div>
        <p>
          Vabsgen provides its Services on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo;
          basis, to the fullest extent permitted by applicable law.
        </p>
        <p className="font-medium text-zinc-200">We do not guarantee:</p>
        <ul className="space-y-1.5 pl-5 list-disc text-xs sm:text-sm text-zinc-300">
          <li>That the platform will always be available.</li>
          <li>That AI-generated results will be completely accurate.</li>
          <li>That students will achieve specific assessment scores.</li>
          <li>That users will receive referrals or job opportunities.</li>
          <li>That participation in training will guarantee employment.</li>
          <li>That every third-party service will operate without interruption.</li>
        </ul>
        <p className="text-xs text-zinc-400">
          Users are responsible for their own learning, preparation, and career decisions.
        </p>
      </section>

      {/* Section 15 */}
      <section id="terms-sec-15" className="space-y-4 pt-4 border-t border-white/5">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold">
            15
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">Limitation of Liability</h2>
        </div>
        <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
          To the fullest extent permitted by applicable law, Vabsgen shall not be liable for
          indirect, incidental, special, or consequential damages arising from:
        </p>
        <ul className="space-y-1.5 pl-5 list-disc text-xs text-zinc-300">
          <li>Use or inability to use the platform.</li>
          <li>AI-generated evaluations or recommendations.</li>
          <li>Errors in user-provided information.</li>
          <li>Third-party service failures.</li>
          <li>Employment or placement decisions made by employers.</li>
          <li>
            Unauthorised access resulting from a user&apos;s failure to protect account credentials.
          </li>
        </ul>
        <p className="text-xs text-zinc-400 bg-white/5 p-3 rounded-lg border border-white/10">
          Where permitted by law, Vabsgen&apos;s aggregate liability shall be limited to the amount
          paid by the relevant user to Vabsgen for the Services during the twelve (12) months
          preceding the event giving rise to the claim.
        </p>
      </section>

      {/* Section 16 */}
      <section id="terms-sec-16" className="space-y-4 pt-4 border-t border-white/5">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold">
            16
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">Indemnification</h2>
        </div>
        <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
          You agree to indemnify and hold Vabsgen, its employees, affiliates, and authorised
          representatives harmless from third-party claims, losses, and expenses arising from your
          violation of these Terms, misuse of the platform, false or misleading information
          submitted by you, infringement of third-party rights, or violation of applicable laws.
        </p>
      </section>

      {/* Section 17 */}
      <section id="terms-sec-17" className="space-y-4 pt-4 border-t border-white/5">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold">
            17
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">Changes to These Terms</h2>
        </div>
        <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
          Vabsgen may update these Terms from time to time to reflect changes in its Services,
          business operations, legal requirements, or platform features. Material changes may be
          communicated through email, website notifications, or in-platform announcements. Continued
          use of the Services after updated Terms become effective constitutes acceptance of the
          revised Terms.
        </p>
      </section>

      {/* Section 18 */}
      <section id="terms-sec-18" className="space-y-4 pt-4 border-t border-white/5">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold">
            18
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Governing Law and Jurisdiction
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
          These Terms shall be governed by and interpreted in accordance with the laws of India. Any
          disputes arising from the use of Vabsgen shall be subject to the jurisdiction of the
          competent courts in India, subject to applicable law.
        </p>
      </section>

      {/* Section 19 */}
      <section id="terms-sec-19" className="space-y-4 pt-4 border-t border-white/5">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold">
            19
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-white">Contact and Support</h2>
        </div>
        <p className="text-xs sm:text-sm text-zinc-300">
          If you have questions, concerns, or requests regarding these Terms and Conditions, please
          contact the Vabsgen support team:
        </p>
        <div className="p-5 rounded-2xl bg-zinc-900/80 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <p className="text-sm font-bold text-white">Vabsgen Legal & Support</p>
            <p className="text-xs text-zinc-400">Career Development & AI Platform</p>
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
        <p className="font-semibold text-zinc-400">End of Terms and Conditions</p>
        <p className="mt-1">© {new Date().getFullYear()} Vabsgen. All rights reserved.</p>
      </div>
    </div>
  );
}
