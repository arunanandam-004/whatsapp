import { Star, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "We run Facebook Ads for luxury villas in Dubai. Before Vabsgen, leads waited 4 hours for our sales agents to wake up. With Vabsgen, leads receive instant voice & WhatsApp brochures in seconds. Our viewings increased 310% in the first 30 days.",
    author: "Elena Rostova",
    role: "Head of Growth",
    company: "Aura Luxury Properties",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    metrics: "+310% Site Visits Booked",
  },
  {
    quote:
      "Our dental practice had a huge issue with after-hours tooth emergencies dropping off to competitors. The WhatsApp AI agent answers queries at 2 AM, validates insurance, and books patients directly into Dentrix. It paid for itself in 3 days.",
    author: "Dr. Marcus Chen",
    role: "Founder & Lead Surgeon",
    company: "Apex Dental Group",
    avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=150&auto=format&fit=crop&q=80",
    metrics: "48 Emergency Patients / Mo",
  },
  {
    quote:
      "We get 15,000 WhatsApp messages during flash sales. Human agents were overwhelmed. The AI agent resolves order tracking, return labels, and size recommendations effortlessly. Customer satisfaction climbed to 98.7%.",
    author: "Sophie Laurent",
    role: "VP of E-Commerce",
    company: "LuxeVibe Apparel",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
    metrics: "98.7% CSAT Score",
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-3">
            <Star className="w-3.5 h-3.5 fill-emerald-400" />
            <span>Trusted By Industry Leaders</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            Loved By Modern Revenue Teams.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl bg-zinc-900/50 border border-white/10 hover:border-emerald-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {t.metrics}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-zinc-700 mb-3" />
                <p className="text-sm text-zinc-300 leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-10 h-10 rounded-full object-cover border border-white/10"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-white leading-tight">
                    {t.author}
                  </span>
                  <span className="text-xs text-zinc-400">
                    {t.role}, {t.company}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
