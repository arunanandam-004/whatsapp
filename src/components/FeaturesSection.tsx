import {
  HeartPulse,
  CalendarCheck,
  AlertTriangle,
  Brain,
  FileText,
  Send,
  Lock,
  UserCheck,
  Sparkles,
} from "lucide-react";

const FEATURES = [
  {
    icon: HeartPulse,
    tag: "Follow-up",
    title: "Healthcare Follow-up",
    description:
      "Automatically checks in after visits, procedures and discharge, records the patient's response and alerts your team when something needs attention.",
    color: "from-[#2563EB]/20 to-[#14B8A6]/10",
    isAccent: false,
  },
  {
    icon: CalendarCheck,
    tag: "Booking",
    title: "AI Appointment Booking",
    description:
      "Offers real-time doctor slots, books, reschedules and cancels on WhatsApp and sends timely reminders to reduce no-shows.",
    color: "from-[#14B8A6]/20 to-[#2563EB]/10",
    isAccent: false,
  },
  {
    icon: AlertTriangle,
    tag: "Safety",
    title: "Emergency Escalation",
    description:
      "Detects emergency signals in a message and instantly alerts the on-duty doctor or team with a summary, instead of letting the AI handle it alone.",
    color: "from-[#F97316]/20 to-[#2563EB]/10",
    isAccent: true,
  },
  {
    icon: Brain,
    tag: "Automation",
    title: "Automatic Query Resolution",
    description:
      "Answers routine questions about timings, departments, doctors, directions, report status and visit preparation instantly, 24/7.",
    color: "from-[#2563EB]/20 to-[#14B8A6]/10",
    isAccent: false,
  },
  {
    icon: FileText,
    tag: "Prescriptions",
    title: "Prescription Management",
    description:
      "Digital prescriptions are created and approved by the doctor, stored in the patient record and used for refill requests that always return to the doctor.",
    color: "from-[#2563EB]/20 to-teal-500/10",
    isAccent: false,
  },
  {
    icon: Send,
    tag: "WhatsApp",
    title: "WhatsApp Prescription Delivery",
    description:
      "Sends the doctor-approved prescription to the patient on WhatsApp as a signed PDF, with medicine reminders as written by the doctor.",
    color: "from-[#14B8A6]/20 to-[#2563EB]/10",
    isAccent: false,
  },
  {
    icon: Lock,
    tag: "Security",
    title: "Data Security & Control",
    description:
      "Encrypted data, role-based access and full audit trail. Your hospital decides who can see what, and what the AI may do.",
    color: "from-[#2563EB]/20 to-[#14B8A6]/10",
    isAccent: false,
  },
  {
    icon: UserCheck,
    tag: "Memory",
    title: "Patient Memory",
    description:
      "Remembers past visits, preferred doctor and slot timing, and language, so every conversation feels continuous without patients repeating themselves.",
    color: "from-[#14B8A6]/20 to-[#2563EB]/10",
    isAccent: false,
  },
];

export function FeaturesSection() {
  return (
    <section id="features-section" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-zinc-950">
      <span id="features" className="absolute -top-24" aria-hidden="true" />
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2563EB]/15 border border-[#2563EB]/30 text-[#14B8A6] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Built For Hospitals</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            A Safer, Smarter Way To Handle Every Patient Message.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Not a scripted keyword bot. Our agent understands patient questions, follows your
            hospital&apos;s rules and hands over to your team whenever a human is needed.
          </p>
        </div>

        {/* Feature Cards Grid (8 Cards: 4x2 desktop, 1 col mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="group relative p-6 rounded-3xl bg-[#0B2D5B]/40 border border-white/10 hover:border-[#14B8A6]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#0B2D5B]/60 flex flex-col justify-between"
              >
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-colors duration-300 shadow-lg ${
                        feature.isAccent
                          ? "text-[#F97316] group-hover:bg-[#F97316] group-hover:text-white"
                          : "text-[#14B8A6] group-hover:bg-[#14B8A6] group-hover:text-white"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span
                      className={`px-2.5 py-1 rounded-full text-[10px] font-semibold border ${
                        feature.isAccent
                          ? "bg-[#F97316]/10 text-[#F97316] border-[#F97316]/20"
                          : "bg-white/5 text-slate-300 border-white/5"
                      }`}
                    >
                      {feature.tag}
                    </span>
                  </div>

                  <h3
                    className={`text-lg font-display font-bold text-white mb-2 transition-colors ${
                      feature.isAccent ? "group-hover:text-[#F97316]" : "group-hover:text-[#14B8A6]"
                    }`}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
