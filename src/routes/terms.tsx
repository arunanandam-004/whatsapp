import { useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Shield } from "lucide-react";
import { TermsContent } from "@/components/TermsContent";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      {
        title: "Terms and Conditions — Vabsgen",
      },
      {
        name: "description",
        content:
          "Official Terms and Conditions governing your access and use of Vabsgen career development and AI platform services.",
      },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-emerald-500 selection:text-black">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        {/* Back Link */}
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-emerald-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Content Box */}
        <div className="p-6 sm:p-10 rounded-3xl bg-zinc-950/80 border border-white/10 shadow-2xl shadow-emerald-950/20 backdrop-blur-xl">
          <TermsContent />
        </div>
      </main>

      <Footer />
    </div>
  );
}
