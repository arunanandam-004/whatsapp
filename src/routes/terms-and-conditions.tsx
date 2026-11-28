import { useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { TermsContent } from "@/components/TermsContent";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      {
        title: "VABS",
      },
      {
        name: "description",
        content:
          "Terms governing hospitals' and clinics' use of the Vabsgen WhatsApp AI healthcare platform.",
      },
      {
        property: "og:title",
        content: "VABS",
      },
      {
        property: "og:description",
        content:
          "Terms governing hospitals' and clinics' use of the Vabsgen WhatsApp AI healthcare platform.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "icon", href: "/apple-touch-icon.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "shortcut icon", href: "/apple-touch-icon.png" },
      { rel: "icon", href: "/favicon.ico" },
    ],
  }),
  component: TermsAndConditionsPage,
});

function TermsAndConditionsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#2563EB] selection:text-white">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        {/* Back Link */}
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-[#14B8A6] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Content Box */}
        <div className="p-6 sm:p-10 rounded-3xl bg-[#071D3B]/90 border border-[#2563EB]/30 shadow-2xl shadow-[#040E1E]/60 backdrop-blur-xl">
          <TermsContent />
        </div>
      </main>

      <Footer />
    </div>
  );
}
